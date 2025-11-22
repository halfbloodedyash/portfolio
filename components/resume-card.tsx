import React from 'react';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';
import { Icons } from './icons';

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="block cursor-pointer">
      <div className="flex gap-4">
        <a href={href || "#"} className="flex-none">
          <Avatar src={logoUrl} alt={altText} fallback={altText[0]} className="size-12 bg-muted-background dark:bg-foreground object-contain" />
        </a>
        <div className="flex-grow flex flex-col group">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              <a href={href || "#"} className="hover:underline">
                {title}
              </a>
              {description && (
                <span 
                  className="cursor-pointer" 
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-label="Expand description"
                >
                    <Icons.ChevronRight className={`size-4 translate-x-0 transform opacity-50 duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                </span>
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs font-medium">{subtitle}</div>}
          
          {description && (
            <div className={`mt-2 text-xs sm:text-sm text-muted-foreground transition-all duration-300 ease-out ${isExpanded ? 'block opacity-100' : 'hidden opacity-0'}`}>
              {description}
            </div>
          )}
          
           {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="text-[10px] px-1 py-0 h-5">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};