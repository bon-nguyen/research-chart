import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 800px;
    margin: 0 auto;
`

const Charts = () => {
    const now = new Date()
    const categories = [];

    for (let i = 23; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        categories.push(`${month} ${year}`);
    }

    console.log("categories", categories)

    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        title: {
            text: '',
            labels: {
                enabled: false
            }
        },
        xAxis: {
            categories: categories,
            labels: {
                rotation: -90
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            }
        },
        plotOptions: {
            column: {
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#003399'],
                        [1, '#66ccff']
                    ]
                }
            }
        },
        series: [{
            data: [20, 4, 5, 4, 55, 6, 7, 20, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
        }],
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
    };

    return (
        <Container>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </Container>


    )
}

export default Charts