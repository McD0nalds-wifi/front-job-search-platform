import { ReactElement } from 'react'

import { IIconProps } from '@/shared/uikit/icons'

import style from './index.module.scss'

interface IIconButtonProps {
    Icon: (props: IIconProps) => ReactElement
    onClick?: () => void
}

export const IconButton = ({ Icon, onClick }: IIconButtonProps) => {
    return (
        <div className={style.button} onClick={onClick}>
            <Icon color={'inherit'} height={'18px'} width={'18px'} />
        </div>
    )
}
