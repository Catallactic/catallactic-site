import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, constantFrom, coordsToLinear, DEMAND, SOLD_HOLDERS, sumArrays, VC_EXCHANGES, VC_HOLDERS, VC_PROJECT, vesting } from './config';

export default function LineEstimateCirculatingSupply() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60, 61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
					datasets: [{
						fill: true,
						label: 'Exchanges',
						backgroundColor: COLORS.SUPPLY_EXCHANGES,
						borderColor: COLORS.SUPPLY_EXCHANGES,
						data:  VC_EXCHANGES
					}, {
						fill: true,
						label: 'Supply Holders',
						backgroundColor: COLORS.SUPPLY_HOLDERS,
						borderColor: "rgba(0,0,0,0.1)",
						data: SOLD_HOLDERS
					}, {
						fill: true,
						label: 'Demand Holders',
						borderWidth: 2,
						pointRadius: 0,
						backgroundColor: COLORS.SUPPLY_HOLDERS,
						borderColor: "rgba(0,0,0,0.1)",
						cubicInterpolationMode: 'default',
						data: DEMAND
					}, {
						fill: true,
						label: 'Project',
						backgroundColor: COLORS.SUPPLY_PROJECT,
						borderColor: COLORS.SUPPLY_PROJECT,
						data: VC_PROJECT
					}, ],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					elements: {
						point:{
								radius: 0
						}
					},
					scales: {
						y: {
							min: 0,
							max: 160,
							display: true,
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