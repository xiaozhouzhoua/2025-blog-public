import SimpleCard from '@/components/simple-card'
import MusicSVG from '@/svgs/music.svg'
import PlaySVG from '@/svgs/play.svg'

export const styles = {
	width: 293,
	height: 66,
	offset: 120,
	order: 6
}

export default function MusicCard() {
	return (
		<SimpleCard
			order={styles.order}
			className='flex items-center gap-3 p-4 h-[66px]'>
			<MusicSVG className='h-8 w-8' />

			<div className='flex-1'>
				<div className='text-secondary text-sm'>随机音乐</div>

				<div className='mt-1 h-2 rounded-full bg-white/60'>
					<div className='bg-linear h-full w-1/2 rounded-full' />
				</div>
			</div>

			<button className='flex h-10 w-10 items-center justify-center rounded-full bg-white'>
				<PlaySVG className='text-brand ml-1 h-4 w-4' />
			</button>
		</SimpleCard>
	)
}
