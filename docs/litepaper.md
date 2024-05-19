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

During centuries representative money has been the preferred medium of exchange for different civilizations. Competitive private currencies have been the preferred choice for citizens when government money did not deliver its promises. Unfortunately, privately issued currencies never persisted because limitations in scope of application and government ban. The advent of electronic money brings, for the first time ever, the opportunity for privately issued representative electronic money, overcoming the troubles faced in the past. This litepaper outlines a novel kind of token, CryptoCommodity. CryptoCommodity tokens are representative money in electronic form that represent the intrinsic value of an underlying asset and aimed for private issuance.

The project does not propose technological innovation in itself. Instead, we aim to build on top of the existing tools, and adapt them, to an existing use case extensively documented in the economic literature. We understand that the direction of the current technology is mislead from the best economic practices, diverts from the foundational principles of the blockchain technology and does not leverage its full potential of cryptocurrencies.

This paper is addressed to an advanced audience, which is able to understand the fundamentals of monetary theory beyond the mainstream beliefs. As such we wont discuss the advantages of representative money and what benefits brings for societies, as this is expected to be known by the reader.

## Keywords
---

representative money, cryptocurrencies, cryptocommodities, stablecoins, price formation, stabilization mechanism, tokenomics, private currencies, currency competition, cantillon effects, monetary theory

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 1. A Review on Cryptocurrencies
---

As economist are not well versed in technological innovations, we think is needed to overview  the current state of decentralized technologies and blockchain. This will also help to raise the debate about the current state of affairs and contextualize were the proposed tokenization pattern fits in.

### 1.1. DLTs and Blockchains

A blockchain is a database structure which organizes the information as chain of linked blocks. Each block contains a set of transactions and other essential details. When new transactions are being received into the blockchain, new blocks are being added to record the details of the transactions and state. The whole structure is packaged into a node. Blockchain nodes are computers that perform the network operations, storing, validating, and relaying transactions and blocks. Each node holds a copy of the entire ledger.

<div style={{textAlign: 'center'}}>
	<img src="https://www.nist.gov/sites/default/files/images/2019/09/25/blockchain.png" width="80%"></img>
</div>
<br/>

Blockchain nodes are interconnected organizing a blockchain network. The information stored in the nodes is synchronized in a way that all keep a copy of the latest transactions. Nodes are also engaged in the validation of the new transactions according to the consensus protocol defined for the network.

<div style={{textAlign: 'center'}}>
	<img src="https://www.catallactic.org/assets/images/ops_supply-bfea34b2da853e09203c7fa1998cee78.svg" width="80%"></img>
</div>
<br/>

The architecture of a blockchain network relies heavily on the collaborative effort of its nodes, which share and maintain a distributed ledger of transactions. This system of interconnected nodes ensures the decentralization of the network, significantly increasing its resilience against cyber threats and reducing reliance on any central authority for governance.Blo

### 1.2. Smart Contracts

Nick Szabo, the inventor of smart contract, defined it as such: “A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises.” 

A smart contract is a computer program that automatically executes the terms of a contract when certain conditions are met. These conditions are written into the code of the contract. Once completed, the transactions are trackable and irreversible. 

Smart contracts are stored on a blockchain. This makes them transparent, secure & immutable. When a smart comtract is deployed to a blockchain network, it gets copied to all of the network nodes to guarantee its decentralization. When the contract is invoker for a transaction by a wallet, all the nodes participate in the valiadtion of rhe transaction but only one node is responsible for execution of the transaction. The response from the transaction will be again synchronnized to to all other nodes in the network so they can have the status.

<div style={{textAlign: 'center'}}>
	<img src="https://www.catallactic.org/assets/images/ops_balances-f4a24f9af292d2e0304607b3bf4f7e54.svg" width="80%"></img>
</div>
<br/>

Smart contracts allow to build a wide variety of decentralized apps and tokens.

### 1.3. Tokenization

