---
slug: Litepaper
title: Litepaper
authors: [catallactic, pellyadolfo]
tags: [crypto, RWA, tokenization]
image: https://i.imgur.com/mErPwqL.png
---
---

:::note
`(Please, be aware that, whereas this litepaper already gives an idea of what a CryptoCommodity is, still is a work in progress)`
:::

## Abstract
---

During centuries representative money has been the preferred medium of exchange for different civilizations. Competitive private currencies have been the preferred choice for citizens when government money did not deliver its promises. Unfortunately, privately issued currencies never persisted because limitations in scope of application and government prohibition. The advent of electronic money brings, for the first time ever, the opportunity for fully decentralized and cross regional, privately issued representative electronic money. This litepaper outlines a novel kind of token, CryptoCommodity. CryptoCommodity tokens are representative money in electronic form that represent the intrinsic value of an underlying asset aimed for private issuance.

Whereas the project leverages Bitcoin security, differently to Bitcoin vision of a monopolistic currency, it encourages multiple token creation for a currreny competition and provides a real world backing to the tokens. We build the monetary configuration, extensively documented in the economic literature, on top of the existing blockchain tools. We understand that the direction of the current technology is mislead from the best economic practices, diverts from the foundational principles of the blockchain technology and does not leverage its full potential of cryptocurrencies.

This project also builds the ecosystem for representative money, including tokenization platform, to manage the CryptoCommodity lifecycle, payment gateway, wallets and cards. We also identify projects and issuers.

This paper is addressed to an advanced audience, which is able to understand the fundamentals of monetary theory, beyond the mainstream beliefs. As such we wont discuss representative money and what benefits brings for societies, as this is expected to be known by the reader.

## Keywords
---

representative money, cryptocurrencies, cryptocommodities, stablecoins, price formation, stabilization mechanism, tokenomics, private currencies, currency competition, cantillon effects, monetary theory

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 1. A Review on Cryptocurrencies
---

As economist are not well versed in technological innovations, we think is needed to overview  the current state of decentralized technologies and blockchain. This will also help to raise the debate about the current state of affairs and contextualize were the proposed tokenization pattern fits in.

### 1.1. DLTs

#### 1.1.1. Blocks

A DLT is a database structure which organizes the information as chain of linked blocks. Each block contains a set of transactions and other essential details. When new transactions are being received into the blockchain, new blocks are being added to record the details of the transactions and state. 

<div style={{textAlign: 'center'}}>
	<img src="https://www.nist.gov/sites/default/files/images/2019/09/25/blockchain.png" width="80%"></img>
</div>
<br/>

#### 1.1.2. Nodes

The whole structure is packaged into a node. Blockchain nodes are computers that perform the network operations, storing, validating, and relaying transactions and blocks. Each node holds a copy of the entire ledger.

<div style={{overflowX : 'auto'}}>
	<table style={{textAlign: 'center'}}>
		<tr>
			<td><img src="/img/pattern_blockchain.png" width="100%"></img></td>
			<td><img src="/img/pattern_dag.webp" width="100%"></img></td>
			<td><img src="/img/pattern_blockdag.png" width="100%"></img></td>
		</tr>
		<tr>
			<td>Blockchain</td>
			<td>DAG</td>
			<td>blockDAG</td>
		</tr>
	</table>
</div>
<br/>



#### 1.1.3. DLT Network

Blockchain nodes are interconnected organizing a blockchain network. The information stored in the nodes is synchronized in a way that all keep a copy of the latest transactions. Nodes are also engaged in the validation of the new transactions according to the consensus protocol defined for the network.

<div style={{textAlign: 'center'}}>
	<img src="https://www.catallactic.org/assets/images/ops_supply-bfea34b2da853e09203c7fa1998cee78.svg" width="80%"></img>
</div>
<br/>

The architecture of a blockchain network relies heavily on the collaborative effort of its nodes, which share and maintain a distributed ledger of transactions. This system of interconnected nodes ensures the decentralization of the network, significantly increasing its resilience against cyber threats and reducing reliance on any central authority for governance.


### 1.2. Monolitic L1 Blockchain

### 1.2.1. Transaction Processing

<div style={{textAlign: 'center'}}>
	<img src="/img/transaction_processing.svg" width="100%"></img>
</div>
<br/>


#### 1.2.2. Consensus Mechanism

Consensus plays a crucial role in blockchain networks. The main objective of a consensus mechanism is to create a single version of truth. The consensus layer is responsible for all the nodes to agree on the blockchain state. It ensures that all transactions are valid and agrees on the order in which transactions are processed.

#### 1.2.3. Execution Environment

Making an informed decision about a smart contract platform is one of the most important steps toward achieving tangible results with smart contract development. As the business landscape is becoming more aware of smart contract potential, blockchains are evolving. While Ethereum remains the most recognizable platform in this field, its competitors are constantly coming up with new, unique features that attract investments.

The reason why new smart contract platforms are constantly emerging and established platforms are continuously updated is that it’s virtually impossible to maximize all of the three most important properties of smart contract platforms: scalability, security, and decentralization.

Nick Szabo, the inventor of smart contract, defined it as such: “A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises”. A smart contract is a computer program that automatically executes the terms of a contract when certain conditions are met. These conditions are written into the code of the contract. Once completed, the transactions are trackable and irreversible. 

Smart contracts are stored on a blockchain. This makes them transparent, secure & immutable. When a smart comtract is deployed to a blockchain network, it gets copied to all of the network nodes to guarantee its decentralization. When the contract is invoker for a transaction by a wallet, all the nodes participate in the valiadtion of rhe transaction but only one node is responsible for execution of the transaction. The response from the transaction will be again synchronnized to to all other nodes in the network so they can have the status.

Smart contracts allow to build a wide variety of decentralized apps and tokens.

<!-- https://www.itransition.com/blockchain/smart-contract/platforms -->

#### 1.2.4. Settlement

The settlement layer settles transactions by processing proofs from other chains to finalize transfers. The settlement layer ensures that the transaction cannot be rolled back and the parties involved in the financial operation do not have their assets stolen after the final settlement is reached. Settlement is the process that ensures transaction immutability on the blockchain, playing a critical role in guaranteeing that no one can alter recorded transactions. Often considered the "anchor" within the blockchain's layers, settlement provides finality or irreversibility. To achieve this, the blockchain must validate transactions, confirm proofs and resolve disputes.

#### 1.2.5. Data Availability



### 1.3. Tokenization

Tokenization is the process of digitally representing an asset, or asset feature, on a programmable platform. When tokenizing an asset, or asset feature, it gets bound to the token in a way that the token holder owns the asset feature. This asset feature is defined by the asset tokenizer. Tokens are created as smart contracts and, as programable logic, their lifecycle and features is managed by the logic in the smart contract.

#### 1.3.1. Tokens

Any asset that is digitally transferable between two people is called a token. Tokens are implemented as smart contracts and perform their capabilities inside an execution environment. 

When evaluating the asset, or asset property, we must consider the concept of <b>fungibility</b>. Fungibility is the property of a good, or a commodity, whose individual units are essentially interchangeable. Tokens can represent fungible or not fungible assets (NFT).

* Non fungible assets, or NFT, represent an unique asset and provide the owner of the NFT ownership of the underlying asset. Non-fungible tokens tokens can be configurable

* Fungible tokens typically maintain a key-value map of holders. As any smart contract, this key-value map is replicated across the cnodes of the network, providing it decentralization. Fungible tokens can be divisible providing fractional ownership.

<div style={{textAlign: 'center'}}>
	<img src="https://www.catallactic.org/assets/images/ops_balances-f4a24f9af292d2e0304607b3bf4f7e54.svg" width="80%"></img>
</div>
<br/>


