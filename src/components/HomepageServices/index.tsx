import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ServiceItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const ServiceList: ServiceItem[] = [{
    title: 'Catallactic Tokenization',
    Svg: require('@site/static/img/transfer.svg').default,
    description: (
      <>
        Faithully capture the underlying value of your commodity considering all aspects of Progressive Decentralization.
				<a className='d-block btn btn-lg mt-4' href='docs/tokenization/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  }, {
    title: 'Catallactic Suite',
    Svg: require('@site/static/img/transfer.svg').default,
    description: (
      <>
        Manage the lifecycle of your Commodities backed Token, from funding to vesting, trading and rewards with Catallactic Suite.
				<a className='d-block btn btn-lg mt-4' href='docs/suite/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  }, {
    title: 'Catallactic DeFi Services',
    Svg: require('@site/static/img/transfer.svg').default,
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

function Service({title, Svg, description}: ServiceItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.servicesSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageServices(): JSX.Element {
  return (
    <section className={styles.services}>

      <div className="container">

				<div className="text-center pb-1">
					<div className="h1 fw-bold color-theme-reverse2">DeFi Services</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">The main goal is to create the perfect currency definitions, that is, Commodity Backed Units of Value. This is a multifaceted task that must be realised in iterative loops.</p>
				</div>

        <div className="row">
          {ServiceList.map((props, idx) => (
            <Service key={idx} {...props} />
          ))}
        </div>

      </div>
    </section>
  );
}
