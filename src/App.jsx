import { BaseLayout } from "./components/BaseLayout";
import { AylikBakimMaliyetiDateProvider } from "./dashboard/Grafikler/AylikBakimMaliyeti/DateContext";
import { IsEmirlerininZamanDagilimiYearProvider } from "./dashboard/Grafikler/IsEmirlerininZamanDagilimi/DateContext";
import { PersonelIsGucuDateProvider } from "./dashboard/Grafikler/PersonelIsGucu/DateContext";
import { TamamlanmisIsOranlariDateProvider } from "./dashboard/Grafikler/TamamlanmisIsOranlari/DateContext";
import { ToplamHarcanaIsGucuYearProvider } from "./dashboard/Grafikler/ToplamHarcananIsGucu/YearContext";

function App() {

  return (
    <AylikBakimMaliyetiDateProvider>
      <TamamlanmisIsOranlariDateProvider>
        <IsEmirlerininZamanDagilimiYearProvider>
          <PersonelIsGucuDateProvider>
            <ToplamHarcanaIsGucuYearProvider>
              <BaseLayout />
            </ToplamHarcanaIsGucuYearProvider>
          </PersonelIsGucuDateProvider>
        </IsEmirlerininZamanDagilimiYearProvider>
      </TamamlanmisIsOranlariDateProvider>
    </AylikBakimMaliyetiDateProvider>
  )
}

export default App
