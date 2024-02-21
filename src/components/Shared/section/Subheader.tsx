import classNames from "classnames";

type Props = {
    children: React.ReactNode,
    fontSizeClasses?: string;
}

export default function SectionSubHeader({ children, fontSizeClasses }: Props) {
    return (
        <p className={classNames("mt-2 font-bold tracking-tight text-emerald-950", fontSizeClasses || 'text-3xl')}>{children}</p>
    );
}