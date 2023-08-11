import { ChangeEvent, useRef } from 'react'

import { IconButton } from '@/shared/uikit'
import { SearchIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

interface IInputSearchProps {
    onChange: (value: string) => void
    value: string
}

export const InputSearch = ({ onChange, value }: IInputSearchProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleIconButtonClick = () => {
        if (!inputRef.current) {
            return
        }

        inputRef.current.focus()
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div className={style.wrapper}>
            <IconButton Icon={SearchIcon} onClick={handleIconButtonClick} />

            <input
                className={style.input}
                onChange={handleInputChange}
                placeholder={'Начните вводить свой запрос'}
                ref={inputRef}
                value={value}
            />
        </div>
    )
}
