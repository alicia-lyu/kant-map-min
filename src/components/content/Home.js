import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import "./home.css"
import useWindowSize from '../../hooks/useWindowSize';
import useOptions from '../../hooks/useOptions';

function Home() {
    const chartDomRef = useRef(null);
    const chartRef = useRef(null);
    const options = useOptions();

    // the Home component rerenders when window size changes
    const windowSize = useWindowSize();

    useEffect(() => {
        const chartDom = chartDomRef.current;
        const chart = echarts.init(chartDom);
        chart.setOption(options);
        chartRef.current = chart;
    }, [options])

    // resize chart when windowSize changes
    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            chart.resize();
        }
    }, [windowSize, chartRef, options])

    return <div ref={chartDomRef} id="chart" />
}

export default Home;