import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import {  COLORS, INVARIANT_SUPPLY_CM_20, INVARIANT_SUPPLY_CP_200, INVARIANT_SUPPLY_CS_20, SCALE, } from './config';

export default function LineTradeFunctionInvariants() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: SCALE,
					datasets: [{
						fill: false,
						label: 'CS_50',
						backgroundColor: COLORS.SUPPLY_PROJECT,
						borderColor: COLORS.SUPPLY_PROJECT,
						data: INVARIANT_SUPPLY_CS_20
					}, {
						fill: false,
						label: 'CP_200',
						backgroundColor: COLORS.SUPPLY_PROJECT,
						borderColor: COLORS.SUPPLY_PROJECT,
						data: INVARIANT_SUPPLY_CP_200
					}, {
						fill: false,
						label: 'CM_20',
						backgroundColor: COLORS.SUPPLY_PROJECT,
						borderColor: COLORS.SUPPLY_PROJECT,
						data: INVARIANT_SUPPLY_CM_20
					}, ]
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
							max: 60,
							stacked: false,
							title: {
								display: true,
								text: 'Paired Token Supply',
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
							text: 'CryptoCommodity Supply',
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
							/*annotations: [{
								type: 'line',
								xMin: 91,
								xMax: 91,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
							}, {
								type: 'label',
								xValue: 91,
								yValue: 25,
								content: ['Value','Capture','Event'],
								backgroundColor: 'rgba(245,245,245)',
								font: {
									size: 18
								}
							}, {
								type: 'point',
								xValue: 91,
								yValue: 15,
								backgroundColor: 'rgba(255, 99, 132, 0.25)'
							}]*/
						}
					}
				}}
				plugins={[/*ChartDataLabels*/]}
			/>
			</div>
		</>
	)
}