All tokens can also be valuable. A token tokenizing a fungible assets, or asset properties, can be provided a relative value when submitted to an exchange paired with other token. This relative value can be defined as a <b>price</b>. In that way, a fungible token can be priced in terms of another token. Fungible token features make them specially suitable to become currencies.

#### 1.3.2. Tokenization Models

When we speak about the type of tokens, we are mostly referring to how its price is formed, and maybe maintained, by the token issuer. There are several strategies for price formation. This post aims to provide an overview.

According to the nature of the asset, or asset property, that the token is pegged to, existing cryptocurrencies come typically in 5 flavours: Unpegged Tokens, Utility Tokens, Security Tokens, Stablecoins and NFT.

<div style={{textAlign: 'center'}}>
	<img src="/img/tokenization_maturity_model_seal.svg" width="50%"></img>
</div>
<br/>
<br/>

The more basic category would be the <b>Unpegged Tokens</b>. Unpegged tokens have not any collateral asset, asset property or utility, providing value to the token units. The price of these tokens is based according to purely speculative value, eg memecoins.

A large and heterogeneus category of utility tokens comes next, as foundation for other pegged tokens. <b>Utility tokens</b> typically are valued by the utility, or service, provided to the participants in their ecosystem. Despite they can include some supply manipulation they do not follow a specific monetary policy to maintain the underlying value of this service and price  is delegated to market forces. Therefore these tokens are expected to have price fluctuations, i.e. the higher the utility provided, or the number of utilities, the higher the demand and, therefore, the price. The captured utility can be derived from an objective, or intrinsic, value as access (GameFi), action (Play to Earn, Move to Earn, Recycle to Earn), operation (DePIN) or governance (veTokens, DAOs). Alternatively, the utility can also derive from a subjective value, as a payments for a service e.g. network operation (utility coins), defi commision (e.g. exchange, payment or lending). 

A <b>Security Token</b> is the blockchain equivalent of a securitized asset traded on the stock market. Similar to traditional securities, security tokens are financial instruments that represent ownership interest in an asset. Their price, yield and any other features are borrowed from the underlying financial asset. This financial asset can be physical (e.g. real state), equity (shares, stocks), debt (short term bonds, HY bonds, US treasuries, notes) or some kind of derivative (e.g. options).

The first tokens in this list aimed to become currency are the Stablecoins. <b>Stablecoins</b> capture the price of an asset formed in an external market and set the captured price into the token. Stablecoins include a stabilization mechanism that aim to maintain the captured price, typically by supply manipulations, either manual or built-in by an Oracle. Stablecoins either can be collateralized by nothing (algorithmic stablecoins), by the asset (commodity, fiat of digital) or by a basket of products equivalent to the price of the assset (synths).

The <b>NFT tokens</b> are not in charge of any price formation by themselves. Instead, NFT tokens grant ownership of the asset to their holder and, therefore, the price of a NFT token is provided by the price of the backing asset. As non fungible tokens, they match one-to-one with the tokenized asset so NFT tokens do not have supply or price considerations. Furthermore NFT can have a different price. Some NFT tokens are created to represent some <b>identity</b> with the purpose of tracking, membership or access. The standard application of NFT tokens are collectibles. We can include souldbound tokens which are digital identity tokens that represent the traits, features, and achievements that make up a person or entity. Other typical applications for NFT tokens are Profile picture NFTs, Event tickets NFTs, Virtual Real Estate NFTs, Music NFTs.

If we look back to the physical world and the literature, <b>Hayek</b> dedicated a <a href="https://mises.org/library/denationalisation-money-argument-refined">few chapters</a> to define how private money should be created. For Hayek, privately issued currency units should be collateralized by a basket of commodities and the issuer should announce the composition of the basket to maintain the price as compromised.

> It might be expedient that the issuing institution should from the outset announce precisely the collection of commodities in terms of which it would aim to keep the value of the 'ducat' constant

Finally, the proposal of <a href="https://www.catallactic.org/"><b>Catallactic</b></a> is different to all strategies above despite it borrows ideas from some. Catallactic aims to create non-fiat commodity backed stablecoins capturing the marginal utility of the underlaying asset. For these Catallactic CryptoCommodity tokens, price would be defined by the issuer and price formation delegated to the exchanges where the CryptoCommodity token is traded. As Stablecoins, CryptoCommodities includes an stabilization mechanism in which supply in the exchanges is paired to physical demand of the commodity for the issuer in a period of time.

From the token collection above, only Stablecoins and CryptoCommodities aim to maintain an stable price and, therefore, hold the potential to become currencies.
Utility tokens are bound to an on-chain or virtual utility.

#### 1.3.3. Token Lifecycle

Tokens can be pre-mined for a fundraising.

First tokens are created at the end of this fundraising process in a TGE.

Tokens are created in a process called minting. Tokens can be also destroyed in a process called burning.

Tokens can be added to exchange to be traded.

Tokens are distributed to stakeholders

Tokens can be expired or suspended.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain2.svg" width="100%"></img>
</div>

#### 1.3.4. Tokenizable Assets

Almost any asset that can be provided a value is subject to be tokenized. Below is a list of asset that has been tokenized:

* Natural resources: time, energy, environmental variables, carbon credits, mining, gas, water, agro, petrol

* Physical goods: real state, art, collectibles, industrial assets

* Digital assets: digital arts, digital collectibles, music, gaming, corporate branding

* Financial assets: currencies, equity, bonds, debt, invetment funds, loans

* Certifications: diploman, certificates, proofs of participation, vouchers, loyalty points, awards

### 1.4. Applications of Tokenization

The more intuitive application of tokenization is becoming <b>identifier</b> of a non-fungible token. This can deliver several benefits as ownership or traceability of the underlying asset to the token holder. Ownership, voting rights, enabling participation in decision-making processes

A basic application of a priced asset is to become a <b>currency</b>. There are some requirements to be a currency...

Another application of priced asssets is <b>investment</b>.

#### 1.4.1. Real World Asset Tokenization

<div style={{textAlign: 'center'}}>
	<img src="/img/stablecoin_vs_representative.svg" width="50%"></img>
</div>


### 1.5. CryptoCurrencies

In this section, we will analyze the suitability of existing cryptocurrency patterns to become mainstream currencies. It is unclear what are is the definition of a currency as there many interpretations. To further understand what a currency is, is needed to identifiy currency functions. 

A <b>medium of exchange</b> is the set of assets in an economy that people regularly exchange for goods or services. A medium of exchange has two key features: First, it represents a part of its owner's assets; second, it is commonly accepted in transactions. We refer to medium of exchange as the set of assets in an economy that people regularly exchange for goods and services. The use of money as a medium of exchange promotes economic efficiency by eliminating much of the time spent in exchanging goods and services. This is the function described in the previous sections. For Austrians, a currency is just a medium of exchange.

None of the existing cryptocurrency parterns is a suitable medium of exchange. <b>NFT</b> are not fungible tokens, they can be exchanged, but they are not created as a medium of exchange. <b>Security tokens</b> typically provide a yield which is not a feature expected in a currency. All Austrian Autors assumed that currency is backed in a commodity and there its value is reasonably stable. This disqualifies <b>unbacked tokens</b> as a serious medium of exchange because they cannot be redeemed by any colateral. <b>Utility tokens</b>, on the other hand, do not have a stable value as it is subjected to the fluctuations of enclosed utilities. Finally, <b>Stablecoins</b> are typically fiat-based currencies as they are pegged to fiat prices. They can improve on liquidity over existing fiat currencies as they are easily transferable. However, they are subjrect to the same debasement issues of fiat. Additionally, they are not good components of a price system because the price formation is distorted.

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<td></td>
			<td>Unbacked</td>
			<td>Utility</td>
			<td>Security</td>
			<td>Stablecoin</td>
			<td>NFT</td>
		</tr>
		<tr>
			<td>Medium of Exchange</td>
			<td>no collateral</td>
			<td>unstable</td>
			<td>no purpose</td>
			<td>fiat based</td>
			<td>no fungible</td>
		</tr>
		<tr>
			<td>Reserve of Value</td>
			<td>no collateral</td>
			<td>unstable</td>
			<td>no purpose</td>
			<td>Fiat Value</td>
			<td>Intrisic Value</td>
		</tr>
		<tr>
			<td>Unit of Account</td>
			<td>No</td>
			<td>No</td>
			<td>No</td>
			<td>No</td>
			<td>No</td>
		</tr>
	</table>
