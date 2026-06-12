import React from 'react'

const getSinglePost = async (postId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  return data
}

export default async function PostDetails({ params }) {
  const { postId } = await params;
  const post = await getSinglePost(postId)

  return (
    <div>
      <p>Post ID: {postId}</p>
      <h1>TITLE: {post?.title}</h1>
      <p>BODY: {post?.body}</p>
    </div>
  )
}
