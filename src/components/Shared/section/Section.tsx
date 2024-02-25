import { CSSProperties } from "react";

type Props = {
    children: React.ReactNode;
    className: string;
    id: string;
}

export default function Section({ children, id, className }: Props) {
    return (
        <section id={id} className={`${className} overflow-hidden`}>
            {children}
        </section>
    )
}