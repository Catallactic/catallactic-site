import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, constantFrom, coordsToLinear, DEMAND, SCALE, SOLD_HOLDERS, sumArrays, VC_EXCHANGES, VC_HOLDERS, VC_PROJECT, vesting } from './config';

export default function LineEstimateCirculatingSupply() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: SCALE,
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