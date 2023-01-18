import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'

const Home = () => {
    return (
        <div>
            <div className='bg-cover' style={{ backgroundImage: `url(./img/2.jpeg)` }}
            >
                <div className='bg-slate-900 bg-opacity-50' >
                    <Navbar />
                    <Header />
                </div>
            </div>
            <div className='pt-16 flex flex-col'>
                <Featured />
                <PropertyList />
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home