import PaginatedData from "@/components/Pagination/PaginatedData";
import Testimonial from "@/components/home/testimonials/Testimonial";
import { Testimonial as TestimonialType } from "@/types/testimonial";
import { getTestimonialsPerPage } from "../../../../sanity/lib/testimonials";

export default async function Page({ searchParams }: any) {
  const itemsPerPage: number = 2;
  let currentPage: number = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page)
  }

  const { testimonials, totalItems } = await getTestimonialsPerPage(currentPage, itemsPerPage)

  return (
    <main className="max-w-7xl py-24 px-6 mx-auto">
      <div className="mb-32 text-gray-800 text-center md:text-left">

        <h2 className="text-3xl font-bold mb-12 text-center">Latest articles</h2>

        <PaginatedData page={currentPage} totalItems={totalItems} urlPrefix={'/testimonials?page='} itemsPerPage={itemsPerPage}>
          {testimonials.map((testimonial: TestimonialType, index: number, arr: TestimonialType[]) => (
            <>
              <div className="mb-6">
                <Testimonial key={testimonial._id} testimonial={testimonial} />
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
