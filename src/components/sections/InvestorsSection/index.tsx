import React from 'react';
import styles from './styles.module.css';

export default function InvestorsSection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">


				<div className="text-center">
					 <div className="h1 fw-bold color-theme-reverse2">Investors</div> 
					<p className="h3 color-theme-reverse1 m-5 lh-base">To make this task easier for Catallactic Adopters, we include below a list of investors potentially interested in this kind of project. Ping us to add you to the list.</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--6">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/investors.jpg" width={440} />
						</div>
					</div>

					<div className="col col--6">

						<div className="padding-horiz--md margin-top--lg">
							<h3>Incubators</h3>
							<p className="text--left">You have an idea</p>
							<a className='d-block btn btn-lg p-0 m-0 ' href='/docs/funding/pitching/incubators' role='button'>Access the list</a>
						</div>

						<div className="padding-horiz--md margin-top--lg">
							<h3>Accelerators</h3>
							<p className="text--left">You have an MVC and some traction.</p>
							<a className='d-block btn btn-lg p-0 m-0 ' href='/docs/funding/pitching/accelerators' role='button'>Access the list</a>
						</div>

						<div className="padding-horiz--md margin-top--lg">
							<h3>VCs</h3>
							<p className="text--left">You want to grow</p>
							<a className='d-block btn btn-lg p-0 m-0 ' href='/docs/funding/pitching/vc' role='button'>Access the list</a>
						</div>

					</div>

				</div>

      </div>
    </section>
  );
}
