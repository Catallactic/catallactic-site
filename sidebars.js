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
  moneyQualitySidebar: [
		{
			type: 'doc',
			id: 'principles/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'doc',
			id: 'principles/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Quality theory of Money</span>',
    }, {
			type: 'category',
			label: 'Decentralization',
			items: [
				'principles/decentralization/bibliography',
				'principles/decentralization/overview',
			],
		}, {
			type: 'category',
			label: 'Privacy',
			items: [
				'principles/privacy/overview',
			],
		}, {
			type: 'category',
			label: 'Security',
			items: [
				'principles/security/overview',
			],
		}, {
			type: 'category',
			label: 'Reporting',
			items: [
				'principles/reporting/overview',
			],
		}, {
			type: 'category',
			label: 'Compliance',
			items: [
				'principles/compliance/KYC',
				'principles/compliance/AML',
				'principles/compliance/Taxes'
			],
		}, 
	],

  valueChainSidebar: [
		{
			type: 'doc',
			id: 'tokenization/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Tokenization</span>',
    }, {
			type: 'doc',
			id: 'tokenization/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'doc',
			id: 'tokenization/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, {
      type: 'category',
      label: 'Tokenizable Assets',
      items: [
				'tokenization/tokenomics/commodities',
			],
		}, {
      type: 'category',
      label: 'Value Engineering (Demand)',
      items: [
				'tokenization/value/ecosystem',
				'tokenization/value/utility',
				'tokenization/value/value',
			],
		}, {
      type: 'category',
      label: 'Supply Management (Supply)',
      items: [
				'tokenization/tokenomics/supply',
				'tokenization/tokenomics/supplycurrent',
			],
		}, {
      type: 'category',
      label: 'Value Capture',
      items: [
				'tokenization/value/cmm'
			],
		}, {
      type: 'category',
      label: 'Tokenomics',
      items: [
				'funding/allocations'
			],
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Funding</span>',
    }, {
			type: 'doc',
			id: 'funding/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'doc',
			id: 'funding/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, {
      type: 'category',
      label: 'Preparing Funding',
      items: [{
					type: 'category',
					label: 'Prepare Documentation',
					items: [
						'funding/preparing/roadmap',
						'funding/preparing/whitepaper',
						'funding/preparing/litepaper',
						'funding/preparing/pitchdeck',
						'funding/preparing/eMail',
					],
				}, {
					type: 'category',
					label: 'Perform Compliance',
					items: [
						'ecosystem/compliance/funding/issuer',
						'ecosystem/compliance/funding/HQ',
						'ecosystem/compliance/funding/investors',
					],
				}, {
					type: 'category',
					label: 'Advertise your Project',
					items: [
						'funding/advertising/watchers',
						'funding/advertising/press',
						'funding/advertising/agencies',
						'funding/advertising/ambassador',
						'funding/advertising/influencers',
					],
				}, {
					type: 'category',
					label: 'Build your Community',
					items: [
						'funding/community/ama',
						'funding/community/community',
						'funding/community/users',
					],
				}, {
					type: 'category',
					label: 'Pitching Investors',
					items: [
						'funding/pitching/incubators',
						'funding/pitching/investors',
					],
				}, {
					type: 'category',
					label: 'Existing Launchpads',
					items: [
						'funding/launchpads',
					],
				}, 
			],
		}, {
      type: 'category',
      label: 'Funding with Catallactic Suite',
      items: [
				{
					type: 'category',
					label: 'Defining Funding Rounds',
					items: [
						'funding/rounds',
					],
				}, {
					type: 'category',
					label: 'Running Funding Rounds',
					items: [
						'suite/dapp-admin/funding-round/overview',
						'suite/dapp-admin/funding-round/prepare-funding-round',
						'suite/dapp-admin/funding-round/create-funding-round',
						'suite/dapp-admin/funding-round/manage-funding-round',
						'suite/dapp-admin/funding-round/close-funding-round',
					],
				}, {
					type: 'category',
					label: 'Perform Vesting',
					items: [
						'funding/TGE',
					],
				}, {
					type: 'category',
					label: 'Deploying to Exchanges',
					items: [
						'funding/TGE',
						'funding/selling',
					],
				}, 
			]
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Negotiation</span>',
    }, {
			type: 'doc',
			id: 'negotiation/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'doc',
			id: 'negotiation/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, {
			type: 'category',
      label: 'Deploying to Exchanges',
      items: [
				'suite/dapp-admin/exchanges/exchanges-deploy-choose',
				'suite/dapp-admin/exchanges/exchanges-deploy-dex',
				'suite/dapp-admin/exchanges/exchanges-deploy-cex',
			],
		}, {
      type: 'category',
      label: 'Trading',
      items: [
				'negotiation/trading',
			],
		}, {
      type: 'category',
      label: 'Monetary Policy',
      items: [
				'negotiation/monetary',
				'negotiation/stability',
			],
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Distribution</span>',
		}, {
			type: 'doc',
			id: 'distribution/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, {
			type: 'doc',
			id: 'distribution/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
      type: 'category',
      label: 'Distribution Models',
      items: [
				{
					type: 'doc',
					id: 'distribution/airdrops',
				}, {
					type: 'doc',
					id: 'distribution/giveaways',
				}, {
					type: 'doc',
					id: 'distribution/rounds',
				}, {
					type: 'doc',
					id: 'distribution/operations',
				}, {
					type: 'doc',
					id: 'distribution/rewards',
				}, 
			],
		}, {
      type: 'category',
      label: 'Token Operations',
      items: [
				'distribution/operations',
			]
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">DeFi Services</span>',
    }, {
			type: 'doc',
			id: 'defi/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
      type: 'category',
      label: 'Money',
      items: [
				'defi/money/bibliography',
				'defi/money/meanofexchange',
				'defi/money/storeofvalue',
				'defi/money/unitofaccount'
			],
		}, {
      type: 'category',
      label: 'Payments',
      items: ['defi/payments/payments'],
    }, {
      type: 'category',
      label: 'Cards',
      items: ['defi/cards/cards'],
    }, {
			type: 'category',
      label: 'Transfers',
      items: ['defi/transfers/transfers'],
    }, {
      type: 'category',
      label: 'Lending',
      items: [
				'defi/lending/lending',
				'defi/lending/bibliography'
			],
		}, {
			type: 'category',
      label: 'Liquidity Provision',
      items: ['defi/liquidity/liquidity'],
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Crowdsolving</span>',
    }, {
			type: 'doc',
			id: 'crowdsolving/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'doc',
			id: 'crowdsolving/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, 
  ],

  suiteSidebar: [
		{
			type: 'doc',
			id: 'suite/intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading w-100 text-center">Admin DApp</span>',
    }, {
			type: 'category',
      label: 'Creating Cryptocommodity',
      items: [
				'suite/dapp-admin/create-suite',
			],
		}, {
			type: 'category',
      label: 'Funding your Project',
      items: [
				'suite/dapp-admin/funding-round/overview',
				'suite/dapp-admin/funding-round/prepare-funding-round',
				'suite/dapp-admin/funding-round/create-funding-round',
				'suite/dapp-admin/funding-round/manage-funding-round',
				'suite/dapp-admin/funding-round/close-funding-round',
			],
		}, {
			type: 'category',
      label: 'Deploying to Exchanges',
      items: [
				'suite/dapp-admin/exchanges/exchanges-deploy-choose',
				'suite/dapp-admin/exchanges/exchanges-deploy-dex',
				'suite/dapp-admin/exchanges/exchanges-deploy-cex',
			],
		}, {
			type: 'category',
      label: 'Managing Liquidity',
      items: [
				'suite/dapp-admin/liquidity/liquidity-unmanaged',
				'suite/dapp-admin/liquidity/liquidity-capture-price',
				'suite/dapp-admin/liquidity/liquidity-capture-value',
			],
		}, {
			type: 'category',
      label: 'Distributing Rewards',
      items: [
				'suite/dapp-admin/rewards/distributing-rewards',
			],
		}, {
			type: 'category',
      label: 'Admin DApp Structure',
      items: [
				'suite/dapp-admin/structure',
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
				'suite/dapp-catallactic-purchase/create-token',
				'suite/dapp-catallactic-purchase/deliver-token',
			],
		}, {
      type: 'category',
      label: 'ICO Status Tracker',
      items: [
				'suite/dapp-catallactic-status/create-token',
				'suite/dapp-catallactic-status/deliver-token',
			],
		}, {
      type: 'category',
      label: 'ICO Claim',
      items: [
				'suite/dapp-catallactic-claim/create-token',
				'suite/dapp-catallactic-claim/deliver-token',
			],
		}, {
      type: 'category',
      label: 'ICO Vesting Tracker',
      items: [
				'suite/dapp-catallactic-vesting/create-token',
				'suite/dapp-catallactic-vesting/deliver-token',
			],
		}, 	{
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
			type: 'html',
      value: '<span class="sidebar-heading">Tokens</span>',
    }, {
			type: 'category',
      label: 'ICO Token',
      items: [
				'suite/token-ico/features',
				{
					type: 'category',
					label: 'Functionalities',
					items: [
						'suite/token-ico/token-ico-functionalities/structure',
						'suite/token-ico/token-ico-functionalities/invest',
						'suite/token-ico/token-ico-functionalities/price',
						'suite/token-ico/token-ico-functionalities/refund',
						'suite/token-ico/token-ico-functionalities/claim',
						'suite/token-ico/token-ico-functionalities/withdraw',
					],
				},
				'suite/token-ico/supported-standards',
				'suite/token-ico/compliant-jurisdictions',
				'suite/token-ico/reporting',
			],
    },  {
      type: 'category',
      label: 'Vesting Token',
      items: [
				'suite/token-vesting/features',
				'suite/token-vesting/create-token',
				'suite/token-vesting/deliver-token',
				'suite/token-vesting/reporting',
			],
    }, {
      type: 'category',
      label: 'Catallactic Token',
      items: [
				'suite/token-trading/features',
				{
					type: 'category',
					label: 'Functionalities',
					items: [
						'suite/token-trading/token-trading-functionalities/metadata',
						'suite/token-trading/token-trading-functionalities/supply',
						'suite/token-trading/token-trading-functionalities/transfer',
						'suite/token-trading/token-trading-functionalities/erc-20',
						'suite/token-trading/token-trading-functionalities/liquidity',
						'suite/token-trading/token-trading-functionalities/governance',
					],
				},
				'suite/token-trading/supported-standards',
				'suite/token-trading/compliant-jurisdictions',
				'suite/token-trading/reporting',
			],
		},  {
      type: 'category',
      label: 'Escrow Token',
      items: [
				'suite/token-escrow/features',
				'suite/token-escrow/create-token',
				'suite/token-escrow/deliver-token',
				'suite/token-escrow/reporting',
			],
		},  {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading">Security</span>',
    },  {
			type: 'category',
      label: 'Design',
      items: [
				'suite/security/design',
			],
		}, {
			type: 'category',
      label: 'Tests',
      items: [
				'suite/security/unittests',
			],
		}, {
			type: 'category',
      label: 'Audits',
      items: [
				'suite/security/auditors',
				'suite/security/software',
			],
		}, {
			type: 'category',
      label: 'Backups',
      items: [
				'suite/security/backups',
			],
		},
	],

  ecosystemSidebar: [
		{
			type: 'doc',
			id: 'ecosystem/ecosystem', // document ID
			label: 'Getting started', // sidebar label
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading">VASPs</span>',
		}, {
			type: 'category',
			label: 'DLT Networks',
			items: [
				'ecosystem/dlts/bitcoin',
				'ecosystem/dlts/ethereum',
			],
		}, {
			type: 'category',
			label: 'Exchanges',
			items: [
				'ecosystem/exchanges/list',
			],
		}, {
			type: 'category',
			label: 'Wallets',
			items: [
				'ecosystem/wallets/list',
			],
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'html',
      value: '<span class="sidebar-heading">Compliance</span>',
    },  {
			type: 'doc',
			id: 'ecosystem/compliance/cryptolaw',
			label: 'Legal Framework',
		}, {
			type: 'category',
			label: 'Jurisdictions for Funding',
			items: [
				'ecosystem/compliance/funding/issuer',
				'ecosystem/compliance/funding/HQ',
				'ecosystem/compliance/funding/investors',
			],
		}, {
			type: 'category',
			label: 'Jurisdictions for Negotiation',
			items: [
				'ecosystem/compliance/negotiation/issuer',
			],
		}, {
			type: 'category',
			label: 'Jurisdictions for Distribution',
			items: [
				'ecosystem/compliance/distribution/consumer',
			],
		}, 
	],

};

module.exports = sidebars;
