import { useState, useEffect } from "react";
import useFetch from './useFetch'
import { Spin } from 'antd';
import './dashboard.css';
import TimeChart from "./Grafikler/TimeChart";
import Chart from "./Grafikler/Chart";
import DashboardStatisticCards from "./DashboardStatisticCards/DashboardStatisticCards";
import Filter from "./Fillter/Filter";
import { Ayarlar } from "./Grafikler/components/Ayarlar";
import MakineTipEnvanter from "./Grafikler/MakineTipEnvanter";
import LokasyonDagilimTable from "./Grafikler/LokasyonDagilimTable";
import BakimBarChart from "./Grafikler/BakimBarChart";
import IsEmriOzetTablu from "./Grafikler/IsEmriOzetTablo";
import IsTalepTipEnvanter from "./Grafikler/IsTalepTipEnvanter";
import IsEmriTipEnvanter from "./Grafikler/IsEmriTipEnvanter";
import IsEmriDurumEnvanter from "./Grafikler/IsEmriDurumEnvanter";
import IsTalepDurumEnvanter from "./Grafikler/IsTalepDurumEnvanter";

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
  const { isLoading } = useFetch("GetDashboardItems?ID=25")

  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Filter style={{ padding: mobileView ? "24px 0px" : 24 }} />

      <div style={{ padding: mobileView ? "24px 0px" : 24 }}>
        <DashboardStatisticCards />

        <>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>

            {/* 3lu */}
            <div className="chart" style={{ width: 'calc(100% / 4 - 3 * 10px / 4)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>İş Emri Tipi Grafiği</h3>
                    <Ayarlar chart={<IsEmriTipEnvanter />} />
                  </div>
                  <IsEmriTipEnvanter />
                </>
              )}
            </div>
            <div className="chart" style={{ width: 'calc(100% / 4 - 3 * 10px / 4)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>İş Talebi Tipi Grafiği</h3>
                    <Ayarlar chart={<IsTalepTipEnvanter />} />
                  </div>
                  <IsTalepTipEnvanter />
                </>
              )}
            </div>
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Makine Tiplerine Göre Envanter Dağılımı</h3>
                    <Ayarlar chart={<MakineTipEnvanter />} />
                  </div>
                  <MakineTipEnvanter />
                </>
              )}
            </div>

            {/* 2li */}
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Tamamlanmış İş talepleri ve İş Emirleri Oranları</h3>
                    <Ayarlar chart={<TimeChart />} />
                  </div>
                  <TimeChart />
                </>
              )}
            </div>
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Aylık Bakım Maliyetleri</h3>
                    <Ayarlar chart={<Chart data={aylikBakim} />} />
                  </div>
                  <Chart data={aylikBakim} />
                </>
              )}
            </div>

            {/* 3lu */}
            <div className="chart" style={{ width: 'calc(100% / 3 - 2 * 10px / 3)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Periyodik Bakımlar Grafiği</h3>
                    <Ayarlar chart={<BakimBarChart />} />
                  </div>
                  <BakimBarChart />
                </>
              )}
            </div>

            <div className="chart" style={{ width: 'calc(100% / 3 - 2 * 10px / 3)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>İş Emri Durumu Grafiği</h3>
                    <Ayarlar chart={<IsEmriDurumEnvanter />} />
                  </div>
                  <IsEmriDurumEnvanter />
                </>
              )}
            </div>
            <div className="chart" style={{ width: 'calc(100% / 3 - 2 * 10px / 3)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>İş Talebi Durumu Grafiği</h3>
                    <Ayarlar chart={<IsTalepDurumEnvanter />} />
                  </div>
                  <IsTalepDurumEnvanter />
                </>
              )}
            </div>


            {/* tables 2li */}
            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Lokasyon Bazında İş talepleri / İş Emmirleri Dağılımı</h3>
                    <Ayarlar chart={<LokasyonDagilimTable />} />
                  </div>
                  <LokasyonDagilimTable />
                </>
              )}
            </div>

            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Arızalı Makineler</h3>
                    <Ayarlar chart={<LokasyonDagilimTable />} />
                  </div>
                  <LokasyonDagilimTable />
                </>
              )}
            </div>

            <div className="chart" style={{ width: 'calc(100% / 2 -  5px)' }}>
              {isLoading ? <Spin size="large" /> : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>İş Emirleri Özet Tablosu</h3>
                    <Ayarlar chart={<IsEmriOzetTablu />} />
                  </div>
                  <IsEmriOzetTablu />
                </>
              )}
            </div>
          </div>
        </>
        {/* <Hatirlatici /> */}
      </div>
    </>
  );
}
