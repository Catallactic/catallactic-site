import React from 'react';
import styles from './styles.module.css';

// https://bootstrapious.com/p/bootstrap-vertical-tabs
// https://www.kallmanation.com/building-linkable-tabs-with-only-css

function setShownTab(num: number) {
	document.getElementById("whytab0").classList.remove("show");
	document.getElementById("whytab0").classList.remove("active");
	document.getElementById("v-whytab0").classList.remove("active");
	document.getElementById("whytab1").classList.remove("show");
	document.getElementById("whytab1").classList.remove("active");
	document.getElementById("v-whytab1").classList.remove("active");
	//document.getElementById("whytab2").classList.remove("show");
	//document.getElementById("whytab2").classList.remove("active");
	//document.getElementById("v-whytab2").classList.remove("active");
	//document.getElementById("whytab3").classList.remove("show");
	//document.getElementById("whytab3").classList.remove("active");
	//document.getElementById("v-whytab3").classList.remove("active");
	//document.getElementById("whytab4").classList.remove("show");
	//document.getElementById("whytab4").classList.remove("active");
	//document.getElementById("v-whytab4").classList.remove("active");
	document.getElementById("whytab5").classList.remove("show");
	document.getElementById("whytab5").classList.remove("active");
	document.getElementById("v-whytab5").classList.remove("active");
	document.getElementById("whytab6").classList.remove("show");
	document.getElementById("whytab6").classList.remove("active");
	document.getElementById("v-whytab6").classList.remove("active");

	document.getElementById("whytab" + num).classList.add("show");
	document.getElementById("whytab" + num).classList.add("active");
	document.getElementById("v-whytab" + num).classList.add("active");
}

