import React from 'react'
import BlogPost from '@/_components/Blogs/BlogPosts'

const blogspost = async props => {
  const params = await props.params;
  const paramss = {
    id: params.id
  }
  return (
    
    <BlogPost params={paramss}/>
  )
}

export default blogspost