import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WhySection from '@site/src/components/sections/WhySection';
import ValueChainSection from '@site/src/components/sections/ValueChainSection';
import DecentralizationSection from '@site/src/components/sections/DecentralizationSection';
import MaturityModelSection from '@site/src/components/sections/MaturityModelSection';
import TokenizationMapSection from '@site/src/components/sections/TokenizationMapSection';
import FeaturesSection from '@site/src/components/sections/FeaturesSection';
import SuiteSection from '@site/src/components/sections/SuiteSection';
import EcosystemSection from '@site/src/components/sections/EcosystemSection';
import AdoptersSections from '@site/src/components/sections/AdoptersSection';
import InvestorsSection from '@site/src/components/sections/InvestorsSection';
import Survey from '@site/src/components/sections/Survey';

import 'bootstrap/dist/css/bootstrap.css';

import styles from './index.module.css';
import BlogSection from '../components/sections/BlogSection';
import PriceSystemSection from '../components/sections/PriceSystem/index';
import SoundMoneySection from '../components/sections/SoundMoneySection/index';

// https://static.wixstatic.com/media/16b963_cdd4fbbdfc064f3c977862a8b6b96d3b~mv2.jpg/v1/fill/w_640,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/16b963_cdd4fbbdfc064f3c977862a8b6b96d3b~mv2.jpg
// https://cdn.hswstatic.com/gif/bartering.jpg
// https://www.pjsglobal.com/wp-content/uploads/2019/06/banner-petro2.jpg
// https://www.ametheus.com/wp-content/uploads/2020/11/Agro-1024x342.jpg
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
		<header style={{ paddingLeft: 0 }}>
			<div className='text-center bg-image' style={{ /* backgroundPosition: 'center', */backgroundSize: 'cover', backgroundImage: "url('https://static.wixstatic.com/media/16b963_cdd4fbbdfc064f3c977862a8b6b96d3b~mv2.jpg/v1/fill/w_640,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/16b963_cdd4fbbdfc064f3c977862a8b6b96d3b~mv2.jpg')", }} >
				<div className={styles.mask} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
					<div className='row d-flex justify-content-center align-items-center h-100 m-0 m-md-5'>
						<div className='col-12 col-md-6 m-5'>
							{/* <img src='https://www.fpmarkets.com/wp-content/themes/fptheme/image-2020/commodities/commodities-img.png'></img> */}
							<img src='img/commodities1.png'></img>
						</div>
						<div className='col-12 col-md-4 text-white'>
							<h1 className='mb-5'>Catallactic</h1>
							<h2 className='mb-5'>Building a <b>Real Economy</b> backed by <b>Commodities</b></h2>
							<h4 className='mb-5'>... because <i>'only fools confuse price and value'</i>. Antonio Machado.</h4>
							<a className='btn btn-outline-light btn-lg m-3 actionbutton' href='https://catallactic.github.io/catallactic-admin/' role='button' target={'_blank'}>Token Platform</a>
							<a className='btn btn-outline-light btn-lg m-3 actionbutton' href='https://discord.gg/jY4XbrktCa' role='button' target={'_blank'}>Access on Discord</a>
						</div>
						<div className='d-none col-md-2'></div>
					</div>
				</div>
			</div>
		</header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`First ever Digital Representative Money for Real Economy.`} description="An Open Source Framework for Decentralization in Value.">
      <HomepageHeader />
      <main>
				<WhySection/>
        <FeaturesSection />
        <DecentralizationSection />
        <SoundMoneySection />
        <PriceSystemSection />
				<ValueChainSection />
				{/* <TokenizationMapSection/> */}
				<EcosystemSection />
        <SuiteSection />
        <AdoptersSections />
				{/* <InvestorsSection /> */}
				{/* <BlogSection /> */}
				<Survey/>
      </main>
    </Layout>
  );
}
