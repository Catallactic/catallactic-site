import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, coordsToLinear, DEMAND_CARDS, DEMAND_CONSUMERS, DEMAND_SPECULATIVE } from './config';

export default function LineEstimateTotalCryptoDemandChart() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60, 61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
					datasets: [{
						fill: true,
						label: 'Speculative Demand',
						borderWidth: 2,
						pointRadius: 0,
						backgroundColor: COLORS.DEMAND_SPECULATIVE,
						borderColor: COLORS.DEMAND_SPECULATIVE,
						cubicInterpolationMode: 'default',
						data: DEMAND_SPECULATIVE,
					}, {
						fill: true,
						label: 'Consumers Utility Demand',
						borderWidth: 2,
						pointRadius: 0,
						backgroundColor: COLORS.DEMAND_CONSUMERS,
						borderColor: COLORS.DEMAND_CONSUMERS,
						cubicInterpolationMode: 'default',
						data: DEMAND_CONSUMERS,
					}, {
						fill: true,
						label: 'Cards Utility Demand',
						borderWidth: 2,
						pointRadius: 0,
						backgroundColor: COLORS.DEMAND_CARDS,
						borderColor: COLORS.DEMAND_CARDS,
						cubicInterpolationMode: 'default',
						data: DEMAND_CARDS,
					},],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						y: {
							min: 0,
							max: 160,
							stacked: true,
							title: {
								display: true,
								text: 'Total Supply',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
							},
							ticks: {
								display: false,
							},
						},
						x: {
							display: true,
							title: {
							display: true,
							text: 'Months from TGE',
							font: {
								family: 'Comic Sans MS',
								size: 20,
								weight: 'bold',
								lineHeight: 1.2,
							},
							},
							ticks: {
								display: false,
							},
						},
					},
					plugins: {
						legend: {
							labels: {
								usePointStyle: true,
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
								padding: 20,
							},
						},
						annotation: {
							annotations: [{
								type: 'line',
								xMin: 0,
								xMax: 0,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'label',
								xValue: 1,
								yValue: 120,
								content: ['TGE'],
								backgroundColor: 'rgba(245,245,245)',
								font: {
									size: 9
								}
							}, {
								type: 'line',
								xMin: 3,
								xMax: 3,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'line',
								xMin: 12,
								xMax: 12,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'line',
								xMin: 15,
								xMax: 15,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'line',
								xMin: 27,
								xMax: 27,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'line',
								xMin: 36,
								xMax: 36,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'line',
								xMin: 60,
								xMax: 60,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'line',
								xMin: 100,
								xMax: 100,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
								borderDash: [5, 5],
							}, {
								type: 'label',
								xValue: 98,
								yValue: 120,
								content: ['VCE'],
								backgroundColor: 'rgba(245,245,245)',
								font: {
									size: 9
								}
							}, ]
						}
					}
				}}
				plugins={[/*ChartDataLabels*/]}
			/>
			</div>
		</>
	)
}