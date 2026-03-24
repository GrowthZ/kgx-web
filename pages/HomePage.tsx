import React from 'react';
import SEO from '../src/components/SEO';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import DesignServices from '../components/DesignServices';
import ConstructionServices from '../components/ConstructionServices';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
    return (
        <>
            <SEO title="KGX - Không Gian Xanh" />
            <Hero />
            <TrustBar />
            <DesignServices />
            <ConstructionServices />
            <Process />
            <Portfolio />
            <FAQ />
            <Contact />
        </>
    );
};

export default HomePage;
