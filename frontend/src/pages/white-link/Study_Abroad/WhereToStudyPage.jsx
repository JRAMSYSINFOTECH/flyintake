import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import WhereToStudyCnt from './Where_to_study_abroad/WhereToStudyCnt';

const WhereToStudyPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Where and what to study?"
                subtitle="Find the perfect country, university and course with our expert guidance."
                  imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                imageAlt="Globe with graduation cap"
            />
            <WhereToStudyCnt />
        </>
    );
};

export default WhereToStudyPage;