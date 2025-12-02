# Scientific Portfolio Website

A professional, responsive portfolio website for Abhishek Karna - undergraduate researcher in Physics and Mathematics at Duke University.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Comprehensive Sections**:
  - Home page with research highlights
  - Detailed research experience
  - Publications and conference presentations
  - Complete CV/Resume
  - Contact page with interactive form
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance**: Optimized for fast loading times
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
portfolio-website/
│
├── index.html           # Home page
├── research.html        # Research experience page
├── publications.html    # Publications and presentations
├── cv.html             # Curriculum Vitae
├── contact.html        # Contact page
│
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript functionality
│
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages:

### Option 1: Using GitHub Website (Easiest)

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for a free account

2. **Create a New Repository**
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name your repository: `your-username.github.io` (replace `your-username` with your GitHub username)
   - Make it public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all files from the `portfolio-website` folder
   - Commit the changes

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

5. **Access Your Website**
   - Your website will be live at: `https://your-username.github.io`
   - It may take a few minutes to deploy

### Option 2: Using Git Command Line

1. **Install Git** (if not already installed)
   - Download from https://git-scm.com/downloads

2. **Initialize Git Repository**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

3. **Create GitHub Repository**
   - Go to https://github.com and create a new repository
   - Name it: `your-username.github.io`

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Save

### Option 3: Using GitHub Desktop (User-Friendly)

1. **Download GitHub Desktop**
   - Visit https://desktop.github.com/

2. **Create Repository**
   - Open GitHub Desktop
   - File → New Repository
   - Name: `your-username.github.io`
   - Local path: Choose the `portfolio-website` folder location
   - Create Repository

3. **Publish to GitHub**
   - Click "Publish repository" button
   - Uncheck "Keep this code private"
   - Click "Publish Repository"

4. **Enable GitHub Pages**
   - Go to your repository on GitHub.com
   - Settings → Pages
   - Select "main" branch
   - Save

## 🛠️ Customization Guide

### Update Personal Information

1. **Contact Information**
   - Update email addresses in all HTML files
   - Update LinkedIn and GitHub URLs

2. **Research Content**
   - Edit `research.html` to add/modify research projects
   - Update Google Drive links to your own presentations

3. **Publications**
   - Edit `publications.html` to add new publications
   - Update conference presentations

4. **CV Content**
   - Modify `cv.html` with your experiences and awards

### Customize Styling

1. **Colors**
   - Edit CSS variables in `styles.css` (lines 8-22)
   - Change `--accent-color` for different theme color

2. **Fonts**
   - Add Google Fonts link in HTML `<head>`
   - Update `font-family` in CSS

3. **Layout**
   - Modify grid layouts in CSS
   - Adjust padding and margins

### Add Custom Domain (Optional)

1. **Purchase a Domain**
   - Buy from providers like Namecheap, GoDaddy, etc.

2. **Configure DNS**
   - Add CNAME record pointing to `your-username.github.io`

3. **Update GitHub Pages Settings**
   - Go to Settings → Pages
   - Add your custom domain
   - Enable HTTPS

## 🔧 Local Development

### Viewing Locally

1. **Simple Method**
   - Double-click `index.html`
   - Opens in your default browser

2. **Using Python HTTP Server**
   ```bash
   # Python 3
   python -m http.server 8000

   # Then visit http://localhost:8000
   ```

3. **Using Node.js**
   ```bash
   npx http-server -p 8000
   ```

### Live Reload (Optional)

Install Live Server extension in VS Code for automatic reload on file changes.

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators for interactive elements
- Screen reader friendly
- Sufficient color contrast ratios

## 🎨 Design Credits

- **Icons**: Font Awesome 6.4.0
- **Color Palette**: Custom scientific theme
- **Typography**: System fonts for optimal performance

## 📝 License

This website is created for Abhishek Karna. Feel free to use the template structure, but please update with your own information.

## 🐛 Known Issues & Fixes

### Issue: Form not sending emails
**Solution**: The contact form uses `mailto:` link. For actual form submission, integrate a backend service like:
- Formspree (https://formspree.io/)
- EmailJS (https://www.emailjs.com/)
- Netlify Forms (if deployed on Netlify)

### Issue: Images not loading
**Solution**: Ensure all image paths are correct and images are uploaded to the repository.

### Issue: Links not working
**Solution**: Update all Google Drive and external links with your own URLs.

## 🔄 Updating Your Website

1. **Make changes** to HTML/CSS/JS files locally
2. **Test changes** by opening HTML files in browser
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
4. **Wait 1-2 minutes** for GitHub Pages to rebuild
5. **Check live site** at your GitHub Pages URL

## 📞 Support

For issues related to:
- **GitHub Pages**: https://docs.github.com/en/pages
- **Git**: https://git-scm.com/doc
- **HTML/CSS**: https://developer.mozilla.org/

## 🚀 Performance Tips

1. **Optimize Images**: Use compressed images (WebP format recommended)
2. **Minimize CSS/JS**: Use minification tools for production
3. **Enable Caching**: GitHub Pages automatically handles this
4. **Use CDN**: External resources (Font Awesome) loaded from CDN

## 🔐 Security

- All external links use `rel="noopener noreferrer"`
- No sensitive data stored in frontend code
- HTTPS enabled by default on GitHub Pages

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add this before `</head>` in all HTML files:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🎓 Additional Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Web Accessibility](https://www.w3.org/WAI/)
- [Can I Use](https://caniuse.com/) - Browser compatibility checker

## ✨ Future Enhancements

Potential features to add:
- [ ] Dark mode toggle
- [ ] Blog section for research updates
- [ ] Interactive data visualizations
- [ ] PDF download for CV
- [ ] Multi-language support
- [ ] RSS feed for publications
- [ ] Search functionality

---

**Built with ❤️ for scientific communication and research dissemination**

Last Updated: October 2025
