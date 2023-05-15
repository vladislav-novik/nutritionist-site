import Link from "next/link";
import { PostPreview } from "@/types/post";
import PlaceholderedImage from "@/components/shared/PlaceholderedImage";
import Tag from "./Tag";

type PropsType = {
  post: PostPreview;
};


export default function PostOverview({ post }: PropsType) {
  return (
    <article key={post.slug} className="relative">
      <div className="group">
        <div className="relative w-full group-hover:opacity-75">
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            {/* @ts-expect-error Server Component */}
            <PlaceholderedImage
              src={post.mainImage}
              className="h-auto w-full rounded-2xl object-contain object-center aspect-[2/1] lg:aspect-[3/2] lg:object-cover"
              width={600}
              height={300}
              alt={post.title}
            ></PlaceholderedImage>
          </Link>
        </div>

        <h3 className="text-gray-900 leading-6 font-semibold text-lg mt-3 line-clamp-2 text-center group-hover:opacity-75">
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            {post.title}
          </Link>
        </h3>
      </div>

      <div className="text-center mt-3">
        <div className="flex flex-col gap-3">
          <div className="text-xs flex gap-x-4 items-center justify-center">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <p className="text-xs text-gray-600 ">
            Published <time className="text-gray-500 underline" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-En', { month: 'narrow', day: 'numeric', year: 'numeric' })}
            </time>
          </p>
          <p className="text-gray-600 leading-6 text-sm mt-3 line-clamp-3">{post.excerpt}</p>
        </div>
      </div>

      {/* <div className="absolute w-full lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400">
          <path d="M120.16675646537522 48.43291745021186C136.1846938394902 43.15040643527351 174.3102550958989 20.80063095881782 204.47169001334885 20.63022789790473C234.6331249307988 20.459824836991643 246.87527529472092 48.21767356231055 278.9111507677434 47.53605923487983C310.94702624076587 46.85444490744911 342.92012781852463 17.213187855027535 373.0815609239934 17.042784069321968C403.2429940294621 16.8723802836164 414.8214586901067 45.10556485488257 437.6555355333684 46.63919720485053C460.4896123766301 48.17282955481849 475.0277257799504 26.648165539048534 493.260912730634 25.114533279679634C511.4940996813176 23.580901020310733 519.6465828966493 38.567448471330025 533.6196773790709 38.567448471330025C547.5927718614928 38.567448471330025 556.7497042345396 26.648165539048534 566.8035152696962 25.114533279679634C576.8573263048524 23.580901020310733 578.0142931627624 29.473278110764838 586.5344723009462 30.495699737809517C595.0546514391297 31.518121364854196 606.8752660631533 30.495699737809517 611.6465633653993 30.495699737809517 " fill="none" strokeWidth="2" stroke="#84e1bc" strokeLinecap="round" transform="matrix(1.194393762749667,0,0.8424153838506856,1.194393762749667,-76.1411184781706,-2.78257118318227)"></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1005" gradientTransform="rotate(0, 0.5, 0.5)">
              <stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop>
              <stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </article>
  );
}