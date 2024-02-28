import { BaseLayout } from "./components/BaseLayout";
import { AylikBakimMaliyetiYearProvider } from "./dashboard/Grafikler/AylikBakimMaliyeti/YearContext";
import { TamamlanmisIsOranlariYearProvider } from "./dashboard/Grafikler/TamamlanmisIsOranlari/YearContext";

function App() {

  return (
    <AylikBakimMaliyetiYearProvider>
      <TamamlanmisIsOranlariYearProvider>
        <BaseLayout />
      </TamamlanmisIsOranlariYearProvider>
    </AylikBakimMaliyetiYearProvider>
  )
}

export default App
