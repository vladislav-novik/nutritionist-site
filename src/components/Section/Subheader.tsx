type Props = {
    children: React.ReactNode,
}

export default function SectionSubHeader({ children }: Props) {
    return (
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{children}</p>
    );
}