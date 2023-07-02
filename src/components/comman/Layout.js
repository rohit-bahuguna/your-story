import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import CreatePost from '../CreatePost'
import Avatar from '../profile/Avatar'
import Search from '../Search'
import { toggleSearchModal } from '../../redux/features/globalSlice'

const Layout = ({ children }) => {
	const { auth: { status }, globalReducer: { openModal, searchModal } } = useSelector(state => state)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		if (!status) {
			navigate('/')
		}
	}, [status])
	return (
		<div
			className={`  flex md:flex-row w-full h-{100%}  mb-10 flex-col  `}

		>
			<>
				<div className="">
					<div className="md:flex hidden h-screen   sticky top-0">
						<Sidebar direction={'col'} />
					</div>
				</div>
				<Header />
				<div className='mt-10'

				>
					
					{children}

					{
						searchModal && <Search />
					}

				</div>
				<div className=" w-screen h-14  md:hidden lg:w-1/6 fixed  bottom-0   bg-white  ">
					<Sidebar direction={'row'} />
				</div>
			</>
		</div>
	)
}

export default Layout