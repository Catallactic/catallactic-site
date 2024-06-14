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
						<div className="padding-horiz--md">
							<h1 className="mb-4">Participate in the Price System</h1>
							<h5>A medium of exchange should technically be interchangeable, transportable, and reliable. Additionally, a successful MoE, has economic requirements as having a <b>consistent stable value</b>.</h5>
							<h5 className="my-4">By being stable, it will be <a href="https://en.wikipedia.org/wiki/Gresham%27s_law" target="_blank">more appreciated by economic agents</a>. Additionally, a stable MoE will have a chance to participate in the <b>price system</b>, coordinating the decisions of consumers, producers, and owners of productive resources and allocating resources in the more efficient way.</h5>
							<h5>CryptoCommodity is designed to be stable by capturing the <b>subjective value of the underlying asset</b>.</h5>
							<a className='d-block btn btn-lg mt-4' href='/docs/Whitepaper' role='button' target="_blank">Learn More</a>
						</div>
					</div>

					<div className="col col--6 my-auto d-flex">
						<div className="text--center">
							<img className="featureSvg__8YW" alt="ETL Simplified" src="/img/pricesystem.webp" />
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
