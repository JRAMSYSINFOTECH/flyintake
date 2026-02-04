import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import PrepareToDepartCnt from './Prepare_to_depart/PrepareToDepartCnt';
import Preparetodeparthero from './Prepare_to_depart/Preparetodeparthero';
import Preparetodepartvid from './Prepare_to_depart/Preparetodepartvid';

const PrepareToDepartPage = () => {
    return (
        <>
            {/* <StudyAbroadHero
                title="Preparing to depart"
                subtitle="We're here to help set you up for your study abroad adventure"
                    imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                imageAlt="Student packing a suitcase"
            /> */}
            <PrepareToDepartCnt />
            
            <Preparetodepartvid />  
        </>
    );
};

export default PrepareToDepartPage;