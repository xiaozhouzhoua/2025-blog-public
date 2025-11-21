'use client'

import { cn } from '@/lib/utils'

interface RightSidebarProps {
	children: React.ReactNode
}

export default function RightSidebar({ children }: RightSidebarProps) {
	return (
		<div className={cn(
			'right-sidebar h-fit bg-white backdrop-blur-xl rounded-3xl shadow-lg transition-all duration-300 w-80',
			'hidden xl:block' // 只在超大屏幕显示
		)}>
			{/* 内容区域 */}
			<div className='p-4'>
				{children}
			</div>
		</div>
	)
}