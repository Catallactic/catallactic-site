import React from 'react';
import styles from './styles.module.css';

export default function PriceSystemSection(): JSX.Element {
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

					<div className="col col--6 my-auto d-flex">
						<div className="text--center padding-horiz--md">
							<h1 className="mb-4">Composing a Price System</h1>
							<h5>A Medium of Exchange is not just something you can transfer in exchange of a good or service. A successful MoE must meet some conditions and features which enable a suitable interaction between economic actors. </h5>
							<h5>This site and framework are dedicated to design and support CryptoCommodity, which is the only token pattern that can become a cryptocurrency representing Sound Money. </h5>
							<a className='d-block btn btn-lg mt-4' href='/book/Tokenization%20IV%20-%20Maturity%20Model#2-a-tokenization-maturity-model' role='button'>Learn More</a>
						</div>
					</div>

					<div className="col col--6 my-auto d-flex">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/tokenization_maturity_model_seal_table.svg" />
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