</div>
<br/>

as <b>Reserve of Value</b>


as <b>Unit of Account</b>

Coins unable to become currencies

### 1.6. Crypto Adoption

* Driven to fiat by VCs

* Many scams, lack of transparency

* No real world utilities

* No good medium of exchange

* Legal and regulatory constraints


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 2. CryptoCommodity
---

### 2.1. A New Medium of Exchange

CryptoCommodity proposes a new medium of exchange based on Representative Money.

Hayek said money with stable value would be preferred by users.

Real utility to empower real economy.

### 2.2. Creating Representative Money

#### 2.2.1. The Underlaying Asset

To understand a CryptoCommodity lets first examine how a regular RWA stablecoin works. A regular RWA stablecoin is backed by an asset, typically a physical asset. This asset has an unknown intrinsic value. By binding 1-to-1 the supply of the stablecoin to the RWA stock as collateral, the stablecoin is able to capture the intrinsic value of the asset. However, the stablecoin knowns nothing about the marginal utility that the RWA will produce on consumers. Therefore, the stablecoin is unable to form its own price and this must be borrowed from an external source, typically an internaciobal RWA market. There are some consequences of this fact: first, according to regulations, the stablecoin must be collateralized from inception and, therefore, only issuers with enough collateral can issue an stablecoin. Secondly, as the value is provided from inception, issuers do not have a chance to fundraise. Also, issuers, must custody and, potentially, redeem the asset incurring in high operating expenses. Since the price is borrowed from a fiat source, this configuration typically creates a fiat-bound currency, and decentralization in value is compromissed. Similar features apply to stablecoins bound to currencies, either fiat or not fiat.

A CryptoCommodity is also an stablecoin but improves this process at several levels. A CryptoCommodity also binds to an asset, but it does through an utility working as proxy. The bound utility helps by providing a marginal utility when exposed to consumers. The utility must be an off-chain utility, typically a real world utility.

But there is more. As an utility-proxied asset is one time event, meaning that when the utility is satisfied, the asset is consumed, is not possible to bind permanently to make an offer. By binding to this kind of asset, the CryuptoCommodity would have an continuously-growing supply. And this is not something that we want because the quality of the CrtypcCommodity would be far from optimal. In order to overcome this issue, the definition can be adapted to a "repeating utility-proxied asset", that is something that the issuer will be always able to provide periodically. Iin order to make the marginal utility quantifiable, the repeatability period must cover a known timespan where the utility provides value to the consumer, e.g. a gas cylinder provides value for one month at a cost of $16. This means that the marginal utility for consumers is $16 per month.

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset.svg" width="40%"></img>
</div>
<br/>


#### 2.2.2. Binding the Asset to CryptoCommodity

Once the underlying asset id defined, we are reaady to bind this asset to the CryptoCommodity. The mission of the underlaying asset is to provide value to the CrytoCommodity. In sucha a way that the CryptoCommodit becomes representative of the compromissed unit of underlying asset.

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset_bound.svg" width="60%"></img>
</div>
<br/>

#### 2.2.3. Exposing Intrinsic Value

So, for a CryptoCommodity backed by this composed asset exposed in a exchange, the marginal utility will be converted into a price with the exchamnge price formation mechanism. 

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset_exposed.svg" width="100%"></img>
</div>
<br/>

The price is formed in the internal ecosystem of the CryptoCommodity so not access to external price sources (e.g. Oracles) or manual supply manipualtion is required. Also, no dependency on external systems. A CryptoCommodity is an autonomous currency and is not boud to any other system, e.g. not bound to fiat. This fact is a foundation for real value decentralization.

The price formation is dynamic, which means, is in a continual revision. The purchasing power of the currency will growth in relation to other currencies as long the issuer is providing incremental value to the society. If the provider denies to provide value, the CryptoCommodity value will fall, and its purchasing power will be reduced. As a consequence consumers will prefer other currencies. This will encourage the issuer to provide the best practies and a environment of wealth.

#### 2.2.4. CryptoCommodity Ecosystem

There incentives for the issuer to create this structure as he will profit in a few ways: he can run fundraising campaigns, he can profit for the additional DeFi related utilities that provides to the society. The society can also get increased amount of financial services.

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_before.svg" width="80%"></img>
</div>
<br/>


### 2.3. CryptoCommodity Lifecycle

This section will describe the stages of a CryptoCommodity from the point that is exposed to the market.

#### 2.3.1. Fundraising

Most of real economy projects require an initial investment in infrastructure and physical tools. This is a entry barrier for many project that never see the light because funding limitations. To overcome this drawback, nothing prevents a CryptoCommodities issuer of launching an initial fundraising campaign and get the initial funding to launch his project. In this initial stage, the CryptoCommodity would be working as Utility Token. 

The number of token units pre-mited in advance for seed investors, their expected profit as well as the vesting periods must be configured by the CryptoCommodity issuer. Configuration data and best practices must be provided to the issuer with experience from previous benchmarks. This is however and optinal stage and the issuer could skip pre-miting fundraising tokens.

#### 2.3.2. Capturing Subjective Value

If the issuer has decided the CrytoCommodity to launch a fundraising campaign, this will pre-mint initially a number of tokens allocated to ICO investors. In this case, there would be more tokens minted that the equivalent demand and the price of the token in exchanges will be lower than the subjective value. The price created by the marginal utlity is not formed over night. Instead, in the inception of the CryptoCommodity, when not demand is yet backing the token, the price is only provided by the speculative utility from the future expectations.

<div style={{textAlign: 'center'}}>
	<img src="/img/stabilization_mechanism_capture.svg" width="65%"></img>
</div>
<br/>

For this inception process, there will be a settlement time until the price in the exchanges matches the subjective value of the underlying asset. We call this period as the period to capture the subjective value of the underlying asset into the CryptoCommodity units.

By adjustiing the supply in the exchanges, it is possible for the issuer to configure the profile for this capture stage. Some available options are:
* Free price
* Ramp
* Constant Product

#### 2.3.3. CryptoCommodity Peg

As a Stablecoin, a CryptoCommodity value has a natural built-in stability. This stability is borrowed from the underlying asset.

Economic history and literature are rich with schemes to peg the price of the currency to a price index or price index derivative, in order to provide price stability: monometallic (gold) standards, bimetallism, and later the symmetallism proposed by Marshall (1886, 1887a, 1887b) and Edgeworth (1895); the “fixed value of bullion” standard proposed by Williams (1892); Fisher's compensated dollar (1911, 1913a, 1913b, 1913c, 1913d, 1914, and 1920); the Commodity Reserve Currency scheme suggested by Goudriaan (1932), B. Graham (1937, 1944), F. D. Graham (1942), and revisited by Friedman (1951); Hall's (1982) ANCAP basket; the proposal by Miles (1984) and Sumner (1989, 1991, 1995) to use futures contracts, Kevin Dowd’s (1994) quasi-futures contract, and later Dowd’s (1999) price index option. For a review of this literature the reader is referred to Dowd (1996, Chapter 14). [38]

