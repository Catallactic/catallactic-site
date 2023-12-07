import JSONTable from '@site/src/components/ui/JSONTable';
import bibliography_funding from "/static/data/bibliography_funding.json"

# Funding Bibliography

  <table>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Date</th>
			<th>Title</th>
			<th>Autor</th>
			<th>Source</th>
		</tr>
	
		{bibliography_funding.map((data, index) => {
			if (!data.title) {
				return (
					<tr style={{ textAlignVertical: "center",textAlign: "center", 'backgroundColor': '#fff7d9' }}>
						<th colspan='6'>{data.subject}</th>
					</tr>
				)
			} else {
				return (
					<tr>
						<td>{data.date}</td>
						<td><a href={data.url} target='_blank'>{data.title}</a></td>
						<td>{data.author}</td>
						<td>{data.place}</td>
					</tr>
				)
			}
		})}
    
  </table>