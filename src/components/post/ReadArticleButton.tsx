import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Props = {
    children: React.ReactNode;
}

export default function ReadArticleButton({ children }: Props) {
    return (
        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
            {children}
            <MdOutlineKeyboardArrowRight className="ml-1 h-3 w-3 stroke-current" />
        </div>
    );
}