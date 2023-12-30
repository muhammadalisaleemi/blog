// pages/api/blogs.ts
import type { NextApiRequest, NextApiResponse } from 'next'

let blogs = [
  { id: 1, title: 'Blog 1', content: 'This is the content of Blog 1' },
  // Add more blogs here...
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return the list of blogs
    res.status(200).json(blogs)
  } else if (req.method === 'POST') {
    // Add a new blog
    const newBlog = req.body
    newBlog.id = blogs.length + 1
    blogs.push(newBlog)
    res.status(201).json(newBlog)
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
