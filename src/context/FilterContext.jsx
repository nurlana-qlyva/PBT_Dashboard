import { createContext, useState } from "react";


const FilterContext = createContext()

const filterList = [
    {
        label: 'İş Emirleri/ İş Talepleri Grafiği',
        key: 1,
        checked: true
    },
    {
        label: 'İş Emri/ İş Talebi Durumları Grafiği',
        key: 2,
        checked: true
    },
    {
        label: 'Makine Tiplerine Göre Envanter Dağılımı',
        key: 3,
        checked: true
    },
    {
        label: 'Tamamlanmış İş talepleri ve İş Emirleri Oranları',
        key: 4,
        checked: true
    },
    {
        label: 'Periyodik Bakımlar Grafiği',
        key: 5,
        checked: true
    },
    {
        label: 'Aylık Bakım Maliyetleri',
        key: 6,
        checked: true
    }
]

export const FilterContextProvider = ({ children }) => {
    const [list, setList] = useState([...filterList])

    const value = { list, setList }




    return <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
}

// export const useFilter = () =>  {
//     return 
// }


export default FilterContext;