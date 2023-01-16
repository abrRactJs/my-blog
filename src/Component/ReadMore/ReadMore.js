import React, { useEffect, useState } from 'react';
import './ReadMore.css'
import img from '../../images/img.png'
import { useParams } from 'react-router-dom';

const ReadMore = () => {
    const {id} = useParams();
    const [read , setRead] = useState([]);
    const {title, body} = read;

    useEffect(()=>{
        const url = `https://dummyjson.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setRead(data))
     
    },[])
  
    return (
        <div className='readMore'>
            <h4>Post No : {id} </h4>
            <img src={img} alt="" />
             <h4>{title}</h4>
             <p>{body}</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita et nisi doloremque vel! Cupiditate, quam ipsum voluptates eaque unde autem totam, dolorem expedita id blanditiis asperiores soluta, consequuntur harum voluptate quibusdam inventore ab ipsam quia assumenda. Debitis rem minus molestiae, voluptatibus atque similique quos fugit sunt minima dolor sit recusandae odio eos, mollitia tempora labore iste magni a voluptates? Quam odit, cupiditate sapiente dignissimos delectus ut necessitatibus unde magnam autem sint obcaecati, ad voluptas corrupti repudiandae? Dolores non necessitatibus aut quam iure accusantium molestias maxime quis temporibus alias nesciunt repellat dolore cumque veritatis quas labore perferendis explicabo, amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, explicabo voluptatibus? Iusto commodi consectetur iste odit, praesentium dolore, rerum nesciunt neque perspiciatis sed recusandae aliquid dolorem deserunt libero suscipit beatae temporibus vitae minima eligendi aspernatur nisi. Quam facere, vitae culpa consequatur libero doloribus! Consectetur nobis ullam, perspiciatis tempore architecto magni impedit vero expedita recusandae labore quasi sit, dolor nisi aut atque? Voluptas quibusdam, at magni iste ratione dolorem beatae eum fugit ipsam ab laboriosam doloremque numquam veniam inventore consequuntur qui voluptatibus odio eaque maiores. Corrupti ab dolor tenetur hic earum voluptate quae veniam neque sunt, fugiat numquam suscipit, similique inventore voluptatibus harum recusandae excepturi aperiam nisi explicabo ipsam voluptatum eum a? Dignissimos tenetur sunt ea voluptatem autem cum quas facere magni saepe, exercitationem quam dolorum tempora, optio illum quasi animi numquam, veniam dicta voluptas qui consequuntur consequatur nemo maiores. Odio obcaecati suscipit ea inventore eaque sequi veritatis commodi quae blanditiis tenetur fugiat saepe quasi praesentium error quidem nemo repudiandae, in earum velit quod. Debitis, temporibus, neque similique expedita aliquid ratione molestias possimus placeat blanditiis doloribus modi eos impedit doloremque fuga voluptate aut ad accusamus officia? Ut enim dolore provident temporibus suscipit libero quam a, distinctio magni incidunt placeat dolores sint. </p>
             <a href="/blog">BACK TO HOME</a>
        </div>
    );
};

export default ReadMore;