export default function Tag({ children }: { children: JSX.Element | JSX.Element[] | string }) {
  return (
    <a className="text-gray-600 bg-green-200 font-medium py-[0.375rem] px-3 rounded-full hover:bg-green-300 cursor-pointer">{children}</a>
  );
}