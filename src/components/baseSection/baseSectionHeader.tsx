import { cn } from '@/lib/utils'
import { IBaseSectionProps } from '.'

const BaseSectionHeader: React.FC<IBaseSectionProps> = ({
	className,
	children,
}) => {
	return <div className={cn('flex flex-col gap-3', className)}>{children}</div>
}

export default BaseSectionHeader
