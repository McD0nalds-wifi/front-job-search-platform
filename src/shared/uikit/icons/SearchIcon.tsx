import { COLORS } from '@/shared/constants'

import { IIconProps, SvgIcon } from './index'

export const SearchIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <circle
                cx={'11.5'}
                cy={'11.5'}
                r={'9.5'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth={'1.5'}
            />
            <path
                d={'M18.5 18.5L22 22'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
        </SvgIcon>
    )
}
