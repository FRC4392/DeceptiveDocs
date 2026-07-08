import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DeceptiveDocs',
  tagline: 'Deceivers 4392',
  favicon: 'img/logo-simple.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  markdown: {
    mdx1Compat: {
      admonitions: true, // re-enable ::: admonition syntax disabled by future.v4
    },
  },

  // Set the production url of your site here
  url: 'https://docs.deceivers.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FRC4392', // Usually your GitHub org/user name.
  projectName: 'DeceptiveDocs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Preconnect to Google Fonts for the brand type families.
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

  // Brand type: Saira Condensed (display), Hanken Grotesk (body), Space Mono (data).
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Saira+Condensed:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=Hanken+Grotesk:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap',
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo-banner.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DeceptiveDocs',
      logo: {
        alt: 'Deceivers Logo',
        src: 'img/logo-simple.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'teamsidebar',
          position: 'left',
          label: 'Team',
        },
        {
          type: 'docSidebar',
          sidebarId: 'softwaresidebar',
          position: 'left',
          label: 'Software',
        },
        {
          type: 'docSidebar',
          sidebarId: 'manufacturingsidebar',
          position: 'left',
          label: 'Manufacturing',
        },
        {
          type: 'docSidebar',
          sidebarId: 'electricalsidebar',
          position: 'left',
          label: 'Electrical',
        },
        {
          type: 'docSidebar',
          sidebarId: 'designsidebar',
          position: 'left',
          label: 'Design',
        },
        {
          type: 'docSidebar',
          sidebarId: 'buildsidebar',
          position: 'left',
          label: 'Build',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {
              label: ' Team Documents',
              href: '/docs/team/'
            },
            {
              label: 'Software',
              href: '/docs/software/'
            },
            {
              label: 'Manufacturing',
              href: '/docs/manufacturing/'
            },
            {
              label: 'Electrical',
              href: '/docs/electrical/'
            },
            {
              label: 'Design',
              href: '/docs/design/'
            },
            {
              label: 'Build',
              href: '/docs/build/'
            },
          ]
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@thedeceivers',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@deceivers4392',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/team4392',
            },
            {
              label: 'X/Twitter',
              href: 'https://twitter.com/deceiversteam',
            },
            {
              label: 'Github',
              href: 'https://github.com/FRC4392',
            },
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'Website',
              to: 'https://deceivers.org',
            },
            {
              label: 'The Blue Alliance',
              to: 'https://www.thebluealliance.com/team/4392',
            },
            {
              label: 'Statbotics',
              href: 'https://www.statbotics.io/team/4392',
            },
          ],
        },
      ],
      copyright: `Team 4392 The Deceivers`,
    },
    prism: {
      theme: prismThemes.github,
      // Night Owl's #011627 background sits naturally next to Deceiver Navy.
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
