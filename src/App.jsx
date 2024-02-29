import { BaseLayout } from "./components/BaseLayout";
import { AylikBakimMaliyetiYearProvider } from "./dashboard/Grafikler/AylikBakimMaliyeti/YearContext";
import { IsEmirlerininZamanDagilimiYearProvider } from "./dashboard/Grafikler/IsEmirlerininZamanDagilimi/YearContext";
import { TamamlanmisIsOranlariYearProvider } from "./dashboard/Grafikler/TamamlanmisIsOranlari/YearContext";

function App() {

  return (
    <AylikBakimMaliyetiYearProvider>
      <TamamlanmisIsOranlariYearProvider>
        <IsEmirlerininZamanDagilimiYearProvider>
          <BaseLayout />
        </IsEmirlerininZamanDagilimiYearProvider>
      </TamamlanmisIsOranlariYearProvider>
    </AylikBakimMaliyetiYearProvider>
  )
}

export default App
