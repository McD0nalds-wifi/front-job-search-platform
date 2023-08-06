import { ReactNode } from 'react'

import { ColorsType } from '@/shared/constants'

export { MapPointIcon } from './MapPointIcon'

export type IconCursorType = 'default' | 'pointer' | 'inherit'

export interface IIconProps {
    color: ColorsType | 'inherit'
    cursor?: IconCursorType
    height?: string
    onClick?: () => void
    viewBox?: string
    width?: string
}

interface ISvgIconProps extends IIconProps {
    children: ReactNode
}

export const SvgIcon = ({
    height = '24px',
    width = '24px',
    viewBox = '0 0 24 24',
    cursor = 'inherit',
    onClick,
    children,
}: ISvgIconProps) => (
    <svg
        fill={'none'}
        height={height}
        onClick={onClick}
        style={{ cursor }}
        viewBox={viewBox}
        width={width}
        xmlns={'http://www.w3.org/2000/svg'}
    >
        {children}
    </svg>
)
