import { useContext, useState, useEffect } from "react";
import AxiosInstance from "../api/http";
import './dashboard.css';
import DonutChartEnvanter from "./Grafikler/DonutChartEnvanter";
import TimeChart from "./Grafikler/TimeChart";
import Chart from "./Grafikler/Chart";
import Statistic from "./Statistic/Statistic";
import Filter from "./Fillter/Filter";
import { ChartSettings } from "./Grafikler/components/Settings";
import FilterContext from "../context/FilterContext";
import PieChart from "./Grafikler/PieChart";
import DonutChartBakim from "./Grafikler/DonutChartBakim";
import EnvanterBarChart from "./Grafikler/EnvanterBarChart";
import LokasyonDagilimTable from "./Grafikler/LokasyonDagilimTable";
import BakimBarChart from "./Grafikler/BakimBarChart";
import IsEmriOzetTablu from "./Grafikler/IsEmriOzetTablo";


const emirTipiData = [
  {
    "type": "İş emri tipi 1",
    "value": 27
  },
  {
    "type": "İş emri tipi 2",
    "value": 15
  },
  {
    "type": "İş emri tipi 3",
    "value": 15
  }
]


const talebiTipiData = [
  {
    "type": "İş talebi tipi 1",
    "value": 27
  },
  {
    "type": "İş talebi tipi 2",
    "value": 15
  },
  {
    "type": "İş talebi tipi 3",
    "value": 18
  }
]


const emirDurumuData = [
  {
    "type": "İş emri durumu 1",
    "value": 27
  },
  {
    "type": "İş emri durumu 2",
    "value": 15
  },
  {
    "type": "İş emri durumu 3",
    "value": 18
  }
]

const talebiDurumuData = [
  {
    "type": "İş talebi durumu 1",
    "value": 27
  },
  {
    "type": "İş talebi durumu 2",
    "value": 15
  },
  {
    "type": "İş talebi durumu 3",
    "value": 18
  }
]

const aylikBakim = [
    { name: 'Aylik bakim 1', star: 297 },
    { name: 'Aylik bakim 2', star: 506 },
    { name: 'Aylik bakim 3', star: 805 },
    { name: 'Aylik bakim 4', star: 1478 },
    { name: 'Aylik bakim 5', star: 2029 },
    { name: 'Aylik bakim 6', star: 7100 },
    { name: 'Aylik bakim 7', star: 7346 },
    { name: 'Aylik bakim 8', star: 10178 },
]

export default function Dashboard() {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  const [data, setData] = useState([])

  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const fetchEquipmentData = async () => {
    try {
      const response = await AxiosInstance.get("GetDashboardItems?ID=25");
      console.log(response)
      if (response) {

        setData(response);
        // setLoading(false);
      } else {
        console.error("API response is not in expected format");
      }
    } catch (error) {
      console.error("Error in API request:", error);
      //   setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipmentData()
  }, [])



  return (
    <>

      <Filter style={{ padding: mobileView ? "24px 0px" : 24 }} />

      <div style={{ padding: mobileView ? "24px 0px" : 24 }}>
        <Statistic data={data} />

        <div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>

            {/* 3lu */}
            <div className="chart" style={{ width: 'calc(100% / 4 - 3 * 10px / 4)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emri Tipi Grafiği</h3>
                <ChartSettings chart={<PieChart data={emirTipiData}/>} />
              </div>
              <PieChart data={emirTipiData} />
            </div>
            <div className="chart" style={{ width: 'calc(100% / 4 - 3 * 10px / 4)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Talebi Tipi Grafiği</h3>
                <ChartSettings chart={<PieChart data={talebiTipiData}/>} />
              </div>
              <PieChart data={talebiTipiData} />
            </div>
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Makine Tiplerine Göre Envanter Dağılımı</h3>
                <ChartSettings chart={<EnvanterBarChart data={data}/>} />
              </div>
              <EnvanterBarChart data={data} />
            </div>

            {/* 2li */}
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Tamamlanmış İş talepleri ve İş Emirleri Oranları</h3>
                <ChartSettings chart={<TimeChart data={data}/>} />
              </div>
              <TimeChart data={data} />
            </div>
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Aylık Bakım Maliyetleri</h3>
                <ChartSettings chart={<Chart data={aylikBakim}/>} />
              </div>
              <Chart data={aylikBakim} />
            </div>

            {/* 3lu */}
            <div className="chart" style={{ width: 'calc(100% / 3 - 2 * 10px / 3)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Periyodik Bakımlar Grafiği</h3>
                <ChartSettings chart={<BakimBarChart data={data}/>} />
              </div>
              <BakimBarChart data={data} />
            </div>

            <div className="chart" style={{ width: 'calc(100% / 3 - 2 * 10px / 3)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emri Durumu Grafiği</h3>
                <ChartSettings chart={<PieChart data={emirDurumuData}  />} />
              </div>
              <PieChart data={emirDurumuData} />
            </div>
            <div className="chart" style={{ width: 'calc(100% / 3 - 2 * 10px / 3)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Talebi Durumu Grafiği</h3>
                <ChartSettings chart={<PieChart  data={talebiDurumuData}/>} />
              </div>
              <PieChart data={talebiDurumuData} />
            </div>


            {/* tables 2li */}
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Lokasyon Bazında İş talepleri / İş Emmirleri Dağılımı</h3>
                <ChartSettings chart={<LokasyonDagilimTable />} />
              </div>
              <LokasyonDagilimTable />
            </div>

            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Arızalı Makineler</h3>
                <ChartSettings chart={<LokasyonDagilimTable />} />
              </div>
              <LokasyonDagilimTable />
            </div>

            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emirleri Özet Tablosu</h3>
                <ChartSettings chart={<IsEmriOzetTablu />} />
              </div>
              <IsEmriOzetTablu />
            </div>
          </div>
        </div>
        {/* <Hatirlatici /> */}
      </div>
    </>
  );
}
