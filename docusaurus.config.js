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
  baseUrl: '/',
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
            'https://github.com/Catallactic/catallactic-site/blob/main',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
					showReadingTime: true,
					sortPosts: 'ascending',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Catallactic/catallactic-site/blob/main',
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
            sidebarId: 'fundingSidebar',
            position: 'left',
            label: 'Funding',
          }, {
						type: 'docSidebar',
            sidebarId: 'negotiationSidebar',
            position: 'left',
            label: 'Negotiation',
          }, {
						type: 'docSidebar',
            sidebarId: 'operationSidebar',
            position: 'left',
            label: 'Distribution',
					}, {
            type: 'docSidebar',
            sidebarId: 'defiSidebar',
            position: 'left',
            label: 'DeFi Services',
          }, {
            type: 'docSidebar',
            sidebarId: 'crowdsolvingSidebar',
            position: 'left',
            label: 'Crowdsolving',
          }, {
						type: 'docSidebar',
            sidebarId: 'suiteSidebar',
            position: 'right',
            label: 'Suite',
          }, {
						type: 'docSidebar',
            sidebarId: 'ecosystemSidebar',
            position: 'right',
            label: 'Ecosystem',
					}, {
						to: '/blog', 
						label: 'Blog', 
						position: 'right'
					}, {
						to: 'https://cryptonomics.network/', 
						label: 'Forum', 
						position: 'right'
					},
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Tokenization',
            items: [{
                label: 'Tokenization',
                href: '/docs/tokenization/intro',
              }, {
                label: 'Project Funding',
                href: '/docs/funding/intro',
              }, {
                label: 'Token Negotiation',
                href: '/docs/negotiation/intro',
              }, {
                label: 'Token Operations',
                href: '/docs/distribution/intro',
              }, {
                label: 'DeFi Services',
                href: '/docs/defi/intro',
              }, {
                label: 'Crowdsolving',
                href: '/docs/crowdsolving/intro',
							}
            ],
          }, {
            title: 'Suite',
            items: [{
                label: 'Admin DApp',
                to: '/docs/suite/intro',
              }, {
                label: 'ICO Purchase Widget',
                to: '/docs/suite/dapp-catallactic-purchase/create-token',
              }, {
                label: 'ICO Status Tracker',
                to: '/docs/suite/dapp-catallactic-purchase/create-token',
							}, {
                label: 'ICO Claims',
                to: '/docs/suite/dapp-catallactic-purchase/create-token',
							}, {
                label: 'ICO Vesting Tracker',
                to: '/docs/suite/dapp-catallactic-purchase/create-token',
							}, {
								label: 'Tokens',
                to: '/docs/suite/token-ico/features',
              },
            ],
          }, {
						title: 'DeFi Services',
            items: [{
								label: 'Liquidity Provision',
								href: '/docs/defi/liquidity',
							}, {
								label: 'Staking',
                href: '/docs/defi/staking',
              }, {
                label: 'Launchap',
                href: '/docs/defi/launchpad',
              }, {
                label: 'Transfers',
                href: '/docs/defi/transfers',
							}, {
                label: 'Payments',
                href: '/docs/defi/payments',
              }, {
                label: 'Cards',
                href: '/docs/defi/cards',
              }, {
                label: 'Lending',
                href: '/docs/defi/lending',

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
              }, {
								to: 'https://cryptonomics.network/', 
								label: 'Forum', 
								position: 'right'
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
