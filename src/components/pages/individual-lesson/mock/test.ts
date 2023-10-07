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
    imageSrc:
      'https://sun9-66.userapi.com/impg/HbUEbhaM3eeOUl_VVL1K6ZkDJoAIl8aQokKCvw/ikXMIgpf-qw.jpg?size=650x500&quality=96&sign=075fd003ab9aa904b99b4ade2f696666&type=album',
    title:
      'Определите по карте расстояние на местности по прямой от родника до дома лесника. Измерение проводите между центрами условных знаков. Полученный результат округлите до десятков метров. Выберите вариант ответа.',
    answers: [
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: '310',
      },
      {
        id: 2,
        questionId: 0,
        isRight: true,
        title: '200',
      },
      {
        id: 3,
        questionId: 0,
        isRight: false,
        title: '150',
      },
      {
        id: 4,
        questionId: 0,
        isRight: false,
        title: '320',
      },
    ],
  },
  {
    id: 3,
    testId: 0,
    title: 'Как называется наиболее крупный океан на Земле?',
    answers: [
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: 'Атлантический океан.',
      },
      {
        id: 2,
        questionId: 0,
        isRight: false,
        title: 'Индийский океан.',
      },
      {
        id: 3,
        questionId: 0,
        isRight: false,
        title: 'Северно-ледовитый океан.',
      },
      {
        id: 4,
        questionId: 0,
        isRight: true,
        title: 'Тихий океан.',
      },
    ],
  },
  {
    id: 4,
    testId: 0,
    title: 'Какое государство является самым крупным по площади в мире?',
    answers: [
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: 'США',
      },
      {
        id: 2,
        questionId: 0,
        isRight: false,
        title: 'Германия',
      },
      {
        id: 3,
        questionId: 0,
        isRight: false,
        title: 'Канада',
      },
      {
        id: 4,
        questionId: 0,
        isRight: true,
        title: 'Российская Федерация.',
      },
    ],
  },
  {
    id: 5,
    testId: 0,
    title: 'Какие государства входят в Южную Америку?',
    answers: [
      {
        id: 1,
        questionId: 0,
        isRight: false,
        title: 'Аргентина, Боливия, Бразилия',
      },
      {
        id: 2,
        questionId: 0,
        isRight: false,
        title: 'Германия, Швеция, Швейцария',
      },
      {
        id: 3,
        questionId: 0,
        isRight: false,
        title: 'Австралия, Япония и Индия',
      },
      {
        id: 4,
        questionId: 0,
        isRight: true,
        title: 'США, Канада, Мексика',
      },
    ],
  },
];
