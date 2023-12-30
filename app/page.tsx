
"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

const IndexPage = () => {
  const [blogs, setBlogs] = useState([])

  // Fetch blogs from API
  useEffect(() => {
    fetch('app/api/blogs.ts')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default IndexPage
