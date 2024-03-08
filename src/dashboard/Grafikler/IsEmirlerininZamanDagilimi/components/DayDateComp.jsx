import { DatePicker } from 'antd';
import { Button, Popover, ConfigProvider } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useDate } from '../../../../DateContext';
import locale from 'antd/es/locale/tr_TR';

const { RangePicker } = DatePicker;

const DatePickerComp = () => {
    const { control } = useForm()
    const { selectedDate, setSelectedDate } = useDate();

    const onChange = (date, dateString) => {
        setSelectedDate({ ...selectedDate, is_emirlerinin_zaman_dagilimi: dateString });

    };

    return (
        <form>
            <Controller
                name="is_emirlerinin_zaman_dagilimi"
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
        locale={locale}
        button={{
            style: { border: 'none' },
        }}
    >
        <div className="demo">
            <div>
                <Popover placement="rightTop" content={<DatePickerComp />}>
                    <Button>Tarih aralığı seç</Button>
                </Popover>
            </div>
        </div>
    </ConfigProvider>
}

export default DayDatePicker;