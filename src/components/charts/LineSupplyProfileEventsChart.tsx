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

export default function LineSupplyProfileEventsChart() {
  return (
    <>
			<div className="chart-panel2">
				<Line
					data={{
						labels: [0,'',100,'',200,'',300,'',400,'',500,'',600,'',700,'',800,'',900,'',1000,'',1100,'',1200],
						datasets: [{
							fill: true,
							label: 'Fixed Supply',
							backgroundColor: "rgba(161,174,212,1.0)",
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,400,400,400,400,400,null,null,null]
						},{
							fill: true,
							label: 'Representative',
							backgroundColor: "rgba(6,11,39,1.0)",
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,null,null,null,null,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200]
						}],
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						scales: {
							y: {
								min: 0,
								max: 1200,
								display: true,
								title: {
									display: true,
									text: 'Tokens Supply',
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: {top: 30, left: 0, right: 0, bottom: 0},
								},
								ticks: {
									display: false,
								}
							},
							x: {
								display: true,
								title: {
									display: true,
									text: 'Physical Demand (Orders Delivered - 30 days rolling average)',
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: {top: 20, left: 0, right: 0, bottom: 0},
								},
								ticks: {
									display: false,
									font: {
										family: 'Comic Sans MS',
										size: 20,
										// weight: 'bold',
										lineHeight: 1,
									},
								}	
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
									xMin: 1,
									xMax: 1,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 1,
									borderDash: [5, 5],
								}, {
									type: 'line',
									xMin: 1.5,
									xMax: 1.5,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 1,
									borderDash: [5, 5],
								}, {
									type: 'line',
									xMin: 2,
									xMax: 2,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 1,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 1.5,
									yValue: 700,
									content: ['FUNDING', 'ROUNDS'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									xMin: 4,
									xMax: 4,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 1,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 4,
									yValue: 600,
									content: ['CLIFF'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'point',
									xValue: 4,
									yValue: 400,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}, {
									type: 'line',
									xMin: 5,
									xMax: 5,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 1,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 5,
									yValue: 800,
									content: ['VESTING'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'point',
									xValue: 5,
									yValue: 400,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}, {
									type: 'point',
									xValue: 9,
									yValue: 500,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}, {
									type: 'line',
									xMin: 9,
									xMax: 9,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 1,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 9,
									yValue: 700,
									content: ['LENDING'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'label',
									xValue: 1.5,
									yValue: 100,
									content: ['Fundraising'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'label',
									xValue: 5,
									yValue: 100,
									content: ['Value Capture'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'label',
									xValue: 11,
									yValue: 100,
									content: ['Value Release'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'label',
									xValue: 19,
									yValue: 100,
									content: ['Value Leverage'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'line',
									xMin: 7,
									xMax: 7,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 7,
									yValue: 1000,
									content: ['VCE'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'point',
									xValue: 7,
									yValue: 400,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}, {
									type: 'line',
									xMin: 3,
									xMax: 3,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 3,
									yValue: 1000,
									content: ['TGE'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'point',
									xValue: 3,
									yValue: 400,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}, {
									type: 'line',
									xMin: 15,
									xMax: 15,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 15,
									yValue: 1000,
									content: ['DSE'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'point',
									xValue: 15,
									yValue: 800,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}, {
									type: 'label',
									xValue: 7,
									yValue: 600,
									content: ['EXIT'],
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