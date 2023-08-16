import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Catallactic Framework',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Manage the lifecycle of your Commodities backed Token, from funding to vesting, trading and rewards with Catallactic Framework.
				<a className='d-block btn btn-lg mt-4' href='http://localhost:3000/docs/tokens/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
  {
    title: 'Progresive Decentralization',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Make informed infrastructure, governance decisions to faithfully capture the underlying value of your commodity for your users.
				<a className='d-block btn btn-lg mt-4' href='http://localhost:3000/docs/decentralization/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
  {
    title: 'Catallactic Maturity Model',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Many underlying values, many value capture models and many decentralization levels must be organized to enable further comparison.
				<a className='d-block btn btn-lg mt-4' href='http://localhost:3000/docs/cmm/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
