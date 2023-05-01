import './Info.css'

import styles from './Info.module.css'
// {
//     "info": "Info_info__XxBxS",
//     "new-buttom": "Info_new-buttom__I-lnQ"
// }

console.log(styles)

function Info(){
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <button className={styles.myButton}>Click me</button>
        </div>
    )
}

export default Info