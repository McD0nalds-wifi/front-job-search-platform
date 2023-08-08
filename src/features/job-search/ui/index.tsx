import style from './index.module.scss'
import { InputSearch } from './InputSearch'

export const JobSearch = () => {
    return (
        <div className={style.wrapper}>
            <InputSearch />
        </div>
    )
}
