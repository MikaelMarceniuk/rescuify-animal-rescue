import type { Metadata, NextPage } from 'next'
import './globals.css'
import { Jost } from 'next/font/google'
import Navbar from '@/components/navbar'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

interface IRootLayoutProps {
	children: React.ReactNode
}

const RootLayout: NextPage<IRootLayoutProps> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={jost.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}

export default RootLayout