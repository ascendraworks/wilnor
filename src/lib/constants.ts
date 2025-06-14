export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/promotion', label: 'Promotion' },
  { href: '/biodata', label: 'Biodata' },
  { href: '/logistics', label: 'Logistics & Other Services' },
  { href: '/quiz', label: 'Quiz' },
];

// Add other constants here as needed
// export const SITE_TITLE = "Wilnor & Lovett's Employment";