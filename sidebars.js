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
			id: 'principles/scope', // document ID
			label: 'Scope Definition', // sidebar label
		}, {
			type: 'doc',
			id: 'principles/bibliography', // document ID
			label: 'Bibliography', // sidebar label
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Physical Properties', // sidebar label
			collapsible: false,
			link: {
        type: "doc",
				id: 'principles/physical/index', // document ID
			},
			items: [
				'principles/physical/uniform/index',
				'principles/physical/divisible/index',
				'principles/physical/durable/index',
				'principles/physical/recognisable/index',
				'principles/physical/unforgeable/index',
				'principles/physical/scarce/index',
				'principles/physical/acceptable/index',
			]
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Digital Properties', // sidebar label
			collapsible: false,
			link: {
        type: "doc",
				id: 'principles/digital/intro', // document ID
			},
			items: [
				{
					type: 'category',
					label: 'Decentralized', // sidebar label
					link: {
						type: "doc",
						id: 'principles/digital/decentralization/intro', // document ID
					},
					items: [
						'principles/digital/decentralization/bibliography',
					]
				}, {
					type: 'category',
					label: 'Secure', // sidebar label
					link: {
						type: "doc",
						id: 'principles/digital/security/intro', // document ID
					},
					items: [
						{
							type: 'category',
							label: 'Design',
							items: [
								'principles/digital/security/design',
							],
						}, {
							type: 'category',
							label: 'Tests',
							items: [
								'principles/digital/security/unittests',
							],
						}, {
							type: 'category',
							label: 'Audits',
							items: [
								'principles/digital/security/auditors',
								'principles/digital/security/software',
							],
						}, {
							type: 'category',
							label: 'Backups',
							items: [
								'principles/digital/security/backups',
							],
						},
					]
				}, {
					type: 'category',
					label: 'Transparent',
					items: [
						'principles/digital/reporting/overview',
					],
				}, {
					type: 'category',
					label: 'Private',
					items: [
						'principles/digital/privacy/overview',
					],
				}, {
					type: 'category',
					label: 'Compliant', // sidebar label
					items: [
						{
							type: 'category',
							label: 'Compliance',
							items: [
								'principles/digital/compliance/KYC',
								'principles/digital/compliance/AML',
								'principles/digital/compliance/Taxes'
							],
						}, {
							type: 'doc',
							id: 'principles/digital/compliance/cryptolaw',
							label: 'Legal Framework',
						}, {
							type: 'category',
							label: 'Jurisdictions for Funding',
							items: [
								'principles/digital/compliance/funding/issuer',
								'principles/digital/compliance/funding/HQ',
								'principles/digital/compliance/funding/investors',
							],
						}, {
							type: 'category',
							label: 'Jurisdictions for Negotiation',
							items: [
								'principles/digital/compliance/negotiation/issuer',
							],
						}, {
							type: 'category',
							label: 'Jurisdictions for Distribution',
							items: [
								'principles/digital/compliance/distribution/consumer',
							],
						}, 
					]
				}, {
					type: 'category',
					label: 'Upgradeable',
					items: [
						'principles/digital/upgradeable/index',
					],
				}, 
			]
    }, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Economic Properties', // sidebar label
			collapsible: false,
			link: {
        type: "doc",
				id: 'principles/economic/intro', // document ID
			},
			items: [
				{
					type: 'category',
					label: 'Stable at Short Term', // sidebar label
					link: {
						type: "doc",
						id: 'principles/economic/stableST/intro',
					},
					items: [
						'principles/economic/stableST/price_formation',
					]
				},
				'principles/economic/creditable/intro',
			]
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Engineering Properties', // sidebar label
			collapsible: false,
			link: {
        type: "doc",
				id: 'principles/engineering/intro', // document ID
			},
			items: [
				{
					type: 'category',
					label: 'Stable at Long Term', // sidebar label
					link: {
						type: "doc",
						id: 'principles/engineering/stableLT/intro',
					},
					items: [
						'principles/engineering/stableLT/currency_debasement',
					]
				},
				'principles/engineering/competitive/intro',
			]
		},
	],

  valueChainSidebar: [
		{
			type: 'doc',
			id: 'intro', // document ID
			label: 'Getting started', // sidebar label
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Tokenization', // sidebar label
			link: {
        type: "doc",
				id: 'tokenization/intro', // document ID
			},
			collapsible: false,
			items: [
				{
					type: 'category',
					label: 'Tokenization Process',
					items: [
						'tokenization/process/tokens/index',
						'tokenization/process/tokenization-demand/index',
						'tokenization/process/tokenization-supply/index',
						'tokenization/process/tokenization-monetary-policy/index',
					],
				}, {
					type: 'category',
					label: 'Tokenization Models',
					items: [
						'tokenization/models/asset/index',
						'tokenization/models/asset-unbacked/index',
						'tokenization/models/asset-utility/index',
						'tokenization/models/asset-security/index',
						'tokenization/models/asset-stablecoins/index',
						'tokenization/models/asset-uoa/index',
						'tokenization/models/asset-nft/index',
					],
				}, {
					type: 'category',
					label: 'Tokenization Utilities',
					items: [
						'tokenization/utilities/utility/index',
						'tokenization/utilities/utility-id/index',
						'tokenization/utilities/utility-investment/index',
						'tokenization/utilities/utility-currency/index',
					],
				}, {
					type: 'category',
					label: 'Tokenizable Assets',
					items: [
						'tokenization/tokenomics/commodities',
					],
				}, {
					type: 'category',
					label: 'Tokenomics',
					items: [
						'funding/allocations'
					],
				}, {
					type: 'doc',
					id: 'tokenization/bibliography', // document ID
					label: 'Bibliography', // sidebar label
				}, 
			],
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Funding', // sidebar label
			link: {
        type: "doc",
				id: 'funding/intro', // document ID
			},
			collapsible: false,
			items: [{
					type: 'category',
					label: 'Preparing Funding',
					link: {
						type: "doc",
						id: 'funding/preparing/intro', // document ID
					},
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
								'principles/digital/compliance/funding/issuer',
								'principles/digital/compliance/funding/HQ',
								'principles/digital/compliance/funding/investors',
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
					type: 'doc',
					id: 'funding/bibliography', // document ID
					label: 'Bibliography', // sidebar label
				}
			]
    }, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Negotiation', // sidebar label
			link: {
        type: "doc",
				id: 'negotiation/intro', // document ID
			},
			collapsible: false,
			items: [{
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
					type: 'doc',
					id: 'negotiation/bibliography', // document ID
					label: 'Bibliography', // sidebar label
				},
			]
    }, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Distribution', // sidebar label
			link: {
        type: "doc",
				id: 'distribution/intro', // document ID
			},
			collapsible: false,
			items: [
				{
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
					type: 'doc',
					id: 'distribution/bibliography', // document ID
					label: 'Bibliography', // sidebar label
				},
			]
		}, {
			type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'DeFi Services', // sidebar label
			link: {
        type: "doc",
				id: 'defi/intro', // document ID
			},
			collapsible: false,
			items: [
				{
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
				},
			]
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
		}, {
      type: 'category',
			label: 'Crowdsolving', // sidebar label
			link: {
        type: "doc",
				id: 'crowdsolving/intro', // document ID
			},
			collapsible: false,
			items: [
				{
					type: 'doc',
					id: 'crowdsolving/bibliography', // document ID
					label: 'Bibliography', // sidebar label
				},
			]
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
      type: 'category',
			label: 'Tokenization Platform', // sidebar label
			link: {
        type: "doc",
				id: 'suite/dapp-admin/intro', // document ID
			},
			collapsible: false,
			items: [
				{
					type: 'category',
					label: 'Creating Cryptocommodity',
					items: [
						'suite/dapp-admin/create-token/description',
						{
							type: 'category',
							label: 'Designing your Token',
							link: {
								type: "doc",
								id: 'suite/dapp-admin/create-token/configure', // document ID
							},
							items: [
								'suite/dapp-admin/create-token/supplycurrent',
							],
						},
						'suite/dapp-admin/create-token/create-suite',
					],
				}, {
					type: 'category',
					label: 'Funding your Project',
					link: {
						type: "doc",
						id: 'suite/dapp-admin/funding-round/intro', // document ID
					},
					items: [
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
						'suite/dapp-admin/liquidity/moving',
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
				}, 
			]
    }, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'User DApps', // sidebar label
			collapsible: false,
			items: [
				{
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
				}, 
			]
    }, 	{
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Tokens', // sidebar label
			collapsible: false,
			items: [
				{
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
				},
			]
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
      type: 'category',
			label: 'Infrastructure', // sidebar label
			link: {
        type: "doc",
				id: 'ecosystem/dlts/intro', // document ID
			},
			collapsible: false,
			items: [
				{
					type: 'category',
					label: 'DLT Networks', // sidebar label
					link: {
						type: "doc",
						id: 'ecosystem/dlts/chainintro',
					},
					items: [
						'ecosystem/dlts/bitcoin',
						'ecosystem/dlts/ethereum',
					]
				}, 
				{
					type: 'category',
					label: 'Interoperability', // sidebar label
					link: {
						type: "doc",
						id: 'ecosystem/dlts/interop/intro', // document ID
					},
					items: [
						'ecosystem/dlts/interop/tools',
						'ecosystem/dlts/interop/patterns',
						'ecosystem/dlts/interop/services',
						'ecosystem/dlts/interop/ecosystem',
					]
				}, 
			]
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Exchanges', // sidebar label
			link: {
        type: "doc",
				id: 'ecosystem/exchanges/intro', // document ID
			},
			collapsible: false,
			items: [
				'ecosystem/exchanges/list',
			]
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'Payments', // sidebar label
			link: {
        type: "doc",
				id: 'ecosystem/payments/intro', // document ID
			},
			collapsible: false,
			items: [
				'ecosystem/cards',
				'ecosystem/wallets/list',
			]
		}, {
      type: 'html',
      value: '<div class="border border-1 m-3" />',
    }, {
      type: 'category',
			label: 'DeFi Services', // sidebar label
			link: {
        type: "doc",
				id: 'ecosystem/defi', // document ID
			},
			collapsible: false,
			items: [
				'ecosystem/lending/intro',
				'ecosystem/transfers/intro',
			]
		}, 
	]

};

module.exports = sidebars;
