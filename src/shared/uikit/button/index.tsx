import { ReactNode } from 'react'

import classNames from 'classnames'

import style from './index.module.scss'
import { BodySizeType, Typography } from '../typography'

type ButtonType = 'primary' | 'secondary' | 'light' | 'text'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonHtmlType = 'button' | 'submit' | 'reset'

interface IButtonProps {
    children?: ReactNode
    htmlType?: ButtonHtmlType
    isBlock?: boolean
    isDisabled?: boolean
    onClick?: () => void
    size?: ButtonSize
    type?: ButtonType
}

const TYPOGRAPHY_SIZE_BY_BUTTON_SIZE: Record<ButtonSize, BodySizeType> = {
    large: 'medium',
    medium: 'small',
    small: 'small',
}

export const Button = ({
    type = 'primary',
    size = 'medium',
    htmlType = 'button',
    children,
    isDisabled = false,
    isBlock = false,
    onClick,
}: IButtonProps) => {
    const buttonClass = classNames({
        [style.button]: true,
        [style[`button__${type}`]]: true,
        [style[`button__${size}`]]: true,
    })

    return (
        <button
            className={buttonClass}
            disabled={isDisabled}
            onClick={onClick}
            style={{ width: isBlock ? '100%' : 'fit-content' }}
            type={htmlType}
        >
            <Typography color={'inherit'} size={TYPOGRAPHY_SIZE_BY_BUTTON_SIZE[size]} type={'body'} weight={'semiBold'}>
                {children}
            </Typography>
        </button>
    )
}
