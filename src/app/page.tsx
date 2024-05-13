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
import { ArrowRight, Bone, MoveRight } from 'lucide-react'

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
				<div className='flex flex-col gap-3'>
					<p className='text-lg font-bold tracking-widest text-gray-500'>
						STATISTICS
					</p>
					<h3 className='text-2.8xl font-medium leading-8 text-gray-600'>
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

			<section
				className={cn('flex flex-col gap-10 p-6 pb-10', mukta.className)}
			>
				<div className='flex flex-col gap-3'>
					<p className='text-lg font-bold tracking-widest text-gray-500'>
						OUR MISSION
					</p>
					<h3 className='text-2.8xl font-medium leading-8 text-gray-600'>
						Revolutionizing Animal Rescue
					</h3>
					<h4 className={cn('text-lg text-gray-600', jost.className)}>
						At Rescuify, we believe in the power of compassion to transform
						lives. Our mission is simple yet profound: to rescue, rehabilitate,
						and rehome animals in need, giving them the second chance they
						deserve.
					</h4>
				</div>

				<ul className='flex flex-col gap-4'>
					<li className='flex gap-3 text-green-900'>
						<div>
							<Bone size={24} />
						</div>
						<p>
							Saving lives through rescue, rehabilitation, and successful
							adoptions.
						</p>
					</li>

					<li className='flex gap-3 text-green-900'>
						<div>
							<Bone size={24} />
						</div>
						<p>
							Compassionate care, transformative outcomes, and endless tails of
							joy.
						</p>
					</li>

					<li className='flex gap-3 text-green-900'>
						<div>
							<Bone size={24} />
						</div>
						<p>
							Our commitment: rescuing, rehabilitating, and rehoming animals in
							need.
						</p>
					</li>
				</ul>

				<div className='flex justify-between'>
					<Button className='bg-green-800'>Learn More</Button>
					<Button variant='outline' className='flex gap-2'>
						Adopt a Pet{' '}
						<div>
							<ArrowRight size={12} />
						</div>
					</Button>
				</div>
			</section>
		</div>
	)
}

export default HomePage
