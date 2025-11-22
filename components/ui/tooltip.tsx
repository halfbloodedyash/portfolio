import React, { useState, useContext, createContext } from 'react';
import { cn } from '../../lib/utils';

const TooltipContext = createContext<{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export const Tooltip = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <TooltipContext.Provider value={{ open, setOpen }}>
            <div className="relative flex items-center justify-center">
                {children}
            </div>
        </TooltipContext.Provider>
    );
};

export const TooltipTrigger = ({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) => {
    const context = useContext(TooltipContext);
    if (!context) throw new Error("TooltipTrigger must be used within a Tooltip");

    const child = (asChild ? React.Children.only(children) : children) as React.ReactElement<any>;

    return React.cloneElement(child, {
        onMouseEnter: () => context.setOpen(true),
        onMouseLeave: () => context.setOpen(false),
        // Preserve existing focus handlers if needed, but simple version here:
        onFocus: () => context.setOpen(true),
        onBlur: () => context.setOpen(false),
    });
};

export const TooltipContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const context = useContext(TooltipContext);
    if (!context || !context.open) return null;

    return (
        <div className={cn(
            "absolute -top-12 px-2 py-1 text-xs font-medium text-white bg-black rounded shadow-sm animate-in fade-in zoom-in-95 duration-200 dark:bg-white dark:text-black whitespace-nowrap z-50 pointer-events-none",
            className
        )}>
            {children}
        </div>
    );
};