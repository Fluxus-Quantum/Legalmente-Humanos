import { useState } from 'react';

interface AvatarImageProps {
  src: string;
  alt: string;
  initials: string;
  className: string;
  fallbackClassName?: string;
}

export function AvatarImage({
  src,
  alt,
  initials,
  className,
  fallbackClassName = 'bg-dark-surface-card text-apple-green border-apple-green/40',
}: AvatarImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} ${fallbackClassName} flex items-center justify-center font-headline font-extrabold text-sm select-none shrink-0`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
