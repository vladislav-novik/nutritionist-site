"use client"

import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode
}

export default function SectionAnimation({ children }: Props) {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{amount: "some" }}
        >
            {children}
        </motion.div>
    );
}