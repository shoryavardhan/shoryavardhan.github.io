import React from 'react';
import { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

// export default class Navbar extends Component {
//     render() {
//         return (
//             <div className='Shorya'>
//                 <ul>

//                     <li>S<span className="dot">.</span></li>
//                     <li><FontAwesomeIcon icon={faUser} /></li>
//                     <li><FontAwesomeIcon icon={faChartBar} /></li>
//                     <li><FontAwesomeIcon icon={faBriefcase} /></li>
//                     <li><FontAwesomeIcon icon={faLightbulb} /></li>
//                     <li><FontAwesomeIcon icon={faPhoneAlt} /></li>
//                 </ul>
//             </div>
//         )
//     }
// }

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm    px-sm-5">
                <ul>

                    <li>S<span className="dot">.</span></li>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                    <li><FontAwesomeIcon icon={faChartBar} /></li>
                    <li><FontAwesomeIcon icon={faBriefcase} /></li>
                    <li><FontAwesomeIcon icon={faLightbulb} /></li>
                    <li><FontAwesomeIcon icon={faPhoneAlt} /></li>
                </ul>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--b);
.nav-link{
    color:var(--a);
    font-size:1.3rem;
    text-transform:capitalize;
    z-index:99999;
}
`;