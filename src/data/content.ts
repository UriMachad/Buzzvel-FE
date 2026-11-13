import type { Category, Step, Stat, NavLink, FooterColumn, Person } from "@/types";
export const navLinks: NavLink[] = [
  { label: "Courses", href: "#courses" }, { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#people" }, { label: "About", href: "#people" },
];
export const categories: Category[] = [
  { title: "Product Design", description: "Turn complex problems into clear, useful experiences.", href: "#" },
  { title: "Technology", description: "Build a stronger understanding of the tools shaping digital products.", href: "#" },
  { title: "Business", description: "Develop practical skills for better decisions and stronger teams.", href: "#" },
  { title: "Creative", description: "Explore new ways to communicate, create and tell stories.", href: "#" },
];
export const steps: Step[] = [
  { title: "Choose your focus", description: "Find courses based on the skill you want to build, not endless content categories.", bg: "bg-mist", dot: "bg-brand" },
  { title: "Learn from experience", description: "Follow concise lessons created by professionals who use these skills.", bg: "bg-peach", dot: "bg-orange-500" },
  { title: "Put it into practice", description: "Every course includes practical exercises designed to turn knowledge into action.", bg: "bg-sun", dot: "bg-amber-400" },
];
export const stats: Stat[] = [
  { value: "24K+", label: "active learners" }, { value: "120+", label: "expert-led courses" }, { value: "92%", label: "complete their first course" },
];
const tints = ["#9aa7c9", "#c5a27a", "#6e7f9a", "#d6a1a1", "#8aa68c", "#b9a9d4", "#7e8fa8", "#d9c08a", "#92a9b8", "#b88a7a"];
export const people: Person[] = tints.map((tint, i) => ({ id: i + 1, tint, alt: `Student or teacher from the Luma community, photo ${i + 1}` }));
export const courseMeta = ["8 lessons", "2h 40min", "Intermediate"];
export const footerColumns: FooterColumn[] = [
  { heading: "Explore", links: ["Courses", "Categories", "Instructors", "For Teams"].map((label) => ({ label, href: "#" })) },
  { heading: "Company", links: ["About", "Careers", "Journal"].map((label) => ({ label, href: "#" })) },
  { heading: "Support", links: ["Help Center", "Contact", "Terms", "Privacy"].map((label) => ({ label, href: "#" })) },
];
