'use client'

import { ReactNode, useRef } from 'react'

import { motion } from 'framer-motion'

import { Typography } from '@/shared/uikit'
import { AltArrowDownIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

interface IFilterProps {
    iconSlot: ReactNode
    shouldShowAnimation: boolean
    title: string
}

export const Filter = ({ iconSlot, shouldShowAnimation, title }: IFilterProps) => {
    const filterRef = useRef<HTMLDivElement>(null)

    return (
        <div className={style.filter} ref={filterRef}>
            {iconSlot}

            <motion.div
                animate={{
                    marginLeft: shouldShowAnimation ? 16 : 0,
                    maxWidth: shouldShowAnimation ? filterRef.current?.scrollWidth : 0,
                    opacity: shouldShowAnimation ? 1 : 0,
                    x: shouldShowAnimation ? 0 : 100,
                }}
                className={style.filter_title}
                initial={{ marginLeft: 0, maxWidth: 0, opacity: 0, x: 100 }}
            >
                <Typography color={'gray600'} isNowrap={true} size={'medium'} type={'body'}>
                    {title}
                </Typography>

                <AltArrowDownIcon color={'white'} height={'16px'} width={'16px'} />
            </motion.div>
        </div>
    )
}
