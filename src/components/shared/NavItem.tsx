interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="duration-300 ease-linear font-medium py-3 px-4 rounded-lg bg-transparent hover:bg-primary/20"
      >
        {text}
      </a>
    </li>
  );
};
