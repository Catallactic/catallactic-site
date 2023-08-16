import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import 'bootstrap/dist/css/bootstrap.css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
		<header style={{ paddingLeft: 0 }}>
			<div className='text-center bg-image' style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }} >
				<div className={styles.mask} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
					<div className='d-flex justify-content-center align-items-center h-100'>
						<div className='text-white'>
							<h1 className='mb-5'>Catallactic</h1>
							<h3 className='mb-5'>An open source framework and community to build commodity backed crypto currencies</h3>
							<h4 className='mb-5'>because <i>'every fool confuses value and price'</i>. Antonio Machado.</h4>
							<a className='btn btn-outline-light btn-lg' href='#!' role='button'>
								Call to action
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>




  );
}

    /*
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
				
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">Docusaurus Tutorial - 5min ⏱️</Link>
        </div>
				
      </div>
    </header>
		*/

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
