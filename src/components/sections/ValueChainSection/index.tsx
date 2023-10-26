import React from 'react';
import styles from './styles.module.css';

export default function ValueChainSection(): JSX.Element {
  return (
    <section className={styles.services}>

      <div className="container">

				<div className="text-center pb-1 my-3">
					{<div className="h1 fw-bold color-theme-reverse2">Value Chain Coverage</div>}
					<p className="h3 color-theme-reverse1 m-5 lh-base">Catallactic aims to cover the full lifecycle of a cryptocommodity</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-0">
						<div className="text--center pb-3">
							<img className="featureSvg__8YW" alt="Tokenization" src="/img/blockchain.svg" height={100}/>
						</div>
						<div className="text--center px-0">
							<h4 className={styles.clippedelement}>Tokenization</h4>
							<p className="pt-3">Learn the principles and practices to capture the value of your commodity into your cryptocommodity.</p>
							<a className='btn btn-lg mt-3' href='/docs/tokenization/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-0">
						<div className="text--center pb-3">
							<img className="featureSvg__8YW" alt="Funding" src="/img/funding.svg" width={100}/>
						</div>
						<div className="text--center px-0">
							<h4 className={styles.clippedelement}>Funding</h4>
							<p className="pt-3">Get funds from investors to execute your project and return a profit to the investors and value for society.</p>
							<a className='btn btn-lg mt-3' href='docs/funding/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-0">
						<div className="text--center pb-3">
							<img className="featureSvg__8YW" alt="Trading" src="/img/trading.svg" width={100}/>
						</div>
						<div className="text--center px-0">
							<h4 className={styles.clippedelement}>Negotiation</h4>
							<p className="pt-3">Use the price formation mechanism of your underlying market to value your cryptocurrency.</p>
							<a className='btn btn-lg mt-3' href='docs/negotiation/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-0">
						<div className="text--center pb-3">
							<img className="featureSvg__8YW" alt="Operations" src="/img/operations.svg" width={100}/>
						</div>
						<div className="text--center px-0">
							<h4 className={styles.clippedelement}>Distribution</h4>
							<p className="pt-3">Choose the best techniques to distribute your cryptocommodity as the barebone for your marketplapce.</p>
							<a className='btn btn-lg mt-3' href='docs/distribution/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-0">
						<div className="text--center pb-3">
							<img className="featureSvg__8YW" alt="DeFi" src="/img/defi.svg" width={100}/>
						</div>
						<div className="text--center px-0">
							<h4 className={styles.clippedelement}>DeFi Services</h4>
							<p className="pt-3">Contribute to financial inclusion by delivering the value of your commodity back to the society.</p>
							<a className='btn btn-lg mt-3' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 col-lg-2 px-0">
						<div className="text--center pb-3">
							<img className="featureSvg__8YW" alt="Crowdsolving" src="/img/crowdsolving.svg" width={100}/>
						</div>
						<div className="d-flex flex-column text--center px-0">
							<h4 className={styles.clippedelement}>Crowdsolving</h4>
							<p className="pt-3">Apply the framework to other commodities to enable citizens funding and solving their own problems.</p>
							<a className='btn btn-lg align-bottom' href='docs/crowdsolving/intro' role='button'>Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
