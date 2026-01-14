import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Events from './Events';
import EventRegistration from './EventRegistration';
import EnglishProgramPage from './EnglishProgramPage';

const BlackLinkRoutes = () => {
  return (
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/event-registration" element={<EventRegistration />} />
      <Route path="/english-programs/:programId" element={<EnglishProgramPage />} />
    </Routes>
  );
};

export default BlackLinkRoutes;
