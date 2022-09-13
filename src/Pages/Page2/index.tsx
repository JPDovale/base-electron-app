import React from 'react' ;
import { Link } from 'react-router-dom';

import { Page2Container } from './style';

export default function Page2(){
    return (
        <Page2Container>
            Page 2
            <Link to={'/'}>GO BACK</Link>
        </Page2Container>
    )
}