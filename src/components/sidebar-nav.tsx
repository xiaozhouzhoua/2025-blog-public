'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ScrollOutlineSVG from '@/svgs/scroll-outline.svg'
import ScrollFilledSVG from '@/svgs/scroll-filled.svg'
import ProjectsFilledSVG from '@/svgs/projects-filled.svg'
import ProjectsOutlineSVG from '@/svgs/projects-outline.svg'
import AboutFilledSVG from '@/svgs/about-filled.svg'
import AboutOutlineSVG from '@/svgs/about-outline.svg'
import ShareFilledSVG from '@/svgs/share-filled.svg'
import ShareOutlineSVG from '@/svgs/share-outline.svg'
import WebsiteFilledSVG from '@/svgs/website-filled.svg'
import WebsiteOutlineSVG from '@/svgs/website-outline.svg'

const list = [
	{
		icon: ScrollOutlineSVG,
		iconActive: ScrollFilledSVG,
		label: '近期文章',
		href: '/blog'
	},
	{
		icon: ProjectsOutlineSVG,
		iconActive: ProjectsFilledSVG,
		label: '我的项目',
		href: '/projects'
	},
	{
		icon: AboutOutlineSVG,
		iconActive: AboutFilledSVG,
		label: '关于网站',
		href: '/about'
	},
	{
		icon: ShareOutlineSVG,
		iconActive: ShareFilledSVG,
		label: '推荐分享',
		href: '/share'
	},
	{
		icon: WebsiteOutlineSVG,
		iconActive: WebsiteFilledSVG,
		label: '优秀博客',
		href: '/bloggers'
	}
]

export default function SidebarNav() {
	const pathname = usePathname()
	const [hoveredIndex, setHoveredIndex] = useState(0)

	const activeIndex = useMemo(() => {
		const index = list.findIndex(item => pathname === item.href)
		return index >= 0 ? index : undefined
	}, [pathname])

	useEffect(() => {
		if (activeIndex !== undefined && hoveredIndex !== activeIndex) {
			const timer = setTimeout(() => {
				setHoveredIndex(activeIndex)
			}, 1500)
			return () => clearTimeout(timer)
		}
	}, [hoveredIndex, activeIndex])

	return (
		<div className='sidebar-nav h-fit w-64 bg-white backdrop-blur-xl rounded-3xl p-4 shadow-lg transition-all duration-300'>
			<div className='flex items-center gap-3 mb-4'>
				<Link href='/' className='flex items-center gap-3'>
					<Image src='/images/avatar.png' alt='avatar' width={48} height={48} style={{ boxShadow: ' 0 6px 12px -3px #E2D9CE' }} className='rounded-full' />
					<div className='flex flex-col'>
						<span className='font-averia text-lg leading-none font-medium text-gray-800'>小周</span>
					</div>
				</Link>
			</div>

			<div className='flex flex-col items-start space-y-3'>
				{list.map((item, index) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							'flex items-center gap-4 px-4 py-3 w-full rounded-xl transition-all duration-200 hover:scale-105 nav-item',
							activeIndex === index
								? 'bg-orange-500 text-white shadow-md'
								: 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
						)}
						onMouseEnter={() => setHoveredIndex(index)}>
						<div className='flex items-center justify-center h-6 w-6'>
							{activeIndex === index ?
								<item.iconActive className='h-6 w-6' /> :
								<item.icon className='h-6 w-6' />
							}
						</div>
						<div className='flex items-center gap-2'>
							<span className={cn('text-sm', index === activeIndex && 'font-medium')}>{item.label}</span>
							{activeIndex === index && <span className='text-xs opacity-75'>小周</span>}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}