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
		<div className='w-20 h-fit bg-white rounded-3xl p-4 shadow-lg'>
			<Link className='flex items-center justify-center mb-4' href='/'>
				<Image src='/images/avatar.png' alt='avatar' width={36} height={36} style={{ boxShadow: ' 0 6px 12px -3px #E2D9CE' }} className='rounded-full' />
			</Link>

			<div className='flex flex-col items-center space-y-3'>
				{list.map((item, index) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							'flex h-12 w-12 items-center justify-center rounded-xl transition-all',
							activeIndex === index
								? 'bg-orange-500 text-white'
								: 'text-gray-400 hover:text-gray-600'
						)}
						onMouseEnter={() => setHoveredIndex(index)}>
						<div className='flex h-6 w-6 items-center justify-center'>
							{activeIndex === index ?
								<item.iconActive className='h-6 w-6' /> :
								<item.icon className='h-6 w-6' />
							}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}