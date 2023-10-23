import React from 'react';

function DotIcon({color, className}) {
  return (
    <div className={`text-2xl ${color} ${className}`}>•</div>
  )
}

export { DotIcon };
