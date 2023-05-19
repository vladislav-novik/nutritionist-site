type Props = {
    children: React.ReactNode,
}

export default function SectionHeader({ children }: Props) {
    return (
        <h2 className="text-lg font-semibold leading-7 text-green-600">{children}</h2>
    )
}