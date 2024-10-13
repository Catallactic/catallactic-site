import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

export default function DoughnutInitialTokenAllocationChart() {
  return (
    <>
			<div className="chart-container">
				<div className="chart-panel">
					<Doughnut
						data={{
							labels: [
								'Project', 'Project',
								'Private Sale', 'Presale', 'Crowdsale', 
								'Exchanges', 'Exchanges',
								'Operations', 
								'Project', 'Funding', 'Exchanges', 'Operations'
							],
							datasets: [{
									backgroundColor: ['#d1d1f6', '#0a1172', '#1338be', '#1338be', '#1338be', '#d1d1f6', '#d1d1f6', '#d1d1f6'],
									data: [0, 1, 2, 3, 5, 4, 0, 0] ,
									order: [11, 12, 2, 3, 4, 6, 7, 9],
									index: 0
								}, {
									backgroundColor: ['#0a1172', '#1338be', '#d1d1f6', '#d1d1f6'],
									data: [1, 10, 4, 0],
									order: [10, 1, 5, 8],
									index: 1
							}],
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							reverse: true,
							plugins: {
								tooltip: {
									callbacks: {
										label: function(context) {
											const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
											return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
										}
									}
								},
								legend: {
								position: 'right',
									labels: {
										font: {
											family: 'Comic Sans MS',
											size: 20,
											weight: 'bold',
											lineHeight: 1.2,
										},
										padding: 20,
										generateLabels: function(chart) {
											let datasetColors = chart.data.datasets.map(function(e) {
													return e.backgroundColor;
											}).flat();						        	  
											let orders = chart.data.datasets.map(function(e) {
												return e.order;
											}).flat();
													
											// Get the default label list
											const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
											const labelsOriginal = original.call(this, chart);
											return labelsOriginal.sort((label2, label1) => {
												return orders[label2.index] - orders[label1.index];
											}).filter((label, index, array) => {
												return (datasetColors[label.index] != '#d1d1f6' && [1, 2, 3, 4, 10].includes(label.index));
											}).map((label) => {
											label.datasetIndex = label.index;
											label.fillStyle = datasetColors[label.index];
													return label;
											});	
										}
									},
									onClick: function(mouseEvent, legendItem, legend) {
										// toggle the visibility of the dataset from what it currently is
										legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
										legend.chart.update();
									}
								}
							}
						}}
					/>
				</div>
			</div>
		</>
	)
}