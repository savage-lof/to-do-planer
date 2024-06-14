import Styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={Styles['footer']}>
            <a href='https://t.me/savage_lof'>
                <img
                className={Styles['logo_footer']}
                src='/images/telegram.png'>
                </img>
            </a>
            <a href='https://vk.com/savage_lof'>
                <img
                className={Styles['logo_footer']}
                src='/images/vk.png'>
                </img>
            </a>
        </footer>
    )
}