import SimpleCard from '@/components/simple-card'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { cn } from '@/lib/utils'

dayjs.locale('zh-cn')

export const styles = {
	width: 293,
	height: 160,
	order: 5
}

export default function CalendarCard() {
	const now = dayjs()
	const currentDate = now.date()
	const firstDayOfMonth = now.startOf('month')
	const firstDayWeekday = (firstDayOfMonth.day() + 6) % 7
	const daysInMonth = now.daysInMonth()
	const currentWeekday = (now.day() + 6) % 7

	return (
		<SimpleCard
			order={styles.order}
			className='p-2 h-[160px]'>
			<h3 className='text-secondary text-xs mb-1'>
				{now.format('YYYY/M/D')} {now.format('ddd')}
			</h3>
			<ul className='text-secondary grid h-[120px] grid-cols-7 gap-0.5 text-xs'>
				{new Array(7).fill(0).map((_, index) => {
					const isCurrentWeekday = index === currentWeekday
					return (
						<li key={index} className={cn('flex items-center justify-center font-medium', isCurrentWeekday && 'text-brand')}>
							{dates[index]}
						</li>
					)
				})}

				{new Array(firstDayWeekday).fill(0).map((_, index) => (
					<li key={`empty-${index}`} />
				))}

				{new Array(daysInMonth).fill(0).map((_, index) => {
					const day = index + 1
					const isToday = day === currentDate
					return (
						<li key={day} className={cn('flex items-center justify-center rounded-lg', isToday && 'bg-linear border font-medium')}>
							{day}
						</li>
					)
				})}
			</ul>
		</SimpleCard>
	)
}

const dates = ['一', '二', '三', '四', '五', '六', '日']
