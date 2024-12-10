import Downloads from './sections/Downloads'
import Faq from './sections/Faq'
import Features from './sections/Features'
import Header from './sections/header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'

function App() {
	return (
		<main className='overflow-hidden'>
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Testimonials />
			<Downloads />
		</main>
	)
}

export default App
