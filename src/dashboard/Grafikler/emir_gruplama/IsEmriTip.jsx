import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin, Select } from 'antd';
import { Ayarlar } from '../components/Ayarlar';
const customLabel = (_, datum) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {datum["İş emri sayısı"] > 10 && (
            <>
                <div style={{ width: 50, height: 2, background: 'rgba(0,0,0,0.4)' }} />
                <div style={{ color: 'black', fontWeight: 500 }}>
                    {datum["İş emri sayısı"]}
                </div>
            </>
        )}

    </div>
);
const IsEmriTip = ({ handleChange }) => {
    const [data, isLoading] = useFetch("GetIsEmriTipEnvanter?ID=2")

    const total = data.reduce((acc, entry) => acc + entry.ISEMRI_SAYISI, 0);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => ({
            ...item,
            "İş emri sayısı": item.ISEMRI_SAYISI,
            "İş emri tipi": item.ISEMRI_TIPI.slice(0, 15) + '...'
        }));
    }



    const config = {
        data: formattedData,
        angleField: "İş emri sayısı",
        colorField: "İş emri tipi",
        radius: .8,
        label: {
            text: "İş emri sayısı",
            position: 'outside',
        },
        // label: {
        //     text: 'İş emri tipi',
        //     position: 'outside',
        //     textAlign: 'center',
        //     transform: [
        //         {
        //             type: 'contrastReverse',
        //         },
        //     ],
        //     render: customLabel,
        // },
        // legend: false,
        // paddingRight: 90,
        innerRadius: 0.5,
        legend: {
            color: {
                title: false,
                position: 'top',
                rowPadding: 1,
            },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: '',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 40,
                    fontStyle: 'bold',
                },
            },
        ]
    };

    const modalConfig = { ...config, radius: 1 }


    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emri Tipleri</h3>
                <div>
                    <Select
                        defaultValue="İş Emri Tipi"
                        style={{
                            width: 130,
                            marginRight: 10
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 1,
                                label: 'İş Emri Tipi',
                            },
                            {
                                value: 2,
                                label: 'İş Emri Durumu',
                            },
                            {
                                value: 3,
                                label: 'Lokasyon',
                            }
                        ]}
                    />
                    <Ayarlar chart={<Pie {...modalConfig} />} />
                </div>
            </div>
            {isLoading ? <Spin size="large" /> : <Pie {...config} />}
        </>
    );
}

export default IsEmriTip;