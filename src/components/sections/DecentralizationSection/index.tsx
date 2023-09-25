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

						<div className="text--center padding-horiz--md padding-vert--md">
							<h1 className="mb-4">Progressive Decentralization</h1>
							<h5>Differently to <a href="https://a16zcrypto.com/posts/article/progressive-decentralization-a-high-level-framework/" target="_blank">mainstream vision</a>, we think that decentralization in the currency and ecosystem, should be, ideally, provided from inception. </h5>
							<h5>We also think that decentralization patterns can be standard across the industry, instead of company specific. However, we do not have yet the dimensions for this multifaceted decentralization and this is <a href="/docs/principles/decentralization/overview">core mission</a> for this community. </h5>
							<h5>Catallactic aims to identify the <b>requirements for full decentralization</b> and integrate them, out of the box, into the Catallactic Framework and perform continuous monitoring and reporting. </h5>
							<a className='d-block btn btn-lg mt-4' href='/docs/principles/decentralization/overview' role='button'>Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
