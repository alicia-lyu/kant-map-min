import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import terms from "../../assets/terms.json";
import links from "../../assets/links.json";
import categories from "../../assets/categories.json";
import "./home.css"

function Home() {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartDom = chartRef.current;
        const chart = echarts.init(chartDom);
        const options = {
            tooltip: {},
            legend: [
                {
                    data: categories.map(category => category.name)
                }
            ],
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    name: 'Kant Map',
                    type: 'graph',
                    layout: 'circular',
                    circular: {
                        rotateLabel: true
                    },
                    data: terms,
                    links: links,
                    categories: categories,
                    roam: true,
                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            ]
        };
        chart.setOption(options);
    }, [])

    



    return <div ref={chartRef} id="chart" />
}

export default Home;