import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import {  COLORS, PRICE_PROFILE_CP_200, PRICE_PROFILE_CP_300, PRICE_PROFILE_CP_50, PRICE_PROFILE_CS_200, PRICE_PROFILE_CS_50, SCALE, } from './config';
import { spotPriceCPMM } from "./maths/charts";

export default function LineTradeFunctionSpotPrice() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: SCALE,
					datasets: [{
						fill: false,
						label: 'CS_50',
						backgroundColor: COLORS.PRICE_CS,
						borderColor: COLORS.PRICE_CS,
						data: PRICE_PROFILE_CS_50
					}, {
						fill: false,
						label: 'CS_200',
						backgroundColor: COLORS.PRICE_CS,
						borderColor: COLORS.PRICE_CS,
						data: PRICE_PROFILE_CS_200
					}, {
						fill: false,
						label: 'CP_50',
						backgroundColor: COLORS.PRICE_CP,
						borderColor: COLORS.PRICE_CP,
						data: PRICE_PROFILE_CP_50
					}, {
						fill: false,
						label: 'CP_200',
						backgroundColor: COLORS.PRICE_CP,
						borderColor: COLORS.PRICE_CP,
						data: PRICE_PROFILE_CP_200
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
								text: 'CryptoCommodity Price',
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