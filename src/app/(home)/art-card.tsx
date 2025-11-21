import SimpleCard from '@/components/simple-card'

export const styles = {
	width: 360,
	height: 160,
	order: 3
}

export default function ArtCard() {
	return (
		<SimpleCard
			order={styles.order}
			className='p-2 h-[160px]'>
			<img src='/images/art/cat.png' alt='wall art' className='h-full w-full rounded-[32px] object-cover' />
		</SimpleCard>
	)
}
