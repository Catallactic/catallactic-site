import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

import { COLOR_PROJECT } from "./config";
import { COLOR_HOLDERS } from "./config";
import { COLOR_EXCHANGES } from "./config";
import { COLOR_DEFI } from "./config";
import { COLOR_GREY } from './config';

export default function DoughnutNegotiationAllocationChart() {
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
								'Project', 'Holders', 'Liquidity', 'Operations'
							],
							datasets: [{
									backgroundColor: [COLOR_GREY, COLOR_GREY, COLOR_GREY, COLOR_GREY, COLOR_GREY, COLOR_EXCHANGES, COLOR_EXCHANGES, COLOR_GREY],
									data: [9, 1, 2, 3, 5, 4, 5, 71],
									order: [11, 12, 2, 3, 4, 6, 7, 9],
									index: 0
								}, {
									backgroundColor: [COLOR_GREY, COLOR_GREY, COLOR_EXCHANGES, COLOR_GREY],
									data: [10, 10, 9, 71],
									order: [1, 10, 5, 8],
									index: 1
							}]
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
												return ([8, 9, 5, 7].includes(label.index));
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