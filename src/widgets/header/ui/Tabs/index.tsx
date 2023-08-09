'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Typography } from '@/shared/uikit'

import style from './index.module.scss'
import { TABS_LIST } from '../../config'

const tabs = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}
const tab = { hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }

export const Tabs = () => {
    return (
        <motion.div animate={'show'} className={style.wrapper} initial={'hidden'} variants={tabs}>
            {TABS_LIST.map(({ title, id, href }) => (
                <Link className={style.tab} href={href} key={id}>
                    <motion.div variants={tab}>
                        <Typography color={'inherit'} size={'small'} type={'body'}>
                            {title}
                        </Typography>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    )
}
