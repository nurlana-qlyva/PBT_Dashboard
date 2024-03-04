import { DatePicker } from 'antd';
import { Button, Popover, ConfigProvider } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useDate } from '../../../../DateContext';

const DatePickerComp = () => {
    const { control } = useForm()
    const { selectedDate, setSelectedDate } = useDate();

    function getFirstAndLastDayOfMonth(dateString) {
        const [year, month] = dateString.split('-');
        const firstDayOfMonth = new Date(year, month - 1, 1);
        const lastDayOfMonth = new Date(year, month, 0);

        const formattedFirstDay = formatDate(firstDayOfMonth);
        const formattedLastDay = formatDate(lastDayOfMonth);

        return { firstDay: formattedFirstDay, lastDay: formattedLastDay };
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const onChange = (date, dateString) => {
        const { firstDay, lastDay } = getFirstAndLastDayOfMonth(dateString);
        setSelectedDate([firstDay, lastDay]);
        setSelectedDate({ ...selectedDate, tamamlanmis_oranlar_zaman: [firstDay, lastDay] })

    };

    return (
        <form>
            <Controller
                name="toplam_harcanan_is_gucu_zaman"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <DatePicker
                        {...field}
                        onChange={(date, dateString) => {
                            field.onChange(date);
                            onChange(date, dateString);
                        }}
                        picker="month"
                    />
                )}
            />
        </form>

    )
}

const MonthDatePicker = () => {
    return <ConfigProvider
        button={{
            style: { border: 'none' },
        }}
    >
        <div className="demo">
            <div>
                <Popover placement="rightTop" content={<DatePickerComp />}>
                    <Button>Aya göre seç</Button>
                </Popover>
            </div>
        </div>
    </ConfigProvider>
}

export default MonthDatePicker;