import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import Image from 'next/image'

const HomePage: NextPage = () => {
	return (
		<div className='min-h-dvh p-6 pb-10'>
			<section className='flex flex-col gap-6'>
				<h2 className='text-4xl font-medium text-green-800'>
					Empower Change: <br />
					Rescue, Rehabilitate, Rehome Together
				</h2>
				<div className='text-gray-600'>
					<p>Join us in our mission to save animal lives.</p>
					<p>Your partnership makes a difference.</p>
				</div>

				<div className='flex justify-between'>
					<Button className='bg-green-800'>Get Involved</Button>
					<Button variant='outline'>Donate Now</Button>
				</div>

				{/* TODO Fix this image, must be close to dog */}
				<Image
					src='/dog.webp'
					width={272}
					height={300}
					alt='Happy black dog on a bench'
					className='rounded'
				/>
			</section>
		</div>
	)
}

export default HomePage
