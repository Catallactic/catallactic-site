import React from 'react';
import styles from './styles.module.css';

export default function FeaturesSection(): JSX.Element {
  return (
    <section className={styles.tokenization}>

			<div className="container">

				<div className="text-center pb-1 mb-4">
					<div className="h1 fw-bold color-theme-reverse2">Built on Fungible Standard</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Catallactic is technology agnostic, inheriting its technical architecture from proven <a href="https://www.fungible.design/" target="_blank">Fungible Standard Layers</a>.</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/principles.png" height={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Principles</h3>
							<p>Faithful capture and protection of decentralized value, information disclosure and friendliness availability principles as inherited from Fungible Stabdard Layers.</p>
							<a className='d-block btn btn-lg mt-4' href='https://www.fungible.design/docs/stack/principles/intro' role='button' target="_blank">Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/ecosystem.png" height={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Ecosystem</h3>
							<p>With juristictions increasingly stressing legilation around cryptocurrencies, any crypto must allow optional and configurable compliance mechanisms without reinvnting the wheel. </p>
							<a className='d-block btn btn-lg mt-4' href='https://www.fungible.design/docs/stack/ecosystem/intro' role='button' target="_blank">Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/value-chain.png" height={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Value Chain</h3>
							<p>Investor and users need fluid and trustfull information about the currency they are using. We must include configurable reports with enabled interoperability formats between servers.</p>
							<a className='d-block btn btn-lg mt-4' href='https://www.fungible.design/docs/stack/application/intro' role='button' target="_blank">Learn More</a>
						</div>
					</div>
				</div>

			</div>
</section>


  );
}