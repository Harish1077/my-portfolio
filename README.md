# Developer Portfolio — Harish Ragavendra

Modern, responsive portfolio website with light/dark mode, scroll reveal animations, animated skill bars, and a contact form that opens your email client.

## Run locally

- **Option 1 (quick)**: open `index.html` in your browser.
- **Option 2 (recommended)**: run a local server (prevents some browser restrictions).

### Local server (PowerShell)

```powershell
cd "c:\Users\91966\Desktop\PROTFOLIO"
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy (go live)

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step instructions (**GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**).

## Customize

- **Resume (download)**: put your PDF at `assets/Harish_Ragavendra_Resume.pdf` (replace the placeholder).  
  The hero and Contact sections link to this file. See `assets/README_RESUME.txt`.
- **Contact email**: update `harishragavendra@example.com` in:
  - `index.html` (Contact links)
  - `script.js` (mailto destination)
- **GitHub/LinkedIn/Instagram**: update the URLs in `index.html` (Projects + Contact links).

## Files

- `index.html` — page content/sections
- `styles.css` — theme + layout + animations
- `script.js` — theme toggle, icons, scroll reveal, skill bar animation, contact form

