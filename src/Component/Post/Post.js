import React from 'react';
import './Post.css'
import img from '../../images/img.png'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, body, tags, id } = props.post;

    return (
        <div className='post'>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <small>AUTHOR: ABDUR RAHIM</small>
            <p>{body.slice(0,98)} {"[...]"}</p>
            <p><Link to={"/Blog/"+id}>Read More</Link></p>
            <p>Tags :  <small>{tags[0]}</small></p>
        </div>
    );
};

export default Post;