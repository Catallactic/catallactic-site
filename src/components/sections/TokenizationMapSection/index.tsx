import React from 'react';
import styles from './styles.module.css';

export default function TokenizationMapSection(): JSX.Element {
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
							<table className="table w-auto mx-auto fs-6">
								<thead className="thead-dark">
									<tr>
										<th scope="col"></th>
										<th scope="col" colSpan={6}>Tokenization Maturity</th>
									</tr>
									<tr>
										<th scope="col">Tokenization Assets</th>
										<th scope="col">Unbacked</th>
										<th scope="col">Utility</th>
										<th scope="col">Yield</th>
										<th scope="col">Price</th>
										<th scope="col">Value</th>
										<th scope="col">Asset</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Natural Resources</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>X</td>
										<td></td>
									</tr>
									<tr>
										<td>Physical Assets</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>X</td>
										<td></td>
									</tr>
									<tr>
										<td>Digital Assets</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>Financial Assets</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>Certifications</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="col col--6">
						<div className="text--center padding-horiz--md">
							<h2 className="mb-4">Tokenization Map</h2>
							<p>Tokenization Map represents the Universe of Tokenization, including tokenizable assets with all tokenization models. </p>
							<p>Only fungible assets are suitable for value capture.</p>
							<a className='d-block btn btn-lg mt-4' href='/book/Tokenization%20IV%20-%20Maturity%20Model#4-tokenization-map' role='button'>Learn More</a>
						</div>
					</div>

				</div>

      </div>
    </section>
  );
}
