'use client'

import HiCard from '@/app/(home)/hi-card'
import ArtCard from '@/app/(home)/art-card'
import ClockCard from '@/app/(home)/clock-card'
import CalendarCard from '@/app/(home)/calendar-card'
import MusicCard from '@/app/(home)/music-card'
import SocialButtons from '@/app/(home)/social-buttons'
import ShareCard from '@/app/(home)/share-card'
import AritcleCard from '@/app/(home)/aritcle-card'
import WriteButtons from '@/app/(home)/write-buttons'
import LikePosition from './like-position'
import { useSize } from '@/hooks/use-size'

export default function Home() {
	const { maxSM } = useSize()

	return (
		<div className='min-h-screen flex items-center justify-center p-4'>
			<div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto'>
				{/* 第一行 - 个人信息和头像 */}
				<div className='md:col-span-2 lg:col-span-2'>
					<HiCard />
				</div>
				<div className=''>
					<ArtCard />
				</div>

				{/* 第二行 - 时钟、日历、音乐 */}
				{!maxSM && (
					<>
						<div className=''>
							<ClockCard />
						</div>
						<div className=''>
							<CalendarCard />
						</div>
						<div className=''>
							<MusicCard />
						</div>
					</>
				)}

				{/* 第三行 - 社交按钮和分享 */}
				<div className='md:col-span-2 lg:col-span-2'>
					<SocialButtons />
				</div>
				{!maxSM && (
					<div className=''>
						<ShareCard />
					</div>
				)}

				{/* 第四行 - 文章和操作按钮 */}
				<div className='md:col-span-2 lg:col-span-2'>
					<AritcleCard />
				</div>
				{!maxSM && (
					<div className=''>
						<WriteButtons />
					</div>
				)}
			</div>

			{/* 点赞位置 - 固定在右下角 */}
			<div className='fixed bottom-6 right-6'>
				<LikePosition />
			</div>
		</div>
	)
}
