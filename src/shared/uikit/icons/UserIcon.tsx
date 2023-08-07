import { COLORS } from '@/shared/constants'

import { IIconProps, SvgIcon } from './index'

export const UserIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <circle
                cx={'12'}
                cy={'6'}
                r={'4'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth={'1.5'}
            />
            <ellipse
                cx={'12'}
                cy={'17'}
                rx={'7'}
                ry={'4'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth={'1.5'}
            />
        </SvgIcon>
    )
}
