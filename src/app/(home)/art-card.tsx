import SimpleCard from '@/components/simple-card'

export const styles = {
	width: 360,
	height: 200,
	order: 3
}

export default function ArtCard() {
	return (
		<SimpleCard
			order={styles.order}
			className='p-2 h-[200px]'>
			<img src='/images/art/cat.png' alt='wall art' className='h-full w-full rounded-[32px] object-cover' />
		</SimpleCard>
	)
}
