import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {

    return (
        
            <nav>
                
                <Link exact to = '/'>
                    <h3>
                        GameKeeper    
                    </h3>    
                </Link>

                <div>
                    <NavLink exact to = '/boardgames' activeClassName='active-header'>
                        All Games
                    </NavLink>

                    <NavLink exact to = '/reservations' activeClassName='active-header'>
                        Reservations
                    </NavLink>

                    <NavLink exact to = '/donate' activeClassName='active-header'>
                        Donate
                    </NavLink>
                </div>

            </nav>
        
    )
}

export default NavBar