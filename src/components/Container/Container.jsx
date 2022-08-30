import style from './Container.module.css';

//То, что будет передано в контейнер (props) мы будем доставать, и из него доставать свойство children
const Container = ({ children }) => (
    <div className={style.container}>{children}</div>
);

export default Container;