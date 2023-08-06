import Link from 'next/link'

import { Typography } from '@/shared/uikit'

import style from './index.module.scss'
import { TABS_LIST } from '../../config'

export const Tabs = () => {
    return (
        <div className={style.wrapper}>
            {TABS_LIST.map(({ title, id, href }) => (
                <Link className={style.tab} href={href} key={id}>
                    <Typography color={'inherit'} size={'small'} type={'body'}>
                        {title}
                    </Typography>
                </Link>
            ))}
        </div>
    )
}
