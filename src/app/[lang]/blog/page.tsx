import { getPostsPerPage } from "../../../sanity/lib/posts"
import { PostPreview } from "@/types/post";
import PaginatedData from "@/components/Pagination/PaginatedData";
import Posts from "@/components/post/PostPreview2"

export default async function Page({ searchParams }: any) {
  const itemsPerPage: number = 2;
  let currentPage: number = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page)
  }

  const { posts, totalItems } = await getPostsPerPage(currentPage, itemsPerPage)

  return (
    <main className="max-w-7xl py-24 px-6 mx-auto">
      <div className="mb-32 text-gray-800 text-center md:text-left">

        <h2 className="text-3xl font-bold mb-12 text-center">Latest articles</h2>

        <PaginatedData page={currentPage} totalItems={totalItems} urlPrefix={'/blog?page='} itemsPerPage={itemsPerPage}>
          {posts.map((post: PostPreview, index: number, arr: PostPreview[]) => (
            <>
              <div className="mb-6">
                <Posts key={post._id} post={post} />
              </div>
              {index !== arr.length - 1 && (
                <hr
                  className="lg:hidden my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              )}
            </>
          ))}
        </PaginatedData>

      </div>
    </main>
  );
}
