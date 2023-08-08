'use client'

import { useRef } from 'react'

import { IconButton } from '@/shared/uikit'
import { SearchIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

export const InputSearch = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleIconButtonClick = () => {
        if (!inputRef.current) {
            return
        }

        inputRef.current.focus()
    }

    return (
        <div className={style.wrapper}>
            <IconButton Icon={SearchIcon} onClick={handleIconButtonClick} />

            <input className={style.input} placeholder={'Начните вводить свой запрос'} ref={inputRef} />
        </div>
    )
}
