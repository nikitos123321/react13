import style from './Banner.module.css'

export function Banner() {
    return (
        <>
            <div className={style.main_back}>
                <p className={style.txt}>
                    О компании <span className={style.span}> АвтоТорг</span>
                </p>
            </div>
        </>
    )
}