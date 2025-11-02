# The Comics — Static Website

A simple responsive static site for "The Comics". Orders are taken via WhatsApp only: 03034086168. Delivery available to Lahore only.

## What I created
- `index.html` — the main page with hero, featured products, and order buttons
- `assets/css/style.css` — small custom styles
- `assets/js/script.js` — wires WhatsApp links and sets the year

## How to customize
- Edit text in `index.html` to change products, prices, and descriptions.
- Replace the example images with your own by changing the `img src` attributes.
- Update styles in `assets/css/style.css`.

## WhatsApp number used
The site opens WhatsApp with a pre-filled message to: +92 303 4086168 (international format). The displayed local number remains 03034086168.

## Publish to GitHub Pages (PowerShell commands)
Two common ways:

1) Use a repository named `yourusername.github.io` and push `main` (or `master`) branch:

```powershell
# replace <your-username> and <repo-name> as needed
cd 'c:\Users\rayya\Downloads\Ibi website\the-comics'
git init
git add .
git commit -m "Initial commit: The Comics site"
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in the repository settings (usually already served at https://<your-username>.github.io).

2) Use a project repo and publish the `gh-pages` branch:

```powershell
cd 'c:\Users\rayya\Downloads\Ibi website\the-comics'
# create repo on GitHub first, then:
git init
git add .
git commit -m "Initial commit: The Comics site"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
# create gh-pages branch from main and push
git checkout -b gh-pages
git push -u origin gh-pages
```

Then in repository Settings → Pages, set source branch to `gh-pages`.

## Notes & next steps
- Replace placeholder images with your own art or product shots.
- If you want payment or checkout flows, I can add a simple form that collects order details and sends them to you via WhatsApp or email.
- If you want a custom domain, add a `CNAME` file with your domain and configure it in GitHub Pages.

If you want, I can also:
- Add more product templates or a CMS-friendly structure.
- Add a `404.html` and a small build step.
- Create the GitHub repo and push (I can provide exact commands you can run in PowerShell).