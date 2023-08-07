'use client'

import Image from 'next/image'

import { useImageLoadingError } from '@/shared/hooks'

import style from './index.module.scss'
import userPlaceholderImage from '../../../../public/user.svg'

interface IAvatarProps {
    height?: number
    onClick?: () => void
    url?: string
    width?: number
}

export const Avatar = ({ url, width = 40, height = 40 }: IAvatarProps) => {
    const [iconSrc, handleIconLoadingError] = useImageLoadingError(url || userPlaceholderImage, userPlaceholderImage)

    return (
        <Image
            alt={'Avatar'}
            className={style.avatar}
            height={height}
            onError={handleIconLoadingError}
            src={iconSrc}
            width={width}
        />
    )
}
