import React, { useEffect, useState } from 'react';
import { DATA } from '../data/resume';
import { Icons } from './icons';
import { Dock, DockIcon } from './magicui/dock';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '../lib/utils';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <TooltipProvider>
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 rounded-full bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] dark:bg-black">
            
            <DockIcon>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a 
                            href="#" 
                            aria-label="Home"
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-12 rounded-full"
                            )}
                        >
                            <Icons.Home className="size-4" />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Home</p>
                    </TooltipContent>
                </Tooltip>
            </DockIcon>

            <Separator orientation="vertical" className="h-full py-2" />
            
            {Object.entries(DATA.contact.social).map(([key, social]) => {
                if (!social.navbar) return null;
                const Icon = social.icon;
                return (
                    <DockIcon key={key}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full"
                                    )}
                                >
                                    <Icon className="size-4" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{social.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                )
            })}

            <Separator orientation="vertical" className="h-full py-2" />

            <DockIcon>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button 
                            onClick={toggleTheme} 
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-12 rounded-full"
                            )}
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? (
                                <Icons.Sun className="size-4" />
                            ) : (
                                <Icons.Moon className="size-4" />
                            )}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Theme</p>
                    </TooltipContent>
                </Tooltip>
            </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}