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

	// 0: showing button
	// 1: showing survey
	// 2: showing thanks
	// 3: showing nothing
  const [STATUS, setStatus] = useState(0);

	// ****************************************************************
	// handle status
	// ****************************************************************
	async function handleShowSurvey(e) {
		e.preventDefault();
		setStatus(1);
	}
	async function handleCloseSurvey(e) {
		e.preventDefault();
		setStatus(0);
	}
	async function handleCloseThanks(e) {
		e.preventDefault();
		localStorage.setItem('voted', 'true');
		setStatus(3);
	}

	// ****************************************************************
	// handle form
	// ****************************************************************
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
		setStatus(2);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-yTCK-61O16XO5GzczpH0rcwf471sDX6vgxu_bXWGfP18Cg/formResponse?entry.1756844336=${formData["entry.1756844336"]}`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
		.catch((err) => console.error(err));
		
  }

	// ****************************************************************
	// handle presentation
	// ****************************************************************
	// https://hasura.io/docs/latest/index/
	return (
		<div>
				{ localStorage.getItem('voted') != null ? (
					<div/>

				) : STATUS == 0 ? (
					<div className="chat-popup">
						<button className="open-chat-button" onClick={handleShowSurvey}>
							<svg className="sparkles-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px">
								<path d="m15.6968,12.4905l-2.8295,1.4148c-.8491.4245-1.5375,1.113-1.962,1.962l-1.4148,2.8295c-.2021.4042-.7789.4042-.981,0l-1.4148-2.8295c-.4245-.8491-1.113-1.5375-1.962-1.962l-2.8295-1.4148c-.4042-.2021-.4042-.7789,0-.981l2.8295-1.4148c.8491-.4246,1.5375-1.113,1.962-1.9621l1.4148-2.8295c.2021-.4042.7789-.4042.981,0l1.4148,2.8295c.4245.8491,1.113,1.5375,1.962,1.9621l2.8295,1.4148c.4042.2021.4042.7789,0,.981Zm6.1732,6.2993l-1.2127-.6063c-.3639-.182-.6589-.477-.8409-.8409l-.6063-1.2126c-.0866-.1732-.3338-.1732-.4204,0l-.6063,1.2126c-.1819.3639-.477.6589-.8409.8409l-1.2127.6063c-.1732.0866-.1732.3338,0,.4204l1.2127.6063c.3639.1819.6589.477.8409.8409l.6063,1.2126c.0866.1732.3338.1732.4204,0l.6063-1.2126c.1819-.3639.477-.6589.8409-.8409l1.2127-.6063c.1732-.0866.1732-.3338,0-.4204Zm0-14l-1.2127-.6063c-.3639-.182-.6589-.477-.8409-.8409l-.6063-1.2126c-.0866-.1732-.3338-.1732-.4204,0l-.6063,1.2126c-.1819.3639-.477.6589-.8409.8409l-1.2127.6063c-.1732.0866-.1732.3338,0,.4204l1.2127.6063c.3639.1819.6589.477.8409.8409l.6063,1.2126c.0866.1732.3338.1732.4204,0l.6063-1.2126c.1819-.3639.477-.6589.8409-.8409l1.2127-.6063c.1732-.0866.1732-.3338,0-.4204Z"></path>
								<text x="0" y="39" fill="#111111" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Royyan Wijaya</text>
								<text x="0" y="44" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text>
							</svg> 
							Take a Survey
						</button>
					</div>

        ) : STATUS == 1 ? (
					<div className="survey" style={{ position: 'fixed', bottom: 0, right: '20px' }}>
						<form onSubmit={handleSubmit} target="_self">

							<div className="surveytitle">
								What is your ideal monetary architecture?
								<button type="button" className="btn-close float-end bg-white" aria-label="Close" onClick={handleCloseSurvey}></button>
							</div>

							<div className="surveyitem">
								<input type="radio" id="FIAT" name="entry.1756844336" value="FIAT" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="FIAT">A well managed <b>national fiat currency</b></label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="GLOBAL" name="entry.1756844336" value="GLOBAL" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="GLOBAL">A <b>global currency</b> issued by Global Monetary Authority</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="PLUS" name="entry.1756844336" value="PLUS" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="PLUS">Commodity-backed money (<b>Gold Standard</b>)  + Private currencies competition (<b>Free Banking</b>)</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="GOLD" name="entry.1756844336" value="GOLD" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="GOLD">Commodity-backed money (<b>Gold Standard</b>)</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="COMPE" name="entry.1756844336" value="COMPE" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="COMPE">Private currencies competition (<b>Free Banking</b>)</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="BTC" name="entry.1756844336" value="BTC" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="BTC">A fully decentralized global currency (e.g. <b>bitcoin</b>, monero)</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="TIME" name="entry.1756844336" value="TIME" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="TIME"><b>Time</b> backed currencies</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="ENERGY" name="entry.1756844336" value="ENERGY" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="ENERGY"><b>Energy</b> backed currencies</label>
							</div>

							<div className="surveyitem">
								<input type="radio" id="BARTER" name="entry.1756844336" value="BARTER" onClick={handleInputData("entry.1756844336")} />
								<label htmlFor="BARTER"><b>No currencies</b>. Barter</label>
							</div>

							<div className="surveybuttons">
								<button type="submit" className="surveybutton blue">Submit</button>
							</div>

						</form>
					</div>

				) : STATUS == 2 ? (
					<div className="survey" style={{ position: 'fixed', bottom: 0, right: '20px' }}>
						<div className="surveytitle m-0">
							Thank you for your contribution
							<button type="button" className="btn-close float-end bg-white" aria-label="Close" onClick={handleCloseThanks}></button>
						</div>
					</div>

        ) : 
					<div/>
				}
      </div>
  );
};