import React from 'react';
import styles from './styles.module.css';

export default function SoundMoneySection(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
					<div className="h1 fw-bold color-theme-reverse2">Quality Digital Money</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Catallactic represents the monetary version of Fungible Standard aiming to build a Quality Money Framework. </p>
				</div>

				<div className="row margin-bottom--lg feature_eSJM">

					<div className="col col--6 my-auto d-flex">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://t4.ftcdn.net/jpg/16/95/06/35/360_F_1695063506_ZGroU3VyWTBaBWMtJ5elllLwr8bpR56N.jpg" />
						</div>
					</div>

					<div className="col col--6 my-auto d-flex">
						<div className="padding-horiz--md">
							<h1 className="mb-4">Backed by Commodities</h1>
							<h5>We capture and expose the <b>intrinsic value</b> of the underlying commodity by binding a unit of the commodity to a unit of the CryptoCommodity</h5>
							<h5 className="my-4">By different reasons, all the existing tokens, fall short in delivering the funtions of a <b>Medium of Exchange</b> and this is preventing mainstream adoption and real world use cases.</h5>
							<h5>Crommodity combines the features of existing tokens aiming to become the first (crypto)currency representing Sound Money ever. The specifications have been written decades or centuries ago and we are in the time to apply this knowledge.</h5>
							<h5 className="my-4">Join us on the mission to design how the Digital Sound Money should look like.</h5>
							<a className='d-block btn btn-lg mt-4' href='/docs/yellowpaper' role='button' target="_blank">Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
