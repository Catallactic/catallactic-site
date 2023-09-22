import React from 'react';
import styles from './styles.module.css';

export default function DecentralizationSection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

{/* 
				<div className="text-center pb-1 mb-4">
					<div className="h1 fw-bold color-theme-reverse2">Features</div> 
					<p className="h3 color-theme-reverse1 mt-5 lh-base">The main goal is to create the unbiased currency definitions, that is, Commodity Backed Units of Value. This is a multifaceted task that must be executed in a Progressive approach.</p>
				</div>
*/}

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--6">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://i0.wp.com/antylles.com/wp-content/uploads/2019/04/decentralization.png?fit=790%2C516&ssl=1" />
						</div>
					</div>

					<div className="col col--6">

						<div className="text--center padding-horiz--md">
							<h3>Progressive Decentralization</h3>
							<p>Once the value from commodities has been captured, we must preserve it in a decentralized way. This is a a multifaceted task that must be executed in a progressive approach. </p>
							<a className='d-block btn btn-lg mt-4' href='/docs/principles/decentralization/overview' role='button'>Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
