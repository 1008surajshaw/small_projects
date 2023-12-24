import React from 'react'
import { NavLink } from 'react-router-dom'


const BlogDetails = ({post}) => {
  return (
    <div className='mt-[70px]'>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p>
            BY <span>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>
            posted on {post.date}
        </p>
        <p>{post.content}</p>
        <div>
            {post.tags.map((tag,index) => (
                <NavLink key ={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span>
                        {`#${tag}`}
                    </span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails