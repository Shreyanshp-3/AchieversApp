import React from 'react'
import Navbar from './Homepage/Navbar'
import HeroSection from './Homepage/HeroSection'
import AboutSection from './Homepage/AboutSection'
import Whatweoffer from './Homepage/Whatweoffer'
import BookAppointment from './Homepage/BookAppointment'
import ExpertTrainers from './Homepage/ExpertTrainers'
import TestimonialSection from './Homepage/Testimonials'
import UpcomingEvents from './Homepage/UpcomingEvents'
import Footer from './Homepage/Footer'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Whatweoffer />
            <BookAppointment />
            <ExpertTrainers />
            <TestimonialSection />
            <UpcomingEvents />
            <Footer />
        </>)
}

export default Homepage