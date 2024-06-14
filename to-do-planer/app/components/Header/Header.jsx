import Styles from './Header.module.css'

export const Header = () => {
    const date = new Date().getHours();
    var text = '';
    switch (true) {
        case (date >= 0 && date < 7):
            text = 'Доброй ночи!';
            break;
        case (date >= 7 && date < 13):
            text = 'Доброe утро!';
            break;
        case (date >= 13 && date < 18):
            text = "Добрый день!";
            break;
        case (date >= 18 && date < 24):
            text = 'Добрый вечер!';
            break;
        default:
            text = 'Добро пожаловать!'
    }
    return (
        <header className={Styles["header"]}>
            <img
            className={Styles["logo_image"]}
            src="/images/logo.png"
            alt="Логотип"
            ></img>
            <p className={Styles['p']}>{text}</p>
            <button className={Styles['button_login']}>
                Войти
            </button>
        </header>
    )
}