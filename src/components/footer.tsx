import { Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from './logo'
import { Button } from './shadcui/button'
import Link from 'next/link'

const Footer: React.FC = () => {
	return (
		<footer className='flex flex-col items-center gap-4 p-6 pt-0'>
			<Logo />

			<ul className='flex flex-col gap-4 px-4 text-center text-base font-medium text-green-800'>
				<li>About</li>
				<li>Adopt</li>
				<li>Events</li>
				<li>Contact</li>
				<li>Get Involved</li>
			</ul>

			<ul className='flex gap-4'>
				<li>
					<Button variant='secondary'>
						<Twitter />
					</Button>
				</li>
				<li>
					<Button variant='secondary'>
						<Instagram />
					</Button>
				</li>
				<li>
					<Button variant='secondary'>
						<Facebook />
					</Button>
				</li>
			</ul>

			<div className='flex flex-col gap-3 text-center text-green-800'>
				<p>
					© 2024 Designed by{' '}
					<Link href='https://twitter.com/kearameehan'>
						<span className='font-semibold'>Keara Meehan</span>
					</Link>
				</p>
				<p>
					Build by <span className='font-semibold'>Mikael Marceniuk</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
