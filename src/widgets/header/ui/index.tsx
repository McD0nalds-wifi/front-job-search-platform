import { Location } from '@/widgets/header/ui/Location'
import { Tabs } from '@/widgets/header/ui/Tabs'

import style from './index.module.scss'

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <div style={{ color: 'white', marginRight: '50px' }}>Logo</div>

            <Tabs />

            <div style={{ marginLeft: '100px' }}>
                <Location />
            </div>
        </div>
    )
}
