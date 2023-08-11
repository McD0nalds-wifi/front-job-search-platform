import { ReactNode } from 'react'

import { ColorsType } from '@/shared/constants'

export { AltArrowDownIcon } from './AltArrowDownIcon'
export { BanknoteIcon } from './BanknoteIcon'
export { BellIcon } from './BellIcon'
export { CaseIcon } from './CaseIcon'
export { MapPointIcon } from './MapPointIcon'
export { SearchIcon } from './SearchIcon'
export { SettingsIcon } from './SettingsIcon'
export { UserIcon } from './UserIcon'

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
