import { Avatar } from '@/shared/uikit'
import { BellIcon, SettingsIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

export const ActionButtons = () => {
    return (
        <div className={style.wrapper}>
            <Avatar height={36} url={''} width={36} />

            <div className={style.actionButton}>
                <SettingsIcon color={'inherit'} height={'18px'} width={'18px'} />
            </div>

            <div className={style.actionButton}>
                <BellIcon color={'inherit'} height={'18px'} width={'18px'} />
            </div>
        </div>
    )
}
