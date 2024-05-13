import { cn } from '@/lib/utils'
import { IBaseSectionProps } from '.'
import { jost } from '@/app/fonts'

const BaseSectionSubtitle: React.FC<IBaseSectionProps> = ({
	className,
	children,
}) => {
	return (
		<div className={cn('text-lg text-gray-600', jost.className, className)}>
			{children}
		</div>
	)
}

export default BaseSectionSubtitle
