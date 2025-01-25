import React from 'react';
import styles from './styles.module.css';

// https://bootstrapious.com/p/bootstrap-vertical-tabs
// https://www.kallmanation.com/building-linkable-tabs-with-only-css

function setShownTab(num: number) {

	for (let i = 0; i <= 5; i++) {
		document.getElementById("v-whytab" + i).classList.remove("active");
		document.getElementById("whytab" + i).classList.remove("show");
		document.getElementById("whytab" + i).classList.remove("active");
	}

	document.getElementById("v-whytab" + num).classList.add("active");
	document.getElementById("whytab" + num).classList.add("show");
	document.getElementById("whytab" + num).classList.add("active");
}

export default function WhySection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
				{<div className="h1 fw-bold color-theme-reverse2">Building Representative Money</div>}
					<p className="h3 color-theme-reverse1 mt-5 lh-base">An Open Source Framework to build <b>Decentralization in Value</b>. A step into <b>Private Currency Competition</b>.</p>
				</div>

				<div className="row">
            <div className="col-md-3">
							<div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">

								<a className="pp nav-link mb-3 p-3 shadow active" id="v-whytab0" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => setShownTab(0)}>
									<span className="font-weight-bold text-uppercase">Why Catallactic</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab1" data-toggle="pill" href="#v-pills-backed" role="tab" aria-controls="v-pills-backed" aria-selected="false" onClick={() => setShownTab(1)}>
									<span className="font-weight-bold text-uppercase">Backed By Commodities</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab2" data-toggle="pill" href="#v-pills-stable" role="tab" aria-controls="v-pills-stable" aria-selected="false" onClick={() => setShownTab(2)}>
									<span className="font-weight-bold text-uppercase">Stable in Value / Non-Fiat</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab3" data-toggle="pill" href="#v-pills-stable" role="tab" aria-controls="v-pills-stable" aria-selected="false" onClick={() => setShownTab(3)}>
									<span className="font-weight-bold text-uppercase">Decentralized / Interoperable</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab4" data-toggle="pill" href="#v-pills-ready" role="tab" aria-controls="v-pills-ready" aria-selected="false" onClick={() => setShownTab(4)}>
									<span className="font-weight-bold text-uppercase">Ready for Issuers</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab5" data-toggle="pill" href="#v-pills-competition" role="tab" aria-controls="v-pills-competition" aria-selected="false" onClick={() => setShownTab(5)}>
									<span className="font-weight-bold text-uppercase">Local Scope / In Competition</span>
								</a>

							</div>
            </div>

            <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">

									<div className="tab-pane fade shadow rounded bg-white p-5 show active" id="whytab0" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<h4 className="font-italic mb-4">Why Catallactic?</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Because this is the real crypto.</p>
										<p className="font-italic text-muted mb-2">Crypto was born in 2009 with the promise of decentralization from a non fiat currency, Bitcoin. However, tokenization projects have evolved with the financing of venture-capital backed crypto companies and financial firms, that have modified the initial promise, to make it more centralized and fiat dependent.</p>
										<p className="font-italic text-muted mb-2">Whereas we think this is a distortion from the initial principles, we find that the tools and processs developed inherit this centraliced and fiat nature and alternative approaches are miss-represented. In short there is a fiat bias in tools and processes.</p>
										<p className="font-italic text-muted mb-2">Catallactic aims to define the principles, know-how, tools and processes to tokenize, fund and manage decentralized commodity based tokens and relief the issuer from the technological and operational burden.</p>
										<p className="font-italic text-muted mb-2">We break with the Quantitative Theory of Money, which assumes a monopolistic legal tender and a central planner, to build a <b>Qualitative Theory of Money</b> for competing currencies privately issued.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab1" role="tabpanel" aria-labelledby="v-pills-competition-tab">
										<h4 className="font-italic mb-4">Backed By Commodities</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Catallactic aims to build cryptocurrencies that comply with <b>Regression Theorem</b>, and therefore, that capture the intrinsic value of Commodities as underlaying asset. This is why the currencies are called as <b>CryptoCommodities</b>.</p>
										<p className="font-italic text-muted mb-2">We <b>capture and expose the intrinsic value</b> of the underlying commodity by binding a unit of the commodity to a unit of the CryptoCommodity. This binding is enforced by the smart contact processing and users interaction.</p>
										<p className="font-italic text-muted mb-2">Different Commodities, issuers and scopes will have different features, so there is a degree of <b>customization</b> for the dimensions of every CryptoCommodity.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab2" role="tabpanel" aria-labelledby="v-pills-backed-tab">
										<h4 className="font-italic mb-4">Stable in Value / Non-Fiat</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">By exposing commodities intrinsic value enables capturing into the token price the <b>marginal utility as perceived by consumers</b>. Differently to fiat stablecoins, where the price is captured from an external market, CryptoCommodities allow a natural price formation performed by a required underlying market of the commodity. This guarantees <b>no relative price distortion other than consumers will</b>.</p>
										<p className="font-italic text-muted mb-2">Commodities backed cryptocurrencies hold <a href="/docs/whitepaper#31-the-underlying-asset">different features to a stablecoin</a> and are eligible to participate into the price system of the adopting jurisdiction.</p>
										<p className="font-italic text-muted mb-2"><b>Catallactic advocates for a <b>built-in price formation</b> as a basis to deliver true <b>value decentralization</b>. Stablecoins are centralized because they are pegged to a fiat price formed in international markets</b>.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab3" role="tabpanel" aria-labelledby="v-pills-backed-tab">
										<h4 className="font-italic mb-4">Decentralized / Interoperable</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Catallactic builts on top of the existing DLT networks. Despite more work is need, we consider there is already a foundation that can be used for our purposes.</p>
										<p className="font-italic text-muted mb-2">We think there is not yet any network which is good enough and the overall status of the industry is in beta status and not yet ready for massification. As a consequence <b>we do not adhere to specific chains</b>. Instead, we build for any chains which can process transactionS on top of the <b>EVM</b>, as the more used standard for smart contracts implementation. We consider in future to adapt to other virtual machines and languages.</p>
										<p className="font-italic text-muted mb-2">Catallactic has <b>preference for PoW chains</b>. <b>EVM-enabled Bitcoin L2s</b> able being explored as ideal hosts for Catallactic smart contracts.</p>
										<p className="font-italic text-muted mb-2">We understand that different necessities can require different trust levels. Therefore Catallactic can also be operated on PoS networks with higher traction or number of users.</p>
										<p className="font-italic text-muted mb-2">Finally, Catallactic is thought with <b>interoperability</b> principles in mind, allowing distribution of the liquidity across different chains, as defined by the currency issuer.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab4" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										<h4 className="font-italic mb-4">Ready for Issuers</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Catallactic aims to relief CryptoCommodity issuers of the burden to define principles, acquire know-how, develop tools and design processes to issue tokens backed by the value of their underlying assets. Instead, we create an opinionated system, but maintain configurability, which allows cryptocurrency issuers focusing on their core business.</p>
										<p className="font-italic text-muted mb-2">We deliver a <b>Tokenization Platform</b> which allows adopters to issue and manage their CryptoCommodity without the technical burden.</p>
										<p className="font-italic text-muted mb-2">The outcomes from Catallactic are Open Source and will allow private actors to build additional tools, plugins or know-how that can complement Catallactic deliverables.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab5" role="tabpanel" aria-labelledby="v-pills-local-tab">
										<h4 className="font-italic mb-4">Local Scope / In Competition</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Different communities have different monetary requirements and commodities availability. To enable this fine tuning of the monetary availability, we think CryptoCommodities should be issued and applicable at <b>local scope by local actors</b>. This provides a valuable tool for communities driven entrepreneurship.</p>
										<p className="font-italic text-muted mb-2">A <b>CryptoCommodity algebra</b> allows technical support for real world use cases as merges and acquisitions or CryptoCommodity splits.</p>
										<p className="font-italic text-muted mb-2">Single currencies as Bitcoin represent a single point of failure and a evident target for scammers and censonship. To deliver censorship resistance and suitAble price formation, CryptoCommodities are thought to be <b>issued by multiple actors and in full competition</b>, relying on the market the price formation task.</p>
									</div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
