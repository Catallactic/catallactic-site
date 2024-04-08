import React from 'react';
import styles from './styles.module.css';

export default function InvestorsSection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">


				<div className="text-center">
					 <div className="h1 fw-bold color-theme-reverse2">Investors</div> 
					<p className="h3 color-theme-reverse1 m-5 lh-base">We include below a list of <b>crypto investors</b> potentially interested in value tokenization projects. Ping us to add you to the list.</p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--6 my-auto d-flex justify-content-center">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/investors.jpg" width={440} />
						</div>
					</div>

					<div className="col col--6">

						<div className="padding-horiz--md margin-top--lg shadow">
							<h3>Web3 Incubator / Accelerator</h3>
							<p className="text--left">You need help to plan the fundraising. Only incubators / accelerators ending in an ICO are included.</p>
							<a className='d-block btn btn-lg p-0 m-0 ' href='/docs/funding/pitching/incubators' role='button'>Access the list</a>
						</div>

						<div className="padding-horiz--md margin-top--lg shadow">
							<h3>Launchpads</h3>
							<p className="text--left">They host project launchs, make a due diligence and bring investors. </p>
							<a className='d-block btn btn-lg p-0 m-0 ' href='/docs/funding/launchpads' role='button'>Access the list</a>
						</div>

						<div className="padding-horiz--md margin-top--lg shadow">
							<h3>Private / presale / ICO Investor</h3>
							<p className="text--left">Only investors in tokens are included.</p>
							<a className='d-block btn btn-lg p-0 m-0 ' href='/docs/funding/pitching/investors' role='button'>Access the list</a>
						</div>

					</div>

				</div>

      </div>
    </section>
  );
}
