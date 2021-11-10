import React from 'react'

const Marquee = () => {
    const marqueeStyle = {
        listStyle: 'none'
    };

    return (
        <div className='container'>
            <div className="row">
                <ul className='d-flex flex-flow flex-nowrap' style={marqueeStyle}>
                    <li>a </li>
                    <li> b </li>
                    <li>c</li>
                    <li>d</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Marquee
