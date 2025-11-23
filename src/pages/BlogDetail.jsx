import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Title from '../components/Title';
import { posts } from '../data/data';

const BlogDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  let postIndex = params.blogID -1;

  useEffect(() => {
    if (isNaN(postIndex) || postIndex < 0 || postIndex >= posts.length) {
      navigate("/");
    }
    }, [postIndex]);
 
  if (isNaN(postIndex) || postIndex < 0 || postIndex >= posts.length) {
    return null; // Geçersiz durumlarda içeriği render etme
  }

  return (
    <div className='blog-detail'>
        <Title title={posts[postIndex].title}/>
        <img src={posts[postIndex].img} alt="photo" />
        <p>
            {posts[postIndex].text}
        </p>
        <span>{posts[postIndex].date}</span>
        <Link to="/baris/blog">⬅️Back to Blog Posts⬅️</Link>
    </div>
  )
}

export default BlogDetail