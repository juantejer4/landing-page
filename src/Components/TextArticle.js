import React from 'react';

function TextArticle({ title, text, additionalTitleClasses, additionalTextClasses, additionalDivClasses }) {
  const titleClasses = `font-bold text-4xl ${additionalTitleClasses}`;
  const textClasses = `font-light text-lg ${additionalTextClasses} text-texty-gray`;
  const divClasses = `flex flex-col gap-8 ${additionalDivClasses} pb-20`;

  return (
    <div className={divClasses}>
      <div className={titleClasses}>{title}</div>
      <hr className='w-11 border border-black rounded-md'/>
      <div className={textClasses}>{text}</div>
    </div>
  );
};

export { TextArticle };
