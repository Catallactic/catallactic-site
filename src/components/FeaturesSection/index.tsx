import React from 'react';
import styles from './styles.module.css';

export default function FeaturesSection(): JSX.Element {
  return (
    <section className={styles.tokenization}>

			<div className="container">

				<div className="text-center pb-1 mb-4">
					<div className="h1 fw-bold color-theme-reverse2">Features</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">For the benefit of stakeholders, some constraints must be build-in into the model.</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" width={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Security</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://cdn-icons-png.flaticon.com/512/8226/8226075.png" width={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Compliance</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--4">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://cdn-icons-png.flaticon.com/512/1317/1317755.png" width={120}/>
						</div>
						<div className="text--center padding-horiz--md">
							<h3>Reporting</h3>
							<p>Sequence empowers users to create multi-application extract-transform-load workflows with a single configuration. Technicians no longer need to learn multiple scripting or programming languages, or trawl through API documentation for the applications they want to automate. </p>
							<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>Learn More</a>
						</div>
					</div>
				</div>

			</div>
</section>


  );
}