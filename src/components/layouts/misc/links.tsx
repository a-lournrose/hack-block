import { FiHome } from 'react-icons/fi';
import React, { ReactNode } from 'react';
import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';
import { ImStatsDots } from 'react-icons/im';

interface ISidebarLink {
  route: string;
  label: string;
  icon: ReactNode;
  isPrivate?: boolean;
}
export const sidebarLinks: ISidebarLink[] = [
  {
    route: RoutePaths[RouteKeys.HOME],
    label: 'Программы обучения',
    icon: <FiHome size={24} />,
  },
  {
    route: RoutePaths[RouteKeys.GRADE],
    label: 'Успеваемость',
    icon: <ImStatsDots size={24} />,
  }
];
