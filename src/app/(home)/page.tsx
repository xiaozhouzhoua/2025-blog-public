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
import SidebarNav from '@/components/sidebar-nav'
import RightSidebar from '@/components/right-sidebar'

export default function Home() {
	const { maxSM } = useSize()

	return (
		<div className='min-h-screen p-4 lg:p-6'>
			<div className='flex gap-4 lg:gap-6 w-full max-w-screen-2xl mx-auto'>
				{/* 左侧导航区域 - 在桌面端显示导航栏，移动端为空 */}
				<div className='hidden lg:block flex-shrink-0 space-y-4'>
					<SidebarNav />
					{/* 时间卡片 */}
					<ClockCard />
				</div>

				{/* 中间主要内容区域 */}
				<div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-auto'>
					{/* 第一行 - 最新文章卡片占2格，头像卡片占1格 */}
					<div className='xl:col-span-2 md:col-span-2'>
						<AritcleCard />
					</div>
					<div className='xl:col-span-1 md:col-span-1 row-span-1'>
						<ArtCard />
					</div>

					{/* 第二行 - 个人信息卡片占3格 */}
					<div className='xl:col-span-3 md:col-span-2'>
						<HiCard />
					</div>

					{/* 第三行 - 音乐小卡片 */}
					{!maxSM && (
						<div className='xl:col-span-1 md:col-span-1'>
							<MusicCard />
						</div>
					)}

					{/* 第四行 - 分享卡片占1格 */}
					{!maxSM && (
						<div className='xl:col-span-1 md:col-span-1'>
							<ShareCard />
						</div>
					)}
				</div>

				{/* 右侧边栏 - 只在超大屏幕显示 */}
				<div className='hidden xl:block flex-shrink-0 space-y-4'>
					{/* 写文章按钮 */}
					<div className='h-fit bg-white backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 w-80'>
						<div className='p-4'>
							<WriteButtons />
						</div>
					</div>

					<RightSidebar>
						<div className='space-y-4'>
							{/* 快速导航 */}
							<div className='bg-gray-50 rounded-xl p-4 transition-colors duration-300'>
								<h3 className='text-sm font-medium text-gray-800 mb-2'>快速导航</h3>
								<p className='text-xs text-gray-500'>右侧边栏内容区域</p>
							</div>

							{/* 工具箱 */}
							<div className='bg-gray-50 rounded-xl p-4 transition-colors duration-300'>
								<h3 className='text-sm font-medium text-gray-800 mb-2'>工具箱</h3>
								<p className='text-xs text-gray-500'>可以放置一些实用工具</p>
							</div>

							{/* 统计信息 */}
							<div className='bg-gray-50 rounded-xl p-4 transition-colors duration-300'>
								<h3 className='text-sm font-medium text-gray-800 mb-2'>统计信息</h3>
								<p className='text-xs text-gray-500'>网站统计数据</p>
							</div>
						</div>
					</RightSidebar>

					{/* 日历卡片 - 独立显示 */}
					<CalendarCard />

					{/* 联系方式 */}
					<div className='h-fit w-80'>
						<SocialButtons />
					</div>
				</div>
			</div>

			{/* 点赞位置 - 固定在右下角 */}
			<div className='fixed bottom-6 right-6'>
				<LikePosition />
			</div>
		</div>
	)
}
