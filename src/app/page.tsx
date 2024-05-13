import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import Image from 'next/image'
import { jost, mukta } from './fonts'
import {
	ArrowRight,
	Bone,
	CalendarDays,
	Clock,
	HandHeart,
	MapPin,
	MoveRight,
} from 'lucide-react'
import {
	BaseSectionGroup,
	BaseSectionHeader,
	BaseSectionSubtitle,
	BaseSectionTitle,
	BaseSectionWrapper,
} from '@/components/baseSection'
import { Separator } from '@/components/ui/separator'

const HomePage: NextPage = () => {
	return (
		<div className='min-h-dvh'>
			<BaseSectionWrapper>
				<BaseSectionHeader>
					<BaseSectionTitle variant='h2' as='h2'>
						Empower Change: <br />
						Rescue, Rehabilitate, Rehome Together
					</BaseSectionTitle>
					<BaseSectionSubtitle>
						<p>Join us in our mission to save animal lives.</p>
						<p>Your partnership makes a difference.</p>
					</BaseSectionSubtitle>

					<div className='flex justify-between'>
						<Button className='bg-green-800'>Get Involved</Button>
						<Button variant='outline'>Donate Now</Button>
					</div>
				</BaseSectionHeader>

				{/* TODO Fix this image, must be close to dog */}
				<Image
					src='/happy-black-dog-on-a-bench.webp'
					width={272}
					height={300}
					alt='Happy black dog on a bench'
					className='rounded-2xl'
				/>
			</BaseSectionWrapper>

			<BaseSectionWrapper className='bg-gray-200'>
				<BaseSectionHeader>
					<BaseSectionGroup>Statistics</BaseSectionGroup>
					<BaseSectionTitle>Impact at a Glance</BaseSectionTitle>
					<BaseSectionSubtitle>
						<h4>
							See the Difference We're Making Together. Every Statistic Tells a
							Story of Hope and Healing.
						</h4>
					</BaseSectionSubtitle>
				</BaseSectionHeader>

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
			</BaseSectionWrapper>

			<BaseSectionWrapper>
				<BaseSectionHeader>
					<BaseSectionGroup>Our mission</BaseSectionGroup>
					<BaseSectionTitle>Revolutionizing Animal Rescue</BaseSectionTitle>
					<BaseSectionSubtitle>
						<h4>
							At Rescuify, we believe in the power of compassion to transform
							lives. Our mission is simple yet profound: to rescue,
							rehabilitate, and rehome animals in need, giving them the second
							chance they deserve.
						</h4>
					</BaseSectionSubtitle>
				</BaseSectionHeader>

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

				<ul className='flex flex-col gap-5'>
					<li>
						<Image
							src='/gray-and-white-pitbull.webp'
							width={272}
							height={300}
							alt='Gray and White Pitbull'
							className='rounded-2xl'
						/>
					</li>

					<li>
						<Image
							src='/orange-tabby-kitten.webp'
							width={272}
							height={300}
							alt='Orange Tabby Kitten'
							className='rounded-2xl'
						/>
					</li>
				</ul>
			</BaseSectionWrapper>

			<BaseSectionWrapper>
				<BaseSectionHeader>
					<BaseSectionGroup>Our programs</BaseSectionGroup>
					<BaseSectionTitle>Empowering Animal Welfare</BaseSectionTitle>
					<BaseSectionSubtitle>
						<h4>
							We're committed to implementing innovative programs that address
							the diverse needs of animals in our community. From low-cost spay
							and neuter clinics to educational outreach initiatives, our
							programs are designed to make a lasting impact on animal welfare.
							Explore how our programs are revolutionizing the way we care for
							and advocate on behalf of animals in need. Join us in our mission
							to create a world where every animal is valued and protected.
						</h4>
					</BaseSectionSubtitle>

					<Button>
						Get Involved{' '}
						<div>
							<ArrowRight size={12} />
						</div>
					</Button>
				</BaseSectionHeader>

				<ul className='flex flex-col gap-5'>
					<li>
						<Image
							src='/tabby-cat.webp'
							width={272}
							height={300}
							alt='Tabby cat'
							className='rounded-2xl'
						/>
					</li>

					<li>
						<Image
							src='/golden-and-white-dog.webp'
							width={272}
							height={300}
							alt='Golden and White dog'
							className='rounded-2xl'
						/>
					</li>
				</ul>
			</BaseSectionWrapper>

			<BaseSectionWrapper className='bg-gray-200'>
				<BaseSectionHeader>
					<BaseSectionGroup>Get Involved</BaseSectionGroup>
					<BaseSectionTitle>Make a Difference Today</BaseSectionTitle>
					<BaseSectionSubtitle>
						Empower change. Volunteer, donate, foster. Join our community today.
					</BaseSectionSubtitle>

					<ul className='flex flex-col gap-5'>
						<li>
							<Card className='p-6'>
								<CardContent className='flex flex-col gap-7'>
									<div className='flex flex-col gap-2'>
										<div>
											<div>
												<HandHeart size={64} />
											</div>
											<h4 className='text-lg font-semibold'>
												Join Our Volunteer Team
											</h4>
										</div>

										<div>
											<p>
												Make a hands-on difference by joining our volunteer
												team. From helping with animal care to assisting with
												adoption events, there are many ways to lend a hand and
												make a positive impact. Join us today!
											</p>
										</div>
									</div>

									<div>
										<Button variant='outline' className='flex gap-2'>
											Learn More{' '}
											<div>
												<ArrowRight size={12} />
											</div>
										</Button>
									</div>
								</CardContent>
							</Card>
						</li>

						<li>
							<Card className='p-6'>
								<CardContent className='flex flex-col gap-7'>
									<div className='flex flex-col gap-2'>
										<div>
											<div>
												<HandHeart size={64} />
											</div>
											<h4 className='text-lg font-semibold'>
												Join Our Volunteer Team
											</h4>
										</div>

										<div>
											<p>
												Make a hands-on difference by joining our volunteer
												team. From helping with animal care to assisting with
												adoption events, there are many ways to lend a hand and
												make a positive impact. Join us today!
											</p>
										</div>
									</div>

									<div>
										<Button variant='outline' className='flex gap-2'>
											Learn More{' '}
											<div>
												<ArrowRight size={12} />
											</div>
										</Button>
									</div>
								</CardContent>
							</Card>
						</li>

						<li>
							<Card className='p-6'>
								<CardContent className='flex flex-col gap-7'>
									<div className='flex flex-col gap-2'>
										<div>
											<div>
												<HandHeart size={64} />
											</div>
											<h4 className='text-lg font-semibold'>
												Join Our Volunteer Team
											</h4>
										</div>

										<div>
											<p>
												Make a hands-on difference by joining our volunteer
												team. From helping with animal care to assisting with
												adoption events, there are many ways to lend a hand and
												make a positive impact. Join us today!
											</p>
										</div>
									</div>

									<div>
										<Button variant='outline' className='flex gap-2'>
											Learn More{' '}
											<div>
												<ArrowRight size={12} />
											</div>
										</Button>
									</div>
								</CardContent>
							</Card>
						</li>

						<li>
							<Card className='p-6'>
								<CardContent className='flex flex-col gap-7'>
									<div className='flex flex-col gap-2'>
										<div>
											<div>
												<HandHeart size={64} />
											</div>
											<h4 className='text-lg font-semibold'>
												Join Our Volunteer Team
											</h4>
										</div>

										<div>
											<p>
												Make a hands-on difference by joining our volunteer
												team. From helping with animal care to assisting with
												adoption events, there are many ways to lend a hand and
												make a positive impact. Join us today!
											</p>
										</div>
									</div>

									<div>
										<Button variant='outline' className='flex gap-2'>
											Learn More{' '}
											<div>
												<ArrowRight size={12} />
											</div>
										</Button>
									</div>
								</CardContent>
							</Card>
						</li>
					</ul>
				</BaseSectionHeader>
			</BaseSectionWrapper>

			<BaseSectionWrapper>
				<BaseSectionHeader>
					<BaseSectionGroup>Upcoming Events</BaseSectionGroup>
					<BaseSectionTitle>Discover What's Happening</BaseSectionTitle>
					<BaseSectionSubtitle>
						Empower change. Volunteer, donate, foster. Join our community today.
					</BaseSectionSubtitle>

					<ul className='flex flex-col gap-5'>
						<li className='rounded-2xl'>
							<Card className='rounded-2xl p-0'>
								<CardContent className='flex flex-col p-0'>
									<div className='relative min-h-52'>
										<Image
											src='/small-dog-being-held.webp'
											alt='Small dog beign held'
											fill
											className='rounded-tl-2xl rounded-tr-2xl'
										/>
									</div>

									<div
										className={cn(
											'flex flex-col gap-4 p-8 text-gray-500',
											jost.className,
										)}
									>
										<div className='flex flex-col gap-2'>
											<h4 className='text-lg font-semibold text-gray-800'>
												Adoption Drive
											</h4>

											<div>
												<div className='flex items-center gap-2'>
													<CalendarDays size={18} />
													<p>Saturday, March 12th</p>
												</div>
												<div className='flex items-center gap-2'>
													<Clock size={18} />
													<p>10:00 AM - 2:00 PM</p>
												</div>
											</div>
										</div>

										<Separator />

										<div className='flex gap-2'>
											<div className='pt-1'>
												<MapPin size={18} />
											</div>
											<div>
												<p>Rescuify Animal Shelter</p>
												<p>123 Main Street - Anytown, USA</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</li>

						<li className='rounded-2xl'>
							<Card className='rounded-2xl p-0'>
								<CardContent className='flex flex-col p-0'>
									<div className='relative min-h-52'>
										<Image
											src='/mixed-dog-on-leash.webp'
											alt='Mixed dog on leash'
											fill
											className='rounded-tl-2xl rounded-tr-2xl'
										/>
									</div>

									<div
										className={cn(
											'flex flex-col gap-4 p-8 text-gray-500',
											jost.className,
										)}
									>
										<div className='flex flex-col gap-2'>
											<h4 className='text-lg font-semibold text-gray-800'>
												Adoption Drive
											</h4>

											<div>
												<div className='flex items-center gap-2'>
													<CalendarDays size={18} />
													<p>Saturday, March 12th</p>
												</div>
												<div className='flex items-center gap-2'>
													<Clock size={18} />
													<p>10:00 AM - 2:00 PM</p>
												</div>
											</div>
										</div>

										<Separator />

										<div className='flex gap-2'>
											<div className='pt-1'>
												<MapPin size={18} />
											</div>
											<div>
												<p>Rescuify Animal Shelter</p>
												<p>123 Main Street - Anytown, USA</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</li>

						<li className='rounded-2xl'>
							<Card className='rounded-2xl p-0'>
								<CardContent className='flex flex-col p-0'>
									<div className='relative min-h-52'>
										<Image
											src='/cat-being-held.webp'
											alt='Cat being held'
											fill
											className='rounded-tl-2xl rounded-tr-2xl'
										/>
									</div>

									<div
										className={cn(
											'flex flex-col gap-4 p-8 text-gray-500',
											jost.className,
										)}
									>
										<div className='flex flex-col gap-2'>
											<h4 className='text-lg font-semibold text-gray-800'>
												Adoption Drive
											</h4>

											<div>
												<div className='flex items-center gap-2'>
													<CalendarDays size={18} />
													<p>Saturday, March 12th</p>
												</div>
												<div className='flex items-center gap-2'>
													<Clock size={18} />
													<p>10:00 AM - 2:00 PM</p>
												</div>
											</div>
										</div>

										<Separator />

										<div className='flex gap-2'>
											<div className='pt-1'>
												<MapPin size={18} />
											</div>
											<div>
												<p>Rescuify Animal Shelter</p>
												<p>123 Main Street - Anytown, USA</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</li>
					</ul>

					<Button variant='outline' className='space-x-2'>
						<p>View More Events</p>
						<div>
							<ArrowRight size={12} />
						</div>
					</Button>
				</BaseSectionHeader>
			</BaseSectionWrapper>
		</div>
	)
}

export default HomePage
