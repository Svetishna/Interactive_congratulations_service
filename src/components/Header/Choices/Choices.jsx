// import React from 'react';
import style from './Choices.module.css';
import { useContext, useState } from 'react';
import { holidayContext } from '../../../context/holidayContext';

//Создаем объект, юудет приходить с сервера
const holidays = {
    newyear: 'Новый год',
    birthdayWomen: 'День рождения  Ж',
    BirthdayMen: 'День рождения  М',
    womenday: '8 марта',
    knowledgeday: 'День знаний',
};

const Choices = () => {
    //useState - хук, создающий состояние. isOpenChoices - состояние, setIsOpenChoices - функция, позволяющяя менять состояние isOpenChoices
    const [isOpenChoices, setIsOpenChoices] = useState(false);

    // Вместо useState будет useContext
    // const [holiday, setHoliday] = useState('Выбрать праздник');
    const { holiday, setHoliday } = useContext(holidayContext);

    //Функция будет менять состояние isOpenChoices (закрывать/открывать выпадающее меню)
    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices);
    };

    //Функция для заполнения кнопки "выбрать праздник" контентом из выпадающего меню
    const changeHoliday = title => {
        setHoliday(title);
        toggleChoices();
    }

    return (
        //Весь элемент должен быть как цельный элемент, в отдельной обертке
        <div className={style.wrapper}>
            {/* onClick - синтетическое событие */}
            <button className={style.button} onClick={toggleChoices}>{holiday}</button>
            {/* Если isOpenChoices - true, то возвращается верстка. Иначе не возвращается */}
            {isOpenChoices && (
                <ul className={style.list}>
                    {/* Метод entries перебирает объект и выводит и ключ, и значение. Затем перебираем с помощью метода map */}
                    {Object.entries(holidays).map(item => (
                        <li
                            className={style.item}
                            key={[item[0]]}
                            onClick={() => { changeHoliday(item[1]) }}
                        >
                            {item[1]}
                        </li>
                    ))}
                </ul>)
            }
        </div>
    )
};

export default Choices;