import { BaseLayout } from "./components/BaseLayout";
import { AylikBakimMaliyetiDateProvider } from "./dashboard/Grafikler/AylikBakimMaliyeti/DateContext";
import { IsEmirlerininZamanDagilimiYearProvider } from "./dashboard/Grafikler/IsEmirlerininZamanDagilimi/DateContext";
import { IsEmriOzetTabloDateProvider } from "./dashboard/Grafikler/IsEmriOzetTable/DateContext";
import { PersonelIsGucuDateProvider } from "./dashboard/Grafikler/PersonelIsGucu/DateContext";
import { TamamlanmisIsOranlariDateProvider } from "./dashboard/Grafikler/TamamlanmisIsOranlari/DateContext";
import { ToplamHarcanaIsGucuDateProvider } from "./dashboard/Grafikler/ToplamHarcananIsGucu/DateContext";

function App() {

  return (
    <AylikBakimMaliyetiDateProvider>
      <TamamlanmisIsOranlariDateProvider>
        <IsEmirlerininZamanDagilimiYearProvider>
          <PersonelIsGucuDateProvider>
            <ToplamHarcanaIsGucuDateProvider>
              <IsEmriOzetTabloDateProvider>
                <BaseLayout />
              </IsEmriOzetTabloDateProvider>
            </ToplamHarcanaIsGucuDateProvider>
          </PersonelIsGucuDateProvider>
        </IsEmirlerininZamanDagilimiYearProvider>
      </TamamlanmisIsOranlariDateProvider>
    </AylikBakimMaliyetiDateProvider>
  )
}

export default App
