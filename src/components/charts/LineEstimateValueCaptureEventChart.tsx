import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, PHYSICAL_DEMAND, SCALE, VC_EXCHANGES } from './config';

export default function LineEstimateValueCaptureEventChart() {
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
						data:  VC_EXCHANGES
					}, {
						fill: false,
						label: 'Physical Demand',					      
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,205,0,1.0)",
						data: PHYSICAL_DEMAND,
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
							stacked: false,
							title: {
								display: true,
								text: 'Token Supply',
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
								text: 'Physical Demand',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
								color: "rgba(0,205,0,1.0)",
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
								yValue: 75,
								content: ['Value','Capture','Event'],
								backgroundColor: 'rgba(245,245,245)',
								font: {
									size: 18
								}
							}, {
								type: 'point',
								xValue: 91,
								yValue: 34,
								backgroundColor: 'rgba(255, 99, 132, 0.25)'
							}]
						}
					}
				}}
				plugins={[/*ChartDataLabels*/]}
			/>
			</div>
		</>
	)
}