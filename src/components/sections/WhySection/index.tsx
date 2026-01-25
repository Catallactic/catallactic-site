import React from 'react';
import styles from './styles.module.css';

// https://bootstrapious.com/p/bootstrap-vertical-tabs
// https://www.kallmanation.com/building-linkable-tabs-with-only-css

function setShownTab(num: number) {

	for (let i = 0; i <= 2; i++) {
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

								<a className="pp nav-link mb-3 p-3 shadow active" id="v-whytab0" data-toggle="pill" href="#v-pills-stable" role="tab" aria-controls="v-pills-stable" aria-selected="false" onClick={() => setShownTab(0)}>
									<span className="font-weight-bold text-uppercase">Stable in Value / Non-Fiat</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab1" data-toggle="pill" href="#v-pills-ready" role="tab" aria-controls="v-pills-ready" aria-selected="false" onClick={() => setShownTab(1)}>
									<span className="font-weight-bold text-uppercase">Ready to Use for Issuers</span>
								</a>

								<a className="pp nav-link mb-3 p-3 shadow" id="v-whytab2" data-toggle="pill" href="#v-pills-competition" role="tab" aria-controls="v-pills-competition" aria-selected="false" onClick={() => setShownTab(2)}>
									<span className="font-weight-bold text-uppercase">Local Competition</span>
								</a>

							</div>
            </div>

            <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">

									<div className="tab-pane fade shadow rounded bg-white p-5 show active" id="whytab0" role="tabpanel" aria-labelledby="v-pills-backed-tab">
										<h4 className="font-italic mb-4">Stable in Value / Non-Fiat</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">By exposing commodities intrinsic value enables capturing into the token price the <b>marginal utility as perceived by consumers</b>. Differently to fiat stablecoins, where the price is captured from an external market, CryptoCommodities allow a natural price formation performed by a required underlying market of the commodity. This guarantees <b>no relative price distortion other than consumers will</b>.</p>
										<p className="font-italic text-muted mb-2">Commodities backed cryptocurrencies hold <a href="/docs/whitepaper#31-the-underlying-asset">different features to a stablecoin</a> and are eligible to participate into the price system of the adopting jurisdiction.</p>
										<p className="font-italic text-muted mb-2"><b>Catallactic advocates for a <b>built-in price formation</b> as a basis to deliver true <b>value decentralization</b>. Stablecoins are centralized because they are pegged to a fiat price formed in international markets</b>.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab1" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										<h4 className="font-italic mb-4">Ready to Use for Issuers</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Catallactic aims to relief CryptoCommodity issuers of the burden to define principles, acquire know-how, develop tools and design processes to issue tokens backed by the value of their underlying assets. Instead, we create an opinionated system, but maintain configurability, which allows cryptocurrency issuers focusing on their core business.</p>
										<p className="font-italic text-muted mb-2">We deliver a <b>Tokenization Platform</b> which allows adopters to issue and manage their CryptoCommodity without the technical burden.</p>
										<p className="font-italic text-muted mb-2">The outcomes from Catallactic are Open Source and will allow private actors to build additional tools, plugins or know-how that can complement Catallactic deliverables.</p>
									</div>

									<div className="tab-pane fade shadow rounded bg-white p-5" id="whytab2" role="tabpanel" aria-labelledby="v-pills-local-tab">
										<h4 className="font-italic mb-4">Local Competition</h4>
										<hr/>
										<p className="font-italic text-muted mb-2">Different communities have different monetary requirements and commodities availability. To enable fine tuning of the monetary availability, CryptoCommodities should be issued and applicable at <b>local scope by local actors</b>. This provides a valuable tool for community driven entrepreneurship.</p>
										<p className="font-italic text-muted mb-2">Single currencies as Bitcoin represent a single point of failure and a evident target for scammers and censonship. To deliver censorship resistance and suitAble price formation, CryptoCommodities are thought to be <b>issued by multiple actors and in full competition</b>, relying on the market the price formation task.</p>
										<p className="font-italic text-muted mb-2">A <b>CryptoCommodity algebra</b> provides technical support for real world use cases as merges and acquisitions or CryptoCommodity splits.</p>
									</div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
