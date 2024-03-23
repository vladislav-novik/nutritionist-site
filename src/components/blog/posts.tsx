import { PostOverview } from '@/types/post'
import Post from './post'
import classnames from 'classnames'

type Props = {
  posts: PostOverview[];
  maxCols?: number;
  withExcrpt?: boolean;
}

const postColor = ['brand-pink', 'brand-blue', 'brand-green', 'brand-yellow']

const component = ({ posts, maxCols = 3, withExcrpt = false }: Props) => (
  <div
    className={classnames({"md:grid-cols-3": maxCols === 3},
      {"md:grid-cols-2 md:gap-x-20 md:gap-y-16" : maxCols === 2 },
      "mx-auto max-w-md grid grid-cols-1 gap-y-16 md:max-w-5xl md:gap-x-12")}
  >
    {posts && posts.map((post: PostOverview, i: number) => (
      <Post key={post.slug} post={post} withExcrpt={withExcrpt} colorClass={postColor[i]}></Post>
    ))}
  </div>
);

export default component;
