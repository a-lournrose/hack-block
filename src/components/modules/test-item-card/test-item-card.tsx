import React from 'react';

interface IQuestion {
  title: string;
  isRight: boolean;
}

interface ITestItemCard {
  title: string;
  description: string;
  imageSrc?: string;
  questions: IQuestion[];
}

const TestItemCard = () => {
  return (
    <div>

    </div>
  );
};

export default TestItemCard;