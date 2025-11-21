import SimpleCard from '@/components/simple-card'

export const styles = {
	width: 360,
	height: 288,
	order: 1
}

function getGreeting() {
	const hour = new Date().getHours()

	if (hour >= 6 && hour < 12) {
		return 'Good Morning'
	} else if (hour >= 12 && hour < 18) {
		return 'Good Afternoon'
	} else if (hour >= 18 && hour < 22) {
		return 'Good Evening'
	} else {
		return 'Good Night'
	}
}

export default function HiCard() {
	const greeting = getGreeting()

	return (
		<SimpleCard
			order={styles.order}
			className='text-center p-6'>
			<img src='/images/avatar.png' className='mx-auto rounded-full' style={{ width: 120, height: 120, boxShadow: ' 0 16px 32px -5px #E2D9CE' }} />
			<h1 className='font-averia mt-3 text-2xl'>
				{greeting} <br /> I'm <span className='text-linear text-[32px]'>xiaozhou</span> , Nice to <br /> meet you!
			</h1>
		</SimpleCard>
	)
}
