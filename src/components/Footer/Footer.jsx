import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TgIcon } from '../../img/tg.svg';
import { ReactComponent as PinIcon } from '../../img/pinterest.svg';
import { ReactComponent as StumbleIcon } from '../../img/stumbleupon.svg';

//В стрелочной функции вместо {} можно использовать () - аналог return
const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    {/* Это props.children */}
                    <p>Design: <a href='https://t.me/Mrshamallowww'>Anastasia Ilina</a></p>
                    <p>Сoder: <a href='https://t.me/Svetishna'>Svetlana Tokarenko</a></p>
                    <p>© HBCard, 2022</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href='https://vk.com/methed' className={style.link}>
                            <VKIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://t.me/methed_chat_frontend' className={style.link}>
                            <TgIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://pinterest.com' className={style.link}>
                            <PinIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://stumble.com' className={style.link}>
                            <StumbleIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;