import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type TokenizationItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const TokenizationList: TokenizationItem[] = [
  {
    title: 'Network Decentralization',
    Svg: require('@site/static/img/blockchain.svg').default,
    description: (
      <>
        We analyse DLT Networks to find the more decentralized ones as well as interoperability and integration for commodity backed tokens.
				<a className='d-block btn btn-lg mt-4' href='docs/tokenization/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
  {
    title: 'Token Decentralization',
    Svg: require('@site/static/img/cryptocurrency.svg').default,
    description: (
      <>
        Capturing commodities value requires supply, liquidity and reserves planning and decisions that are far from trivial.
				<a className='d-block btn btn-lg mt-4' href='docs/suite/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
	{
    title: 'Wallets Decentralization',
    Svg: require('@site/static/img/wallet.svg').default,
    description: (
      <>
        Interacting with networks, custoding your tokens and allowing currency operations requires a good understanding of Wallets offer.
				<a className='d-block btn btn-lg mt-4' href='docs/defi/intro' role='button'>
					Learn More
				</a>
      </>
    ),
  },
];

function Tokenization({title, Svg, description}: TokenizationItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.tokenizationSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageTokenization(): JSX.Element {
  return (
    <section className={styles.tokenization}>

      <div className="container">

				<div className="text-center pb-1">
					<div className="h1 fw-bold color-theme-reverse2">Catallactic Tokenization</div>
					<p className="h3 color-theme-reverse1 mt-5 lh-base">The main goal is to create the unbiased currency definitions, that is, Commodity Backed Units of Value. This is a multifaceted task that must be executed in a Progressive approach.</p>
				</div>

        <div className="row">
          {TokenizationList.map((props, idx) => (
            <Tokenization key={idx} {...props} />
          ))}
        </div>
      </div>

    </section>
  );
}