Since blockchain advent, the cryptocurrency landscape is rich in fiat backed stablecoins, either pegged to a fiat currency (USDT, USDC, BUSD, FRAX, MIM, Pax Dollar, USDJ, Gemini USD, USDP,Palau, FDUSD, PYUSD, Real USD, TrueUSD, ZUSD, DAI, CUSD, USDD, USB, USDe, Raft, eUSD, TerraUSD, Fei, EUROCEUROe, GBPT, XSGD, IDRT, BIDR, BRZ, DRAM, MXNT, MXNC), pegged to a commodity (PAXG,GLD, MCAU, AABBG, NNN, AWG, PMGT, CTLX, XAUT, DGX, CACHE, RBZ GBDTRBZ ZiG, GODL, SLVT, CRUDE,PDX, PTR, FIX, GEM, BANANA, SOYA, CORA, WHEA, SOYB, CORB, XCORN XSOY, XWHEAT, XRICE) or pegged to another cryptocurrency (frxETH). They all peg their price to the price formed in an external market. The price formation mechanism is external to the stablecoin ecosystem. This price needs to be captured from the external source and set into the cryptocurrency with an stabilization mechanism that implies to manage the supply. Either if the price manually set by the stablecoin issuer, or the smart contract has a built-in access with Oracles, the stablecoins will inherit the centralization feature of the price formation source. Unfortunately this is against blockchain decentralization principles. [49]

A CryptoCommodity is different animal to fiat backed stablecoins. A Cryptocommodity is bound to the intrinsic value of the underlying asset. There is not need of quantification of this intrinsic value. Instead, a Cryptocommodity exposes the asset intrinsic value (whichever its quantity) to form its price according to the marginal utility of the underlaying market as perceived by the consumer. The price formation is, therefore, internal to the CryptoCommodity ecosystem. As a consequence, a Cryptocommodity is decoupled from any external monetary system, fiat or not fiat, creating an autonomous ecosystem. A CryptoCommodity delivers the foundation for a true value decentralization.

#### 2.3.4. Stabilization Mechanism

Once the required supply is maintained in the exchanges, the marginal utility is captured and the price is formed, nothing prevents the CryptoCommodity issuer from minting more CryptoCommodity units to provide additional utilities, e.g. feed DeFi Services markets


<div style={{textAlign: 'center'}}>
	<img src="/img/stabilization_mechanism_maintainance.svg" width="65%"></img>
</div>
<br/>


#### 2.3.5. Leverage


Configurable by issuer. Benchmarks are required.

|                                 | Value                | Collateral    |
| :-------------------------------| :--------------------| :-------------|
| Commodity Money                 | Fixed to Itself      | Itself        | 
| Representative Money            | Fixed to Bound Asset | 100%          |
| Semi Representative Money       | Fixed to Bound Asset | Configurable  |
| Fiat Money                      | Debasement           | None          |

### 2.4. Comparing with existing crypto currencies

|                                 | Stablecoin                                        | CryptoCommodity                                                               |
| :-------------------------------| :-------------------------------------------------| :-----------------------------------------------------------------------------|
| Backed by                       | Physical, digital, financial asset                | Underlying market of fungible physical or digital asset                       |
| Collateralized by               | Multiple                                          | Underlying market of fungible physical or digital asset                       |
| Collateral Size                 | 100% by law                                       | Configurable by issuer                                                        |
| Price Formation                 | Pegged to Fiat Price of asset in external market  | Pegged to economic value of asset in underlying market. Decoupled from fiat   |
| Scope                           | Mostly Global														          | Local or Global                                                               |
| Value Decentralized?            | No, pegged to fiat prices with Oracles				    | Yes, forms its own price                                                      |
| Process Decentralized?          | No, manual stabilization					                | Yes, built-in automated stabilization                                         |
| Decisions Decentralized?        | No, opaque decisions  			   		                | Yes, releasing to the community when possible                                 |
| Disclosures  										| No                                                | Yes, full disclosure                                                          |
| Allows project funding?         | No                                                | Yes                                                                           |
| Collateral on inception needed? | Yes                                               | No                                                                            |
| Provides credit? 				        | Yes, with social risk                             | Yes, with private risk                                                        |


### 2.5. Representative Currency Competition

Money is usually defined as the generally acceptable medium of exchange,l but there is no reason why within a given community there should be only one kind of money that is generally (or at least widely) accepted. [Hayek]

By exposing the intrinsic value allowing price formation corresponding to subjective perception of consumers we get the benefits of represetative money:

 - price formation according to consumers
 - productive resources allocated by consumers will
 - no cantillon
 - private risk
 - coexisting gold standard


### 2.6. A New DeFi Industry


Fundraising for entrepreneurs

Investment for investors

Blockchains are provably immutable and enable the rapid transfer and exchange of crypto-tokens (which can represent assets) without the need for separate clearing, settlement & reconciliation.

Despite the crypto industry is not been created with the real economy in mind, most of the existing tools can be reused to enable a new industry that brings fundraising, transactions, payments, insurance, lending, investment, trading and related financial DeFi Services for real economy amd real consumers.

Scope

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 3. Blockchains Landscape
---

Since the adveniment of Bitcoin in 2008, web3 infrastructure has been a hotspot for venture capital to invest. As a consequencem blockchain networks have evolved in almost any direction and with different protocols and patterns. Over the time, some protocols have consolidates making up ecosystems around the an initial based blockchain.

### 3.1. Infrastructure Ecosystems


<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<th rowspan="2">Currency</th>
			<th rowspan="2">Layer</th>
			<th rowspan="2">From</th>
			<th rowspan="2">Lang</th>
			<th rowspan="2">Ledger</th>
			<th rowspan="2">Consensus</th>
			<th colspan="2">Execution Environment</th>
		</tr>
		<tr>
			<th>VM</th>
			<th>Smart Contracts</th>
		</tr>
		<tr>
			<td>Bitcoin</td>
			<td>L1</td>
			<td>2008</td>
			<td>C++</td>
			<td>UTXO</td>
			<td>PoW</td>
			<td>Script</td>
			<td>BitcoinScript</td>
		</tr>
		<tr>
			<td>Ripple</td>
			<td>L1</td>
			<td>2012</td>
			<td>C++</td>
			<td>account</td>
			<td>XRP Ledger</td>
			<td></td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Ethereum</td>
			<td>L1</td>
			<td>2013</td>
			<td>Go</td>
			<td>account</td>
			<td>PoS</td>
			<td>EVM</td>
			<td>Solidity</td>
		</tr>
		<tr>
			<td>Radix</td>
			<td>L1</td>
			<td>2013</td>
			<td></td>
			<td></td>
			<td>Cerberus</td>
			<td></td>
			<td>Scrypto</td>
		</tr>
		<tr>
			<td>Monero</td>
			<td>L1</td>
			<td>2014</td>
			<td>C++</td>
			<td>UTXO</td>
			<td>PoW</td>
			<td>-</td>
			<td>-</td>
		</tr>
		<tr>
			<td>Tezos</td>
			<td>L1</td>
			<td>2014</td>
			<td></td>
			<td>account</td>
			<td>PoS</td>
			<td>TezosVM</td>
			<td>Michelson</td>
		</tr>
		<tr>
			<td>Cosmos</td>
			<td>L0</td>
			<td>2014</td>
			<td>Go</td>
			<td>account</td>
			<td>BFT PoS</td>
			<td>CosmWasm</td>
			<td>Rust</td>
		</tr>
		<tr>
			<td>Cardano</td>
			<td>L1</td>
			<td>2015</td>
			<td>Haskell</td>
			<td>UTXO</td>
			<td>PoS</td>
			<td>Ouroboros</td>
			<td>Plutus, Marlowe, Glow</td>
		</tr>
		<tr>
			<td>IOTA (DAG)</td>
			<td>L1</td>
			<td>2015</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>Rust, TinyGo, Solidity</td>
		</tr>
		<tr>
			<td>WAVES</td>
			<td>L1</td>
			<td>2016</td>
			<td>Scala</td>
			<td></td>
			<td>LPoS</td>
			<td></td>
			<td>Ride</td>
		</tr>
		<tr>
			<td>Substrate, Polkadot</td>
			<td>L0</td>
			<td>2016</td>
			<td>Rust</td>
			<td>account</td>
			<td>NPoS</td>
			<td>PEE</td>
			<td>Rust</td>
		</tr>
		<tr>
			<td>NEAR</td>
			<td>L1</td>
			<td>2017</td>
			<td>Rust</td>
			<td>account</td>
			<td>PoS</td>
			<td></td>
			<td>Rust, Javascript</td>
		</tr>
		<tr>
			<td>Algorand</td>
			<td>L1</td>
			<td>2017</td>
			<td>Python</td>
			<td>account</td>
			<td>PoS</td>
			<td>AlgorandVM</td>
			<td>TEAL</td>
		</tr>
		<tr>
			<td>Chia Network</td>
			<td>L1</td>
			<td>2017</td>
			<td>Python</td>
			<td>UTXO</td>
			<td>PoST</td>
			<td></td>
			<td>Chialisp</td>
		</tr>
		<tr>
			<td>Fantom (DAG)</td>
			<td>L1</td>
			<td>2018</td>
			<td>Go</td>
			<td>account</td>
			<td>Lachesis</td>
			<td>FVM</td>
			<td>Solidity</td>
		</tr>
		<tr>
			<td>TON</td>
			<td>L1</td>
			<td>2018</td>
			<td>C++</td>
			<td>account</td>
			<td>PoS</td>
			<td></td>
			<td>FunC</td>
		</tr>
		<tr>
			<td>Avalanche</td>
			<td>L0</td>
			<td>2018</td>
			<td>Go</td>
			<td>UTXO</td>
			<td></td>
			<td></td>
			<td>Solidity</td>
		</tr>
		<tr>
			<td>Aptos (Diem, Libra)</td>
			<td>L1</td>
			<td>2019</td>
			<td>Rust</td>
			<td>account</td>
			<td>AptosBFT</td>
			<td></td>
			<td>Move</td>
		</tr>
	</table>
