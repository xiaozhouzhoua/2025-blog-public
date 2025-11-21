import GithubSVG from '@/svgs/github.svg'
import { ANIMATION_DELAY } from '@/consts'
import JuejinSVG from '@/svgs/juejin.svg'
import EmailSVG from '@/svgs/email.svg'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useSize } from '@/hooks/use-size'

export const styles = {
	width: 315,
	height: 48,
	order: 6
}

let delay = 100

export default function SocialButtons() {
	const { maxSM, init } = useSize()
	if (maxSM && init) {
		styles.order = 0
		delay = 0
	}
	const [show, setShow] = useState(false)
	const [secondaryShow, setSecondaryShow] = useState(false)
	const [tertiaryShow, setTertiaryShow] = useState(false)
	useEffect(() => {
		setTimeout(() => setShow(true), styles.order * ANIMATION_DELAY * 1000)
		setTimeout(() => setSecondaryShow(true), styles.order * ANIMATION_DELAY * 1000 + 1 * delay)
		setTimeout(() => setTertiaryShow(true), styles.order * ANIMATION_DELAY * 1000 + 2 * delay)
	}, [])

	if (show)
		return (
			<motion.div
				className='max-sm:static'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: styles.order * ANIMATION_DELAY }}>
				<div className='flex items-center gap-3 max-sm:justify-center'>
					{tertiaryShow && (
						<motion.a
							href='https://github.com/yysuni'
							target='_blank'
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='font-averia flex items-center gap-2 rounded-xl border bg-[#070707] px-3 py-2 text-xl text-white'
							style={{ boxShadow: ' inset 0 0 12px rgba(255, 255, 255, 0.4)' }}>
							<GithubSVG />
							Github
						</motion.a>
					)}

					{secondaryShow && (
						<motion.a
							href='https://juejin.cn/user/2427311675422382'
							target='_blank'
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='card relative flex items-center gap-2 rounded-xl px-3 py-2.5 font-medium whitespace-nowrap'>
							<JuejinSVG className='h-6 w-6' />
							稀土掘金
						</motion.a>
					)}

					<motion.button
						onClick={() => {
							navigator.clipboard.writeText('yysuni1001@gmail.com').then(() => {
								toast.success('邮箱已复制到剪贴板')
							})
						}}
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='card btn relative rounded-xl p-1.5'>
						<EmailSVG />
					</motion.button>
				</div>
			</motion.div>
		)
	return null
}
