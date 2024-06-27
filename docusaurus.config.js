// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

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
          editUrl: 'https://github.com/Catallactic/catallactic-site/blob/main',
        },
        blog: {
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
					routeBasePath: 'blog',
					showReadingTime: true,
					sortPosts: 'ascending',
          editUrl: 'https://github.com/Catallactic/catallactic-site/blob/main',
        },
				theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

	plugins: [

		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'book',
				blogSidebarTitle: 'Book',
				blogSidebarCount: 'ALL',
				blogTitle: 'Book',
				blogDescription: 'Book',
				showReadingTime: false,
				sortPosts: 'ascending',

				routeBasePath: 'book',
				path: 'book',

				editUrl: 'https://github.com/Catallactic/catallactic-site/blob/main',
			},
		],

		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'blogES',
				blogSidebarTitle: 'Todos los Posts',
				blogSidebarCount: 'ALL',
				blogTitle: 'BlogES',
				blogDescription: 'BlogES',
				showReadingTime: false,
				sortPosts: 'ascending',

				routeBasePath: 'blogES',
				path: 'blogES',

				editUrl: 'https://github.com/Catallactic/catallactic-site/blob/main',
			},
		],


    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-43D7D5091Z',
        anonymizeIP: true,
      },
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
            sidebarId: 'moneyQualitySidebar',
            position: 'left',
            label: 'Quality Money',
          }, {
						type: 'docSidebar',
            sidebarId: 'valueChainSidebar',
            position: 'left',
            label: 'Value Chain',
          }, {
						type: 'docSidebar',
            sidebarId: 'suiteSidebar',
            position: 'left',
            label: 'Suite',
          }, {
						type: 'docSidebar',
            sidebarId: 'ecosystemSidebar',
            position: 'left',
            label: 'Ecosystem',
					}, {
						type: 'doc',
						docId: 'litepaper', 
						label: 'Litepaper', 
						position: 'right'
					}, {
						type: 'doc',
						docId: 'whitepaper', 
						label: 'Whitepaper', 
						position: 'right'
					}, {
						to: '/book', 
						label: 'Book', 
						position: 'right'
					}, {
						to: '/blog', 
						label: 'Blog', 
						position: 'right'
					}, {
						to: '/blogES', 
						label: 'BlogES', 
						position: 'right'
					}, 
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Tokenization',
							items: [{
								label: 'Principles',
								href: '/docs/principles/intro',
							},{
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
            title: 'Docs',
            items: [ {
								label: 'Pitch Deck',
								to: 'https://docs.google.com/presentation/d/1O2gFGNBDIrWCFYe-hcp-8r4Ade2RMwyU6cLHfCzMSMY/edit?usp=sharing',
							}, {
								label: 'Book',
								to: '/book',
							}, {	
								label: 'Blog',
                to: '/blog',
							}, {	
								label: 'BlogES',
                to: '/blogES',
							},
            ],
					}, {
            title: 'Community',
            	items: [ {
								label: 'ForoES',
								href: 'https://catallactic.freeforums.net/',
							}, {
								label: 'Discord',
                href: 'https://discord.gg/jY4XbrktCa',
							}, {
                label: 'GitHub',
                href: 'https://github.com/Catallactic',
              }, {
								label: 'LinkedIn', 
								to: 'https://www.linkedin.com/company/catallactic/', 
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
