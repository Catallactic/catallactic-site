import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw from "/static/data/cryptolaw.json"

# Legal Framework

  <table>
		<tr>
			<td>Region</td>
			<td>Jurisdiction</td>
			<td>Doc</td>
		</tr>
	
		{cryptolaw.map((data, index) => {
			return (
				<tr>
					<td>{data.region}</td>
					<td>{data.jurisdiction}</td>
					<td><a href={data.url} target='_blank'>{data.doc}</a></td>
				</tr>
			)
		})}
    
  </table>

