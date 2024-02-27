import React, { useState, useEffect, useMemo } from "react";
import './dashboard.css';
import TamamlanmisOranlar from "./Grafikler/TamamlanmisIsOranlari/TamamlanmisOranlar";
import DashboardStatisticCards from "./DashboardStatisticCards/DashboardStatisticCards";
import Filter from "./Fillter/Filter";
import LokasyonDagilimTable from "./Grafikler/LokasyonDagilimTable/LokasyonDagilimTable";
import BakimBarChart from "./Grafikler/PeriyodikBakim/BakimBarChart";
import IsEmriOzetTablo from "./Grafikler/IsEmriOzetTable/IsEmriOzetTablo";
import IsTalepTipEnvanter from "./Grafikler/IsTalepTipEnvanter/IsTalepTipEnvanter";
import IsEmriTipEnvanter from "./Grafikler/IsEmriTipEnvanter/IsEmriTipEnvanter";
import IsEmriDurumEnvanter from "./Grafikler/IsEmriDurumEnvanter/IsEmriDurumEnvanter";
import IsTalepDurumEnvanter from "./Grafikler/IsTalepDurumEnvanter/IsTalepDurumEnvanter";
import PersonelIsGucu from "./Grafikler/PersonelIsGucu/PersonelIsGucu";
import BakimIslemlerinZamanDagilimi from "./Grafikler/BakimIslemlerinZamanDagilimi/BakimIslemlerinZamanDagilimi";
import ArizaliMakinelerTablo from "./Grafikler/ArizaliMakineler/ArizaliMakineler";
import AylikBakimMaliyeti from "./Grafikler/AylikBakimMaliyeti/AylikBakimMaliyeti";
import MakineTipEnvanter from "./Grafikler/MakineTipEnvanter/MakineTipEnvanter";
import ToplamHarcananIsGucu from "./Grafikler/ToplamHarcananIsGucu/ToplamHarcananIsGucu";

import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const plainOptions = ['İş Emri Tipi Grafiği', 'İş Talebi Tipi Grafiği', 'Makine Tiplerine Göre Envanter Dağılımı', 'Tamamlanmış İş talepleri ve İş Emirleri Oranları', 'Periyodik Bakımlar Grafiği', 'Aylık Bakım Maliyetleri', 'Personel Bazında Harcanan İş Gücü', 'İş Emri Durumu Grafiği', 'İş Talebi Durumu Grafiği', 'Bakım İşlemlerinin Zaman İçerisinde Dağılımı', 'Lokasyon Bazında İş talepleri / İş Emirleri Dağılımı', 'İş Emirleri Özet Tablosu', 'Arızalı Makineler', 'Toplam Harcanan İş Gücü'];

const components = [
  {
    id: 1,
    key: 'İş Emri Tipi Grafiği',
    component: <IsEmriTipEnvanter />
  },
  {
    id: 2,
    key: 'İş Talebi Tipi Grafiği',
    component: <IsTalepTipEnvanter />
  },
  {
    id: 3,
    key: 'Tamamlanmış İş talepleri ve İş Emirleri Oranları',
    component: <TamamlanmisOranlar />
  },
  {
    id: 4,
    key: 'Periyodik Bakımlar Grafiği',
    component: <BakimBarChart />
  },
  {
    id: 5,
    key: 'Aylık Bakım Maliyetleri',
    component: <AylikBakimMaliyeti />
  },
  {
    id: 6,
    key: 'Personel Bazında Harcanan İş Gücü',
    component: <PersonelIsGucu />
  },
  {
    id: 7,
    key: 'İş Emri Durumu Grafiği',
    component: <IsEmriDurumEnvanter />
  },
  {
    id: 8,
    key: 'İş Talebi Durumu Grafiği',
    component: <IsTalepDurumEnvanter />
  },
  {
    id: 9,
    key: 'Toplam Harcanan İş Gücü',
    component: <ToplamHarcananIsGucu />
  },
  {
    id: 10,
    key: 'Bakım İşlemlerinin Zaman İçerisinde Dağılımı',
    component: <BakimIslemlerinZamanDagilimi />
  },
  {
    id: 11,
    key: 'Lokasyon Bazında İş talepleri / İş Emirleri Dağılımı',
    component: <LokasyonDagilimTable />
  },
  {
    id: 12,
    key: 'Makine Tiplerine Göre Envanter Dağılımı',
    component: <MakineTipEnvanter />
  },
  {
    id: 13,
    key: 'İş Emirleri Özet Tablosu',
    component: <IsEmriOzetTablo />
  },
  {
    id: 14,
    key: 'Arızalı Makineler',
    component: <ArizaliMakinelerTablo />
  }
];

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  const [filteredGraphs, setFilteredGraphs] = useState(plainOptions);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateFilters = (selectedGraphs) => {
    setFilteredGraphs(selectedGraphs);
  };
  const memoizedFilteredGraphs = useMemo(() => filteredGraphs, [filteredGraphs]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  return (
    <>
      <Filter style={{ padding: mobileView ? "24px 0px" : 24 }} onUpdateFilters={updateFilters} />
      <div style={{ padding: mobileView ? "24px 0px" : 24 }}>
        <DashboardStatisticCards />
        <ResponsiveGridLayout
          className="layout"
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
          isDraggable={!isDragging}
          onDragStart={handleDragStart}
          onDragStop={handleDragStop}
        >
          {memoizedFilteredGraphs.map((graphKey, index) => (
            <div key={graphKey} className="chart resizable-graph" data-grid={{ w: 4, h: 4, x: (index % 3) * 4, y: Math.floor(index / 3) * 4 }} onClick={handleClick}>
              {components.find(component => component.key === graphKey).component}
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Dashboard;
