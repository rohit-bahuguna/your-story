import React from 'react';

const Loader = ({ message, color }) => {
	return (
		<div className={`flex flex-col  `}>
			<img src="/loader.svg" alt="Loading" className='w-[20vw]' />
			{message &&
				<span className={`text-${color}-500  text-xl self-center `}>
					{message}
				</span>}
		</div>
	);
};

export default Loader;
