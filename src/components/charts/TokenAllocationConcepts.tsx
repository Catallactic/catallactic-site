//import React from 'react';
const React = require('react');

const Chart = require('chart.js/auto')
import ChartDataLabels from 'chartjs-plugin-datalabels';
const annotationPlugin = require('chartjs-plugin-annotation')
Chart.register(annotationPlugin);
// https://github.com/chartjs/chartjs-plugin-annotation/issues/786
const Line = require('react-chartjs-2')

const Doughnut = require('react-chartjs-2')

import styles from './styles.module.css';
//import { Doughnut } from 'react-chartjs-2';

export default function TokenAllocationConcepts() {

	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#00FF00', '#00FF00', '#00FF00', '#006400', '#006400', '#FF0000', '#0000FF', '#0000FF'],
								data: [2, 3, 5, 4, 5, 71, 9, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#00FF00', '#006400', '#FF0000', '#0000FF'],
								data: [10, 9, 71, 10],
								order: [1, 5, 8, 10],
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
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
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
	);
}