'use client'

import Card from '@/components/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { useCenterStore } from '@/hooks/use-center'
import { styles as hiCardStyles } from '../app/(home)/hi-card'
import { CARD_SPACING } from '@/consts'
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
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { cn } from '@/lib/utils'
import { useSize } from '@/hooks/use-size'

export const styles = {
	width: 280,  // 增加宽度从200到280
	height: 500,
	order: 2
}

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

const extraSize = 8

export default function NavCard() {
	const pathname = usePathname()
	const center = useCenterStore()
	const [show, setShow] = useState(false)
	const { maxSM } = useSize()
	const [hoveredIndex, setHoveredIndex] = useState<number>(0)

	const activeIndex = useMemo(() => {
		const index = list.findIndex(item => pathname === item.href)
		return index >= 0 ? index : undefined
	}, [pathname])

	useEffect(() => {
		setShow(true)
	}, [])

	const form = useMemo(() => {
		if (maxSM) return 'icons'
		if (pathname == '/') return 'full'
		else if (pathname == '/write') return 'mini'
		else return 'icons'
	}, [pathname, maxSM])

	const itemHeight = form === 'full' ? 36 : 28

	const position = useMemo(() => {
		if (maxSM) {
			const sizeForPosition = form === 'mini' ? { width: 64, height: 64 }
				: form === 'icons' ? { width: 340, height: 64 }
				: { width: styles.width, height: styles.height }
			return { x: center.x - sizeForPosition.width / 2, y: 16 }
		}

		if (form === 'full')
			return {
				x: 24, // 增加左边距
				y: 24 // 增加顶部边距
			}

		return {
			x: 32,
			y: 24
		}
	}, [form, maxSM, center.x])

	const size = useMemo(() => {
		if (form === 'mini') return { width: 64, height: 64 }
		else if (form === 'icons') return { width: 340, height: 64 }
		else return { width: styles.width, height: styles.height }
	}, [form])

	useEffect(() => {
		if (form === 'icons' && activeIndex !== undefined && hoveredIndex !== activeIndex) {
			const timer = setTimeout(() => {
				setHoveredIndex(activeIndex)
			}, 1500)
			return () => clearTimeout(timer)
		}
	}, [hoveredIndex, activeIndex, form])

	// 在首页时不显示这个导航栏，使用SidebarNav替代
	if (pathname === '/') {
		return null
	}

	if (show)
		return (
			<Card
				order={styles.order}
				width={size.width}
				height={size.height}
				x={position.x}
				y={position.y}
				className={clsx('overflow-hidden p-3', form === 'mini' && 'p-2', form === 'icons' && 'flex items-center gap-4 p-2')}>
				{form === 'full' && (
					<Link className='flex items-center gap-2 mb-4' href='/'>
						<Image src='/images/avatar.png' alt='avatar' width={32} height={32} style={{ boxShadow: ' 0 8px 16px -4px #E2D9CE' }} className='rounded-full' />
						<div className='flex flex-col'>
							<span className='font-averia text-lg leading-none font-medium'>YYsuni</span>
							<span className='text-brand text-xs font-medium'>(开发中)</span>
						</div>
					</Link>
				)}

				{(form === 'full' || form === 'icons') && (
					<>
						{form !== 'icons' && <div className='text-secondary text-xs uppercase mb-3'>Navigation</div>}

						<div className={cn('relative space-y-2', form === 'icons' && 'flex items-center gap-4 space-y-0')}>
							<motion.div
								className='absolute max-w-[260px] rounded-full border'  // 增加最大宽度
								layoutId='nav-hover'
								initial={false}
								animate={
									form === 'icons'
										? {
												left: hoveredIndex * (itemHeight + 24) - extraSize,
												top: -extraSize,
												width: itemHeight + extraSize * 2,
												height: itemHeight + extraSize * 2
											}
										: { top: hoveredIndex * (itemHeight + 12), left: 0, width: '100%', height: itemHeight }  // 增加间距
								}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 30
								}}
								style={{ backgroundImage: 'linear-gradient(to right bottom, #FFFFFF 0%, #fafafa 80%)' }}
							/>

							{list.map((item, index) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn('text-secondary text-md relative z-10 flex items-center gap-4 rounded-full px-6 py-3', form === 'icons' && 'p-0')}  // 增加间距和padding
									onMouseEnter={() => setHoveredIndex(index)}>
									<div className='flex h-7 w-7 items-center justify-center'>
										{hoveredIndex == index ? <item.iconActive className='text-brand absolute h-7 w-7' /> : <item.icon className='absolute h-7 w-7' />}
									</div>
									{form !== 'icons' && <span className={clsx(index == hoveredIndex && 'text-primary font-medium')}>{item.label}</span>}
								</Link>
							))}
						</div>
					</>
				)}
			</Card>
		)
}
