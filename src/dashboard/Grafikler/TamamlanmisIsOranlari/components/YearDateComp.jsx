import { DatePicker } from 'antd';
import { Button, Popover, ConfigProvider } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useDate } from '../DateContext';

const DatePickerComp = () => {
    const { handleSubmit, control } = useForm()
    const { setSelectedDate} = useDate();

    const onChange = (date, dateString) => {
        setSelectedDate(dateString);
    };

    return (
        <form>
            <Controller
                name="date"
                control={control}
                defaultValue={null}
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
        </form>

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