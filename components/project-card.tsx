import React from 'react';
import { Badge } from './ui/badge';
import { Icons } from './icons';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ComponentType<any>;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) => {
  return (
    <div className={cn(
      "flex flex-col overflow-hidden border rounded-xl hover:shadow-lg transition-all duration-300 ease-out h-full bg-white dark:bg-zinc-900 dark:border-zinc-800",
      className
    )}>
      <a href={href || "#"} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && !video && (
          <img
            src={image}
            alt={title}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </a>
      <div className="flex flex-col px-2 py-2 sm:px-4 sm:py-4 flex-grow">
        <div className="mb-2 flex-1">
            <h3 className="font-semibold text-base dark:text-white tracking-tight">{title}</h3>
            <time className="text-[10px] text-muted-foreground font-sans">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground mt-2 mb-4 dark:prose-invert">
              {description}
            </p>
        </div>
        
        <div className="mt-auto flex flex-col gap-2 sm:gap-3">
            {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                <Badge
                    className="px-1 py-0 text-[10px] print:px-0 print:py-0 print:leading-tight print:border-0"
                    variant="secondary"
                    key={tag}
                >
                    {tag}
                </Badge>
                ))}
            </div>
            )}
            
            {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-2">
                {links.map((linkItem, idx) => (
                <a href={linkItem.href} key={idx} target="_blank" rel="noopener noreferrer">
                    <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    <linkItem.icon className="h-3 w-3" />
                    {linkItem.type}
                    </Badge>
                </a>
                ))}
            </div>
            )}
        </div>
      </div>
    </div>
  );
}