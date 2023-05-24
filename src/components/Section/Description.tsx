type Props = {
    children: React.ReactNode,
}

export default function SectionDescription({ children }: Props) {
    return (
        <p className="mt-6 text-lg leading-8 text-emerald-900">{children}</p>
    );
}