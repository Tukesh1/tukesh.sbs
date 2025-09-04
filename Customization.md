# Customization Guide

This guide will help you customize the portfolio to make it your own. Follow the steps below to update site information, add projects, and modify the theme.

---

## 1. Update Site Information

Edit the `src/data/siteMetadata.ts` file to update the basic site information:

```typescript
export const siteMetadata = {
  title: "Your Name",
  author: "Your Name",
  siteUrl: "https://yoursite.com",
  description: "Your description...",
  keywords: ["Portfolio", "Developer", "React", "TypeScript"],
  social: {
    email: "your-email@example.com",
    x: "https://x.com/your-handle",
    linkedinLink: "https://www.linkedin.com/in/your-profile/",
    githubLink: "https://github.com/your-username",
  },
};
```

---

## 2. Add Your Projects

Update the `src/data/projects.ts` file to showcase your own projects:

```typescript
export const WEB_APPS = [
  {
    title: "Your Project",
    tags: ["React", "TypeScript"],
    description: "Project description...",
    thumbnail: "/assets/project/image.jpg",
    repo: "https://github.com/username/repo",
    liveDemo: "https://yourproject.com",
  },
  // Add more projects here
];
```

---

## 3. Customize the Theme

Modify the `tailwind.config.js` file to change the color scheme and other design elements:

```javascript
theme: {
  extend: {
    colors: {
      'dark-bg': '#1D1E20', // Custom dark theme
      'primary': '#38B2AC', // Primary color
      'secondary': '#FF5733', // Secondary color
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

---

## 4. Update the Footer

Edit the `src/components/footer.tsx` file to update the footer text or links:

```tsx
<footer>
  <p>Built with ❤️ by [Your Name](https://yoursite.com)</p>
  <ul>
    <li><a href="https://github.com/your-username">GitHub</a></li>
    <li><a href="https://linkedin.com/in/your-profile">LinkedIn</a></li>
  </ul>
</footer>
```

---

## 5. Add Social Links

Update the `src/data/siteMetadata.ts` file to include your social media links:

```typescript
social: {
  email: "your-email@example.com",
  x: "https://x.com/your-handle",
  linkedinLink: "https://www.linkedin.com/in/your-profile/",
  githubLink: "https://github.com/your-username",
},
```

---

## 6. Customize the Header

Edit the `src/components/header.tsx` file to modify the navigation menu or add new links:

```tsx
<nav>
  <a href="/about">About</a>
  <a href="/projects">Projects</a>
  <a href="/contact">Contact</a>
  <a href="/blog">Blog</a> <!-- Add a new link -->
</nav>
```

---

## 7. Update SEO Metadata

Edit the `src/data/siteMetadata.ts` file to update SEO-related metadata:

```typescript
export const siteMetadata = {
  title: "Your Portfolio",
  description: "Showcase your work and skills.",
  keywords: ["Portfolio", "Developer", "React", "TypeScript"],
  socialBanner: "/assets/banner.png", // Add a social banner image
};
```

---

## 8. Add Your Resume

Replace the `public/resume.pdf` file with your own resume. Update the link in the `src/components/header.tsx` file if needed:

```tsx
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
```

---
