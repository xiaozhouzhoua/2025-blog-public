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
		<div className='w-48 h-fit bg-white rounded-3xl p-3 shadow-lg'>
			<Link className='flex items-center gap-2 mb-3' href='/'>
				<Image src='/images/avatar.png' alt='avatar' width={28} height={28} style={{ boxShadow: ' 0 6px 12px -3px #E2D9CE' }} className='rounded-full' />
				<div className='flex flex-col'>
					<span className='font-averia text-sm leading-none font-medium'>YYsuni</span>
					<span className='text-brand text-xs font-medium'>(开发中)</span>
				</div>
			</Link>

			<div className='text-secondary text-xs uppercase mb-2'>Navigation</div>
			<div className='relative space-y-1'>
				<div
					className='absolute w-full rounded-full border bg-gradient-to-r from-white to-gray-50'
					style={{
						top: hoveredIndex * 40,
						height: 36,
						transition: 'all 0.3s ease'
					}}
				/>
				{list.map((item, index) => (
					<Link
						key={item.href}
						href={item.href}
						className='relative z-10 text-secondary text-sm flex items-center gap-2 rounded-full px-3 py-2 transition-colors'
						onMouseEnter={() => setHoveredIndex(index)}>
						<div className='flex h-5 w-5 items-center justify-center'>
							{hoveredIndex === index ?
								<item.iconActive className='text-brand h-5 w-5' /> :
								<item.icon className='h-5 w-5' />
							}
						</div>
						<span className={cn(index === hoveredIndex && 'text-primary font-medium')}>
							{item.label}
						</span>
					</Link>
				))}
			</div>
		</div>
	)
}