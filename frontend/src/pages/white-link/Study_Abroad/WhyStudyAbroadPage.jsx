import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import StdyAbVid from './WhyStudyAbrd/StdyAbVid';
import StdyAbcnt from './WhyStudyAbrd/StdyAbcnt';

const WhyStudyAbroadPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Why Study Abroad"
                subtitle="Learn how studying abroad opens a world of opportunities"
                imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                imageAlt="Girl studying with open book"
            />
            <StdyAbVid />
            <StdyAbcnt />
        </>
    );
};

export default WhyStudyAbroadPage;