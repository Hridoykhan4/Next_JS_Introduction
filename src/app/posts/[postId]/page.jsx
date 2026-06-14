import React from 'react'

// import er style different & also dynamically boshate hobe
import style from '../posts.module.css'

const getSinglePost = async (postId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  return data
}

export async function generateMetadata({ params }) {
  const slug = (await params).postId
  // fetch post information
  const post = await getSinglePost(slug);

  return {
    title: post.title,
    description: post.body,
  }
}

// export default function Page({ params, searchParams }) { }

export default async function PostDetails({ params }) {
  const { postId } = await params;
  const post = await getSinglePost(postId)

  return (
    <div>
      <p>Post ID: {postId}</p>
      <h1 className={`${style["post-title"]}`}>TITLE: {post?.title}</h1>
      <p>BODY: {post?.body}</p>
    </div>
  )
}
