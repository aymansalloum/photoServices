import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import {Card} from '../components/Card'
import {VideoComponent} from '../components/VideoComponent'
import { PhotoGrid } from '../components/PhotoGrid';

export default function Home() {
    return(
        <React.Fragment>           
            <HomeCarousel/>
            <Card/>
            <PhotoGrid/>
            <VideoComponent/>
        </React.Fragment>
    );
}