export default function WhySection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
				{<div className="h1 fw-bold color-theme-reverse2">Building a Medium of Exchange</div>}
					<p className="h3 color-theme-reverse1 mt-5 lh-base">An Open Source Framework to build <b>Commodity-backed Non-fiat Stablecoins</b>. A step into <b>private currency competition</b>.</p>
				</div>

				<div className="row">
            <div className="col-md-3">
							<div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">

								<a className="pp nav-link mb-3 p-3 shadow active" id="v-whytab0" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => setShownTab(0)}>
									<span className="font-weight-bold text-uppercase">Why Catallactic</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab1" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => setShownTab(1)}>
									<span className="font-weight-bold text-uppercase">Why not fiat stablecoins?</span>
								</a>

								{/*<a className="nav-link mb-3 p-3 shadow" id="v-whytab2" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => setShownTab(2)}>
									<span className="font-weight-bold text-uppercase">How can I benefit</span>
								</a>

								<a className="nav-link mb-3 p-3 shadow" id="v-whytab3" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => setShownTab(3)}>
									<span className="font-weight-bold text-uppercase">Who can contribute</span>
								</a>

								<a className="nav-link mb-3 p-3 shadow" id="v-whytab4" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => setShownTab(4)}>
									<span className="font-weight-bold text-uppercase">How can contribute</span>
								</a>*/}

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab5" data-toggle="pill" href="#v-pills-usecases" role="tab" aria-controls="v-pills-usecases" aria-selected="false" onClick={() => setShownTab(5)}>
									<span className="font-weight-bold text-uppercase">... But no crypto use cases !!!</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab6" data-toggle="pill" href="#v-pills-scam" role="tab" aria-controls="v-pills-scam" aria-selected="false" onClick={() => setShownTab(6)}>
									<span className="font-weight-bold text-uppercase">... But crypto is scam !!!</span>
								</a>

							</div>
            </div>

            <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">

									<div className="tab-pane fade shadow rounded bg-white p-5 show active" id="whytab0" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<h4 className="font-italic mb-4">Why Catallactic?</h4>
										<p className="font-italic text-muted mb-2">Because this is the real crypto. Catallactic is created to build cryptocurrencies capturing value of Commodities.</p>
										<p className="font-italic text-muted mb-2">Capturing value means transferring to the token price the <b>marginal utility as perceived by consumers</b>. Differently to fiat stablecoins, where the price is captured from an external market, CryptoCommodities allow a natural price formation performed by a required underlying market of the commodity. This guarantees <b>no relative price distortion other than consumers will</b>.</p>
										<p className="font-italic text-muted mb-2">Capturing the marginal utility of commodity provides to CryptoCommodities <a href="/docs/whitepaper#31-the-underlying-asset">different features to a stablecoin</a>.</p>
										<p className="font-italic text-muted mb-2">We break with the Quantitative Theory of Money, which assumes a monopolistic legal tender and a central planner, to build a <b>Qualitative Theory of Money</b> for competing currencies privately issued.</p>
									</div>
									
									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab1" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										<h4 className="font-italic mb-4">Why not fiat stablecoins?</h4>
										<p className="font-italic text-muted mb-2">Crypto was born in 2009 with the promise of decentralization from a non fiat currency, Bitcoin. However, tokenization projects have evolved with the financing of venture-capital backed crypto companies and financial firms, that have modified the initial promise, to make it more centralized and fiat dependent. Whereas we think this is a distortion from the initial principles, we find that the tools and processs developed inherit this centraliced and fiat nature and alternative approaches are miss-represented. In short there is a fiat bias in tools and processes.</p>
										<p className="font-italic text-muted mb-2"><b>Catallactic advocates for a built-in price formation as a basis to deliver true decentralization. Stablecoins are centralized because they are pegged to a fiat price formed in international markets</b>.</p>
										<p className="font-italic text-muted mb-2">Catallactic aims to define the principles, know-how, tools and processes to tokenize, fund and manage decentralized commodity based tokens and relief the issuer from the technological and operational burden.</p>
									</div>
									
									{/*<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab2" role="tabpanel" aria-labelledby="v-pills-messages-tab">
										<h4 className="font-italic mb-4">How can I benefit?</h4>
										<p className="font-italic text-muted mb-2">Catallactic aims to relief cryptocurrency issuers of Units of Account of the burden to define principles, acquire know-how, develop tools and design processes to issue tokens backed by the value of their underlying assets. The goal, for the sake of practicality is to create an opinionated system, but maintain configurability, which allows cryptocurrency issuers focusing on their core business.</p>
										<p className="font-italic text-muted mb-2">The outcomes from Catallactic are Open Source and will allow private actors to build additional tools, plugins or know-how that can complement Catallactic deliverables.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab3" role="tabpanel" aria-labelledby="v-pills-settings-tab">
										<h4 className="font-italic mb-4">Who can contribute?</h4>
										<p className="font-italic text-muted mb-2">We break with the Quantitative Theory of Money, which assumes a monopolistic legal tender and a central planner, to build a <b>Qualitative Theory of Money</b> for competing currencies privately issued.</p>
										<p className="font-italic text-muted mb-2">Anyone that enjoys the idea of private issued money can contribute to Catallactic.</p>
										<p className="font-italic text-muted mb-2">Catallactic needs guidelines, articles, essays or contributions from process engineers, field specialists as economists, tax experts or lawyers, investor, traders, token issuers, philosophers or political philosophers.</p>
									</div>
									
									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab4" role="tabpanel" aria-labelledby="v-pills-settings-tab">
										<h4 className="font-italic mb-4">How can contribute?</h4>
										<p className="font-italic text-muted mb-2">Apart from the technological efforts shared with other Open Source Solutions, in particular in Typescript, Solidity or other smart contract and blockchain languages, Catallactic needs guidelines, articles, essays or contributions to build a body of knowdledge.</p>
										<p className="font-italic text-muted mb-2">We think that, as much as possible, principles as functionality, practicality, usability or decentralization must drive technological efforts, no the other way around.</p>
										<p className="font-italic text-muted mb-2">Contributions can be done on the <a href="/docs/suite/intro">site pages</a> itself or in the  <a href="https://discord.gg/xwJR9MZPmA">Reddit</a> community, and of course, all pages and tools are shared in <a href="https://github.com/Catallactic">Github</a>.</p>
									</div>*/}

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab5" role="tabpanel" aria-labelledby="v-pills-usecases-tab">
										<h4 className="font-italic mb-4">... But no crypto use cases !!!</h4>
										<p className="font-italic text-muted mb-2">And that's correct. Crypto has not reached the mainstreet yet and there are not clues than could be massified anytime soon. Instead, the main focus, driven by VCs, have been quick to-the-moon. We think there are 2 gaps to enable bring crypto to the market:</p>
										<p className="font-italic text-muted mb-2">* Existing cryptocurrencies make a <b>terrible Medium of Exchange</b>. None of them accomplish the <a href="/blog/TODO%20-%20No%20crypto%20use%20cases.%20Why">requirements</a> as a Medium of Exchange because they have not been designed to take the mainstream but for quick profit.</p>
										<p className="font-italic text-muted mb-2">* <b>No mainstream wallets</b>. A wallet for the market should be an affordable HW wallet, as a garage door remote control, that can work without a PC connection and without internet. And this piece of HW does not exist yet. Wallet providers have been working in "something else".</p>
										<p className="font-italic text-muted mb-2">Catallactic aim to provide solution to these problems and bring crypto to the mainstream.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab6" role="tabpanel" aria-labelledby="v-pills-scam-tab">
										<h4 className="font-italic mb-4">... But crypto is scam !!!</h4>
										<p className="font-italic text-muted mb-2">Any new technology needs a maduration period and definition of quality standards to distinguish what is legitimate from what is not. Unfortunately, there has not been much work on transparency in the crypto sphere so far. We aim to provide 2 contributions to reduce this bad reputation:</p>
										<p className="font-italic text-muted mb-2">* A <b>Quality Theory of Money</b> is needed, which includes definition of quality standards and transparency to help users understand what they have in their hands.</p>
										<p className="font-italic text-muted mb-2">* Creating smart contracts is full of risks and needs a lot of resources. We think that the past experiences in failed smart contracts, either honeypots, rug pulls, hacked or just non performing, suggests that smart contract should not be created by anyone, but instead provided by <b>specialized Tokenization Platforms</b> under specific well defined principles.</p>
										<p className="font-italic text-muted mb-2">Catallactic aims to provide solution to these problems and bring crypto to the mainstream.</p>
									</div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
