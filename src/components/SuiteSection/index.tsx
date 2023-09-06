import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type SuiteItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const SuiteList: SuiteItem[] = [
  {
    title: 'Catallactic Admin DApp',
    Svg: require('@site/static/img/admin.svg').default,
    description: (
      <>
        Faithully capture the underlying value of your commodity considering all aspects of Progressive Decentralization.
				<a className='d-block btn btn-lg mt-4' href='docs/tokenization/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
  {
    title: 'Catallactic Purchase Widgets',
    Svg: require('@site/static/img/purchase.svg').default,
    description: (
      <>
        Manage the lifecycle of your Commodities backed Token, from funding to vesting, trading and rewards with Catallactic Suite.
				<a className='d-block btn btn-lg mt-4' href='docs/suite/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
	{
    title: 'Catallactic Vesting Tracker',
    Svg: require('@site/static/img/vesting.svg').default,
    description: (
      <>
        Deliver the value captured by your token back to the community as DeFi services, including lending, launchpads, transfers, payments, cards...
				<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
];

function Suite({title, Svg, description}: SuiteItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.suiteSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function SuiteSection(): JSX.Element {
  return (
    <section className={styles.suite}>

      <div className="container">

				<div className="text-center pb-1">
					<div className="h1 fw-bold color-theme-reverse2">Catallactic Suite</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">Catallactic Suite is the tool that allows interaction with described features</p>
				</div>

        <div className="row">
          {SuiteList.map((props, idx) => (
            <Suite key={idx} {...props} />
          ))}
        </div>

      </div>
    </section>
  );
}
