import { ActionButtons } from '@/widgets/header/ui/ActionButtons'
import { Location } from '@/widgets/header/ui/Location'
import { Tabs } from '@/widgets/header/ui/Tabs'

import style from './index.module.scss'

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <div style={{ color: 'white', marginRight: '50px' }}>Logo</div>

            <Tabs />

            <div className={style.locationWrapper}>
                <Location />
            </div>

            <ActionButtons />
        </div>
    )
}
