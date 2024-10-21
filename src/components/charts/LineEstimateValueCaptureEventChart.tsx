import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLOR_PROJECT } from "./config";
import { COLOR_HOLDERS } from "./config";
import { COLOR_EXCHANGES } from "./config";
import { COLOR_DEFI } from "./config";
import { COLOR_GREY } from './config';

export default function LineEstimateValueCaptureEventChart() {
  return (
    <>
			<div className="chart-panel2">
			<Line
				data={{
					labels: ['Jul 23','Jan 24','Jul 24','Jan 25','Jul 25','Jan 26','Jul 26','Jan 27','Jul 27','Jan 28','Jul 28','Jan 29','Jul 29','Jan 30'],
					datasets: [{
						fill: false,
						label: 'Monthly Orders',					      
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,205,0,1.0)",
						data: [3.3767,3.4101999999999992,3.4604499999999994,3.7348249999999994,4.1463875,4.94389375,6.119801875,7.5313824375000005,9.49346716875,12.669471635625001,17.039759874187503,21.78394261160625,28.321657647766877,33.62241638722005,40.2159551823556,47.50951739847232,56.66939440361597,61.05999837441922,65.83860932352047,70.84599921933153,76.2910692632621,79.34271203379257,]
					}, {
						fill: false,
						label: 'Supply with Vesting',
						backgroundColor: "rgba(0,0,205,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						// backgroundColor: "rgba(0,0,205,1.0)",
						//borderColor: "rgba(0,0,205,1.0)",
						//borderWidth: 0.4,
						//pointRadius: 0,
						data: [14,28.5,57.5,79,90.5,97.5,100,100,100,100,100,100,100,100,100,100,100]
					}, {
						fill: false,
						label: 'Investors Wallets',
						backgroundColor: "rgba(0,0,205,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: [7,14.25,28.75,39.5,45.25,48.75,50,50,50,50,50,50,50,50,50,50,50,50,]
					}, {
						fill: false,
						label: 'Consumer Wallets',
						backgroundColor: "rgba(0,0,205,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: [0.33767,0.34102,0.34604500000000005,0.37348250000000005,0.41463875000000006,0.494389375,0.6119801875000002,0.7531382437500002,0.9493467168750002,1.2669471635625,1.7039759874187503,2.1783942611606246,2.832165764776688,3.3622416387220055,4.021595518235561,4.750951739847232,5.666939440361597,6.105999837441924,6.5838609323520485,7.084599921933155,7.62910692632621,7.934271203379257,]
					}, {
						fill: false,
						label: 'Discount Cards',
						backgroundColor: "rgba(0,0,205,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: [9,9,9,9,9,9.5,10.25,11.875,14.3125,17.9625,23.235,31.354,42.933099999999996,57.06672,76.50086399999999,98.5105368,127.87594415999999,157.437374976,195.71541615360002,233.88410416896,281.97049026585603,323.5478320924416,371.9589666616858,420.3569689278543,475.8351925406398,523.4187117947039,]
					}, {
						fill: false,
						label: 'Held in Exchanges',
						backgroundColor: "rgba(205,0,0,1.0)",
						borderColor: "rgba(205,0,0,1.0)",
						data: [-2.33767,4.90898,19.403955,30.1265175,35.83536125,38.755610625,39.1380198125,37.37186175625,34.738153283125,30.770552836437503,25.06102401258125,16.467605738839374,4.234734235223314,-10.428961638722,-30.52245951823555,-53.26148853984723,-83.54288360036159,]
					}],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						y: {
							min: 0,
							max: 120,
							stacked: false,
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
						y2: {
							min: 0,
							max: 120,
							display: true,
							position: 'right',
							title: {
								display: true,
								text: 'Monthly Orders',
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
								xMin: 10.6,
								xMax: 10.6,
								borderColor: 'rgb(255, 99, 132)',
								borderWidth: 2,
							}, {
								type: 'label',
								xValue: 10.6,
								yValue: 75,
								content: ['Value','Capture','Event'],
								backgroundColor: 'rgba(245,245,245)',
								font: {
									size: 18
								}
							}, {
								type: 'point',
								xValue: 10.6,
								yValue: 20,
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