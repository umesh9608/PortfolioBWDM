import React from 'react'

const Rightbar = ({Data,bgColor,color}) => {
  return (
    <>
    <div className="right_container"  style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
      <div className="postImg">
        <img id='_img' src={Data.img} alt="" />
        <div className="inside_img">
          <div className="img">
            <img src={Data.authorImg}alt="" />
          </div>
          <div className="text">
            <h3>{Data.authoreName}</h3>
            <p>{Data.authoreText}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rightbar