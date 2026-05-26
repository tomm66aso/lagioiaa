// ================================================================
// main.js — Nav · Reveal · Dynamic settings from Supabase
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  loadSettings();
});

// ── Sticky nav ──────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('site-nav');
  const burger = document.querySelector('.nav-burger');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.mobile-close');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger?.addEventListener('click', () => {
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  const closeMobile = () => {
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };
  closeBtn?.addEventListener('click', closeMobile);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeMobile(); });

  // Active link highlight
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-overlay a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Intersection Observer reveal ────────────────────────────────
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  items.forEach(el => io.observe(el));
}

// ── Load site settings from Supabase ───────────────────────────
const DEFAULTS = {
  phone_main:     '+39 010 4556699',
  phone_whatsapp: '+39 333 332 3663',
  email:          'adw_elking@yahoo.com',
  address:        'Corso Giacomo Matteotti, 38 — 16011 Arenzano (GE)',
  hours:          'Lun – Dom  12:00 – 23:30',
};

async function loadSettings() {
  applySettings(DEFAULTS);
  try {
    if (typeof SUPABASE_URL === 'undefined' || SUPABASE_URL.includes('TUOPROJECT')) return;
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_settings?select=key,value`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
    });
    if (!res.ok) return;
    const rows = await res.json();
    const live = {};
    rows.forEach(r => live[r.key] = r.value);
    applySettings({ ...DEFAULTS, ...live });
  } catch (_) {}
}

function applySettings(s) {
  // Text elements
  document.querySelectorAll('[data-s]').forEach(el => {
    const key = el.dataset.s;
    if (!s[key]) return;
    el.textContent = s[key];
  });
  // Href elements
  document.querySelectorAll('[data-href]').forEach(el => {
    const key = el.dataset.href;
    if (!s[key]) return;
    if (key === 'phone_main' || key === 'phone_whatsapp') {
      const clean = s[key].replace(/\s|\+/g, '');
      el.href = key === 'phone_main'
        ? `tel:+${clean}`
        : `https://wa.me/${clean}`;
    } else if (key === 'email') {
      el.href = `mailto:${s[key]}`;
    }
  });
}
