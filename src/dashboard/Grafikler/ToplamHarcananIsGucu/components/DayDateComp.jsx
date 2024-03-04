import { DatePicker } from 'antd';
import { Button, Popover, ConfigProvider } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useDate } from '../../../../DateContext';

const { RangePicker } = DatePicker;

const DatePickerComp = () => {
    const { control } = useForm()
    const { selectedDate, setSelectedDate } = useDate();

    const onChange = (date, dateString) => {
        setSelectedDate({ ...selectedDate, tamamlanmis_oranlar_zaman: dateString })
    };

    return (
        <form>
            <Controller
                name="toplam_harcanan_is_gucu_zaman"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <RangePicker
                        {...field}
                        onChange={(date, dateString) => {
                            field.onChange(date);
                            onChange(date, dateString);
                        }}
                    />
                )}
            />
        </form>

    )
}

const DayDatePicker = () => {
    return <ConfigProvider
        button={{
            style: { border: 'none' },
        }}
    >
        <div className="demo">
            <div>
                <Popover placement="rightTop" content={<DatePickerComp />}>
                    <Button>Güne göre seç</Button>
                </Popover>
            </div>
        </div>
    </ConfigProvider>
}

export default DayDatePicker;