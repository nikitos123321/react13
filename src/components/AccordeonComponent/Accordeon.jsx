import style from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='О нас' text='1' />
                <AccordeonItem title='Контакты' text='1' />
                <AccordeonItem title='О вас' text='1' />
            </div>
        </>
    )
}