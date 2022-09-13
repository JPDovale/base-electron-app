import React from 'react' ;
import { Link } from 'react-router-dom';

import { HomeContainer } from './style';

export default function Home(){
    return (
        <HomeContainer>
            ola
            <Link to={'/page2'}>GO TO PAGE 2</Link>
        </HomeContainer>
    )
}