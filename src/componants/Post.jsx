import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Post = ({Data,bgColor,color}) => {
  return (
    <>
    <div className="post_container"  style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
      <div className="person">
        <div className="author">
          <div className="img">
            <img src={Data.mImg} alt="img" />
          </div>
          <div className="text">
            <h3>{Data.userName}</h3>
            <p>{Data.title}</p>
          </div>
        </div>
        <div className="dot"><BsThreeDotsVertical/></div>
      </div>
      <p>{Data.description}</p>
      <div className="post_img">
        <img src={Data.mImg}alt="img" />
      </div>
      <div className="like_comment">
        <div className="likes"><AiOutlineLike className='items'/>{Data.like}</div>
        <div className="comments"><FaCommentDots className='items'/>{Data.comment}</div>
        <div className="share"><FaShareAlt className='items'/>{Data.share}</div>
      </div>
    </div>
    </>
  )
}

export default Post