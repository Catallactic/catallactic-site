import React from 'react';
import styles from './styles.module.css';

export default function SuiteSction(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">


				<div className="text-center">
					 <div className="h1 fw-bold color-theme-reverse2">Catallactic Suite</div> 
					<p className="h3 color-theme-reverse1 m-5 lh-base">Catallactic Suite will enable interaction with described features</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--6 my-auto d-flex justify-content-center">
						<div className="text--center">
							<a href='https://catallactic.github.io/catallactic-admin/' target={'_blank'}>
								<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/dappmin/ico_fea.png" />
							</a>
						</div>
					</div>

					<div className="col col--6">

						<div className="padding-horiz--md margin-top--lg shadow">
							<h3>Catallactic Admin DApp</h3>
							<p className="text--left ">Faithully capture the underlying value of your commodity considering all aspects of Progressive Decentralization.</p>
							<div className="container text-center">
								<a className='btn btn-lg p-0 m-0 mx-3 ' href='docs/suite/intro' role='button'>Learn More</a>
								<a className='btn btn-lg p-0 m-0 mx-3' href='https://catallactic.github.io/catallactic-admin/' role='button' target={'_blank'}>Access Demo</a>
							</div>
						</div>

						<div className="padding-horiz--md margin-top--lg shadow">
							<h3>Catallactic Purchase Widgets</h3>
							<p className="text--left">Manage the lifecycle of your Commodities backed Token, from funding to vesting, trading and rewards with Catallactic Suite.</p>
							<a className='d-block btn btn-lg p-0 m-0' href='docs/defi/intro' role='button'>Learn More</a>
						</div>

						<div className="padding-horiz--md margin-top--lg shadow">
							<h3>Catallactic Vesting Tracker</h3>
							<p className="text--left">Deliver the value captured by your token back to the community as DeFi services, including lending, launchpads, transfers, payments, cards...</p>
							<a className='d-block btn btn-lg p-0 m-0' href='docs/defi/intro' role='button'>Learn More</a>
						</div>

					</div>

				</div>

      </div>
    </section>
  );
}
