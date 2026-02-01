/**
 * Blog Template - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
  }

  // Search Modal
  const searchToggle = document.querySelector('.search-toggle');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.querySelector('.search-modal-close');
  const searchOverlay = document.querySelector('.search-modal-overlay');
  const searchInput = document.getElementById('search-input');

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('active');
      searchModal.setAttribute('aria-hidden', 'false');
      searchInput?.focus();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove('active');
      searchModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (searchToggle) {
    searchToggle.addEventListener('click', openSearch);
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', closeSearch);
  }

  // Close search on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal?.classList.contains('active')) {
      closeSearch();
    }
  });

  // Copy Link Button
  const copyButtons = document.querySelectorAll('.share-copy');

  copyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const url = this.dataset.url;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
          const span = button.querySelector('span');
          const originalText = span.textContent;
          span.textContent = 'Copied!';

          setTimeout(function() {
            span.textContent = originalText;
          }, 2000);
        });
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Lazy loading images
  if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(function(img) {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // Header scroll behavior
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header?.classList.add('header-hidden');
    } else {
      header?.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
  });

  // Reading progress indicator (for single posts)
  const progressBar = document.querySelector('.reading-progress');
  const postContent = document.querySelector('.post-content');

  if (progressBar && postContent) {
    window.addEventListener('scroll', function() {
      const contentTop = postContent.offsetTop;
      const contentHeight = postContent.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = window.scrollY;

      const progress = Math.min(
        100,
        Math.max(0, ((scrolled - contentTop + windowHeight) / contentHeight) * 100)
      );

      progressBar.style.width = progress + '%';
    });
  }
});
