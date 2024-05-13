import BaseSectionWrapper from './baseSectionWrapper'
import BaseSectionHeader from './baseSectionHeader'
import BaseSectionGroup from './baseSectionGroup'
import BaseSectionTitle from './baseSectionTitle'
import BaseSectionSubtitle from './baseSectionSubtitle'

export interface IBaseSectionProps {
	children: React.ReactNode
	className?: string
}

export {
	BaseSectionWrapper,
	BaseSectionHeader,
	BaseSectionGroup,
	BaseSectionTitle,
	BaseSectionSubtitle,
}
