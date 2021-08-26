interface INavItem {
  path: string;
  name: string;
}

export const navItems = [
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/orders',
    name: 'Orders',
  },
  {
    path: '/customers',
    name: 'Customers',
  },
  {
    path: '/z-report',
    name: 'Z-Report',
  },
  {
    path: '/settings',
    name: 'Settings',
  },
];

export const getPathName = (
  path: string
): { status: boolean; data?: INavItem } => {
  const result = navItems.find((item) => item.path === path);
  return result && result.name
    ? { status: true, data: result }
    : { status: false };
};
