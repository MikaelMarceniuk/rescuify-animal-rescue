import { cn } from '@/lib/utils'
import { IBaseSectionProps } from '.'

const availableVariants = {
	h2: 'text-4xl font-medium text-green-800',
	h3: 'text-2.8xl font-medium leading-8 text-gray-600',
}

interface IBaseSectionTitleProps extends IBaseSectionProps {
	as?: 'h2' | 'h3'
	variant?: keyof typeof availableVariants
}

const BaseSectionTitle: React.FC<IBaseSectionTitleProps> = ({
	as = 'h3',
	variant = 'h3',
	className,
	children,
}) => {
	const AsTag = as

	return (
		<AsTag
			className={cn(
				'text-center text-4xl font-medium text-green-800',
				availableVariants[variant],
				className,
			)}
		>
			{children}
		</AsTag>
	)
}

export default BaseSectionTitle
