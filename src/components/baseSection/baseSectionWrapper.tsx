import { mukta } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { IBaseSectionProps } from '.'

const BaseSectionWrapper: React.FC<IBaseSectionProps> = ({
	className,
	children,
}) => {
	return (
		<section
			className={cn(
				'flex flex-col gap-10 p-6 pb-10',
				mukta.className,
				className,
			)}
		>
			{children}
		</section>
	)
}

export default BaseSectionWrapper
