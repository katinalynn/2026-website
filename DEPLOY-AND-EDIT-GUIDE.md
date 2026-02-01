# Inkcap Consulting Website: Deploy & Edit Guide

This guide covers how to deploy your site to GitHub Pages and how to make content updates.

---

## How the Site Works

This is a static website built with [Astro](https://astro.build/). The source files live in your GitHub repository at **katinalynn/new-website**. When you push changes to the `main` branch, GitHub Actions automatically builds and deploys the site.

### Key files and folders

| Path | What it contains |
|------|-----------------|
| `src/pages/` | Each `.astro` file = one page (index, about, services, writing, media, contact) |
| `src/layouts/BaseLayout.astro` | The shared header, nav, and footer |
| `src/styles/global.css` | All site styles |
| `public/images/` | Images (logos, covers, thumbnails) |
| `astro.config.mjs` | Site configuration (your domain is set here) |
| `.github/workflows/deploy.yml` | The automatic deploy workflow |

---

## Deploying to GitHub Pages

### Initial setup (one time)

1. **Enable GitHub Pages** in your repository settings:
   - Go to https://github.com/katinalynn/new-website/settings/pages
   - Under **Source**, select **GitHub Actions**

2. **Set up your custom domain** (if using katinarogers.com):
   - On the same Pages settings page, enter `katinarogers.com` under **Custom domain**
   - GitHub will check DNS. You need these DNS records with your domain registrar:
     - An `A` record pointing to GitHub's IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - A `CNAME` record for `www` pointing to `katinalynn.github.io`
   - Check **Enforce HTTPS**

3. **Push to main** to trigger the first deploy:
   ```bash
   git push origin main
   ```

### How deploys work

Every time you push to `main`, GitHub Actions will:
1. Check out your code
2. Install dependencies (`npm ci`)
3. Build the site (`npx astro build`)
4. Deploy the output to GitHub Pages

You can monitor deploys at: https://github.com/katinalynn/new-website/actions

If a deploy fails, click into the failed run to see the error log.

---

## Making Content Edits

### Option A: Edit directly on GitHub (easiest)

For small text changes, you can edit files right in your browser:

1. Go to https://github.com/katinalynn/new-website
2. Navigate to the file you want to edit (e.g., `src/pages/services.astro`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **Commit changes**, write a brief description, and commit to `main`
6. The site will automatically redeploy

### Option B: Edit locally with git

For larger changes or when you want to preview before publishing:

#### 1. Pull the latest changes

```bash
cd ~/new-website
git pull origin main
```

#### 2. Start the dev server to preview

```bash
npm run dev
```

Open http://localhost:4321 in your browser to see the site locally.

#### 3. Make your edits

Open any file in a text editor (VS Code, TextEdit, etc.) and save your changes. The dev server will auto-refresh.

#### 4. Commit and push

```bash
git add -A
git commit -m "Brief description of what you changed"
git push origin main
```

The site will redeploy automatically.

---

## Common Content Edits

### Changing text on a page

Open the relevant file in `src/pages/` and edit the HTML text directly. The content is plain HTML between the `<BaseLayout>` tags.

For example, to update the hero heading on the home page, edit `src/pages/index.astro`:

```html
<h1>Your new heading text here.</h1>
```

### Adding or removing a testimonial

In `src/pages/index.astro`, find the `testimonials-grid` div. Each testimonial follows this pattern:

```html
<div class="testimonial">
  <p>"The testimonial quote text."</p>
  <p class="attribution">-- Name, Organization</p>
</div>
```

Copy and paste to add a new one, or delete a block to remove one.

### Adding a new client logo

1. Save the logo image to `public/images/` (e.g., `client-newclient.png`)
2. In `src/pages/services.astro`, add a new entry inside the `client-logo-grid` div:

```html
<a href="https://clientwebsite.com/" class="client-logo-item">
  <img src="/images/client-newclient.png" alt="Client Name logo" />
  <span>Client Name</span>
</a>
```

### Adding a new media item

In `src/pages/media.astro`, add a new entry inside the `media-logo-grid` div:

```html
<a href="https://link-to-article.com" class="media-logo-item">
  <img src="/images/outlet-logo.webp" alt="Outlet name logo" />
  <span>Article or segment title</span>
</a>
```

### Adding a new podcast

In `src/pages/media.astro`, add a new `<li>` to the podcast list:

```html
<li><a href="https://podcast-link.com">Podcast Name</a> with Host Name</li>
```

### Updating the nav or footer

Edit `src/layouts/BaseLayout.astro`. The nav items are defined in the `navItems` array at the top of the file.

### Adding images

Drop image files into `public/images/`. Reference them in HTML as `/images/filename.jpg`. Prefer `.webp` or compressed `.png` for faster load times.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Deploy failed | Check the Actions tab on GitHub for error details |
| Changes not showing | Hard-refresh your browser (Cmd+Shift+R) -- GitHub Pages caches aggressively |
| Dev server won't start | Run `npm install` first, then `npm run dev` |
| Images not loading | Make sure the file is in `public/images/` and the path in HTML starts with `/images/` |
| Custom domain not working | Verify DNS records and check the Pages settings in GitHub |
