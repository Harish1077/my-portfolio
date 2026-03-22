# Deploy your portfolio

This site is **static** (`index.html` + CSS + JS). You can host it for **free** on several platforms.

**Before deploying:** confirm `assets/Harish_Ragavendra_Resume.pdf` is your real resume and that contact/social links in `index.html` are correct.

---

## Your GitHub repo: [Harish1077/my-portfolio](https://github.com/Harish1077/my-portfolio)

After you push and enable Pages, your site will be:

**`https://harish1077.github.io/my-portfolio/`**

### Push this folder to that repo (first time)

In **PowerShell** (from your project folder):

```powershell
cd "c:\Users\91966\Desktop\PROTFOLIO"
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Harish1077/my-portfolio.git
git push -u origin main
```

- If you already ran `git init` before, skip that line and only `git add` / `commit` / `push`.
- If remote is wrong: `git remote remove origin` then add again with the URL above.
- GitHub may ask you to sign in; use a [Personal Access Token](https://github.com/settings/tokens) as the password if you use HTTPS, or set up SSH.

### Enable GitHub Pages

1. Open **[github.com/Harish1077/my-portfolio/settings/pages](https://github.com/Harish1077/my-portfolio/settings/pages)**
2. **Source**: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → **Save**
4. Wait 1–2 minutes, then open **`https://harish1077.github.io/my-portfolio/`**

---

## Option A — GitHub Pages (general steps)

### 1. Put the project on GitHub

In PowerShell (from your project folder):

```powershell
cd "c:\Users\91966\Desktop\PROTFOLIO"
git init
git add .
git commit -m "Initial portfolio"
```

Create a **new repository** on GitHub, then:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Turn on GitHub Pages

1. On GitHub: **Settings** → **Pages**
2. Under **Build and deployment** → **Source**: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Save

Your site will be at:

`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

(It can take 1–2 minutes after the first deploy.)

### 3. Optional: custom domain

In the same **Pages** settings, add your domain and follow GitHub’s DNS instructions.

---

## Option B — Netlify (drag & drop, very fast)

1. Go to [netlify.com](https://www.netlify.com/) and sign up (GitHub login works well).
2. **Sites** → **Add new site** → **Deploy manually**.
3. Drag the **whole `PROTFOLIO` folder** (the one that contains `index.html`) into the window.
4. Netlify gives you a URL like `https://random-name.netlify.app`.
5. In **Site settings** → **Domain management**, you can rename the site or add a custom domain.

**Update:** zip the folder and upload, or connect the GitHub repo for auto-deploy on every push.

---

## Option C — Vercel

1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. **Add New** → **Project** → import your GitHub repository (push your code first, same as Option A steps 1).
3. Framework: **Other** (static). Root directory: leave default.
4. Deploy.

You get a URL like `https://your-project.vercel.app`.

---

## Option D — Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the repo and branch `main`, build settings: **None** / static output directory **/** or leave empty.
3. Deploy.

---

## Checklist after deploy

- [ ] Open the live URL and test **light/dark mode**, **Download Resume**, and **Contact** (mailto).
- [ ] Click every **GitHub / LinkedIn** link.
- [ ] Test on your phone (responsive layout).

## If images or PDF don’t load

- Paths are **relative** (`./assets/...`). Keep the same folder structure at the site **root** (`index.html` next to `styles.css`, `script.js`, `assets/`).
- If you ever use a **subpath** with a misconfigured base URL, stick to hosting at the **root** of the deployment (as above).

---

## Need help?

- **GitHub Pages docs:** [https://docs.github.com/en/pages](https://docs.github.com/en/pages)  
- **Netlify drag-and-drop:** [https://docs.netlify.com/get-started/](https://docs.netlify.com/get-started/)
