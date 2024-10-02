---
sidebar_position: 1
---

# Configure your Token

Every CryptoCommodity is different. In order to cnnfigure your CryptoCommodity, you must understand the magnitudes that will better suit exploitation of your token. To enable this a becnhmark suite will be provided to adopters.

An example of configuration is shown below.

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<th rowspan="2">GENERAL</th>
			<td>Num Orders Period</td>
			<td bgcolor="#FFFDE6">1000000</td>
			<td></td>
		</tr>
		<tr>
			<td>Size Order (USD)</td>
			<td bgcolor="#FFFDE6">15</td>
			<td></td>
		</tr>
		<tr>
			<th rowspan="7">ONE TIME</th>
			<td>Ratio Initial Supply %</td>
			<td bgcolor="#FFFDE6"></td>
			<td></td>
		</tr>
		<tr>
			<td>Percent Project %</td>
			<td bgcolor="#FFFDE6">10</td>
			<td></td>
		</tr>
		<tr>
			<td>Percent ICOs %</td>
			<td bgcolor="#FFFDE6">67</td>
			<td></td>
		</tr>
		<tr>
			<td>ICO Bonus</td>
			<td bgcolor="#FFFDE6">5</td>
			<td></td>
		</tr>
		<tr>
			<td>1 - Project Allocation</td>
			<td>1500000</td>
			<td>Num Orders * Size Order * Percent Project</td>
		</tr>
		<tr>
			<td>2 - Initial Fundraising</td>
			<td>9547500</td>
			<td>Num Orders * Size Order * Percent Fundraising / ICO Bonus</td>
		</tr>
		<tr>
			<th>TOTAL ONE TIME</th>
			<th>11047500</th>
			<td></td>
		</tr>
		<tr>
			<th rowspan="3">BORROWED</th>
			<td>Leverage</td>
			<td bgcolor="#FFFDE6">5</td>
			<td>Num Orders * Size Order * Leverage</td>
		</tr>
		<tr>
			<td>3 - DeFi Services Allocation</td>
			<td>75000000</td>
			<td></td>
		</tr>
		<tr>
			<th>TOTAL BORROWED</th>
			<th>75000000</th>
			<td></td>
		</tr>
		<tr>
			<th rowspan="8">CONTINUOUS</th>
			<td>Transaction Fees %</td>
			<td bgcolor="#FFFDE6">1</td>
			<td></td>
		</tr>
		<tr>
			<td>Ratio Transactions-Orders Period</td>
			<td bgcolor="#FFFDE6">0.3</td>
			<td></td>
		</tr>
		<tr>
			<td>Lending Fees %</td>
			<td bgcolor="#FFFDE6">1</td>
			<td></td>
		</tr>
		<tr>
			<td>Transfer Fees %</td>
			<td bgcolor="#FFFDE6">1</td>
			<td></td>
		</tr>
		<tr>
			<td>4 - Transaction Fees</td>
			<td>45000</td>
			<td>Num Transactions * Transaction Fees</td>
		</tr>
		<tr>
			<td>5 - Lending Fees</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>6 - Transfer Fees</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<th>TOTAL PER PERIOD</th>
			<th>45000</th>
			<td></td>
		</tr>
	</table>
</div>
