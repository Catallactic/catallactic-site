// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Catallactic',
  tagline: 'An open source framework and community to build commodity backed crypto currencies',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://catallactic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/catallactic-site/',
	trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Catallactic', // Usually your GitHub org/user name.
  projectName: 'catallactic-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
			docs: {
				sidebar: {
					autoCollapseCategories: true,
				},
			},
			navbar: {
        title: 'Catallactic',
        logo: {
          alt: 'Catallactic Logo',
          src: 'img/hat.png',
        },
        items: [
          {
						type: 'docSidebar',
            sidebarId: 'tokenizationSidebar',
            position: 'left',
            label: 'Tokenization',
          }, {
            type: 'docSidebar',
            sidebarId: 'suiteSidebar',
            position: 'left',
            label: 'Suite',
          }, {
            type: 'docSidebar',
            sidebarId: 'defiSidebar',
            position: 'left',
            label: 'DeFi Services',
          }, {
						to: '/blog', 
						label: 'Blog', 
						position: 'left'
					}, {
            href: 'https://github.com/Catallactic',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Tokenization',
            items: [{
                label: 'Fundamentals',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }, {
                label: 'Tokenization',
                href: 'https://discordapp.com/invite/docusaurus',
              }, {
                label: 'Project Funding',
                href: 'https://twitter.com/docusaurus',
              }, {
                label: 'Token Negotiation',
                href: 'https://twitter.com/docusaurus',
              }, {
                label: 'Token Operations',
                href: 'https://twitter.com/docusaurus',
              }, {
                label: 'Tokenomics',
                href: 'https://twitter.com/docusaurus',
              }
            ],
          }, {
            title: 'Suite',
            items: [{
                label: 'Admin DApp',
                to: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }, {
                label: 'User DApps',
                to: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }, {
                label: 'Tokens',
                to: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          }, {
						title: 'DeFi Services',
            items: [{
                label: 'DeFi Service',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }, {
                label: 'Launchap',
                href: 'https://discordapp.com/invite/docusaurus',
              }, {
                label: 'Payments',
                href: 'https://twitter.com/docusaurus',
              }, {
                label: 'Cards',
                href: 'https://twitter.com/docusaurus',
              }, {
                label: 'Lending',
                href: 'https://twitter.com/docusaurus',
              }, {
                label: 'Transfers',
                href: 'https://twitter.com/docusaurus',
              }
            ],
          }, {
            title: 'More',
            items: [ {
                label: 'Blog',
                to: '/blog',
              }, {
                label: 'GitHub',
                href: 'https://github.com/Catallactic',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Catallactic, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
			markdown: {
				mermaid: true,
			},
			themes: ['@docusaurus/theme-mermaid'],
		}),
};

module.exports = config;
