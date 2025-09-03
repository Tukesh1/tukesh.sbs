"use client"
import React from "react";

export function Typewriter({ phrases, className }: { phrases: string[]; className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, phrases]);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className}>
      {phrases[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}