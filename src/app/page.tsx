import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import Image from 'next/image'
import { jost, mukta } from './fonts'

const HomePage: NextPage = () => {
	return (
		<div className='min-h-dvh '>
			<section className='flex flex-col gap-6 p-6 pb-10'>
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

			<section
				className={cn(
					'flex flex-col gap-10 bg-gray-200 p-6 pb-10',
					mukta.className,
				)}
			>
				<div>
					<p className='text-lg font-bold tracking-widest text-gray-500'>
						STATISTICS
					</p>
					<h3 className='text-2.8xl font-medium text-gray-600'>
						Impact at a Glance
					</h3>
					<h4 className={cn('text-lg text-gray-600', jost.className)}>
						See the Difference We're Making Together. Every Statistic Tells a
						Story of Hope and Healing.
					</h4>
				</div>

				<ul className='flex flex-col gap-4'>
					<li>
						<Card>
							<CardContent className='flex flex-col gap-4 pt-6'>
								<p className='text-5xl font-bold text-gray-800'>
									500<span className='text-gray-600'>+</span>
								</p>
								<h4 className='text-lg font-semibold text-gray-800'>
									Adoptions Completed
								</h4>
								<p className='text-lg text-gray-600'>
									Our adoption program connects animals with loving homes,
									thanks to your support.
								</p>
							</CardContent>
						</Card>
					</li>

					<li>
						<Card>
							<CardContent className='flex flex-col gap-4 pt-6'>
								<p className='text-5xl font-bold text-gray-800'>
									500<span className='text-gray-600'>+</span>
								</p>
								<h4 className='text-lg font-semibold text-gray-800'>
									Adoptions Completed
								</h4>
								<p className='text-lg text-gray-600'>
									Our adoption program connects animals with loving homes,
									thanks to your support.
								</p>
							</CardContent>
						</Card>
					</li>

					<li>
						<Card>
							<CardContent className='flex flex-col gap-4 pt-6'>
								<p className='text-5xl font-bold text-gray-800'>
									500<span className='text-gray-600'>+</span>
								</p>
								<h4 className='text-lg font-semibold text-gray-800'>
									Adoptions Completed
								</h4>
								<p className='text-lg text-gray-600'>
									Our adoption program connects animals with loving homes,
									thanks to your support.
								</p>
							</CardContent>
						</Card>
					</li>

					<li>
						<Card>
							<CardContent className='flex flex-col gap-4 pt-6'>
								<p className='text-5xl font-bold text-gray-800'>
									500<span className='text-gray-600'>+</span>
								</p>
								<h4 className='text-lg font-semibold text-gray-800'>
									Adoptions Completed
								</h4>
								<p className='text-lg text-gray-600'>
									Our adoption program connects animals with loving homes,
									thanks to your support.
								</p>
							</CardContent>
						</Card>
					</li>
				</ul>
			</section>
		</div>
	)
}

export default HomePage
