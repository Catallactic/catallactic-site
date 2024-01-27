import React, { useState } from 'react';
import styles from './styles.module.css';

// https://ardislu.dev/google-forms-frontend
// https://dev.to/utkarshdhiman48/custom-frontend-for-google-form-456l
function Survey2() {
  return (
		<div style={{ position: 'sticky', bottom: 0, marginLeft:'auto', width:'450px', height:'800px', background:'red', }}>
			<iframe src="https://docs.google.com/forms/d/1hvjbygCxdnClqvUq8yrznxVlcYpwWsvZdUmTEyyadOo/viewform?embedded=true" width="100%" height="100%" style={{ backgroundColor: '#fff', border:'1px solid #fff' }}>Loading…</iframe>
		</div>
  );
}

export const Survey = () => {

  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1756844336": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-yTCK-61O16XO5GzczpH0rcwf471sDX6vgxu_bXWGfP18Cg/formResponse?entry.1756844336=${formData["entry.1756844336"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
		.catch((err) => console.error(err));
  }

	// <div style={{ position: 'sticky', bottom: 0, marginLeft:'auto', width:'450px', height:'400px', background:'white', }}>
  return (
		<div style={{ position: 'sticky', bottom: 0, marginLeft:'auto', width:'450px', height:'400px', background:'white', }}>
				{submit ? (
          <div className="afterForm">Thanks for your contribution</div>
        ) : (




						<form onSubmit={handleSubmit} target="_self">

							<p>What do you think is the ideal money configuration?</p>

							<input type="radio" id="FIAT" name="entry.1756844336" value="FIAT" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="FIAT">A well managed national fiat currency issued by government</label><br/>

							<input type="radio" id="GLOBAL" name="entry.1756844336" value="GLOBAL" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="GLOBAL">A global currency issued by Global Monetary Authority</label><br/>

							<input type="radio" id="PLUS" name="entry.1756844336" value="PLUS" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="PLUS">Commodity-backed money (Gold Standard)  + Private Currencies Competition (free banking)</label><br/>

							<input type="radio" id="GOLD" name="entry.1756844336" value="GOLD" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="GOLD">Commodity-backed money (Gold Standard)</label><br/>

							<input type="radio" id="COMPE" name="entry.1756844336" value="COMPE" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="COMPE">Private Currencies Competition (free banking)</label><br/>

							<input type="radio" id="BTC" name="entry.1756844336" value="BTC" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="BTC">A fully decentralized global currency (e.g. bitcoin, monero)</label><br/>

							<input type="radio" id="TIME" name="entry.1756844336" value="TIME" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="TIME">Time backed currencies</label><br/>

							<input type="radio" id="ENERGY" name="entry.1756844336" value="ENERGY" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="ENERGY">Energy backed currencies</label><br/>

							<input type="radio" id="BARTER" name="entry.1756844336" value="BARTER" onClick={handleInputData("entry.1756844336")} />
							<label htmlFor="BARTER">No currencies</label><br/>

							<button type="submit">Submit</button>

						</form>




        )}
      </div>
  );
};