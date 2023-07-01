import React, { useEffect, useState } from 'react'
import ToolTip from '../comman/ToolTip'
import { BiCamera } from 'react-icons/bi'
import { updateProfile } from '../../redux/features/userSlice'
import { updateAuthProfile } from '../../redux/features/authSlice'
import { useDispatch } from 'react-redux'

const EditProfile = ({ data: { user, currentProfilePic, setCurrentProfilePic, display, setDisplay, auth } }) => {
    const { fullName, email, bio, website } = auth.user
    const [userData, setUserData] = useState(auth.user)
    const dispatch = useDispatch()
    const updateUserProfile = () => {
        dispatch(updateProfile({ ...auth.user, profileAvatar: currentProfilePic }))
        dispatch(updateAuthProfile(userData))
        setDisplay({ ...display, edit: false })
    }


    useEffect(() => {
        if (currentProfilePic) {
            setUserData({ ...userData, profileAvatar: currentProfilePic })
        }
    }, [currentProfilePic])

    return (
        <div className='flex gap-5 h-[36vh] justify-between w-[48vw] rounded-xl  border shadow-lg px-3'>
            <div className='relative  self-center ' onMouseOver={() => setDisplay({ ...display, upload: true })}
                onMouseLeave={() => setDisplay({ ...display, upload: false })}
            >
                <img src={userData.profileAvatar == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5fVJf_A_8CxQnzHFw4qV9LejNulQNoCoMCZq3nCdtcHcQCb8GVZfq3K8bx66lCDNy6ttCX2cbak&usqp=CAU&ec=48600112" : userData.profileAvatar} alt={userData.fullName} className='md:w-58 rounded-full x-0' />
                {display.upload && auth.user.email === email ? <div className='absolute inset-0 bg-black rounded-full opacity-60 flex justify-center items-center z-10'>
                    <ToolTip content={"Edit Profile Picture"} placement="top">
                        <BiCamera className='text-3xl text-white hover:cursor-pointer hover:text-sky-500' onClick={() => setDisplay({ ...display, avatar: !display.avatar })} />
                    </ToolTip>

                </div> : ""}
            </div>

            <div className='flex flex-col  gap-3 py-3 w-full items-center '>
                <label htmlFor="bio">
                    <span className='text-lg'> Bio</span>
                    <textarea name="" id="bio" cols="40" rows="3" value={userData.bio} className='border border-black w-full p-2 ' onChange={(e) => setUserData({ ...userData, bio: e.target.value })}></textarea>
                </label>
                <label htmlFor="website">
                    <span className='text-lg'>Website</span>
                    <input type="text" className='border border-black w-[28vw] py-1 px-2' value={userData.website} onChange={(e) => setUserData({ ...userData, website: e.target.value })} />
                </label>
                <div className='flex gap-10'>
                    <button className='text-indigo-700 border-2  hover:bg-indigo-100 px-4 py-1 text-xl rounded-full'
                        onClick={updateUserProfile}
                    >update</button>
                    <button className='text-red-600 border-2  hover:bg-red-100 px-4 py-1 text-xl rounded-full'
                        onClick={() => {
                            setCurrentProfilePic(auth.user.profileAvatar)
                            setDisplay({ ...display, edit: false })
                        }}

                    >Cancel</button>

                </div>
            </div>

        </div>
    )
}

export default EditProfile