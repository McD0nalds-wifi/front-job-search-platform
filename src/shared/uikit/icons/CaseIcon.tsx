import { COLORS } from '@/shared/constants'

import { IIconProps, SvgIcon } from './index'

export const CaseIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z'
                }
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth="1.5"
            />
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M21.6618 8.71973C18.6519 10.6761 17.147 11.6543 15.5605 12.1472C13.2416 12.8677 10.7586 12.8677 8.43963 12.1472C6.85313 11.6543 5.34822 10.6761 2.33838 8.71973'
                }
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
            <path
                d={'M8 11V13'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
            <path
                d={'M16 11V13'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
            <path
                d={'M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
        </SvgIcon>
    )
}
