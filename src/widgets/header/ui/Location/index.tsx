import { Typography } from '@/shared/uikit'
import { MapPointIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

export const Location = () => {
    return (
        <div className={style.wrapper}>
            <MapPointIcon color={'inherit'} height={'18px'} width={'18px'} />

            <Typography color={'inherit'} size={'small'} type={'body'}>
                Санкт-Петербург
            </Typography>
        </div>
    )
}
