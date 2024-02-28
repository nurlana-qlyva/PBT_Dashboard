import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const IsTalepTipEnvanter = () => {
  const [data, isLoading] = useFetch("GetIsTalepTipEnvanter?ID=2")

  // const total = data.reduce((acc, entry) => acc + entry.TALEP_SAYISI, 0);

  const config = {
    data,

    angleField: 'TALEP_SAYISI',
    colorField: 'TALEP_TIPI',
    radius: .8,
    label: {
      text: (d) => `${d.TALEP_TIPI}\n ${d.TALEP_SAYISI}`,
      position: 'spider',
      labelHeight: 10,
    },
    legend: false
  };

  const modalConfig = {...config, radius: .969}

  return (
    <div style={{height: '100%', width: '100%'}}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>İş Talebi Tipi Grafiği</h3>
        <Ayarlar chart={<Pie {...modalConfig} />} />
      </div>
      {isLoading ? <Spin size="large" /> : <Pie {...config} />}
    </div>
  );
}

export default IsTalepTipEnvanter;