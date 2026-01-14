import React from 'react';
import StudyAbroadHero from './StudyAbroadHero';
import WhereToStudyCnt from './Where_to_study_abroad/WhereToStudyCnt';

const WhereToStudyPage = () => {
    return (
        <>
            <StudyAbroadHero
                title="Where and what to study?"
                subtitle="Choosing the ideal destination and academic program is a pivotal step in your study abroad journey. This decision profoundly impacts your educational experience, career trajectory, and personal growth. When considering 'where to study,' factors such as academic reputation, cultural immersion, post-study work opportunities, and living costs come into play. Similarly, 'what to study' should align with your passions, career aspirations, and the global demand for specific skills. Thorough research into diverse course offerings, university specializations, and regional industries is essential. Engaging with experienced education counselors can provide invaluable insights, helping you navigate the complexities of international education systems and make an informed choice that sets the foundation for a successful global career."
                  imageUrl="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                imageAlt="Globe with graduation cap"
            />
            <WhereToStudyCnt />
        </>
    );
};

export default WhereToStudyPage;