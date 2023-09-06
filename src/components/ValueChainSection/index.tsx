import React from 'react';
import styles from './styles.module.css';

export default function ValueChainSection(): JSX.Element {
  return (
    <section className={styles.services}>

      <div className="container">

				<div className="text-center pb-1 my-3">
					{<div className="h1 fw-bold color-theme-reverse2">Capturing Commodities Value</div>}
					<p className="h3 color-theme-reverse1 mt-5 lh-base">An Open Source Framework and Community to capture the value of Commodity Assets, build Commodity-backed Crypto-Currencies and provide DeFi Services back to the Society</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/features/undraw_active_options_re_8rj3.svg" />
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Tokenization</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/features/undraw_active_options_re_8rj3.svg" />
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Funding</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/features/undraw_active_options_re_8rj3.svg" />
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Negotiation</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">
					<div className="col col--4 col--offset-2">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/features/undraw_active_options_re_8rj3.svg" />
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Operations</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/features/undraw_active_options_re_8rj3.svg" />
						</div>
						<div className="text--center padding-horiz--md">
							<h3>DeFi Services</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>
				</div>

      </div>
    </section>
  );
}
