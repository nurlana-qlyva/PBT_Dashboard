import { DatePicker } from 'antd';
import { Button, Popover, ConfigProvider } from 'antd';
import { useFormContext, Controller } from "react-hook-form";
import { useDate } from '../../../../DateContext';

const DatePickerComp = () => {
    const { control } = useFormContext()
    const { selectedDate, setSelectedDate } = useDate()

    const onChange = (date, dateString) => {
        setSelectedDate({...selectedDate, tamamlanmis_oranlar_zaman: dateString})
    };

    return (
        <Controller
            name="tamamlanmis_oranlar_zaman"
            control={control}
            render={({ field }) => (
                <DatePicker
                    {...field}
                    onChange={(date, dateString) => {
                        field.onChange(date);
                        onChange(date, dateString);
                    }}
                    picker="year"
                />
            )}
        />

    )
}

const YearDatePicker = () => {

    return <ConfigProvider
        button={{
            style: { border: 'none' },
        }}
    >
        <div className="demo">
            <div>
                <Popover placement="rightTop" content={<DatePickerComp />}>
                    <Button>Yıla göre seç</Button>
                </Popover>
            </div>
        </div>
    </ConfigProvider>
}

export default YearDatePicker;