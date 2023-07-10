import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSelector } from 'react-redux'
import Modal from './Modal'
import Search from '../../pages/Search'

const Layout = ({ children }) => {
	const { globalReducer: { searchModal, theme } } = useSelector(state => state)


	return (
		<div
			className={`  flex md:flex-row w-full h-{100%}  mb-10 flex-col ${theme === 'dark' && "bg-black text-white"}  `}
		>
			<>

				<div className="">
					<div className="md:flex hidden h-screen   sticky top-0">
						<Sidebar direction={'col'} />
					</div>
				</div>
				<Header />
				<div className='mt-10'>
					<Modal />
					{children}

					{
						searchModal && <Search />
					}

				</div>
				<div className=" w-screen h-14  md:hidden lg:w-1/6 fixed  bottom-0     ">
					<Sidebar direction={'row'} />
				</div>
			</>
		</div>
	)
}

export default Layout