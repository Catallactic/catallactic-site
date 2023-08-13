/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //cmmSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tokensSidebar: [
		{
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Admin DApp</span>',
    }, {
			type: 'category',
      label: 'Admin DApp',
      items: [
				'tokens/dapp-admin/structure',
				'tokens/dapp-admin/planning-process',
			],
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading">User DApps</span>',
    }, {
      type: 'category',
      label: 'ICO Purchase Widget',
      items: [
				'tokens/dapp-catallactic-purchase/create-token',
				'tokens/dapp-catallactic-purchase/deliver-token',
			],
		}, {
      type: 'category',
      label: 'ICO Status Tracker',
      items: [
				'tokens/dapp-catallactic-status/create-token',
				'tokens/dapp-catallactic-status/deliver-token',
			],
		}, {
      type: 'category',
      label: 'ICO Claim',
      items: [
				'tokens/dapp-catallactic-claim/create-token',
				'tokens/dapp-catallactic-claim/deliver-token',
			],
		}, {
      type: 'category',
      label: 'ICO Vesting Tracker',
      items: [
				'tokens/dapp-catallactic-vesting/create-token',
				'tokens/dapp-catallactic-vesting/deliver-token',
			],
		}, 		{
      type: 'doc',
      id: 'tokens/intro', // document ID
      label: 'Getting started', // sidebar label
    }, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
			type: 'html',
      value: '<span class="sidebar-heading">Tokens</span>',
    }, {
			type: 'category',
      label: 'ICO Token',
      items: [
				'tokens/token-ico/features',
				{
					type: 'category',
					label: 'Functionalities',
					items: [
						'tokens/token-ico/token-ico-functionalities/invest',
						'tokens/token-ico/token-ico-functionalities/refund',
						'tokens/token-ico/token-ico-functionalities/claim',
						'tokens/token-ico/token-ico-functionalities/withdraw',
					],
				},
				'tokens/token-ico/supported-standards',
				'tokens/token-ico/compliant-jurisdictions',
				'tokens/token-ico/reporting',
			],
    },  {
      type: 'category',
      label: 'Streaming Token',
      items: [
				'tokens/token-streaming/features',
				'tokens/token-streaming/create-token',
				'tokens/token-streaming/deliver-token',
				'tokens/token-streaming/reporting',
			],
    }, {
      type: 'category',
      label: 'Catallactic Token',
      items: [
				'tokens/token-trading/features',
				{
					type: 'category',
					label: 'Functionalities',
					items: [
						'tokens/token-trading/token-trading-functionalities/metadata',
						'tokens/token-trading/token-trading-functionalities/mint',
						'tokens/token-trading/token-trading-functionalities/erc-20',
					],
				},
				'tokens/token-trading/supported-standards',
				'tokens/token-trading/compliant-jurisdictions',
				'tokens/token-trading/reporting',
			],
		},  {
      type: 'category',
      label: 'Escrow Token',
      items: [
				'tokens/token-escrow/features',
				'tokens/token-escrow/create-token',
				'tokens/token-escrow/deliver-token',
				'tokens/token-escrow/reporting',
			],
		},
	],

  decentralizationSidebar: [
    {
      type: 'doc',
      id: 'decentralization/intro',
      //label: 'Getting started',
    }, {
      type: 'category',
      label: 'Decentralization',
      items: ['decentralization/intro'],
    },
  ],

  cmmSidebar: [
    {
      type: 'doc',
      id: 'cmm/intro',
      //label: 'Getting started',
    }, {
      type: 'category',
      label: 'CMM',
      items: ['cmm/intro'],
    },
  ],



};

module.exports = sidebars;
