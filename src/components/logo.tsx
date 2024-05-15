import { Bone } from 'lucide-react'

const Logo: React.FC = () => {
	return (
		<div className='flex items-center gap-1 '>
			{/* TODO Search a better bone icon */}
			<Bone size={24} className='text-green-800' />
			<h1 className='text-2.8xl font-semibold text-green-800'>Rescuify</h1>
		</div>
	)
}

export default Logo
