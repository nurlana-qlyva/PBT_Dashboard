import { useForm, FormProvider } from "react-hook-form";
import { BaseLayout } from "./components/BaseLayout";
import { DateProvider } from "./DateContext";

function App() {
  const method = useForm(
    {
      defaultValues: {
        tamamlanmis_oranlar_zaman: "",
        toplam_harcanan_is_gucu_yil: ["2023-01-01", "2023-01-01"]
      }
    }
  )

  const onSubmit = (data) => console.log(data)

  return (
    <FormProvider {...method}>
      <DateProvider>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <BaseLayout />
          </form>
      </DateProvider>
    </FormProvider>

  )
}

export default App
