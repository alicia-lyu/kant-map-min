import useWindowSize from "./useWindowSize";

import terms from "../assets/terms.json";
import links from "../assets/links.json";
import categories from "../assets/categories.json";

function useConfigNodes(nodes) {
    const windowSize = useWindowSize();
    let scaler
    if (windowSize[0] < 768) {
        scaler = 2
    } else if (windowSize[0] < 1200) {
        scaler = 6
    } else {
        scaler = 10
    }
    nodes.forEach((node) => {
        node.label = {
            show: true
        };
        node.value = node.weight;
        node.symbolSize = (node.weight - 4) * scaler;
    })
    return nodes;
}

function configLinks(links) {
    links.forEach((link) => {
        link.lineStyle = { width: (link.weight - 0.7) * 100 }
    })
    return links
}

export default function useOptions() {
    const nodes = useConfigNodes(terms);
    const linksData = configLinks(links);
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
                data: nodes,
                links: linksData,
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
    return options;
}