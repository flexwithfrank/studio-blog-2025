import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="mt-5 flex items-center justify-center ">
            <h1 className="text-brand-primary text-4xl font-semibold tracking-tight dark:text-white lg:text-5xl lg:leading-tight haas-bold">
              Check out our latest blog posts
            </h1>
          </div>
          <div className="mt-14 grid gap-10 lg:gap-10 ">
            {posts.map(post => (
              <PostList
                key={post._id}
                post={post}
                minimal={true}
                aspect="landscape"
                pathPrefix="sidebar"
                fontWeight="large"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