</div>
<br/>


### 3.2. DLT Trilemma


<div style={{textAlign: 'center'}}>
	<img src="https://pbs.twimg.com/media/FDaXBuNVQAMBe5U?format=jpg&name=900x900" width="50%"></img>
</div>
<br/>

### 3.3. The Layered Stack Ecosystem

An ecosystem is started by a base blockchan that provides some new ideas to the market. These ideas come in some of the 4 main moddules that compose a blockchain: execution, settlement, consensus and data availability. 

<div style={{textAlign: 'center'}}>
	<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*9uU4Ednc_Aj-GX9M" width="60%"></img>
</div>
<br/>

Most of existing blockchains have evolved as part of already existing ecosystem, and only a few base chains can define its own infrastructure ecosystem.

A fork happens whenever a community makes a change to the blockchain’s protocol, or basic set of rules. When this happens, the chain splits — producing a second blockchain that shares all of its history with the original, but is headed off in a new direction.

A sidechain is a separate, independent blockchain linked to the main blockchain (mainchain) using a two-way bridge. It enables tokens or other digital assets to be transferred between the mainchain and the sidechain.

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_layers.svg" width="60%"></img>
</div>
<br/>

The Layer 2 provides scalabilty to Layer 1. Layer 2 typically processes operations out of Layer 1 to improve throughput and reduce fees.

Channels are peer-to-peer protocols that allow two parties to make an unlimited number of transactions amongst themselves and then only post the final results to the blockchain. Afterward, cryptography is used to demonstrate how the summarized data results from the earlier set of transactions. A multisig smart contract ensures the correct parties sign the transactions.

A Plasma blockchain is a network of independent child chains. These child chains function as distinct blockchains, each with its own block validation mechanisms. Yet, each of the child chains remains anchored to the underlying blockchain. A Plasma chain executes transactions off-chain with its own mechanism for block validation.

A rollup is a layer two (L2) blockchain that processes transactions away from the main blockchain to reduce transaction costs and increase throughput on the main chain. Batches of transactions are verified and settled back to the main chain.

The Layer 3 sits on top of Layer 2 and is mainly dedicated to hosts dApps for real-world applications and executes specific functions.


### 3.4. Ethereum Ecosystem

#### 3.4.1. Ethereum Network

Ethereum, from his inception on 2013, has been the foundation for many other project that derived from its code or borrowed its ideas. Ethereum projects are the network in which VCs has dedicated more their funds. As such, the Ethereum ecosystem is the one more developed in terms of user functionalities or DeFi.

Ethereum is the official network of the fiat system. In fact, its decentralization is questioned since it migrated from PoW to PoS in 2013. The iage shows how a few holders can have majority on Staked Ethereum and therefore controling the protocol.

<div style={{textAlign: 'center'}}>
	<img src="https://assets-global.website-files.com/6048790ad5157f01d7437c77/65a38f7d7c89e05bfac85a6a_Screenshot%202024-01-11%20at%2016.41.20.webp" width="80%"></img>
</div>
<br/>

