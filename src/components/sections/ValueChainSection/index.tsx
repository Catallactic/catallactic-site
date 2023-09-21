import React from 'react';
import styles from './styles.module.css';

export default function ValueChainSection(): JSX.Element {
  return (
    <section className={styles.services}>

      <div className="container">

				<div className="text-center pb-1 my-3">
					{<div className="h1 fw-bold color-theme-reverse2">Lifecycle Coverage</div>}
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Catallactic aims to cover the full lifecycle of a commodities-backed token</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="Tokenization" src="/img/blockchain.svg" height={100}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Tokenization</h3>
							<p>Learn the principles and practices to capture the value of your commodity into your commodity-backed cryptocurrency with the highest standards.</p>
							<a className='d-block btn btn-lg mt-4' href='/docs/tokenization/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="Funding" src="/img/funding.svg" width={100}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Funding</h3>
							<p>Get funds from investors to execute your project and return a profit to the investors and value for society.</p>
							<a className='d-block btn btn-lg mt-4' href='docs/funding/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="Trading" src="/img/trading.svg" width={100}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Negotiation</h3>
							<p>Use the price formation mechanism of your underlying market to value your cryptocurrency without side effects</p>
							<a className='d-block btn btn-lg mt-4' href='docs/negotiation/intro' role='button'>Learn More</a>
						</div>
					</div>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">
					<div className="col col--4 ">
						<div className="text--center">
						<img className="featureSvg__8YW" alt="Operations" src="/img/operations.svg" width={100}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Operations</h3>
							<p>Your cryptocurrency will work a barebone for your marketplapce. Learn the mechanism to distribute your token to its users.</p>
							<a className='d-block btn btn-lg mt-4' href='docs/distribution/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="DeFi" src="/img/defi.svg" width={100}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>DeFi Services</h3>
							<p>Deliver the value of your commodity back to the society in a decentralized manner to increase financial inclusion.</p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="Crowdsolving" src="/img/crowdsolving.svg" width={100}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Crowdsolving</h3>
							<p>Apply the framework to other commodities to enable citizens funding and solving their own problems.</p>
							<a className='d-block btn btn-lg mt-4' href='docs/crowdsolving/intro' role='button'>Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
