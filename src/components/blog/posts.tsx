import { PostOverview } from '@/types/post'
import Post from './post'

type Props = {
  posts: PostOverview[];
  withExcrpt?: boolean;
}

const component = ({ posts, withExcrpt = false }: Props) => (
  <div
    className="mx-auto max-w-md grid grid-cols-1 gap-8 md:grid-cols-3 md:max-w-5xl"
  >
    {posts.map((post: PostOverview) => (
      <Post key={post.slug} post={post} withExcrpt></Post>
    ))}
  </div>
);

export default component;
