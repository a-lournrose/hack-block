import React from 'react';
import FlippingContainer from '@components/shared/flipping-container/flipping-container';
import { LessonContainer } from '@components/shared/lesson-container/lesson-container';

export const LessonTest = () => {
  const contents = [
    <div>Какой то контент 1</div>,
    <div>Какой то контент 2</div>,
    <div>Какой то контент 3</div>,
  ];
  return (
    <LessonContainer>
      <div className="p-8">
        <FlippingContainer contents={contents} />
      </div>
    </LessonContainer>
  );
};
