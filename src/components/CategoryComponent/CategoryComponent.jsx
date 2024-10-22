import style from './Category.module.css'

export function Category() {
    return (
        <>
            <div className={style.category}>
                <p className={style.active}>Все товары</p>
                <p>Шины/колеса</p>
                <p>Масла</p>
                <p>Ароматизаторы</p>
            </div>
        </>
    )
}