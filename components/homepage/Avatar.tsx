import { clsx } from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from '@/components/Image';

import ProfileCardInfo from '@/components/homepage/ProfileInfo';

const Avatar = () => {
  const ref = useRef(null);

  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return;

    const { clientX, clientY } = e;
    const { width, height, x, y } = ref.current.getBoundingClientRect();
    const mouseX = Math.abs(clientX - x);
    const mouseY = Math.abs(clientY - y);
    const rotateMin = -15;
    const rotateMax = 15;
    const rotateRange = rotateMax - rotateMin;

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  }, []);

  useEffect(() => {
    const { current } = ref;

    if (!current) return;

    current.addEventListener('mousemove', onMouseMove);
    current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (!current) return;

      current.removeEventListener('mousemove', onMouseMove);
      current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]"
      style={{ perspective: '600px' }}
      ref={ref}
    >
      <div
        style={style}
        className={clsx(
          'flex flex-col overflow-hidden transition-all duration-200 ease-out xl:rounded-lg',
          'bg-white shadow-demure dark:bg-dark dark:shadow-mondegreen',
          'outline outline-1 outline-gray-100 dark:outline-gray-600'
        )}
      >
        <Image
          src={'/static/images/avatar.jpg'}
          alt="avatar"
          width={550}
          height={350}
          style={{
            objectPosition: '50% 16%',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '17/11',
          }}
          priority
        />
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-teal-300 via-teal-500 to-teal-600"></span>
      </div>
    </div>
  );
};

export default Avatar;
