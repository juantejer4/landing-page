import React from 'react';

function TextArticle({ title, text, centerText }) {
  const titleClasses = `font-bold text-4xl ${centerText ? 'text-center' : ''}`;
  const textClasses = `font-light text-lg ${centerText ? 'px-auto lg:px-32 text-center' : ''} text-texty-gray`;
  const divClasses = `flex flex-col gap-8 ${centerText ? 'items-center' : ''} pb-20`;

  return (
    <div className={divClasses}>
      <div className={titleClasses}>{title}</div>
      <hr className='w-11 border border-black rounded-md'/>
      <div className={textClasses}>{text}</div>
    </div>
  );
};

export { TextArticle };
