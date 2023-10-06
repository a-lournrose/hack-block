import { RouteProps } from 'react-router-dom';
import { Role } from '@lib/api/models';
import { ReactNode } from 'react';
import { RouteKeys } from '@lib/constants';
import { WritePage } from '@components/pages/write';
import { HomePage } from '@components/pages/home/home-page';
import { LatestPage } from '@components/pages/latest';
import { CoursePage } from '@components/pages/course/course-page';
import { ThemePage } from '@components/pages/theme/theme-page';
import { GradePage } from '@components/pages/grade';
import GradeIdPage from '@components/pages/grade/grade-id-page';
import { MapPage } from '@/components/pages/map-page';
import { DrawPage } from '@components/pages/draw/draw-page';
import { LessonPage } from '@components/pages/lesson';

export type RoutePropsType = RouteProps & {
  isPrivate: boolean;
  requiredRole?: Role;
  Layout?: ReactNode;
};

export const RoutePaths = {
  [RouteKeys.HOME]: '/',
  [RouteKeys.SUBSCRIPTIONS]: '/subscriptions',
  [RouteKeys.LATEST]: '/latest',
  [RouteKeys.COMPANY]: '/company',
  [RouteKeys.COMPANY_ID]: '/company/:id',
  [RouteKeys.VACANCY]: '/vacancy',
  [RouteKeys.VACANCY_ID]: '/vacancy/:id',
  [RouteKeys.USER]: '/user',
  [RouteKeys.USER_ID]: '/user/:id',
  [RouteKeys.ARTICLE_ID]: '/article/:id',
  [RouteKeys.WRITE]: '/write',
  [RouteKeys.MAP]: '/map',
  [RouteKeys.COURSE_ID]: '/course/:id',
  [RouteKeys.THEME_ID]: '/theme/:id',
  [RouteKeys.LESSON_ID]: '/lesson/:id',
  [RouteKeys.AUTH]: '/auth',
  [RouteKeys.AUTH_TEACHER]: '/auth/teacher',
  [RouteKeys.GRADE]: '/grade',
  [RouteKeys.GRADE_ID]: '/grade/:id',
  [RouteKeys.DRAW]: '/draw',
};

export const routerConfig: RoutePropsType[] = [
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.HOME],
    element: <HomePage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.MAP],
    element: <MapPage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.DRAW],
    element: <DrawPage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.COURSE_ID],
    element: <CoursePage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.THEME_ID],
    element: <ThemePage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.LESSON_ID],
    element: <LessonPage/>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.GRADE],
    element: <GradePage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.GRADE_ID],
    element: <GradeIdPage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.SUBSCRIPTIONS],
    element: <div>SUBSCRIPTIONS</div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.LATEST],
    element: <LatestPage />,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.COMPANY],
    element: <div>COMPANY</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.COMPANY_ID],
    element: <div>COMPANY_ID</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.VACANCY],
    element: <div>VACANCY</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.VACANCY_ID],
    element: <div>VACANCY_ID</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.USER_ID],
    element: <div>USER_ID</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.ARTICLE_ID],
    element: <div>PUBLICATION_ID</div>,
  },
  {
    isPrivate: true,
    path: RoutePaths[RouteKeys.WRITE],
    element: <WritePage />,
  },
];

