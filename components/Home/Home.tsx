import React from 'react'
import Hero from './Hero';
import OurServices from './OurServices';
import GetSold from './GetSold';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Hero />
            <OurServices />
            <div className="mt-8 md:mt-12">
                <GetSold />
            </div>
            <div className="bg-base-300">
                <Carousel />
            </div>
            <Contact />
            <Footer />
        </div>

    )
}

export default Home