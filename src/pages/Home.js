import React from 'react';
import react from 'react'
import HomeCarousel from '../components/HomeCarousel';
import {Card} from '../Card'
import {VideoComponent} from '../VideoComponent'

export default function Home() {
    return(
        <React.Fragment>           
            <HomeCarousel/>
            <Card/>
            <VideoComponent/>
        </React.Fragment>
    );
}

