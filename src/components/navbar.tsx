import { Bone } from 'lucide-react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './shadcui/accordion'
import Logo from './logo'

const Navbar: React.FC = () => {
	return (
		<Accordion type='single' collapsible>
			<AccordionItem value='navbar'>
				<div className='flex items-center justify-between px-4'>
					<Logo />

					<AccordionTrigger>
						{/* TODO Make Hamburguer and X animation */}
						<div className='flex h-11 w-11 flex-col items-center justify-center gap-2 rounded active:scale-90 active:bg-green-200'>
							<div className='h-[2px] w-6 bg-black' />
							<div className='h-[2px] w-6 bg-black' />
						</div>
					</AccordionTrigger>
				</div>

				<AccordionContent>
					{/* TODO Add Nav tag */}
					<ul className='flex flex-col gap-4 px-4 text-base font-medium text-green-800'>
						<li>About</li>
						<li>Adopt</li>
						<li>Events</li>
						<li>Contact</li>
						<li>Get Involved</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default Navbar
