---
layout: post
title: "Getting Started with Your New Blog"
date: 2024-01-15
categories: [Tutorial]
tags: [blogging, getting-started, jekyll]
author: default
image: /assets/images/posts/getting-started.jpg
featured: true
excerpt: "Learn how to set up and customize your new blog template with this comprehensive guide."
---

Welcome to your new blog! This template is designed to help you create a beautiful, modern blog with minimal effort. Let's walk through the key features and how to customize them.

## Features Overview

This blog template comes packed with features inspired by the best Wix blog templates:

- **Responsive Design** - Looks great on all devices
- **Featured Posts** - Highlight your best content in the hero section
- **Categories & Tags** - Organize your content effectively
- **Social Sharing** - Make it easy for readers to share your posts
- **Newsletter Integration** - Grow your audience with email subscriptions
- **Search Functionality** - Help readers find what they're looking for
- **SEO Optimized** - Built-in meta tags and structured data

## Customizing Your Blog

### Site Configuration

Open `_config.yml` to customize your site settings:

```yaml
title: Your Blog Title
description: A description of your blog
author: Your Name
```

### Adding New Posts

Create new posts in the `_posts` directory with the naming convention:

```
YYYY-MM-DD-your-post-title.md
```

### Front Matter

Each post should include front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-15
categories: [Category]
tags: [tag1, tag2]
author: default
image: /assets/images/posts/your-image.jpg
featured: false
---
```

## Styling Your Blog

The template uses CSS custom properties for easy customization. Edit the variables in `assets/css/main.css`:

```css
:root {
  --color-primary: #2563eb;
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Playfair Display', serif;
}
```

## Next Steps

1. Update the `_config.yml` with your information
2. Replace the sample posts with your own content
3. Add your author profile in `_authors/`
4. Customize the styling to match your brand
5. Deploy to your hosting platform

Happy blogging!
