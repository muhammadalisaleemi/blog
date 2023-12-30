import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    // Return the details of a single blog
    const blog = blogs.find(blog => blog.id === Number(id))
    blog ? res.status(200).json(blog) : res.status(404).end()
  } else if (req.method === 'PUT') {
    // Update a blog
    const updatedBlog = req.body
    const blogIndex = blogs.findIndex(blog => blog.id === Number(id))
    if (blogIndex > -1) {
      blogs[blogIndex] = updatedBlog
      res.status(200).json(updatedBlog)
    } else {
      res.status(404).end()
    }
  } else if (req.method === 'DELETE') {
    // Delete a blog
    const blogIndex = blogs.findIndex(blog => blog.id === Number(id))
    if (blogIndex > -1) {
      blogs.splice(blogIndex, 1)
      res.status(204).end()
    } else {
      res.status(404).end()
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
