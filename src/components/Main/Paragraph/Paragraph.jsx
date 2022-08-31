import style from './Paragraph.module.css';
import { useContext } from 'react';
import { textContext } from '../../../context/textContext'

const Paragraph = () => {
    const { text } = useContext(textContext);

    return (
        <p className={style.felicitation}>
            {text}
        </p>
    )
};

export default Paragraph;