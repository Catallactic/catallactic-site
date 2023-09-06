import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeaturesSection from '@site/src/components/FeaturesSection';
import SuiteSection from '@site/src/components/SuiteSection';
import ValueChainSection from '@site/src/components/ValueChainSection';
import DecentralizationSection from '@site/src/components/DecentralizationSection';
import MaturityModelSection from '@site/src/components/MaturityModelSection';
import AdoptersSections from '@site/src/components/AdoptersSection';

import 'bootstrap/dist/css/bootstrap.css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
		<header style={{ paddingLeft: 0 }}>
			<div className='text-center bg-image' style={{ /* backgroundPosition: 'center', */backgroundSize: 'cover', backgroundImage: "url('img/catallactic-banner.jpg')", height: 600,  }} >
				<div className={styles.mask} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
					<div className='d-flex justify-content-center align-items-center h-100'>
						<div className='text-white'>
							<h1 className='mb-5'>Catallactic (under construction)</h1>
							<h1 className='mb-5'>Let's build a new economy</h1>
							<h4 className='mb-5'>... because <i>'only fools confuse value and price'</i>. Antonio Machado.</h4>
							<a className='btn btn-outline-light btn-lg me-2' href='https://github.com/Catallactic' role='button'>
								Access on Github
							</a>
							<a className='btn btn-outline-light btn-lg ms-2' href='https://discord.gg/eN5q7haa' role='button'>
								Access on Discord
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
				<ValueChainSection />
        <DecentralizationSection />
        <MaturityModelSection />
        <FeaturesSection />
        <SuiteSection />
        <AdoptersSections />
      </main>
    </Layout>
  );
}
