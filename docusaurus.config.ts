import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Joyfill Documentation',
  tagline: 'Powerful form SDKs for every platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // For GitHub Pages: https://<USERNAME>.github.io
  url: 'https://VishnuBishnoi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/joyfill-docs/',

  // GitHub pages deployment config.
  organizationName: 'VishnuBishnoi', // Usually your GitHub org/user name.
  projectName: 'joyfill-docs', // Usually your repo name.
  
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ios',
        path: 'docs/ios',
        routeBasePath: 'ios',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/joyfill/joyfill-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kotlin',
        path: 'docs/kotlin',
        routeBasePath: 'kotlin',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/joyfill/joyfill-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'react-native',
        path: 'docs/react-native',
        routeBasePath: 'react-native',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/joyfill/joyfill-docs/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'web',
        path: 'docs/web',
        routeBasePath: 'web',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/joyfill/joyfill-docs/edit/main/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false, // Disable the default docs plugin
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Joyfill Docs',
      logo: {
        alt: 'Joyfill Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'SDK',
          position: 'left',
          items: [
            {
              label: 'iOS',
              to: '/ios/introduction',
            },
            {
              label: 'Kotlin',
              to: '/kotlin/introduction',
            },
            {
              label: 'React Native',
              to: '/react-native/introduction',
            },
            {
              label: 'Web',
              to: '/web/introduction',
            },
          ],
        },
        {
          href: 'https://github.com/joyfill',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SDKs',
          items: [
            {
              label: 'iOS SDK',
              to: '/ios/introduction',
            },
            {
              label: 'Kotlin SDK',
              to: '/kotlin/introduction',
            },
            {
              label: 'React Native SDK',
              to: '/react-native/introduction',
            },
            {
              label: 'Web SDK',
              to: '/web/introduction',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'API Reference',
              to: '/ios/api-reference/functions/overview',
            },
            {
              label: 'Guides',
              to: '/ios/guides/modes/modes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/joyfill',
            },
            {
              label: 'Support',
              href: 'https://joyfill.io/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joyfill, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['swift', 'kotlin', 'typescript', 'javascript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