Tokenization is the process of digitally representing an asset, or asset feature, on a programmable platform. When tokenizing an asset, or asset feature, it gets bound to the token in a way that the token holder owns the asset feature. This asset feature is defined by the asset tokenizer. Tokens are created as smart contracts and, as programable logic, their lifecycle and features is managed by the logic in the smart contract.

#### 1.3.1. Token Lifecycle

Tokens can be pre-mined for a fundraising.

First tokens are created at the end of this fundraising process in a TGE.

Tokens are created in a process called minting. Tokens can be also destroyed in a process called burning.

Tokens can be added to exchange to be traded.

Tokens are distributed to stakeholders

Tokens can be expired or suspended.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain2.svg" width="100%"></img>
</div>

#### 1.3.2. Token Features

When evaluating the asset, or asset property, we must consider the concept of <b>fungibility</b>. Fungibility is the property of a good, or a commodity, whose individual units are essentially interchangeable.

Tokens can be transferred between holders. This features applies to fungible and not-fungible tokens.

Valuable. A token tokenizing a fungible assets, or asset properties, can be provided a relative value when submitted to an exchange paired with other token. This relative value can be defined as a <b>price</b>. In that way, a token can be priced in terms of another token.

Tokens can be divisible. fractional ownership

Non-fungible tokens tokens can be configurable

#### 1.3.3. Tokenization Models

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



#### 1.3.4. Applications of Tokenization

The more intuitive application of tokenization is becoming <b>identifier</b> of a non-fungible token. This can deliver several benefits as ownership or traceability of the underlying asset to the token holder. Ownership, voting rights, enabling participation in decision-making processes


A basic application of a priced asset is to become a <b>currency</b>. There are some requirements to be a currency...

Another application of priced asssets is <b>investment</b>.


#### 1.3.5. Tokenizable Assets

Tangible 

Fungible

RWA tokenization



### 1.4. CryptoCurrencies

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

### 1.5. Crypto Adoption

* Driven to fiat by VCs

* Many scams, lack of transparency

* No real world utilities

* No good medium of exchange

* Legal and regulatory constraints


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 2. Creating Representative Money
---

### 2.1. A New Medium of Exchange

To understand a CryptoCommodity lets first examine how a regular RWA stablecoin works. A regular RWA stablecoin is backed by an asset, typically a physical asset. This asset has an unknown intrinsic value. By binding 1-to-1 the supply of the stablecoin to the RWA stock as collateral, the stablecoin is able to capture the intrinsic value of the asset. However, the stablecoin knowns nothing about the marginal utility that the RWA will produce on consumers. Therefore, the stablecoin is unable to form its own price and this must be borrowed from an external source, typically an internaciobal RWA market. There are some consequences of this fact: first, according to regulations, the stablecoin must be collateralized from inception and, therefore, only issuers with enough collateral can issue an stablecoin. Secondly, as the value is provided from inception, issuers do not have a chance to fundraise. Also, issuers, must custody and, potentially, redeem the asset incurring in high operating expenses. Since the price is borrowed from a fiat source, this configuration typically creates a fiat-bound currency, and decentralization in value is compromissed. Similar features apply to stablecoins bound to currencies, either fiat or not fiat.

A CryptoCommodity is also an stablecoin but improves this process at several levels. A CryptoCommodity also binds to an asset, but it does through an utility working as proxy. The bound utility helps by providing a marginal utility when exposed to consumers. The utility must be an off-chain utility, typically a real world utility.

But there is more. As an utility-proxied asset is one time event, meaning that when the utility is satisfied, the asset is consumed, is not possible to bind permanently to make an offer. By binding to this kind of asset, the CryuptoCommodity would have an continuously-growing supply. And this is not something that we want because the quality of the CrtypcCommodity would be far from optimal. In order to overcome this issue, the definition can be adapted to a "repeating utility-proxied asset", that is something that the issuer will be always able to provide periodically. Iin order to make the marginal utility quantifiable, the repeatability period must cover a known timespan where the utility provides value to the consumer, e.g. a gas cylinder provides value for one month at a cost of $16. This means that the marginal utility for consumers is $16 per month.

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset.svg" width="60%"></img>
</div>
<br/>

