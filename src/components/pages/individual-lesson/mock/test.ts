import { QuestionDto } from '@components/modules/examination-constructor/mock/types';

const questions: (QuestionDto & { topTitle?: string })[] = [
  {
    id: 1,
    title:
      'Назовите, какой материк представляет собой древнюю Африкано-Аравийскую платформу',
    testId: 0,
    answers: [
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: 'Южная Америка',
      },
      {
        id: 2,
        questionId: 0,
        isRight: false,
        title: 'Евразия',
      },
      {
        id: 3,
        questionId: 0,
        isRight: false,
        title: 'Австралия',
      },
      {
        id: 4,
        questionId: 0,
        isRight: true,
        title: 'Африка',
      },
    ],
  },
  {
    id: 2,
    testId: 0,
    title: '',
    answers: [
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: '',
      },
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: '',
      },
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: '',
      },
    ],
  },
];
