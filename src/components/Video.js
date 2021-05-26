import React from 'react';

const Video = () => {

    // const videos = ['https://res.cloudinary.com/doihe1pi6/video/upload/v1621987492/pexels-yan-5479181_oqbeby.mp4', 'https://res.cloudinary.com/doihe1pi6/video/upload/v1621987479/pexels-ron-lach-6805953_il8apb.mp4', 'https://res.cloudinary.com/doihe1pi6/video/upload/v1621987475/pexels-artem-podrez-7234011_mdxhvh.mp4', 'https://res.cloudinary.com/doihe1pi6/video/upload/v1621987445/pexels-anna-tarazevich-7332203_q8fape.mp4']

    // const homepageVideo = () => {
    //     let randomVideo = Math.floor(Math.random() * videos.length)
    //     console.log(videos[randomVideo])
    //     return videos[randomVideo]
    // }

    // homepageVideo()
    return (
        <div>
            <div class="video-container">
            <p class="welcome-to-farmony"> Welcome to Farmony</p>
                <video class="homepageVideo" loop autoPlay muted>
                    <source
                        src='https://res.cloudinary.com/doihe1pi6/video/upload/v1621991670/production_ID_5085490_scuccu.mp4'
                        type="video/mp4">
                    </source>
                </video>
            </div>
        </div >
    );
}

export default Video;

