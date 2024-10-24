import { Line } from "react-chartjs-2";
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLORS, SCALE, TGE_EXCHANGES, TGE_PRE, TGE_PROJECT, TGE_PUBLIC, TGE_SEED } from './config';

export default function LineVestingSchedulesChart() {

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
							borderColor: "rgba(0,0,0,0.1)",
							data: TGE_EXCHANGES,
						}, {
							fill: true,
							label: 'Seed Round',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: TGE_SEED,
						}, {
							fill: true,
							label: 'Pre-Sale',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: TGE_PRE,
						}, {
							fill: true,
							label: 'Public-Sale',
							backgroundColor: COLORS.SUPPLY_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: TGE_PUBLIC,
						}, {
							fill: true,
							label: 'Project',
							backgroundColor: COLORS.SUPPLY_PROJECT,
							borderColor: "rgba(0,0,0,0.1)",
							data: TGE_PROJECT,
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
									type: 'label',
									xValue: 12,
									yValue: 100,
									content: ['START', 'VESTING', 'SEED'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									xMin: 36,
									xMax: 36,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 36,
									yValue: 100,
									content: ['END', 'VESTING', 'SEED'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
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
									yValue: 145,
									content: ['START', 'VESTING', 'PRE'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									xMin: 27,
									xMax: 27,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 27,
									yValue: 145,
									content: ['END', 'VESTING', 'PRE'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
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
									yValue: 60,
									content: ['START', 'VESTING', 'PUBLIC'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
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
									yValue: 60,
									content: ['END', 'VESTING', 'PUBLIC'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 9
									}
								}, {
									type: 'line',
									xMin: 60,
									xMax: 60,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 60,
									yValue: 120,
									content: ['END', 'VESTING', 'EXCHANGES'],
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