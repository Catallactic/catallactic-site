import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageTokenization from '@site/src/components/HomepageTokenization';
import HomepageSuite from '@site/src/components/HomepageSuite';
import HomepageServices from '@site/src/components/HomepageServices';

import 'bootstrap/dist/css/bootstrap.css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
		<header style={{ paddingLeft: 0 }}>
			<div className='text-center bg-image' style={{ /* backgroundPosition: 'center', */backgroundSize: 'cover', backgroundImage: "url('https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5ce44c8b-064e-4718-b8e6-b2a426a61925_1920x1080.png')", height: 400,  }} >
				<div className={styles.mask} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
					<div className='d-flex justify-content-center align-items-center h-100'>
						<div className='text-white'>
							<h1 className='mb-5'>Catallactic</h1>
							<h3 className='mb-5 mx-5'>An Open Source Framework and Community to capture the value of Commodity Assets, build <b>Commodity-backed Crypto-Currencies</b> and provide DeFi Services back to the Society</h3>
							<h4 className='mb-5'>because <i>'only fools confuse value and price'</i>. Antonio Machado.</h4>
							<a className='btn btn-outline-light btn-lg me-2' href='https://github.com/Catallactic!' role='button'>
								Access on Github
							</a>
							<a className='btn btn-outline-light btn-lg ms-2' href='#!' role='button'>
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
        <HomepageTokenization />
        <HomepageSuite />
        <HomepageServices />
      </main>
    </Layout>
  );
}
