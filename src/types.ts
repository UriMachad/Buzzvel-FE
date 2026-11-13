export interface Category { title: string; description: string; href: string }
export interface Step { title: string; description: string; bg: string; dot: string }
export interface Stat { value: string; label: string }
export interface NavLink { label: string; href: string }
export interface FooterColumn { heading: string; links: NavLink[] }
export interface Person { id: number; alt: string; tint: string }
