import { BaseLayout } from "./components/Header";
import { FilterContextProvider } from "./context/FilterContext";

function App() {

  return (
    <FilterContextProvider><BaseLayout /></FilterContextProvider>
  )
}

export default App
