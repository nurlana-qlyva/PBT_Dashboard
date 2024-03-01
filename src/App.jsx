import { BaseLayout } from "./components/BaseLayout";
import { AylikBakimMaliyetiYearProvider } from "./dashboard/Grafikler/AylikBakimMaliyeti/YearContext";
import { IsEmirlerininZamanDagilimiYearProvider } from "./dashboard/Grafikler/IsEmirlerininZamanDagilimi/YearContext";
import { PersonelIsGucuYearProvider } from "./dashboard/Grafikler/PersonelIsGucu/YearContext";
import { TamamlanmisIsOranlariYearProvider } from "./dashboard/Grafikler/TamamlanmisIsOranlari/YearContext";
import { ToplamHarcanaIsGucuYearProvider } from "./dashboard/Grafikler/ToplamHarcananIsGucu/YearContext";

function App() {

  return (
    <AylikBakimMaliyetiYearProvider>
      <TamamlanmisIsOranlariYearProvider>
        <IsEmirlerininZamanDagilimiYearProvider>
          <PersonelIsGucuYearProvider>
            <ToplamHarcanaIsGucuYearProvider>
              <BaseLayout />
            </ToplamHarcanaIsGucuYearProvider>
          </PersonelIsGucuYearProvider>
        </IsEmirlerininZamanDagilimiYearProvider>
      </TamamlanmisIsOranlariYearProvider>
    </AylikBakimMaliyetiYearProvider>
  )
}

export default App
