import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, PRICE_PROFILE_CM_10, PRICE_PROFILE_CP_200, PRICE_PROFILE_CS_50, SCALE, VC_EXCHANGES } from './config';

export default function LineEstimatePriceEvolutionChart() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: SCALE,
					datasets: [{
						fill: false,
						label: 'Supply at Exchanges',					      
						backgroundColor: COLORS.SUPPLY_EXCHANGES,
						borderColor: COLORS.SUPPLY_EXCHANGES,
						data: VC_EXCHANGES
					}, {
						fill: false,
						label: 'CS_50',					      
						backgroundColor: COLORS.PRICE_CS,
						borderColor: COLORS.PRICE_CS,
						data: PRICE_PROFILE_CS_50,
					}, {
						fill: false,
						label: 'CP_300',					      
						backgroundColor: COLORS.PRICE_CP,
						borderColor: COLORS.PRICE_CP,
						data: PRICE_PROFILE_CP_200,
					}, {
						fill: false,
						label: 'CM_10',					      
						backgroundColor: COLORS.PRICE_CM,
						borderColor: COLORS.PRICE_CM,
						data: PRICE_PROFILE_CM_10,
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
						y2: {
							min: 0,
							max: 120,
							display: true,
							position: 'right',
							title: {
								display: true,
								text: 'Price',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
								color: COLORS.PRICING,
							},
							ticks: {
								color: "rgba(0,205,0,1.0)",
								display: false,
							},
							grid: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
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
							}, /*{
								type: 'point',
								xValue: 91,
								yValue: 15,
								backgroundColor: 'rgba(255, 99, 132, 0.25)'
							}, */]
						}
					}
				}}
				plugins={[/*ChartDataLabels*/]}
			/>
			</div>
		</>
	)
}