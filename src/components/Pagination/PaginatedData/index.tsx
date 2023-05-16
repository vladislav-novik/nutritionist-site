import Pagination from "@/components/Pagination"

type Props = {
  page: number;
  totalItems: number;
  itemsPerPage: number;
  urlPrefix: string;
  children: JSX.Element | JSX.Element[];
}

export default function Page({ page, totalItems, urlPrefix, itemsPerPage, children }: Props) {
  return (
    <>
      <div>
        {children}
      </div>

      {totalItems > itemsPerPage && (
        <div className="flex justify-center mt-20">
          <Pagination urlPrefix={urlPrefix} page={page} totalItems={totalItems} itemsPerPage={itemsPerPage} />
        </div>
      )}
    </>
  );
}
