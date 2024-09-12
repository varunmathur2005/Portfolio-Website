import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <Posts posts={posts} />
      </div>
    </section>
  )
}