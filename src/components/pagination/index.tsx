import { useMemo } from "react";

type Props = {
  urlPrefix: string;
  page: number;
  totalItems: number;
  itemsPerPage?: number;
}

const DEFAULT_ITEMS_PER_PAGE = 10;

export default function Index({ urlPrefix, page, totalItems, itemsPerPage = DEFAULT_ITEMS_PER_PAGE }: Props) {
  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

  const pageNumbers = useMemo(() => {
    let result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }

    return result;
  }, [totalPages]);

  return (
    <nav aria-label="Pagination">
      <ul className="list-style-none flex">
        <li>
          <a
            className="relative block rounded-full bg-trabsparent px-3 py-1.5 text-sm text-gray-500 hover:bg-green-300/60"
            aria-label="Previous"
            href={`${urlPrefix}${page - 1}`}
          ><span aria-hidden="true">&laquo;</span></a>
        </li>
        {pageNumbers && pageNumbers.map(pageNumber => {
          const attrs = {} as any;
          
          if (pageNumber === page) {
            attrs['aria-current'] = 'page';
          }

          return (
            <li key={pageNumber} {...attrs}>
              <a
                className={`relative block rounded-full ${pageNumber === page ? 'bg-green-300/80' : 'bg-transparent'} px-3 py-1.5 text-sm text-gray-500 hover:bg-green-300/60`}
                href={`${urlPrefix}${pageNumber}`}
              >{pageNumber}</a>
            </li>)
        })}
        <li>
          <a
            className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-gray-500 hover:bg-green-300/60"
            aria-label="Next"
            href={`${urlPrefix}${page + 1}`}>
              <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
      </ul>
    </nav>
  );
}