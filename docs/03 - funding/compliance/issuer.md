import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw_issuer from "/static/data/cryptolaw_issuer.json"

# Issuer Jurisdiction

Aspects:

- Remote Company Formation

- Company Formation Costs

- CryptoLaw

- License Costs


# Issuer per country

  <table>
		<tr>
			<td>Region</td>
			<td>Jurisdiction</td>
			<td>Remote Company Formation</td>
			<td>Company Formation Cost</td>
			<td>CryptoLaw</td>
			<td>License Cost</td>
		</tr>
	
		{cryptolaw_issuer.map((data, index) => {
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
						<td>{data.remoteFormation}</td>
						<td>{data.formationCost}</td>
						<td>{data.cryptolaw}</td>
						<td>{data.licenseCost}</td>
					</tr>
				)
			}
		})}
    
  </table>