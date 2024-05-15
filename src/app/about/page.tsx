import {
	BaseSectionHeader,
	BaseSectionSubtitle,
	BaseSectionTitle,
	BaseSectionWrapper,
} from '@/components/baseSection'
import { NextPage } from 'next'
import Image from 'next/image'

const AboutPage: NextPage = () => {
	return (
		<main className='min-h-dvh'>
			<BaseSectionWrapper>
				<BaseSectionHeader>
					<BaseSectionTitle as='h2' variant='h2'>
						Discover Our Mission and Vision for Animal Welfare
					</BaseSectionTitle>
					<BaseSectionSubtitle className='text-center'>
						Explore our organization's dedication to saving and improving the
						lives of animals through rescue, rehabilitation, and advocacy
						efforts.
					</BaseSectionSubtitle>
				</BaseSectionHeader>

				<div className='relative h-[17rem] max-w-[18.75rem]'>
					<Image
						src='/cat-and-dog-laying-outside-together.webp'
						fill
						alt='Cat and dog laying outside together'
						className='rounded-2xl'
					/>
				</div>
			</BaseSectionWrapper>
		</main>
	)
}

export default AboutPage
