import { createContext, useState } from "react";

//Создаем контекст с помощью функции createContext, содержащейся в React. Передаем туда начальное состояние (в нашем случае - объект, так как в value объект)
export const holidayContext = createContext({});

export const HolidayContextProvider = ({ children }) => {
    const [holiday, setHoliday] = useState('Выбрать праздник');

    return (
        //Provider для того, чтобы записать, хранить данные. Consume для использования данных
        <holidayContext.Provider value={{ holiday, setHoliday }}>
            {children}
        </holidayContext.Provider>
    )
}