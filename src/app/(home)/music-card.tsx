import SimpleCard from '@/components/simple-card'
import MusicSVG from '@/svgs/music.svg'
import PlaySVG from '@/svgs/play.svg'

export const styles = {
	width: 293,
	height: 180,
	offset: 120,
	order: 6
}

export default function MusicCard() {
	return (
		<SimpleCard
			order={styles.order}
			className='flex flex-col items-center justify-center gap-4 p-6 h-[180px]'>
			<MusicSVG className='h-12 w-12' />

			<div className='w-full text-center'>
				<div className='text-secondary text-base font-medium'>随机音乐</div>

				<div className='mt-3 h-2 rounded-full bg-white/60'>
					<div className='bg-linear h-full w-1/2 rounded-full' />
				</div>
			</div>

			<button className='flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg'>
				<PlaySVG className='text-brand ml-1 h-5 w-5' />
			</button>
		</SimpleCard>
	)
}
