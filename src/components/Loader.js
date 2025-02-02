import React from 'react'
import Spinner from '../images/loader.gif';
const Loader = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src={Spinner} style={{ width: "33px" }} alt="" />
        </div>
    )
}

export default Loader
