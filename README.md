# Inkcap Consulting — katinarogers.com

Personal and business website for Katina L. Rogers / Inkcap Consulting, built with [Astro](https://astro.build).

## Local Development

You need [Node.js](https://nodejs.org/) installed (version 18 or higher).

```bash
# Install dependencies
npm install

# Start the dev server (opens at http://localhost:4321)
npm run dev

# Build the site (outputs to ./dist)
npm run build

# Preview the built site locally
npm run preview
```

## Editing Content

All page content lives in `src/pages/`. Each `.astro` file corresponds to a page on the site:

- `index.astro` — Home page
- `about.astro` — About page
- `services.astro` — Services page
- `writing.astro` — Writing/books page
- `media.astro` — Media appearances and talks
- `contact.astro` — Contact page

The shared layout (header, nav, footer) is in `src/layouts/BaseLayout.astro`.
Global styles are in `src/styles/global.css`.

To edit a page, open the corresponding `.astro` file and modify the HTML content between the `<BaseLayout>` tags. It works like regular HTML.

## Deploying to GitHub Pages

### First-Time Setup

1. **Create a GitHub account** if you don't have one at [github.com](https://github.com).

2. **Install Git** on your computer if it isn't already installed. On Mac, open Terminal and type `git --version`. If it's not installed, you'll be prompted to install it.

3. **Create a new repository on GitHub:**
   - Go to [github.com/new](https://github.com/new)
   - Name it whatever you like (e.g., `website` or `katinarogers.com`)
   - Set it to **Public** (required for free GitHub Pages)
   - Do **not** check "Add a README" (we already have one)
   - Click **Create repository**

4. **Push this project to GitHub.** In your terminal, from the `new-website` folder, run:

   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and the repository name you chose.

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** (the gear icon in the top menu)
   - In the left sidebar, click **Pages**
   - Under **Source**, select **GitHub Actions**
   - That's it — the workflow file included in this project will handle the rest

6. **Wait for the first deploy.** After pushing, go to the **Actions** tab in your repository. You should see a workflow running. When it finishes (usually within a couple of minutes), your site will be live.

7. **Find your site URL.** Go back to **Settings > Pages**. Your site URL will be shown at the top, typically `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

### Using a Custom Domain (katinarogers.com)

If you want your site at `katinarogers.com` instead of `username.github.io`:

1. **In GitHub**, go to **Settings > Pages** and enter `katinarogers.com` in the **Custom domain** field. Click **Save**.

2. **At your domain registrar** (wherever you purchased katinarogers.com), update your DNS settings. You need to create these records:

   **For the root domain (katinarogers.com):**
   Add four A records pointing to GitHub's IP addresses:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **For the www subdomain:**
   Add a CNAME record:
   ```
   www  →  YOUR_USERNAME.github.io
   ```

3. **Wait for DNS to propagate.** This can take anywhere from a few minutes to 48 hours, but usually works within an hour or two.

4. **Enable HTTPS.** Once DNS has propagated, go back to **Settings > Pages** in GitHub and check **Enforce HTTPS**. GitHub provides free SSL certificates automatically.

5. **Update `astro.config.mjs`** to match your domain. It's already set to `https://katinarogers.com`, so if that's your domain, no change is needed.

### Making Updates

After the initial setup, updating the site is straightforward:

1. Edit files locally
2. Test with `npm run dev`
3. When happy with changes, push to GitHub:

   ```bash
   git add -A
   git commit -m "Describe what you changed"
   git push
   ```

4. GitHub Actions will automatically rebuild and deploy the site. Check the **Actions** tab to monitor progress.

### Troubleshooting

- **Build fails in Actions tab:** Click on the failed run to see error details. The most common cause is a syntax error in an `.astro` file. Run `npm run build` locally first to catch errors before pushing.
- **Site shows 404:** Make sure GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch") in Settings > Pages.
- **Custom domain not working:** DNS changes can take time. Use [whatsmydns.net](https://www.whatsmydns.net/) to check if your DNS records have propagated.
- **Old content still showing:** GitHub Pages uses caching. Try a hard refresh (Cmd+Shift+R on Mac) or wait a few minutes.
