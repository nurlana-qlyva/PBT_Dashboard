import { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';


const TimeChart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchEquipmentData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json').then(res => res.json()).then(res => res)
            if (response) {

                setData(response);
                setLoading(false);
            } else {
                console.error("API response is not in expected format");
            }
        } catch (error) {
            console.error("Error in API request:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEquipmentData()
    }, [])

    const config = {
        data,
        xField: 'year',
        yField: 'value',
        stack: true,
        colorField: 'type',
        label: {
            text: 'value',
            textBaseline: 'bottom',
            position: 'inside',
        },
        interaction: {
            elementHighlightByColor: {
                link: true,
            },
        },
        state: {
            active: { linkFill: 'rgba(0,0,0,0.25)', stroke: 'black', lineWidth: 0.5 },
            inactive: { opacity: 0.5 },
        },
    };

    return <Column {...config} />;
};

export default TimeChart;
