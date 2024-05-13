import { cn } from '@/lib/utils'
import { IBaseSectionProps } from '.'

const BaseSectionGroup: React.FC<IBaseSectionProps> = ({
	className,
	children,
}) => {
	return (
		<p
			className={cn(
				'text-lg font-bold uppercase tracking-widest text-gray-500',
				className,
			)}
		>
			{children}
		</p>
	)
}

export default BaseSectionGroup
