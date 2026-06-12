import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return data
}
/**
 * NextJS out of the box server component create kore
 * server json placeholder er api call kore data niye ashtase, 
 * kono api call hy nai, pura html e server end theke ashse
*/

export default async function Posts() {
    const posts = await getPosts()

    return (
        <div>
            <h2 className="underline">Total Posts : {posts?.length}</h2>
            <div className="grid mt-6 grid-cols-4 gap-6">
                {
                    posts.map(post => (
                        <div key={post.id} className="border p-6 rounded flex flex-col">
                            <h2>Post ID: {post?.id}</h2>
                            <p className="text-2xl grow font-bold">{post?.title}</p>
                            <Link className="underline bg-green-600" href={`posts/${post.id}`}>View Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