#### 3.4.2. Scaled Ethereum

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<th>Layer</th>
			<th colSpan="2">Protocol Type</th>
			<th>Protocols</th>
		</tr>
		<tr>
			<td>L0</td>
			<td colSpan="2">InterOperability</td>
			<td>
			</td>
		</tr>
		<tr>
			<td rowSpan="3">L1</td>
			<td colSpan="2">Base Chain</td>
			<td>Ethereum</td>
		</tr>
		<tr>
			<td colSpan="2">Forks</td>
			<td><a href="https://www.bnbchain.org/" target="_blank">BNB Smart Chain</a>,
				<a href="https://solana.org/" target="_blank">Solana</a>,
				<a href="https://chain.link/" target="_blank">Chainlink</a>,
				<a href="https://www.chiliz.com/" target="_blank">Chiliz</a>,
				<a href="https://developers.iotex.io/" target="_blank">IoTeX</a>,
				<a href="https://livepeer.org/" target="_blank">Livepeer</a>,
				<a href="https://uma.xyz/" target="_blank">UMA</a>,
				<a href="https://casper.network/" target="_blank">Casper</a>,
				<a href="https://velas.com/en" target="_blank">Velas (Solana)</a></td>
		</tr>
		<tr>
			<td colSpan="2">Sidechains</td>
			<td>
				Polygon
			</td>
		</tr>
		<tr>
			<td rowSpan="7">L2</td>
			<td colSpan="2">Channels</td>
			<td>-</td>
		</tr>
		<tr>
			<td colSpan="2">Plasma</td>
			<td>-</td>
		</tr>
		<tr>
			<td rowSpan="5">Rollups</td>
			<td>Optimistic</td>
			<td><a href="https://arbitrum.foundation/" target="_blank">Arbitrum One</a>,
				<a href="https://optimism.help/" target="_blank">Optimism</a>, 
				<a href="https://www.base.org/" target="_blank">Base</a>, 
				<a href="https://kroma.network/" target="_blank">Kroma</a>, 
				<a href="https://cartesi.io/" target="_blank">Cartesi</a>, 
				<a href="https://blastblockchain.com/" target="_blank">Blast</a>, 
				<a href="https://www.mode.network/" target="_blank">Mode Network</a>, 
				<a href="https://www.zora.co/" target="_blank">Zora</a>, 
				<a href="https://rss3.io/" target="_blank">RSS3</a>, 
				<a href="https://boba.network/" target="_blank">Boba</a>, 
				<a href="https://www.kinto.xyz/" target="_blank">Kinto</a>, 
				<a href="https://parallel.fi/" target="_blank">Parallell</a>, 
				<a href="https://fuel.network/" target="_blank">Fuel v1</a></td>
		</tr>
		<tr>
			<td>Optimium</td>
			<td><a href="https://www.mantle.xyz/" target="_blank">Mantle</a>,
				<a href="https://pacific.manta.network/" target="_blank">Manta Pacific</a>,
				<a href="https://www.metis.io/" target="_blank">Metis</a>,
				<a href="https://www.aevo.xyz/" target="_blank">Aevo</a>,
				<a href="https://karak.network/" target="_blank">Karak</a>,
				<a href="https://arbitrum.io/" target="_blank">Arbitrum Nova</a>,
				<a href="https://www.fractal.is/" target="_blank">Fraxtal</a>,
				<a href="https://lyra.finance/" target="_blank">Lira</a>,
				<a href="https://publicgoods.network/" target="_blank">PGN</a>,
				<a href="https://orderly.network/" target="_blank">Orderly Network</a>,
				<a href="https://ancient8.gg/" target="_blank">Ancient8</a>,
				<a href="https://www.hypr.com/" target="_blank">Hypr</a>,
				<a href="https://edgeless.io/home" target="_blank">Edgeless</a>,
				<a href="https://docs.hychain.com/docs/getting-started" target="_blank">HYCHAIN</a></td>
		</tr>
		<tr>
			<td>zk</td>
			<td><a href="https://polygon.technology/polygon-zkevm" target="_blank">Polygon zkEVM</a>,
				<a href="https://lite.zksync.io/" target="_blank">zkSync Lite</a>,
				<a href="https://zksync.io/explore" target="_blank">zkSync Era</a>,
				<a href="https://www.starknet.io/en" target="_blank">Starknet</a>,
				<a href="https://scroll.io/" target="_blank">Scroll</a>,
				<a href="https://linea.build/" target="_blank">Linea</a>,
				<a href="https://loopring.org/#/" target="_blank">Loopring</a>,
				<a href="https://zks.app/" target="_blank">ZKSpace</a></td>
		</tr>
		<tr>
			<td>Validium</td>
			<td><a href="https://www.immutable.com/" target="_blank">Inmutable X (games)</a>,
				<a href="https://docs.astar.network/docs/learn/zkEVM/" target="_blank">Astar zkEVM</a>,
				<a href="https://www.apex.exchange/" target="_blank">Apex (DEX)</a>,
				<a href="https://dydx.exchange/" target="_blank">dydx v3 (DEX)</a>,
				<a href="https://docs.degate.com/" target="_blank">DeGate v1 (DEX)</a>,
				<a href="https://www.paradex.trade/" target="_blank">Paradex (DEX)</a>,
				<a href="http://rhino.fi/" target="_blank">Rhino (DEX Aggregator)</a>,
				<a href="https://sorare.com/en-gb/" target="_blank">Sorare (Sports)</a>,
				<a href="https://tanx.fi/" target="_blank">Tanx (DEX)</a>,
				<a href="https://myria.com/" target="_blank">Myria (Gaming)</a>,
				<a href="https://canvas.co/" target="_blank">Canvas Connect (DeFi)</a>,
				<a href="https://www.reddio.com/" target="_blank">ReddioEx (Gaming)</a></td>
		</tr>
		<tr>
			<td>RaaS</td>
			<td><a href="https://www.altlayer.io/" target="_blank">AltLayer</a>,
				<a href="https://www.caldera.xyz/" target="_blank">Caldera</a>,
				<a href="https://conduit.xyz/" target="_blank">Conduit</a>,
				<a href="https://gateway.fm/" target="_blank">Gateway</a>,
				<a href="https://www.gelato.network/raas" target="_blank">Gelato</a>,
				<a href="https://www.karnot.xyz/" target="_blank">Karnot</a>,
				<a href="https://www.snapchain.dev/" target="_blank">Snapchain</a>,
				<a href="https://app.vistara.dev/" target="_blank">Vistara</a>,
				<a href="https://www.zeeve.io/" target="_blank">Zeeve</a>,
				<a href="https://nodereal.io/semita" target="_blank">Semita</a></td>
		</tr>
		<tr>
			<td>L3</td>
			<td colSpan="2">Rollups</td>
			<td>-</td>
		</tr>
	</table>
</div>
<br/>

#### 3.4.3. Deployable Assets

ERC standards provide a set of guidelines and specifications for the creation and implementation of tokens, smart contracts, and other blockchain-based applications. They have helped to establish a common language and set of best practices for building decentralized applications.

* ERC-20 is a technical standard used for the creation of fungible tokens on the Ethereum blockchain.

* ERC-721 is an Ethereum token standard that defines a non-fungible token (NFT) contract.

* ERC-1155 allows for the creation of both fungible and non-fungible tokens within the same contract.

* ERC-165 defines a standard interface for smart contracts to publish the list of functions and capabilities they support.

* ERC-621 expands the functionality of ERC-20 and ERC-223 standards by allowing tokens to be burned or redeemed for another asset.

* ERC-777 extends the functionality of ERC-20 and ERC-223 standards to allow for more efficient token transfers

* ERC-827 extends the functionality of ERC-20 and ERC-223 standards by adding support for additional transaction data.

* ERC-884 extends the functionality of ERC-20 and ERC-721 standards by adding support for fractional ownership of assets

* ERC-865 aims to improve the user experience and reduce transaction costs associated with the transfer of tokens.

* ERC-4626 streamlines and standardizes the technical parameters of yield-bearing vaults.

Today, there are over 50 different ERC standards, covering a wide range of use cases and applications. These standards continue to evolve and expand, as new needs and opportunities arise in the blockchain space.

### 3.5. Bitcoin Ecosystem

Traditionally, Bitcoin has been viewed as a store of value with limited functionality beyond investment. Unlike Ethereum, which supports a rich ecosystem of apps and smart contracts, Bitcoin has lacked these capabilities. However, developers are now pushing to bridge this gap through innovative solutions.

#### 3.5.1. Bitcoin Network

With <a href="https://bitnodes.io/" target="_blank">around 19127 reachable nodes and 57852 global nodes</a>, at the moment of writing, Bitcoin is still the king of blockchain networks.

<div style={{textAlign: 'center'}}>
	<img src="/img/bitcoin_nodes.png" width="80%"></img>
</div>
<br/>

At the moment of writing, Bitcoin Domination is still higher than 50% in global market capitalization.

<div style={{textAlign: 'center'}}>
	<img src="/img/global_capitalization.png" width="80%"></img>
</div>
<br/>

#### 3.5.2. Scaled Bitcoin

