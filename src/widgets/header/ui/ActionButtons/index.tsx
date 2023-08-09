'use client'

import { motion } from 'framer-motion'

import { Avatar, IconButton } from '@/shared/uikit'
import { BellIcon, SettingsIcon } from '@/shared/uikit/icons'

import style from './index.module.scss'

const list = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}
const item = { hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }

export const ActionButtons = () => {
    return (
        <motion.div animate={'show'} className={style.wrapper} initial={'hidden'} variants={list}>
            <motion.div variants={item}>
                <Avatar height={36} url={''} width={36} />
            </motion.div>

            <motion.div variants={item}>
                <IconButton Icon={SettingsIcon} />
            </motion.div>

            <motion.div variants={item}>
                <IconButton Icon={BellIcon} />
            </motion.div>
        </motion.div>
    )
}
