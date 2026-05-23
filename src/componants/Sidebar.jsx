import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = ({bgColor,color}) => {
  return (
    <>
      <div className="side_bar_content" style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
        <div className="top_content">
          <div className="items"><FaHome className='icons' />Home</div>
          <div className="items"><IoIosNotifications className='icons' />Notification</div>
          <div className="items"><IoBag className='icons' />Shop</div>
          <div className="items"><IoIosChatboxes className='icons' />Conversation</div>
          <div className="items"><CiWallet className='icons' />Wallet</div>
          <div className="items"><FaYoutube className='icons' />Subscription</div>
          <div className="items"><CgProfile className='icons' />My Profile</div>
        </div>
        <div className="bottom_content items"><IoIosLogOut className='icons' />LogOut</div>
      </div>
    </>
  )
}

export default Sidebar