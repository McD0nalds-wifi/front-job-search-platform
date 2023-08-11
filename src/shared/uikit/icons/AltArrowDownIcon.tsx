import { COLORS } from '@/shared/constants'

import { IIconProps, SvgIcon } from './index'

export const AltArrowDownIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d={'M19 9L12 15L5 9'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                strokeWidth={'1.5'}
            />
        </SvgIcon>
    )
}
