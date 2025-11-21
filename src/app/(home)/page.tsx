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
		<div className='min-h-screen flex items-start justify-start p-6'>
			<div className='flex gap-4 w-full max-w-7xl'>
				{/* 左侧导航区域 - 在桌面端显示导航栏，移动端为空 */}
				<div className='hidden lg:block w-80 flex-shrink-0'>
					{/* 导航栏由NavCard组件绝对定位处理，这里留空 */}
				</div>

				{/* 右侧主要内容区域 */}
				<div className='flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 auto-rows-max'>
					{/* 第一行 - 个人信息卡片占2格，头像卡片占1格 */}
					<div className='xl:col-span-2 md:col-span-2'>
						<HiCard />
					</div>
					<div className='xl:col-span-1 md:col-span-1'>
						<ArtCard />
					</div>

					{/* 第二行 - 时钟、日历、音乐小卡片 */}
					{!maxSM && (
						<>
							<div className='xl:col-span-1 md:col-span-1'>
								<ClockCard />
							</div>
							<div className='xl:col-span-1 md:col-span-1'>
								<CalendarCard />
							</div>
							<div className='xl:col-span-1 md:col-span-1'>
								<MusicCard />
							</div>
						</>
					)}

					{/* 第三行 - 社交按钮占2格，分享卡片占1格 */}
					<div className='xl:col-span-2 md:col-span-2'>
						<SocialButtons />
					</div>
					{!maxSM && (
						<div className='xl:col-span-1 md:col-span-1'>
							<ShareCard />
						</div>
					)}

					{/* 第四行 - 文章卡片占2格，写作按钮占1格 */}
					<div className='xl:col-span-2 md:col-span-2'>
						<AritcleCard />
					</div>
					{!maxSM && (
						<div className='xl:col-span-1 md:col-span-1'>
							<WriteButtons />
						</div>
					)}
				</div>
			</div>

			{/* 点赞位置 - 固定在右下角 */}
			<div className='fixed bottom-6 right-6'>
				<LikePosition />
			</div>
		</div>
	)
}
