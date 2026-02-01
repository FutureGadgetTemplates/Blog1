# Blog Template

A modern, Wix-inspired Jekyll blog template with a clean design and powerful features.

## Features

- **Responsive Design** - Mobile-first approach that looks great on all devices
- **Hero Section** - Featured post showcase on the homepage
- **Post Grid Layout** - Beautiful 2-column layout with hover effects
- **Sidebar Widgets** - About, search, categories, recent posts, newsletter, social links, tags
- **Category & Tag Pages** - Organized content browsing
- **Author Profiles** - Multi-author support with individual pages
- **Social Sharing** - Twitter, Facebook, LinkedIn, copy link
- **Search Functionality** - Client-side search across all posts
- **Newsletter Integration** - Ready for Mailchimp or similar services
- **Comments** - Disqus integration
- **SEO Optimized** - Built-in meta tags, sitemap, and RSS feed
- **Reading Time** - Estimated reading time for each post
- **Related Posts** - Automatically suggested based on tags/categories

## Quick Start

1. **Install Jekyll** (if not already installed):
   ```bash
   gem install jekyll bundler
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. Open `http://localhost:4000/Blog1/` in your browser (adjust path based on your `baseurl`).

> **Note:** If you want to run locally without the baseurl path, temporarily set `baseurl: ""` in `_config.yml` or run:
> ```bash
> bundle exec jekyll serve --baseurl ""
> ```

## Configuration

Edit `_config.yml` to customize your blog:

```yaml
title: Your Blog Title
description: Your blog description
author: Your Name

# URL Configuration
url: "https://username.github.io"  # Your site's base URL (no trailing slash)
baseurl: "/repo-name"              # Repository name for GitHub Pages (e.g., /Blog1)

social:
  twitter: your_twitter
  instagram: your_instagram
  # ... more social links

newsletter:
  enabled: true
  action_url: your_mailchimp_url

disqus:
  shortname: your_disqus_shortname

google_analytics: UA-XXXXXXXX-X
```

### URL Configuration for Different Hosting

| Hosting Type | url | baseurl |
|--------------|-----|---------|
| GitHub Pages (project) | `https://username.github.io` | `/repo-name` |
| GitHub Pages (user/org) | `https://username.github.io` | `""` |
| Custom domain | `https://yourdomain.com` | `""` |
| Subdirectory | `https://yourdomain.com` | `/blog` |

## Directory Structure

```
├── _authors/           # Author profiles
├── _includes/          # Reusable components
│   ├── icons/          # SVG icons
│   └── widgets/        # Sidebar widgets
├── _layouts/           # Page layouts
├── _posts/             # Blog posts
├── assets/
│   ├── css/            # Stylesheets
│   ├── images/         # Images
│   └── js/             # JavaScript
├── _config.yml         # Site configuration
├── index.html          # Homepage
├── about.md            # About page
├── contact.md          # Contact page
├── categories.md       # Categories listing
└── search.html         # Search page
```

## Creating Posts

Add new posts to the `_posts` directory with this naming format:

```
YYYY-MM-DD-your-post-title.md
```

Front matter example:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-15
categories: [Category]
tags: [tag1, tag2, tag3]
author: default
image: /assets/images/posts/your-image.jpg
featured: true  # Shows in hero section
excerpt: "A brief description of your post."
---

Your post content here...
```

## Customization

### Colors & Typography

Edit CSS variables in `assets/css/main.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Playfair Display', serif;
}
```

### Adding Authors

Create a file in `_authors/`:

```yaml
---
name: authorname
display_name: Author Display Name
avatar: /assets/images/authors/author.jpg
bio: Author biography here.
social:
  twitter: author_twitter
  linkedin: author_linkedin
---
```

## Deployment

### GitHub Pages

1. Update `_config.yml` with your GitHub Pages URL:
   ```yaml
   url: "https://username.github.io"
   baseurl: "/repo-name"  # Your repository name
   ```

2. Push to GitHub and enable GitHub Pages in repository settings, or use GitHub Actions.

3. For GitHub Actions, create `.github/workflows/jekyll.yml`:
   ```yaml
   name: Deploy Jekyll site to Pages
   on:
     push:
       branches: ["main"]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/configure-pages@v4
         - uses: ruby/setup-ruby@v1
           with:
             ruby-version: '3.2'
             bundler-cache: true
         - run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
           env:
             JEKYLL_ENV: production
         - uses: actions/upload-pages-artifact@v3
     deploy:
       runs-on: ubuntu-latest
       needs: build
       steps:
         - uses: actions/deploy-pages@v4
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
   ```

### Other Platforms

Build the production site:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site` directory, ready for deployment to:
- Netlify
- Vercel
- Any static hosting

For root domain deployment, set `baseurl: ""`

## License

This template is open source and available under the MIT License.
