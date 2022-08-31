import { createContext, useState } from "react";

//Создаем контекст с помощью функции createContext, содержащейся в React. Передаем туда начальное состояние (в нашем случае - объект, так как в value объект)
export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
    const [text, setText] = useState(`
    Поздравляю с днем рожденья!
    Пусть будет жизнь полна веселья,
    Не будет грусти и хлопот,
    А только счастье круглый год!
    
    Желаю творческих успехов,
    Прекрасных дней, улыбок, смеха.
    Любви, душевного тепла,
    Как сказка, чтобы жизнь была!
    `);

    return (
        //Provider для того, чтобы записать, хранить данные. Consume для использования данных
        <textContext.Provider value={{ text, setText }}>
            {children}
        </textContext.Provider>
    )
}