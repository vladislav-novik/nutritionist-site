import { PostOverview } from '@/types/post'
import Post from './post'

type Props = {
  posts: PostOverview[];
  withExcrpt?: boolean;
}

const postColor = ['brand-pink', 'brand-blue', 'brand-green', 'brand-yellow']

const component = ({ posts, withExcrpt = false }: Props) => (
  <div
    className="mx-auto max-w-md grid grid-cols-1 gap-8 md:grid-cols-3 md:max-w-5xl"
  >
    {posts && posts.map((post: PostOverview, i: number) => (
      <Post key={post.slug} post={post} withExcrpt={withExcrpt} colorClass={postColor[i]}></Post>
    ))}
  </div>
);

export default component;
