import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw_investor from "/static/data/cryptolaw_investor.json"

# Investors Jurisdictions

Aspects:

- Tax

- Crypto Allowed

- Registration Required

# Investor per country

  <table>
		<tr>
			<td>Region</td>
			<td>Jurisdiction</td>
		</tr>
	
		{cryptolaw_investor.map((data, index) => {
			if (!data.jurisdiction) {
				return (
					<tr style={{ textAlignVertical: "center",textAlign: "center", 'backgroundColor': '#fff7d9' }}>
						<th colspan='6'>{data.region}</th>
					</tr>
				)
			} else {
				return (
					<tr>
						<td>{data.region}</td>
						<td>{data.jurisdiction}</td>
					</tr>
				)
			}
		})}
    
  </table>