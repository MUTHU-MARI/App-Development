import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Wish = () => {
    
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/wishlist" className="btn btn-outline-primary ms-2">
                <span className="fa fa-regular fa-heart"></span> Wishlist ({state?.length})
            </NavLink>
        </>
    )
}

export default Wish