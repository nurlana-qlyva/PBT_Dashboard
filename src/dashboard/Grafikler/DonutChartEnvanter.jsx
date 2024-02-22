import { Pie } from '@ant-design/plots';

const DonutChartEnvanter = ({data}) => {
    const config = {
        data: data.MAKINE_TIP_ENVANTER,
        angleField: 'MAKINE_SAYISI',
        colorField: 'MAKINE_TIPI',
        paddingRight: 80,
        innerRadius: 0.6,
        label: {
            text: 'MAKINE_SAYISI',
            style: {
                fontWeight: 'bold',
            },
        },
        // legend: {
        //     color: {
        //         title: false,
        //         position: 'right',
        //         rowPadding: 5,
        //     },
        // },
        annotations: [
            {
                type: 'text',
                style: {
                    text: 'Makine tiplerine göre\nEnvanter',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'bold',
                },
            },
        ],
    };
    return <Pie {...config} />;
};

export default DonutChartEnvanter