When Bitcoin was created in 2008, its vision was to be a peer-to-peer electronic cash system, nothing more. It was quickly realized that blockchain’s potential went far beyond transfers of value and could be used to create a trustless computing engine capable of executing arbitrary logic-based events, and thus, Ethereum and blockchain-based smart contracts were born. Bitcoin never upgraded to include these features because its main goal was always to be an electronic cash or digital gold, and its supporters did not feel it made sense to add additional features that could make the blockchain unstable or stray from Satoshi’s original vision.

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<td>Layer</td>
			<td colSpan="2">Protocol Type</td>
			<td>Protocols</td>
		</tr>
		<tr>
			<td>L0</td>
			<td colSpan="2">InterOperability</td>
			<td><a href="https://sovryn.com/bitcoinos" target="_blank">Sovryrn</a>,
				<a href="https://syscoin.org/" target="_blank">Syscoin</a>,
				<a href="https://rollux.com/" target="_blank">Rollux</a>,
				<a href="https://www.mapprotocol.io/" target="_blank">Map Protocol</a></td>
		</tr>
		<tr>
			<td rowSpan="3">L1</td>
			<td colSpan="2">Base Chain</td>
			<td><a href="https://bitcoin.org/en/" target="_blank">Bitcoin</a></td>
		</tr>
		<tr>
			<td colSpan="2">Forks</td>
			<td><a href="https://litecoin.org/" target="_blank">Litecoin</a>,
				<a href="https://bitcoincash.org/" target="_blank">Bitcoin Cash</a>,
				<a href="https://www.bitcoinsv.com/" target="_blank">Bitcoin Cash Satoshi Version (BSV)</a>,
				<a href="https://zcashcommunitygrants.org/" target="_blank">Zcash</a>,
				<a href="https://flush.com/" target="_blank">Flush</a>,
				<a href="https://handshake.org/" target="_blank">Handshake</a>,
				<a href="" target="_blank">Satoshi Chain</a>,
				<a href="https://bitcoinspark.org/" target="_blank">Bitcoin Spark</a>,
				<a href="https://ravencoin.org/" target="_blank">Raven Coin</a></td>
		</tr>
		<tr>
			<td colSpan="2">Sidechains</td>
			<td><a href="https://linktr.ee/bitfinitnetwork" target="_blank">Bitfinity Network</a>,
				<a href="https://linktr.ee/confluxnetwork" target="_blank">Conflux Network</a>,
				<a href="https://rootstock.io/grants/" target="_blank">Rootstock</a>,
				<a href="https://zulunetwork.io/" target="_blank">Zulu Network</a>,
				<a href="https://zenon.network/" target="_blank">Zenon Network</a>,
				<a href="https://bitrexe.gitbook.io/docs" target="_blank">Bit Rexe</a>,
				<a href="https://www.bevm.io/" target="_blank">BEVM</a>,
				<a href="https://defichain.com/" target="_blank">Defi Chain</a>,
				<a href="https://www.botanixlabs.xyz/en/home" target="_blank">Botanix Labs</a>,
				<a href="https://bouncebit.io/" target="_blank">BounceBit</a>,
				<a href="https://anvm.io/" target="_blank">Ainn Layer</a>,
				<a href="https://eastblue.io/" target="_blank">East Blue</a>,
				<a href="https://spectrachain.io/" target="_blank">Spectrachain</a>,
				<a href="https://dovil2.com/" target="_blank">Dovi</a>,
				<a href="https://dfinity.org/community-grants/" target="_blank">InternertComputer</a>,
				<a href="https://liquid.net/" target="_blank">Liquid</a>,
				<a href="https://elementsproject.org/elements-code-tutorial/issuing-assets" target="_blank">Elements</a>,
				<a href="https://stacks.org/grants" target="_blank">Stacks</a>,
				<a href="https://www.gelios.io/" target="_blank">Gelios</a>,
				<a href="https://turingbitchain.io/" target="_blank">TuringBitchain</a>,
				<a href="https://taprootchain.io/home" target="_blank">TaprootChain</a>,
				<a href="https://www.nubit.org/" target="_blank">NuBit</a>,
				<a href="https://linktr.ee/rosettaprotocol" target="_blank">Rosetta Protocol</a>,
				<a href="https://www.mintlayer.org/en/" target="_blank">Mint Layer</a>,
				<a href="https://www.microvisionchain.com/" target="_blank">MVC Global</a>,
				<a href="https://layertwolabs.com/" target="_blank">LayerTwoLabs</a>,
				<a href="https://chain.libre.org/" target="_blank">LibreBlockchain</a>,
				<a href="https://www.anduro.io/" target="_blank">Anduro</a></td>
		</tr>
		<tr>
			<td rowSpan="5">L2</td>
			<td colSpan="2">Channels</td>
			<td><a href="https://twitter.com/Omni_Layer" target="_blank">Omni Layer</a>,
				<a href="https://www.arkpill.me/" target="_blank">Ark</a>,
				<a href="https://twitter.com/mercurylayer" target="_blank">Mercury Layer</a>,
				<a href="https://lightning.network/" target="_blank">Lightning Network</a></td>
		</tr>
		<tr>
			<td colSpan="2">Plasma</td>
			<td>-</td>
		</tr>
		<tr>
			<td rowSpan="3">Rollups</td>
			<td>Optimistic</td>
			<td><a href="https://rollkit.dev/" target="_blank">Rollkit (sovereign)</a>,
				<a href="https://www.gobob.xyz/" target="_blank">Building on Bitcoin (BOB)</a>,
				<a href="https://citrea.xyz/" target="_blank">Citrea (sovereign)</a>,
				<a href="https://biop.io/" target="_blank">BiopDAO</a></td>
		</tr>
		<tr>
			<td>zk</td>
			<td><a href="https://www.bsquared.network/" target="_blank">B² Network</a>,
				<a href="https://www.bitlayer.org/" target="_blank">Bitlayer</a>,
				<a href="https://merlinchain.io/" target="_blank">Merlin Chain</a>,
				<a href="https://zksats.io/" target="_blank">zkSats</a>,
				<a href="https://lumibit.xyz/" target="_blank">Lumibit</a>,
				<a href="https://tunachain.io/" target="_blank">Tunachain</a>,
				<a href="https://www.satoshivm.io/" target="_blank">SatoshiVM</a>,
				<a href="https://bl2.live/" target="_blank">BL2</a>,
				<a href="https://beetnetwork.xyz/" target="_blank">Beet Network</a>,
				<a href="https://www.roospro.com/" target="_blank">Roos</a>,
				<a href="https://linktr.ee/uprotocol" target="_blank">U Protocol</a>,
				<a href="https://rooch.network/" target="_blank">Rooch Network</a>,
				<a href="https://qedprotocol.com/" target="_blank">QED Protocol</a>,
				<a href="https://bisonlabs.io/#/dashboard" target="_blank">Bison Labs (sovereign)</a>,
				<a href="https://hacash.com/" target="_blank">Hacash</a>,
				<a href="https://www.alpenlabs.io/" target="_blank">Alpen Labs</a>,
				<a href="https://alignedlayer.com/" target="_blank">Aligned Layer</a>,
				<a href="https://linktr.ee/Lightec.xyz" target="_blank">Lightec</a></td>
		</tr>
		<tr>
			<td>RaaS</td>
			<td><a href="https://lumoz.org/" target="_blank">Lumoz</a>,
				<a href="https://bvm.network/" target="_blank">BBVM</a></td>
		</tr>
		<tr>
			<td>L3</td>
			<td colSpan="2">Rollups</td>
			<td><a href="https://rif.technology/" target="_blank">RIF</a></td>
		</tr>
	</table>
</div>
<br/>


#### 3.5.3. Deployable Assets

For more than a decade, the primary narratives surrounding Bitcoin have focused on its role as peer-to-peer digital cash and a store of value. The initial release of Bitcoin Network as peer-to-peer electronic cash system did not consider the creation of smart contracts. Since the beginning of 2023, a number of technologies have enabled developers to build Bitcoin-native assets on Bitcoin L1.
* Colored Coins (RGB), Taprot Assets (Taro), Bitcoin Ordinals (BRC-20, BRC-201, BRC-69, BRC-420), Bitcoin Atomicals (ARC-20) enabled for NFT tokens to be created on the core chain.
* Technologies as Taprot Assets (Taro), Counterparty or Runes enabled the creation of fungible tokens.
* Bitcoin Inscriptions and Bitcoin Stamps (SRC-20) allowed to insert binary content into the main blockchain.

All the Bitcoin L1 native assets are somehow limited in their ability to perform logic operations. The advent of Bitcoin L2 and, in particular, rollups, will enhance Bitcoin to enjoy all the right features of embedding an EVM into the protocol. This will bring all the assets currently available for the Ethereum Ecosystem (e.g. ERC-20) to Bitcoin ecosystem.

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 4. CryptoCommodity Ecosystem
---

