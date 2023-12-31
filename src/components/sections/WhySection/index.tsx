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
	document.getElementById("whytab2").classList.remove("show");
	document.getElementById("whytab2").classList.remove("active");
	document.getElementById("v-whytab2").classList.remove("active");
	document.getElementById("whytab3").classList.remove("show");
	document.getElementById("whytab3").classList.remove("active");
	document.getElementById("v-whytab3").classList.remove("active");
	document.getElementById("whytab4").classList.remove("show");
	document.getElementById("whytab4").classList.remove("active");
	document.getElementById("v-whytab4").classList.remove("active");
	
	document.getElementById("whytab" + num).classList.add("show");
	document.getElementById("whytab" + num).classList.add("active");
	document.getElementById("v-whytab" + num).classList.add("active");
}

export default function WhySection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
				{<div className="h1 fw-bold color-theme-reverse2">Capturing Commodities Marginal Utility</div>}
					<p className="h3 color-theme-reverse1 mt-5 lh-base">An Open Source Framework and Community to capture the  Marginal Utility of Commodity Assets, build Commodity-backed Crypto-Currencies and provide DeFi Services back to the Society</p>
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

								<a className="nav-link mb-3 p-3 shadow" id="v-whytab2" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => setShownTab(2)}>
									<span className="font-weight-bold text-uppercase">How can I benefit</span>
								</a>

								<a className="nav-link mb-3 p-3 shadow" id="v-whytab3" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => setShownTab(3)}>
									<span className="font-weight-bold text-uppercase">Who can contribute</span>
								</a>

								<a className="nav-link mb-3 p-3 shadow" id="v-whytab4" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => setShownTab(4)}>
									<span className="font-weight-bold text-uppercase">How can contribute</span>
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
										<p className="font-italic text-muted mb-2">Crypto was born in 2013 with the promise of decentralization from a non fiat currency, Bitcoin. However, tokenization projects have evolved with the financing of venture-capital backed crypto companies and financial firms, that have modified the initial promise, to make it more centralized and fiat dependent. Whereas we think this is a distortion from the initial principles, we find that the tools and processs developed inherit this centraliced and fiat nature and alternative approaches are miss-represented. In short there is a fiat bias in tools and processes.</p>
										<p className="font-italic text-muted mb-2"><b>Catallactic advocates for a built-in price formation as a basis to deliver true decentralization. Stablecoins are centralized because they are pegged to a fiat price formed in international markets</b>.</p>
										<p className="font-italic text-muted mb-2">Catallactic aims to define the principles, know-how, tools and processes to tokenize, fund and manage decentralized commodity based tokens and relief the issuer from the technological and operational burden.</p>
									</div>
									
									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab2" role="tabpanel" aria-labelledby="v-pills-messages-tab">
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
										<p className="font-italic text-muted mb-2">Contributions can be done on the <a href="/docs/suite/intro">site pages</a> itself, as they are editable. We are configuring a <a href="https://discord.gg/xwJR9MZPmA">discord</a> community, we have a <a href="https://cryptonomics.network/">forum</a> (in trial period), and of course, all pages and tools are shared in <a href="https://github.com/Catallactic">github</a>.</p>
									</div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
