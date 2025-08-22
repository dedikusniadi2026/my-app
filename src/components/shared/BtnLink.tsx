interface BtnLinkProps {
 href: string;
 text: string;
 className?: string;   
} 

export const BtnLink = ({href, text, className=""}:BtnLinkProps) => {
    return (
<a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden 
                  border border-gray-700 dark:border-gray-300 
                  cursor-pointer transition-colors duration-300 ${className}`}
    >
      <span className="relative z-10 text-black dark:text-white">
        {text}
      </span>
    </a>

    );
};