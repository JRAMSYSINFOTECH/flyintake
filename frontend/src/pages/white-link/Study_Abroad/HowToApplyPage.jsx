import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import Howdoaplyvid from './how_do_i_apply/howdoaplyvid';
import Howdoapplycnt from './how_do_i_apply/Howdoapplycnt';

const HowToApplyPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="How to apply to universities abroad"
                subtitle="INTAKE can support you through the application process"
                imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                imageAlt="Girl studying with open book"
            />
            <Howdoaplyvid />
            <Howdoapplycnt />
        </>
    );
};

export default HowToApplyPage;