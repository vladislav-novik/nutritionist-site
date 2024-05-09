import Post from "@/components/blog/post-page";
import { getPostBySlug, getPostsSlugs } from "@/sanity/lib/posts";
import { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import ShareButtons from "@/components/blog/post-page/ShareButtons";
// import { draftMode } from "next/headers";
// import PreviewProvider from "@/components/Preview/PreviewProvider";
// import PreviewPost from "@/components/Preview/PreviewPost";

export const runtime = 'edge'

type Props = {
  params: {
    slug: string;
    // lang: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getPostsSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  // const isDraftMode = draftMode().isEnabled;

  // const token = process.env.SANITY_API_READ_TOKEN;

  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-brand-darkest mt-6 text-3xl leading-tight font-heading font-bold 
          lg:text-5xl lg:leading-snug">
          {post.title}
        </h1>
        <div className="flex items-center justify-center mt-8 space-x-2">
          <p className="text-zinc-900 font-medium text-base">Food</p>
          <span className="font-medium text-base text-zinc-500">&#x2022;</span>
          <time
            dateTime={new Date(post.publishedAt).toISOString()}
            className="text-base text-zinc-500"
          >
            {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
      <div className="relative mt-8 aspect-[16/9]  
        sm:mt-12 
        lg:mt-16 lg:aspect-[16/6]">
        <Image
          className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-[2.5rem]"
          placeholder="blur"
          blurDataURL={post.mainImage.lquip}
          src={urlForImage(post.mainImage.ref).width(2600).height(900).url()}
          width={2600}
          height={900}
          alt={`Cover for article: ${post.title}`}
        />
        {/* <div className="absolute w-full h-full -z-10 -top-2 -right-2 bg-brand-blue rounded-2xl 
          lg:-top-4 lg:-right-4 lg:rounded-[2.5rem]"></div> */}
      </div>
      <div className="mt-8 grid gap-y-8 grid-cols-1 
        sm:mt-12
        lg:mt-16 lg:gap-x-12 lg:grid-cols-12">
        {/* {
          isDraftMode && !!token ?
          (<PreviewProvider token={token}>
            <PreviewPost post={post} slug={slug} />
          </PreviewProvider>) :
          <Post post={post}></Post>
        } */}
        <div className="lg:sticky lg:order-last lg:self-start lg:col-span-2 lg:top-6">
          <ShareButtons />
        </div>
        <div className="hidden lg:block lg:col-span-2"></div>
        <Post post={post}></Post>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { slug } = params;

  const lang = "ru";
  const post = await getPostBySlug(slug);

  return await generateMetadataForPage("article", lang, post);
}
