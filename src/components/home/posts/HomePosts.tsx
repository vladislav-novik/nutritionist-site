import PostsOverview from "./PostsOverview";

export default function HomePosts() {
  return (
    <section id="posts" className=" bg-[#efffff]">
      {/* #ffefff */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl leading-8 font-bold md:text-4xl -tracking-tight">From the blog</h2>
          <p className="leading-8 text-lg mt-2">Learn how to grow your business with our expert advice.</p>
        </div>

        {/* @ts-expect-error Server Component */}
        <PostsOverview></PostsOverview>
      </div>
    </section>
  )
}

