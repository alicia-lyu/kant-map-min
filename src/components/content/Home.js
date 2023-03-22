import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import "./home.css"
import Kant from "../../assets/Kant.jpeg"
import useWindowSize from '../../hooks/useWindowSize';
import useOptions from '../../hooks/useOptions';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

    return <Container className="flexContainer">
        <section id='one'>
            <h1>A Relationship Graph of Kant's Terminology in The Critique of Pure Reason</h1>
            <h2>Generated with <a href = 'https://huggingface.co/bert-base-german-cased'>the BERT Model</a></h2>
            <div ref={chartDomRef} id="chart" />
        </section>
        <section id='two'>
            <img src={Kant} alt='Immanuel Kant'/>
            <p>Connect with me <a href='mailto:alicia.w.lyu@gmail.com' target="_blank"><FontAwesomeIcon icon={faEnvelope}/> alicia.w.lyu@gmail.com</a></p>
        </section>
    </Container>

}

export default Home;