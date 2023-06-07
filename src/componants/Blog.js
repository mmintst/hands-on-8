import React from 'react'
import classes from './Blog.module.css'

const Blog = (props) => {
  const { blog } = props

  return (
    <div className={classes.blog}>
      <div className={classes.blogInfo}>
        <p className={classes.blogAuthor}>{blog.author}</p>
        <p>{blog.date}</p>
        <p>{blog.readingTime}</p>
      </div>
      <p className={classes.blogHeader}>{blog.header}</p>
      <p className={classes.blogDescr}>{blog.description}</p>
      <p className={classes.tags}>{blog.tags}</p>
    </div>
  )
}

export default Blog
