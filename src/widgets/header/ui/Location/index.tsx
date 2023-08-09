'use client'

import { motion } from 'framer-motion'

import { Typography } from '@/shared/uikit'
import { MapPointIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

export const Location = () => {
    return (
        <motion.div
            animate={{ scale: 1, transition: { duration: 0.2 } }}
            className={style.wrapper}
            initial={{ scale: 0 }}
        >
            <MapPointIcon color={'inherit'} height={'18px'} width={'18px'} />

            <Typography color={'inherit'} size={'small'} type={'body'}>
                Санкт-Петербург
            </Typography>
        </motion.div>
    )
}
