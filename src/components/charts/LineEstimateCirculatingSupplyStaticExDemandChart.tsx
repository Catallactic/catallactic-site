import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, vesting } from './config';

export default function LineEstimateCirculatingSupplyStaticExDemandChart() {

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
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(100, 8, 12, 40, 48)			// 40 in 48 steps with 12 delay + 8 initial
						}, {
							fill: true,
							label: 'Seed Round',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(100, 0, 12, 10, 24),			// 10 in 24 steps with 12 delay
						}, {
							fill: true,
							label: 'Pre-Sale',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(100, 4, 3, 40, 24)				// 40 in 24 steps with 3 delay + 4 initial
						}, {
							fill: true,
							label: 'Public-Sale',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(100, 10, 3, 50, 12)			// 50 in 12 steps with 3 delay + 10 initial
						}, {
							fill: true,
							label: 'Project',
							backgroundColor: COLORS.SUPPLY_PROJECT,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(100, 0, 3, 10, 12)				// 10 in 12 steps with 3 delay
						}],
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
									text: 'Vesting Periods (Months from TGE)',
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
									xMin: 12,
									xMax: 12,
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
									xMin: 3,
									xMax: 3,
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
									xMin: 27,
									xMax: 27,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'line',
									xMin: 3,
									xMax: 3,
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
									xMin: 60,
									xMax: 60,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],




								}, {
									type: 'line',
									yMax: 10,
									yMin: 10,
									xMin: 12,
									xMax: 60,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 36,
									yValue: 10,
									content: ['VESTING EXCHANGES'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									yMax: 40,
									yMin: 40,
									xMax: 36,
									xMin: 12,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 24,
									yValue: 40,
									content: ['VESTING SEED'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									yMax: 70,
									yMin: 70,
									xMax: 3,
									xMin: 27,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 15,
									yValue: 70,
									content: ['VESTING PRE'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									yMax: 100,
									yMin: 100,
									xMax: 3,
									xMin: 15,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 9,
									yValue: 100,
									content: ['VESTING PUBLIC'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									yMax: 130,
									yMin: 130,
									xMax: 3,
									xMin: 15,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 9,
									yValue: 130,
									content: ['VESTING PROJECT'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}




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
								}, 
							]
						}},
					}}
					plugins={[/*ChartDataLabels*/]}
				/>
			</div>
		</>
	)
}