"use client"

import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode
}

export default function SectionWrapper({ children }: Props) {
    return (
        <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{delay: 0.25, duration: 0.25 }}
            // viewport={{margin: '50px'}}
        >
            {children}
        </motion.div>
    );
}