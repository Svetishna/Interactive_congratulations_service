import style from './Image.module.css';
import Background from '../../../img/card.jpg';

const Image = () => (
    <img className={style.img} src={Background} alt="" />
);

export default Image;