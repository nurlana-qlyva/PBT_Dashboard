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
    radius: .7,
    label: {
      text: (d) => `${d.TALEP_TIPI}\n ${d.TALEP_SAYISI}`,
      position: 'spider',
    },
    legend: false
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>İş Talebi Tipi Grafiği</h3>
        <Ayarlar chart={<Pie {...config} />} />
      </div>
      {isLoading ? <Spin size="large" /> : <Pie {...config} />}
    </div>
  );
}

export default IsTalepTipEnvanter;