### 4.1. CryptoCommodity Token

CryptoCommodity smart contract is created as a diamond standard ERC-2535 [1] contract. As a diamond contract it includes a front controller diamond whih receives all requests and is the single point of contact for the whole structure. 4 facets deployed, at different addresses that the diamont front controller, are attached to provide custom behaviours.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_structure.svg" width="60%"></img>
</div>
<br/>

Existing behaviours are:

- Crowdsale Facet.

- Vesting Facet

- Common Facet

- ERC-20 Facet

By using the upgradeabity capabilities provided by the diamond front controller, these facets can be updated or deleted or replaced by new facets.

https://github.com/Catallactic/catallactic-suite


### 4.2. CryptoCommodity Infrastructure

#### 4.2.1. Deployed on Bitcoin L2

Bitcoin L2 is being created on top of bitcoin reusing bitcoin security backed by 60.000 servers and a plethora of miners.

<div style={{textAlign: 'center'}}>
	<img src="/img/infra_rollup.svg" width="80%"></img>
</div>
<br/>



#### 4.2.2. Multichain Tokens

Different blockchains provide different features so there is not a one size fits all choice. To best accommodate business requirements, the issuer should be able to transfer liquidity across chains. At the moment, there is not standard of crosschain interoperability that derivers this functionality out of the box. Recent advances in cross messaging frameworks or interchain token services enable this feature.

### 4.3. Delivering Representative Money

Representative money must be accesible to anyone with a physical project to back a currency issuance and deliver a real world value to society. 

#### 4.3.1. Tokenization Platform

A decentralized tokenization platform will allow any individual to run the CryptoCurrency lifecycle. Deployment must be in a decentralized Appstore. Work is already <a href="https://catallactic.github.io/catallactic-admin/" target="_blank">in progress</a>.

#### 4.3.2. Payment Gateway

The decentralized tokenization platform should cover payments for the utility that backs the CryptoCommodity. Payments will also be integrated into the token to enable payment streaming.

#### 4.3.3. Tradeable in Exchanges

The decentralized tokenization platform should allow issuers to deploy the token in different exchanges.

#### 4.3.4. Accessible with Wallets

A number of compatible wallets must be validated for integration with the networks where CryptoCommodity liquidity is available.

#### 4.3.5. Accessible with Cards

A number of card providers have built gift cards that can be customized to interact with exchange and payments seamlessly creating a real world POS system.


### 4.4. CryptoCommodity Features

#### 4.4.1. Upgradeable

we love the principle of inmutability but we also think technology is not yet ready for it. As theoretical framework is still being created and need to learn from experience with benchmarks, creating an inmutable token is like shooting your own feet if you want to do a serious project. We think we need to achieve trust by different means as having a great project and a mission. As a consequence, currently, the CryptoCommodity contract must be upgradeable to include new updates and definitions. In order to prevent a reputational risk, the upgrades can be protected by a voting system.

Inn current implementation, every facet contains a versioned logic of the functionality. However, they can be upgraded in a way that one, or many functions, can be replaced by other functions with the same signature or adding new functions.

The long term idea is to release to community the governance.


#### 4.4.2. Security

Security is crucial in crypto world. A quality money must be built on a secure system. Some security policies are being used to pervent vulnerabilities:

- Code includes <b>multisig role-based access</b> to functionalities.

- The whole CryptoCommodity code must be <b>audited</b>. 

- Code is open source to allow <b>white hats contributions</b>. Ideally should be also be in continuous validation by the community.

- We are exploring ERC-20R to create <b>DAO-protected storage backups</b> of the status to allow reverting in case of vulnerability. 


#### 4.4.3. Decentralization

Decentralization is level of distributed and public participation from users reinforcing the rules of the network. Traditionally, measured by the number of independent node operators on a
blockchain. A node operator is an individual or entity that runs software verifying the blocks and transactions finalized on the network. 

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<td></td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Network Decentralization</td>
			<td>Networks where the token is deployed should fulill the reuired decentralization standards. The decentralization of this networks will influde in the reputation of the CryptoCommodity-</td>
		</tr>
		<tr>
			<td>Exchanges Decentralization</td>
			<td>Exchanges should also be decentralized regarding</td>
		</tr>
		<tr>
			<td>Smart Contract Decentralization</td>
			<td>-</td>
		</tr>
		<tr>
			<td>Governance  Decentralization</td>
			<td>The stabilization mechanism should ideally work standalone without the issuer needing to mint or burn manually token units.</td>
		</tr>
		<tr>
			<td>Wealth Decentralization</td>
			<td>Gini and Nakamoto Coefficients</td>
		</tr>
	</table>
</div>


#### 4.4.4. Transparency

Differently to current fiat bascked stablecoins, a CryptoCommodity should have a strong compromisse with transparency and provide reporting to users out of the box.

#### 4.4.5. Privacy



#### 4.4.5. Compliance

Different jurisdictions have different compliance requirements. A CryptoCommodity should be to allow the issuer customizing the level of regional compliance.



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 5. The CryptoCommodity Issuer
---

In this section we will discuss who is the suitable issuer of CryptoCommodity tokens. A CryptoCommodity requires a collateral and redeemability. Anyone that can provide a collateral and an ability to redeem the tokens that issues can become a CryptoCommodity Issuer. This ability to collateral and redeemability can be a project and take benefit of the fundraising stage to launch the project that provides the issuer these features.

Providing representative money boosts the real economy in sense that society is built from botton up, from the consumers will. Also guarantees price formation. And prevents currency debasement. The scope of use cases is being developed.

### 5.1. Commodity Providers

The more intuitive model of Representative money is this based on commodities as commodities have been extensively used as a medium of exchange in civilization. Different commodities would allow creating different projects. Some are included below.

#### 5.5.1. Mining Companies

Mining companies extend to many areas, including precious metals, coal, gold, silver. The problem is that they do B2B business and crypto corporate payments are not yet a mature industry.

#### 5.5.2. Energy Providers

Wholesale energy providers again has the B2B drawback as crypto corporate payments are not yet a mature industry. This includes petrol station, renewable energy providers.

Energy retailers, gas retailers are suitable for issuing a CryptoCommodity. Catallactic relies on <a href="https://gasclick.net/">GasClick</a> as pilot project for the Catallactic Framework. Access <a href="https://gasclick.net/litepaper_en.html">litepaper</a>.

#### 5.5.3. Water Supply and Sewerage

The map shows the countries were tap water is not drinkable. They are perfect opportunity to issue a CryptoCommodity, fix the supply with the support of investors and contribute Water-backed Representative Money to their ecosystem.

<div style={{textAlign: 'center'}}>
	<img src="https://files.qssupplies.co.uk/world-drinking-water/you_can_and_cant_drink_tap_water.jpg" width="80%"></img>
</div>
<br/>

#### 5.5.4. Agro Providers

The squeeze of the real economy by fiat currency debasement reduces the funding available for real world. In particular, farmers are revolting in many countries. CryptoCommodity would give farmers the possibility to issue their currencies backed on their own produce.

On the other hand, many agro projects never see the light because they cannot raise funding. CryptoCommodity gives the opportunity to agro producers to propose their projects in their community and gets funds for execution.

### 5.2. Service Providers

By narrowing down an utility to back the representative token, nothing prevents that this utility is a service. Some service providers could be eligible to issue their representative currencies. there is a pending discussion if service backed representative tokens could distort natural price formaation.

#### 5.2.1. Travel Companies

A travel provider could back its currency in tickets or issue an ICO to fund a new travel service.

### 5.3. Conglomerate Providers

#### 5.3.1. Supermarket / Shopping Mall

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 6. Conclusions
---




## 7. References
---


