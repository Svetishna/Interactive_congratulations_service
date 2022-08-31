import style from './Main.module.css';
import Paragraph from './Paragraph/Paragraph';
import ImageCard from './ImageCard/ImageCard';
import CardBG from '../../img/card.jpg'; //Передали картинку background

const Main = () => (
    <main className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                {/* С помощью props передали картинку */}
                <ImageCard img={CardBG} />
                <Paragraph />
            </div>
        </div>
    </main>
)

export default Main;