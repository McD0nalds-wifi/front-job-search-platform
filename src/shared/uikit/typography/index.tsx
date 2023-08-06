import { CSSProperties, ReactNode } from 'react'

import style from './index.module.scss'
import { COLORS, ColorsType } from '../../constants'

type TypographyComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'a'
type TypographyAlignType = 'left' | 'center' | 'right'
type TypographyWeightType =
    | 'thin'
    | 'extraLight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'black'

export type TitleSizeType = 'large' | 'small'
export type HeadingSizeType = 'huge' | 'extraLarge' | 'large' | 'medium' | 'small' | 'extraSmall'
export type BodySizeType = 'extraLarge' | 'large' | 'medium' | 'small' | 'extraSmall' | 'tiny'

interface ITypographyBaseProps {
    align?: TypographyAlignType
    children?: ReactNode
    color?: ColorsType | 'transparent'
    component?: TypographyComponentType
    cursor?: 'default' | 'pointer' | 'inherit'
    isNowrap?: boolean
    isUppercase?: boolean
    onClick?: () => void
    styles?: CSSProperties | undefined
    weight?: TypographyWeightType
}

type TypographyProps =
    | { size: TitleSizeType; type: 'title' }
    | { size: HeadingSizeType; type: 'heading' }
    | { size: BodySizeType; type: 'body' }

const FONT_WEIGHT_BY_WEIGHT_TYPE: Record<TypographyWeightType, string> = {
    black: '900',
    bold: '700',
    extraBold: '800',
    extraLight: '200',
    light: '300',
    medium: '500',
    regular: '400',
    semiBold: '600',
    thin: '100',
}

export const Typography = ({
    type,
    size,
    styles,
    align = 'left',
    weight = 'regular',
    component = 'div',
    color = 'black',
    cursor = 'inherit',
    isUppercase,
    isNowrap,
    children,
    onClick,
}: ITypographyBaseProps & TypographyProps) => {
    const Tag = component

    return (
        <Tag
            className={style[`${type}__${size}`]}
            onClick={onClick}
            style={{
                color: color === 'transparent' ? color : COLORS[color],
                cursor: cursor,
                fontWeight: FONT_WEIGHT_BY_WEIGHT_TYPE[weight],
                textAlign: align,
                textTransform: isUppercase ? 'uppercase' : 'none',
                whiteSpace: isNowrap ? 'nowrap' : 'normal',
                ...styles,
            }}
        >
            {children}
        </Tag>
    )
}
