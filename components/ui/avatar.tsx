import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function Avatar({ src, alt, fallback, className = "" }: AvatarProps) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      <img
        className="aspect-square h-full w-full object-cover"
        src={src}
        alt={alt}
        onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.removeAttribute('hidden');
        }}
      />
      <div 
        hidden
        className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground"
      >
        {fallback}
      </div>
    </div>
  );
}
