import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, SCALE, VESTING_EXAMPLE } from './config';

export default function LineParametrizationVestingChart() {

  return (
    <>
			<div className="chart-panel2">
				<Line
					data={{
						labels: SCALE,
						datasets: [{
							fill: true,
							label: '	Vested Supply',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: VESTING_EXAMPLE,
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
									text: 'Supply',
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
									type: 'label',
									xValue: 10,
									yValue: 15,
									content: ['CLIFF'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'label',
									xValue: 30,
									yValue: 15,
									content: ['INITIAL'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'label',
									xValue: 38,
									yValue: 120,
									content: ['TOTAL'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									xMin: 20,
									xMax: 20,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 20,
									yValue: 120,
									content: ['START', 'VESTING'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									xMin: 56,
									xMax: 56,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 56,
									yValue: 120,
									content: ['END', 'VESTING',],
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