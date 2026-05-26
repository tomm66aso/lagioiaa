# La Gioia — Pizzeria & Kebab · Sito Web + CMS

Sito multipagina ultra-premium con pannello CMS integrato.  
Stack: **HTML/CSS/JS vanilla** · **Supabase** (backend gratuito) · **Vercel + GitHub** (deploy automatico)

---

## Struttura file

```
lagioia/
├── index.html           → Homepage
├── la-pizzeria.html     → La Pizzeria
├── il-menu.html         → Il Menù (dinamico da Supabase)
├── il-locale.html       → Il Locale
├── contatti.html        → Contatti
├── admin/
│   └── index.html       → Pannello CMS (protetto da password)
├── css/
│   └── style.css        → Design system ultra-premium
├── js/
│   ├── config.js        ← CONFIGURA QUI le chiavi Supabase
│   └── main.js          → Nav, animazioni, dati dinamici
└── supabase-setup.sql   → Schema database da importare
```

---

## Setup in 5 passi

### 1. Crea il progetto Supabase (gratis)

1. Vai su [supabase.com](https://supabase.com) → **New project**
2. Scegli un nome (es. `lagioia`) e una password database
3. Aspetta ~2 minuti che il progetto si avvii

### 2. Importa il database

1. Nel progetto Supabase: **Database → SQL Editor → New query**
2. Copia tutto il contenuto di `supabase-setup.sql`
3. Incolla e clicca **Run** ▶️
4. Il menù completo (60+ prodotti) viene caricato automaticamente

### 3. Configura le chiavi API

1. In Supabase: **Settings → API**
2. Copia **Project URL** e **anon public key**
3. Apri `js/config.js` e sostituisci:

```js
const SUPABASE_URL = 'https://TUOPROJECT.supabase.co';  // ← Project URL
const SUPABASE_KEY = 'TUA_ANON_PUBLIC_KEY';              // ← anon public key
const ADMIN_PASSWORD = 'lagioia2025';                    // ← cambia la password!
```

### 4. Deploy su GitHub + Vercel

1. Crea un repository su [github.com](https://github.com) (es. `lagioia-website`)
2. Carica tutti i file del progetto
3. Vai su [vercel.com](https://vercel.com) → **New Project**
4. Importa il repository GitHub → clicca **Deploy**
5. Il sito è live! Ogni push su GitHub aggiorna il sito automaticamente.

### 5. Dominio personalizzato (opzionale)

In Vercel: **Settings → Domains** → aggiungi `www.lagioiapizzeriakebab.com`  
Poi aggiorna i DNS dal pannello del registrar puntando a Vercel.

---

## Pannello CMS

**Accesso:** `https://tuodominio.com/admin/`  
**Password default:** `lagioia2025` (cambiala subito in `js/config.js`!)

### Cosa può fare il cliente:

| Funzione | Dove |
|---|---|
| ✅ Aggiungere/modificare/eliminare pizze | Admin → Menù |
| ✅ Aggiungere/modificare categorie | Admin → Menù |
| ✅ Disattivare prodotti temporaneamente | Admin → toggle nel menù |
| ✅ Cambiare numero di telefono | Admin → Impostazioni |
| ✅ Cambiare numero WhatsApp | Admin → Impostazioni |
| ✅ Cambiare email | Admin → Impostazioni |
| ✅ Cambiare indirizzo | Admin → Impostazioni |
| ✅ Cambiare orari | Admin → Impostazioni |
| ✅ Cambiare password admin | Admin → Impostazioni |

---

## Come funziona senza Supabase

Il sito funziona **anche senza Supabase configurato**:
- Il menù mostra i **60+ prodotti hardcoded** (dati di default completi)
- I contatti mostrano i **valori di default** hardcoded
- Appena si configura Supabase, i dati vengono caricati da lì

---

## Design system

Font: **Playfair Display** (titoli) + **Outfit** (corpo)  
Palette: dark charcoal `#0B0805` · oro `#C0800A` · crema `#F0E4CA`  
Effetti: grain overlay, orb glow animato, clip-path reveal, scroll animations

---

## Modifiche rapide

**Cambiare logo:** sostituisci l'URL dell'immagine in tutte le pagine  
**Cambiare colore oro:** cerca `--g-base: #C0800A` in `css/style.css`  
**Aggiungere una pagina:** copia una pagina esistente e aggiorna la nav

---

## Supporto

Per qualsiasi modifica o aggiornamento, contattare il team di sviluppo.
