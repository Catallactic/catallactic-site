import React from 'react';
import styles from './styles.module.css';

export default function AdoptersSections(): JSX.Element {
  return (
    <section className={styles.services}>
      <div className="container">

				<div className="text-center pb-1 mb-4">
					 <div className="h1 fw-bold color-theme-reverse2">Adopters</div> 
					<p className="h3 color-theme-reverse1 mt-5 lh-base">We build for the following projects. Add your commodities based project to the list.</p>
				</div>

				<div className="row margin-vert--xl feature_eSJM">

					<div className="col col--6">
						<div className="text--center padding-horiz--md">
							<h3>GasClick / CryptoGas</h3>
							<p>GasClick is tokenizing LPG orders with its currency CryptoGas. </p>
							<a className='d-block btn btn-lg mt-4' href='https://gasclick.net/' role='button'>Go to GasCLick</a>
						</div>
					</div>

					<div className="col col--6">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://gasclick.pe/img/cryptogas.webp" width={300}/>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
