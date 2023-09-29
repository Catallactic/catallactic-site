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

					<div className="col col--6 my-auto d-flex">
						<div className="text--center padding-horiz--md">
							<h1 className="mb-4">GasClick / CryptoGas</h1>
							<p>GasClick is tokenizing LPG orders with its currency CryptoGas. </p>
							<p>Merging the new cryptoeconomy and the traditional economy. By leveraging the value already existing on LPG consumption, we tokenize, capture it and offer to worldwide investors. A match made in heaven. </p>
							<p>GasClick offers a <a href="https://gasclick.net/whitepaper_9investors.html" target='_blank'>500x bonus</a> in first round if the token is able to capture price. Here is the <a href="https://gasclick.net/litepaper_en.html" target='_blank'>litepaper</a>. </p>
							<a className='d-block btn btn-lg mt-4' href='https://gasclick.net/' role='button'>Go to GasClick</a>
						</div>
					</div>

					<div className="col col--6 my-auto d-flex  justify-content-center">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="https://gasclick.pe/img/cryptogas.webp" width={300}/>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
