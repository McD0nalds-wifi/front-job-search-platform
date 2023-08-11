import { COLORS } from '@/shared/constants'

import { IIconProps, SvgIcon } from './index'

export const BanknoteIcon = (props: IIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M9 19C6.19108 19 4.78661 19 3.77772 18.3259C3.34096 18.034 2.96596 17.659 2.67412 17.2223C2 16.2134 2 14.8089 2 12C2 9.19108 2 7.78661 2.67412 6.77772C2.96596 6.34096 3.34096 5.96596 3.77772 5.67412C4.78661 5 6.19108 5 9 5L15 5C17.8089 5 19.2134 5 20.2223 5.67412C20.659 5.96596 21.034 6.34096 21.3259 6.77772C22 7.78661 22 9.19108 22 12C22 14.8089 22 16.2134 21.3259 17.2223C21.034 17.659 20.659 18.034 20.2223 18.3259C19.2134 19 17.8089 19 15 19H9Z'
                }
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth={'1.5'}
            />
            <path
                d={
                    // eslint-disable-next-line max-len
                    'M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z'
                }
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeWidth={'1.5'}
            />
            <path
                d={'M5.5 15L5.5 9'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
            <path
                d={'M18.5 15L18.5 9'}
                stroke={props.color === 'inherit' ? 'currentColor' : COLORS[props.color]}
                strokeLinecap={'round'}
                strokeWidth={'1.5'}
            />
        </SvgIcon>
    )
}
