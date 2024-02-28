import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';


const IsTalepDurumEnvanter = () => {
    const [data, isLoading] = useFetch("GetIsTalepDurumEnvanter?ID=2")

    // const total = data.reduce((acc, entry) => acc + entry.IS_TALEP_SAYISI, 0);

    const config = {
        data,
        angleField: 'IS_TALEP_SAYISI',
        colorField: 'IST_DURUM_ID',
        radius: .8,
        label: {
            text: (d) => `${d.IS_TALEP_SAYISI}`,
            position: 'spider',
        },
        legend: false
    };

    const modalConfig = {...config, radius: 1}

    return (
        <div style={{height: '100%', width: '100%'}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Talebi Durumu Grafiği</h3>
                <Ayarlar chart={<Pie {...modalConfig} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Pie {...config}/>}
        </div>
    );
}

export default IsTalepDurumEnvanter;


