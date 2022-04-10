import React, { useState } from 'react';

import HeaderHeroCanvas from '@/components/HeaderHeroCanvas';

function HeaderHero() {
  const [color, setColor] = useState(205);

  const colors = [
    { code: 205, hex: '#0077CC', classname: 'bg-[#0077CC]' },
    { code: 176, hex: '#00bfb3', classname: 'bg-[#00bfb3]' },
    { code: 333, hex: '#ef4d96', classname: 'bg-[#ef4d96]' },
    { code: 45, hex: '#ffc415', classname: 'bg-[#ffc415]' },
    { code: 4, hex: '#ffc415', classname: 'bg-[#bd281e]' },
  ];

  const titleStyle = {
    backgroundImage:
      'radial-gradient(133.33% 350.15% at 60.89% -5.21%, #00BFB3 0%, #0077CC 30%, #000 50%)',
  };

  return (
    <div className="h-[calc(100vh_-_48px)]">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <HeaderHeroCanvas color={color} />
      </div>
      <div className="block xl:(hidden)">
        <div className="absolute container mx-auto h-full px-8 lg:(px-2)">
          <div className="flex flex-col justify-center h-full md:(items-center text-center)">
            <div className="text-xl">
              <div>Hi, I&apos;m</div>
              <h1 className="font-black text-6xl tracking-[-4px] mt-12px">
                <span
                  className="text-transparent bg-clip-text"
                  style={titleStyle}
                >
                  RENDIRIZ
                </span>
              </h1>
              <div className="mt-12px font-normal text-gray-700 md:(font-bold)">
                <p>
                  I&apos;m business intelligence engineer with interest in
                  modern web development.
                </p>
                <p className="mt-6px">
                  I write code, think about data, and create digital
                  experiences.
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-36px">
              {colors.map(({ code, classname }) => (
                <div
                  key={code}
                  className={`w-20px h-20px m-1 hover:(transform scale-y-150) ${classname}`}
                  onClick={() => setColor(code)}
                  aria-hidden="true"
                  role="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:(block)">
        <div className="absolute top-0 right-0 bottom-0 left-0 my-30vh mx-13em px-2">
          <div className="flex items-center justify-between h-full">
            <div className="text-2xl">
              <div>Hi, I&apos;m</div>
              <h1 className="font-black text-8xl tracking-[-7px] mt-24px mr-[-5px]">
                <span
                  className="text-transparent bg-clip-text"
                  style={titleStyle}
                >
                  RENDIRIZ
                </span>
              </h1>
              <div className="mt-24px font-bold text-gray-700">
                <p>
                  I&apos;m business intelligence engineer with interest in
                  modern web development.
                </p>
                <p className="mt-6px">
                  I write code, think about data, and create digital
                  experiences.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              {colors.map(({ code, classname }) => (
                <div
                  key={code}
                  className={`w-20px h-20px m-1 hover:(transform scale-x-150) ${classname}`}
                  onClick={() => setColor(code)}
                  aria-hidden="true"
                  role="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderHero;
