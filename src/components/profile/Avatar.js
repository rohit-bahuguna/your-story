import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Avatar = ({ closeModal, getProfilePicture, updateProfile }) => {
    const avatars = ['https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868964/avatar/avatar_12_u8mwqn.png', "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868867/avatar/avatar_1_cd5izv.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868867/avatar/avatar_2_pwnw7r.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868867/avatar/avatar_3_vlj9bj.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868866/avatar/avatar_4_dypoop.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868866/avatar/avatar_7_u0ovwn.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868866/avatar/avatar_5_qhaarj.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868866/avatar/avatar_8_klj3pz.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868865/avatar/avatar_9_vaa7qy.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868866/avatar/avatar_6_sonrdg.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868865/avatar/avatar_11_cxqlmq.png", "https://res.cloudinary.com/dqblmzhhm/image/upload/v1687868865/avatar/avatar_10_bnw5yv.png"]



    const [active, setActive] = useState()
    return (
        <div className='md:border border-t  border-black shadow  rounded-xl'>
            <div className='border-b-2 flex justify-end gap-5 py-2 px-2'>
                <button className='text-2xl px-3 hover:bg-red-100 rounded-full text-red-500 bordr   ' onClick={() => {
                    closeModal()
                }
                }>X

                </button>
                {/* <button className='text-lg px-3 hover:bg-indigo-100 text-indigo-700 border rounded-full shadow' onClick={updateProfile}>Upload</button> */}
            </div>
            <div className='grid grid-cols-4 z-20 gap-2 p-1 md:gap-5 md:p-3'>
                {avatars.map((avatar, index) => <img src={avatar} id={index} className={`w-20 ${active == index ? " border-[5px] border-sky-500 rounded-full p-1" : ""} hover:border-[5px] border-sky-500 rounded-full hover:p-1 `} onClick={(e) => {

                    getProfilePicture(e.target.currentSrc)
                    setActive(e.target.id)
                }} />
                )}
            </div>
        </div>
    )
}


export default Avatar