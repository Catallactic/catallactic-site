//import React from 'react';
const React = require('react');

const Chart = require('chart.js/auto')
import ChartDataLabels from 'chartjs-plugin-datalabels';
const annotationPlugin = require('chartjs-plugin-annotation')
Chart.register(annotationPlugin);
// https://github.com/chartjs/chartjs-plugin-annotation/issues/786
const Line = require('react-chartjs-2')


import styles from './styles.module.css';

export default function SupplyProfileChart(): JSX.Element {
  return (
    <>
			<div className="panel">
				<Line
					data={{
						labels: [0,'',100,'',200,'',300,'',400,'',500,'',600,'',700,'',800,'',900,'',1000,'',1100,'',1200],
						datasets: [{
							fill: true,
							label: 'Gold Standard',
							backgroundColor: "rgba(161,174,212,1.0)",
							borderColor: "rgba(0,0,0,0.1)",
							data: [null,null,null,400,400,400,400,400,null,null,null]
						},{
							fill: true,
							label: 'Unit of Account',
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
									text: 'Tokens Created',
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
									text: 'Orders Delivered (30 days rolling average)',
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
									xMin: 7,
									xMax: 7,
									borderColor: 'rgb(255, 99, 132)',
									borderWidth: 2,
									borderDash: [5, 5],
								}, {
									type: 'label',
									xValue: 7,
									yValue: 800,
									content: ['Value','Capture','Event'],
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
									yValue: 800,
									content: ['Token','Generation','Event'],
									backgroundColor: 'rgba(245,245,245)',
									font: {
										size: 18
									}
								}, {
									type: 'point',
									xValue: 3,
									yValue: 400,
									backgroundColor: 'rgba(255, 99, 132, 0.25)'
								}]
							}
						}
					}}
					plugins={[/*ChartDataLabels*/]}
				/>
			</div>
		</>
  );
}
