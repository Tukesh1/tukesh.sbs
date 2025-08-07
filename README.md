

A modern, responsive portfolio website showcasing my work as a **Frontend Developer & AI Specialist**. Built with cutting-edge technologies and optimized for performance, SEO, and user experience.


[![Next.js](https://img.shields.io/badge/Next.js-15.2.0-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)

## 🌐 Live Demo

**Visit:** [https://tukesh.sbs](https://tukesh.sbs)

##  Features

###  **Modern Design**
- **Dark/Light Theme** with custom color scheme (`#1D1E20`)
- **Responsive Design** optimized for all devices
- **Minimalist UI** with clean, professional aesthetics
- **Smooth Animations** powered by Framer Motion

### 🔍 **SEO Optimized**
- **Dynamic Sitemap** generation
- **Structured Data (JSON-LD)** for rich search results
- **Meta Tags & Open Graph** for social sharing
- **Performance Optimized** with Next.js 15

### 📱 **Progressive Web App**
- **PWA Manifest** for app-like experience
- **Optimized Images** with Next.js Image component
- **Fast Loading** with static generation

### 🛠 **Developer Experience**
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling
- **Component Architecture** for maintainability

##  Tech Stack

### **Frontend**
```⚡ Next.js 15.2.0      - React framework with App Router
 Tailwind CSS 3.4   - Utility-first CSS framework
 TypeScript 5.0      - Type-safe JavaScript
 Framer Motion       - Animation library
 next-themes        - Dark/Light theme switching
```

### **Tools & Libraries**
```
React Icons        - Icon library
GitHub Calendar    - Contribution    visualization
Space Grotesk      - Modern typography
```

### **Development**
```
ESLint             - Code linting
PostCSS            - CSS processing
npm                - Package management
```

## 📂 Project Structure

```
tukesh-portfolio/
├── 📁 src/
│   ├── 📁 app/                 # App Router pages
│   │   ├── 📄 layout.tsx       # Root layout
│   │   ├── 📄 page.tsx         # Home page
│   │   ├── 📁 about/          # About page
│   │   ├── 📁 projects/       # Projects showcase
│   │   ├── 📁 resume/         # Resume page
│   │   └── 📁 tracode/        # Featured project
│   ├── 📁 components/         # Reusable components
│   │   ├── 📄 header.tsx      # Navigation
│   │   ├── 📄 footer.tsx      # Footer
│   │   └── 📄 theme-toggle.tsx # Theme switcher
│   ├── 📁 data/               # Content & configuration
│   │   ├── 📄 siteMetadata.ts # Site configuration
│   │   ├── 📄 projects.ts     # Projects data
│   │   └── 📄 socials.tsx     # Social links
│   └── 📁 lib/                # Utilities
├── 📁 public/                 # Static assets
│   ├── 📄 favicon.png         # Site favicon
│   ├── 📄 robots.txt          # SEO robots file
│   └── 📁 assets/             # Images & documents
└── 📁 config files            # Build & lint config
```

## 🛠 Installation & Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Clone & Install**
```bash
# Clone the repository
git clone https://github.com/tukesh1/tukesh-portfolio.git

# Navigate to project directory
cd tukesh-portfolio

# Install dependencies
npm install
```

### **Development**
```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### **Build & Deploy**
```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for speed
- **SEO Score:** 100/100
- **Accessibility:** WCAG compliant

## 🎯 Key Pages

### **🏠 Home**
- Professional introduction
- Skills overview (React, TypeScript, Python)
- Contact information and social links

### **👨‍💻 About**
- Work experience and education
- Technical skills with visual indicators
- GitHub contribution calendar
- Tool stack showcase

### **💼 Projects**
- **Web Applications:** Tracode, Kreelab
- **AI/ML Projects:** Git Repo Analyzer, Spam Detection
- **CLI Tools:** ATM System, Training Management

### **📄 Resume**
- Professional summary
- Interactive skill display
- Downloadable PDF version

### **🌟 Tracode (Featured)**
- Dedicated project showcase
- Feature highlights
- Live demo integration

## 🔧 Customization

### **Update Site Information**
Edit `src/data/siteMetadata.ts`:
```typescript
export const siteMetadata = {
  title: "Your Name",
  author: "Your Name",
  siteUrl: "https://yoursite.com",
  description: "Your description...",
  // ... more config
}
```

### **Add Projects**
Update `src/data/projects.ts`:
```typescript
export const WEB_APPS = [
  {
    title: "Your Project",
    tags: ["React", "TypeScript"],
    description: "Project description...",
    thumbnail: "/assets/project/image.jpg",
    repo: "https://github.com/username/repo",
  },
  // ... more projects
];
```

### **Customize Theme**
Modify colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'dark-bg': '#1D1E20', // Custom dark theme
    },
  },
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Email:** [tukeshkrraju1011@gmail.com](mailto:tukeshkrraju1011@gmail.com)
- **LinkedIn:** [linkedin.com/in/tukesh-kumar](https://linkedin.com/in/tukesh-kumar)
- **GitHub:** [github.com/tukesh1](https://github.com/tukesh1)
- **Twitter:** [@sarifInsaan](https://x.com/sarifInsaan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Tukesh Kumar](https://tukesh.sbs)**

*Frontend Developer & AI Specialist*

</div>
