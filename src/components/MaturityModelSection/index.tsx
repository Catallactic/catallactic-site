import React from 'react';
import styles from './styles.module.css';

export default function MaturityModelSection(): JSX.Element {
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
						<div className="text--center padding-horiz--md">
							<h3>Maturity Model</h3>
							<p>Different currencies can have different levels of capture and decentralization so we must create a maturity model to incentivize good practices. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--6">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://acuityppm.com/wp-content/webpc-passthru.php?src=https://acuityppm.com/wp-content/uploads/2019/09/PPM-Maturity-Model2-1024x791-1-1024x791.jpg&nocache=1" />
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}