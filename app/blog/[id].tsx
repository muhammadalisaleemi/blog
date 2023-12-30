// pages/blog/[id].tsx
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const BlogPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [blog, setBlog] = useState(null)

  // Fetch blog from API
  useEffect(() => {
    if (id) {
      fetch(`/api/blogs/${id}`)
        .then(response => response.json())
        .then(data => setBlog(data))
    }
  }, [id])

  return blog ? (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default BlogPage
