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

export default function LineTotalSupplyCompositionChart() {
  return (
    <>
			<div className="chart-panel2">
				<Line
					data={{
						labels: [0,'',100,'',200,'',300,'',400,'',500,'',600,'',700,'',800,'',900,'',1000,'',1100,'',1200],
						datasets: [{
							fill: true,
							label: 'Exchanges',
							backgroundColor: COLOR_EXCHANGES,
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,100,125,150,125,100,125,150,175,200,225,250,275,300,300,300,300,300,300,300,300,300]
						}, {
							fill: true,
							label: 'Holders',
							backgroundColor: COLOR_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,200,175,150,175,200,208.3,216.6,225,233,242,250,259,267,284,300,317,333,350,366,382,400]
						}, {
							fill: true,
							label: 'Project',
							backgroundColor: COLOR_PROJECT,
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,100,100,100,100,100,104.16,108.3,112.5,117,121,125,129,133,141,150,158,166,175,183,191,200]
						}, {
							fill: true,
							label: 'DeFi ServiCes',
							backgroundColor: COLOR_DEFI,
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,null,null,null,null,0,12.5,25,37.5,50,62.5,75,87.5,100,125,150,175,201,225,250,275,300]
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
								max: 1200,
								display: true,
								stacked: true,
								title: {
									display: true,
									text: 'Supply',
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
									text: 'Demand',
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
									yValue: 500,
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