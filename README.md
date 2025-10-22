# Joyfill Documentation

Official documentation for Joyfill SDKs across all platforms.

## 🚀 Quick Start

```bash
npm install
npm start
```

The documentation site will open at [http://localhost:3000](http://localhost:3000)

## 📚 Available SDKs

- **iOS SDK** - Native Swift SDK for iOS applications
- **Kotlin SDK** - Native Kotlin SDK for Android applications
- **React Native SDK** - Cross-platform SDK for mobile apps
- **Web SDK** - Framework-agnostic SDK for web applications

## 📁 Project Structure

```
joyfill-docs/
├── docs/
│   ├── ios/               # iOS SDK documentation
│   ├── kotlin/            # Kotlin SDK documentation
│   ├── react-native/      # React Native SDK documentation
│   └── web/               # Web SDK documentation
├── src/
│   ├── components/        # React components
│   ├── css/              # Custom styling
│   └── pages/            # Custom pages
├── static/               # Static assets
└── docusaurus.config.ts  # Docusaurus configuration
```

## 📝 Documentation Structure

Each SDK includes:

- **Getting Started** - Installation and quick start guide
- **Guides** - Feature-specific guides:
  - Modes
  - Image Upload Handling
  - Required Field Validation
  - Populating and Extracting Data
  - Schema Validation
  - Event Handling
- **API Reference** - Functions and Classes
- **Changelogs** - Release notes
- **About** - Security and compliance
- **Examples** - Sample projects

## 🛠️ Development

### Build

```bash
npm run build
```

### Serve locally

```bash
npm run serve
```

### Clear cache

```bash
npm run clear
```

## 🌐 Deployment

The site is built using Docusaurus 3 and can be deployed to:

- GitHub Pages
- Vercel
- Netlify
- AWS Amplify

## 📖 Writing Documentation

### Adding New Pages

1. Create a new `.md` or `.mdx` file in the appropriate SDK directory
2. Add front matter (optional):
```markdown
---
title: My Page Title
description: Page description
---
```

### Using MDX Features

Import and use React components in your documentation:

```mdx
import MyComponent from '@site/src/components/MyComponent';

<MyComponent />
```

### Code Blocks

```swift
// Swift example
let joyfill = Joyfill(apiKey: "your-api-key")
```

```kotlin
// Kotlin example
val joyfill = Joyfill("your-api-key")
```

```typescript
// TypeScript example
const joyfill = new Joyfill('your-api-key');
```

## 🔧 Configuration

The main configuration is in `docusaurus.config.ts`. Key features:

- **Multi-SDK Support** - Separate doc plugins for each SDK
- **SDK Dropdown** - Easy navigation between SDKs
- **Syntax Highlighting** - Support for Swift, Kotlin, TypeScript, JavaScript
- **Dark Mode** - Respects system preferences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

## 📄 License

Copyright © 2025 Joyfill, Inc.

## 🔗 Links

- **Website**: https://joyfill.io
- **GitHub**: https://github.com/joyfill
- **Support**: https://joyfill.io/support

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/)
