# Sahith Chunduru — Portfolio Website

Personal developer portfolio for **Sahith Chunduru** (Product Engineering with AI @ SRM University-AP & BS in Data Science @ IIT Madras).

Built with clean semantic HTML5, CSS3, Tailwind CSS, Lucide icons, and Vanilla JS. Zero build step dependencies, instant Lighthouse performance score, and dark/light theme support.

---

## 📁 Project Structure

```text
portfolio-website/
├── index.html       # Main HTML structure & content
├── style.css        # Custom CSS, dark/light theme variables
├── script.js        # Dynamic scripts (Theme switcher, toast, nav scroll)
├── package.json     # Vercel & npm configuration
├── vercel.json      # Vercel clean URL & security headers
├── .gitignore       # Git ignore rules
└── README.md        # Deployment instructions
```

---

## 🚀 How to Deploy to GitHub & Vercel (Step-by-Step)

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in this directory (`portfolio-website`):
   ```bash
   cd C:\Users\sahit\.gemini\antigravity\scratch\portfolio-website
   ```

2. Initialize a git repository and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sahith Chunduru Portfolio"
   ```

3. Create a new empty repository on GitHub named `portfolio-website` (or `sahith-portfolio`) at [https://github.com/new](https://github.com/new).

4. Link your local repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Sahith1780/portfolio-website.git
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel (Free & Instant)

#### Method A: Via Vercel Web Dashboard (Easiest)
1. Go to [https://vercel.com/new](https://vercel.com/new) and log in with your GitHub account (`Sahith1780`).
2. Click **Import** next to your `portfolio-website` repository.
3. Vercel will auto-detect the static HTML configuration. Leave Framework Preset as **Other** or **Static**.
4. Click **Deploy**.
5. Within 10 seconds, your portfolio will be live at `https://portfolio-website-xxx.vercel.app` with free SSL/TLS encryption!

#### Method B: Via Vercel CLI
If you have Vercel CLI installed:
```bash
npx vercel
```
Follow the interactive prompts and press Enter to deploy instantly.

---

## 🛠️ Local Preview

To preview the portfolio on your computer:
Option 1: Open `index.html` directly in your browser.
Option 2: Run a local static server:
```bash
npx serve .
```
Open `http://localhost:3000` in your web browser.

---

## 🎨 Customizing Details

- **Contact Form**: Connect to a free form endpoint like [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/) by changing the `action` attribute on `<form id="contact-form">` in `index.html`.
- **Projects**: Add new projects in the `<section id="projects">` grid in `index.html`.
