export type NavLink = {
  label: string;
  path?: string;
  pathLabel?: string;
  children?: NavLink[];
};

export const serviceLinks: NavLink[] = [
  {
    label: "Scheduling",
    children: [
      {
        label: "Flexi Scheduling",
        path: "/flexi-scheduling",
        pathLabel: "Flexible Rostering",
        children: [
          { label: "Gig Scheduling", path: "/gig-scheduling" },
          { label: "Shift Preferences", path: "/shift-preferences" },
        ],
      },
      { label: "Leave Application", path: "/leave-application" },
    ],
  },
  { label: "Demand Forecasting", path: "/demand-forecasting" },
  { label: "Profile Management", path: "/profile-management" },
  { label: "Route Optimization", path: "/route-optimization" },
];

export const primaryLinks: { label: string; path: string }[] = [
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];
