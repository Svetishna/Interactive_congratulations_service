import { createContext, useState } from "react";

//Создаем контекст с помощью функции createContext, содержащейся в React. Передаем туда начальное состояние (в нашем случае - объект, так как в value объект)
export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
    const [img, setImg] = useState('');

    return (
        //Provider для того, чтобы записать, хранить данные. Consume для использования данных
        <imgContext.Provider value={{ img, setImg }}>
            {children}
        </imgContext.Provider>
    )
}