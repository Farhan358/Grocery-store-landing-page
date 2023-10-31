import React, { useState, useEffect } from 'react';
import "./Hero.css";


const Hero = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {

        fetch('/data/banner.json')
            .then((res) => res.json())
            .then((data) => setJsonData(data));
    }, []);




    return (
        <>
            <div className="">
                {jsonData.map((data, index) => (
                    <div className='containerstyle'>
                        <div className='sliderstyle'>
                            <div className='arrowstyle left'> ◀ </div>
                            <div className='arrowstyle right'>▶ </div>
                            <div className='slidestyle' key={index} style={{ backgroundImage: `url(${data.image})` }}>
                                <h2 key={index} className='headline'>{data.title}</h2>
                                <p key={index} className='description'>{data.description}</p>
                                <button key={index} className='btn-text'>{data.button.text}</button>

                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </>

    );
}

export default Hero;