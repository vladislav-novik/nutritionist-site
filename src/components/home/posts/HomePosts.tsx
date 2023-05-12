import PostsOverview from "./PostsOverview";

export default function HomePosts() {
  return (
    <div className="lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl leading-8 font-bold md:text-4xl -tracking-tight">From the blog</h2>
          <p className="leading-8 text-lg mt-2">Learn how to grow your business with our expert advice.</p>
        </div>

        {/* @ts-expect-error Server Component */}
        <PostsOverview></PostsOverview>
      </div>
    </div>
  )
}

