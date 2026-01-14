import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import AfterOfferVid from './AfterOffe/AfterOffervid';
import AfterOfferCnt from './AfterOffe/AfterOfferCnt';

const AfterOfferPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="After receiving an offer"
                subtitle="Here are the steps to take from accepting an offer through to planning for your trip to make your study abroad dream a reality"
                  imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=4"
                imageAlt="Student holding an offer letter"
            />
            <AfterOfferVid />
            <AfterOfferCnt />
        </>
    );
};

export default AfterOfferPage;