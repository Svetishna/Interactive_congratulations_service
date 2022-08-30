import style from './Main.module.css';
import Paragraph from './Paragraph/Paragraph';
import Image from './Image/Image';

const Main = () => (
    <main className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                <Image />
                <Paragraph />
            </div>
        </div>
    </main>
)

export default Main;