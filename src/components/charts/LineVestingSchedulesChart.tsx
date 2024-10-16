import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'chart.js';
Chart.register(annotationPlugin);

import { COLOR_PROJECT, vesting } from "./config";
import { COLOR_HOLDERS } from "./config";
import { COLOR_EXCHANGES } from "./config";
import { COLOR_DEFI } from "./config";
import { COLOR_GREY } from './config';

export default function LineVestingSchedulesChart() {

  return (
    <>
			<div className="chart-panel2">
				<Line
					data={{
						labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
						datasets: [{
							fill: true,
							label: 'Exchanges',
							backgroundColor: COLOR_EXCHANGES,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(60, 8, 12, 40, 48)
						}, {
							fill: true,
							label: 'Seed Round',
							backgroundColor: COLOR_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(60, 0, 12, 10, 24),
						}, {
							fill: true,
							label: 'Pre-Sale',
							backgroundColor: COLOR_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(60, 4, 3, 40, 24)
						}, {
							fill: true,
							label: 'Public-Sale',
							backgroundColor: COLOR_HOLDERS,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(60, 10, 3, 50, 12)
						}, {
							fill: true,
							label: 'Project',
							backgroundColor: COLOR_PROJECT,
							borderColor: "rgba(0,0,0,0.1)",
							data: vesting(60, 0, 3, 10, 12)
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
						},
						/*onClick: function(c,i) {
							let e = i[0];
							console.log(e.index)
							var x_value = this.data.labels[e.index];
							var y_value = this.data.datasets[0].data[e.index];
							console.log(x_value);
							console.log(y_value);
						},*/
						onClick: function(e: any) {
							console.log(e);

							/*if (e.active.length > 0) {
								const chart = e.active[0]._chart;
								const activePoints = chart.getElementAtEvent(e.event);
								if ( activePoints.length > 0) {
								 // get the internal index of slice in pie chart
								 const clickedElementIndex = activePoints[0]._index;
								 const label = chart.data.labels[clickedElementIndex];
								 // get value by index
								 const value = chart.data.datasets[0].data[clickedElementIndex];
								 console.log(clickedElementIndex, label, value)
								}
							}*/
						}
					}}
					plugins={[/*ChartDataLabels*/]}
				/>
			</div>
		</>
	)
}