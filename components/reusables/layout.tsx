"use client";
import { motion } from "framer-motion";

interface CpProps {
    children: React.ReactNode;
}

export default function Layout(props: CpProps): JSX.Element {
    const { children } = props;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{
                type: "tween",
                duration: 0.5,
            }}>
            {children}
        </motion.div>
    );
}
