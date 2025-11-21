'use client'

import { ANIMATION_DELAY } from '@/consts'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface Props {
	className?: string
	order?: number
	children: React.ReactNode
}

export default function SimpleCard({ children, order = 0, className }: Props) {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setTimeout(() => setShow(true), order * ANIMATION_DELAY * 1000)
	}, [order])

	if (show)
		return (
			<motion.div
				className={cn('card w-full h-full', className)}
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}>
				{children}
			</motion.div>
		)

	return null
}