### 2.2. Capturing Subjective Value


<div style={{textAlign: 'center'}}>
	<img src="/img/stabilization_mechanism_capture.svg" width="65%"></img>
</div>
<br/>


### 2.3. Stabilization Mechanism

<div style={{textAlign: 'center'}}>
	<img src="/img/stabilization_mechanism_maintainance.svg" width="65%"></img>
</div>
<br/>



### 2.4. CryptoCommodity Features


Hayek said money with stable value would be preferred by users.

Real utility to empower real economy.

Configurable by issuer. Benchmarks are required.

|                                 | Value                | Collateral    |
| :-------------------------------| :--------------------| :-------------|
| Commodity Money                 | Fixed to Itself      | Itself        | 
| Representative Money            | Fixed to Bound Asset | 100%          |
| Semi Representative Money       | Fixed to Bound Asset | Configurable  |
| Fiat Money                      | Debasement           | None          |





### 2.5. Comparing with existing crypto currencies




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


### 2.6. Representative Currency Competition

Money is usually defined as the generally acceptable medium of exchange,l but there is no reason why within a given community there should be only one kind of money that is generally (or at least widely) accepted. [Hayek]

By exposing the intrinsic value allowing price formation corresponding to subjective perception of consumers we get the benefits of represetative money:

 - price formation according to consumers
 - productive resources allocated by consumers will
 - no cantillon
 - private risk
 - coexisting gold standard


### 2.7. A New DeFi Industry


Fundraising for entrepreneurs

Investment for investors

Blockchains are provably immutable and enable the
rapid transfer and exchange of crypto-tokens (which can
represent assets) without the need for separate
clearing, settlement & reconciliation.

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
			<td>Aleph Zero</td>
			<td>L1</td>
			<td>2018</td>
			<td>Rust</td>
			<td></td>
			<td>PoS</td>
			<td></td>
			<td>ink!</td>
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



### 3.3.1. Execution Environment

Making an informed decision about a smart contract platform is one of the most important steps toward achieving tangible results with smart contract development. As the business landscape is becoming more aware of smart contract potential, blockchains are evolving. While Ethereum remains the most recognizable platform in this field, its competitors are constantly coming up with new, unique features that attract investments.

The reason why new smart contract platforms are constantly emerging and established platforms are continuously updated is that it’s virtually impossible to maximize all of the three most important properties of smart contract platforms: scalability, security, and decentralization.

https://www.itransition.com/blockchain/smart-contract/platforms


### 3.3.2. Settlement


### 3.3.3. Consensus

Decentralization


Consensus plays a crucial role in blockchain networks. The main objective of a consensus mechanism is to create a single version of truth.


### 3.3.4. Data Availability


### 3.4. Ethereum Ecosystem



### 3.5. Bitcoin Ecosystem






<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 4. CryptoCommodity Infrastructure
---

### 4.1. Requirements



### 4.2. Deployed on Bitcoin L2

Bitcoin L2 is being created on top of bitcoin reusing bitcoin security backed by 60.000 servers and a plethora of miners.

Networks decentralization


### 4.3. Multichain Tokens

Moving liquidity across chains






### 4.4. Delivering Representative Money

Decentraized tokenization platform must be avaiable for anyone.


#### 4.4.1. Tokenization Platform


#### 4.4.2. Tradeable in Exchanges


#### 4.4.3. Accessible with Wallets


#### 4.4.4. Accessible with Cards


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 5. Application Projects
---

Precious metals, energy resources, agricultural products and real estate are examples of commodities that can be tokenized using blockchain technology.


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 6. Conclusions
---




## 7. References
---


