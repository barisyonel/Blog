import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import { posts } from '../data/data'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <Title title={"Welcome to My Blog Posts"}/>
      {posts.map(item=>
        <Link to={item.id} key={item.id}>
          <Card post={item}/>
        </Link>
      )}
    </div>
  )
}

export default BlogPage