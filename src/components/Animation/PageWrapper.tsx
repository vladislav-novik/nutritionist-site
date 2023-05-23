"use client"

import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

export default function PageWrapper({ children }: Props) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.25}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}