import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import ArriveAndThriveCnt from './Arrive_and_thrive/ArriveAndThriveCnt';

const ArriveAndThrivePage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Arrive and thrive"
                subtitle="Settle into your new home with our arrival support services."
                                imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                imageAlt="Students in a new city"
            />
            <ArriveAndThriveCnt />
        </>
    );
};

export default ArriveAndThrivePage;