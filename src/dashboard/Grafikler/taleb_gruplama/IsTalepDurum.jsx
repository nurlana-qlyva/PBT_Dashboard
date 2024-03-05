import useFetch from '../../../hooks/useFetch'
import { Pie } from '@ant-design/charts';
import { Spin, Select } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const IsTalepDurum = ({ handleChange }) => {
  const [data, isLoading] = useFetch("GetIsTalepDurumEnvanter?ID=2")

  let formattedData = [];

  if (data) {
    formattedData = data.map(item => ({
      ...item,
      "İş talep sayısı": item.IS_TALEP_SAYISI,
      "İş talep durumu": item.IS_TALEP_SAYISI
    }));
  }

  const config = {
    data: formattedData,
    angleField: 'İş talep sayısı',
    colorField: 'IST_DURUM_ID',
    radius: .6,
    label: {
      text: (d) => `${d["İş talep sayısı"]}`,
      position: 'spider',
    },
    legend: {
      color: {
        title: true,
        position: 'top',
        rowPadding: 5,
      },
    },
  };

  const modalConfig = { ...config, radius: 1 }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>İş Talebi Durumu Grafiği</h3>
        <div>
          <Select
            defaultValue="İş Talebi Durumu"
            style={{
              width: 130,
              marginRight: 10
            }}
            onChange={handleChange}
            options={[
              {
                value: 1,
                label: 'İş Talebi Tipi',
              },
              {
                value: 2,
                label: 'İş Talebi Durumu',
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

export default IsTalepDurum;