"use client";
import React from "react";

interface AccessibleImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  emoji?: never;
}

interface EmojiIconProps {
  emoji: string;
  label: string;
  role?: "img";
  ariaLabel?: string;
}

export function AccessibleImage(props: AccessibleImageProps) {
  return (
    <img
      {...props}
      alt={props.alt}
      style={{
        maxWidth: "100%",
        height: "auto",
        ...props.style,
      }}
    />
  );
}

export function EmojiIcon({
  emoji,
  label,
  role = "img",
  ariaLabel,
}: EmojiIconProps) {
  return (
    <span
      role={role}
      aria-label={ariaLabel || label}
      title={label}
      style={{
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      {emoji}
    </span>
  );
}

export function IconWithAltText({
  emoji,
  alt,
}: {
  emoji: string;
  alt: string;
}) {
  return (
    <span
      role="img"
      aria-label={alt}
      title={alt}
      style={{
        display: "inline-block",
      }}
    >
      {emoji}
    </span>
  );
}
