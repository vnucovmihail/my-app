'use client';
import { useMemo } from 'react';
import { Box, styled, keyframes } from '@mui/material';

const starAnimation = keyframes`
  0% {
    transform: rotate(315deg) translateX(0) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: rotate(315deg) translateX(-200px) scale(1.2);
  }
  100% {
    transform: rotate(315deg) translateX(-1500px) scale(0);
    opacity: 0;
  }
`;

const StarLine = styled('span')(() => ({
  position: 'absolute',
  height: '1px',
  background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%)',
  filter: 'drop-shadow(0 0 4px #fff)',
  willChange: 'transform, opacity',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '2px',
    height: '2px',
    background: '#fff',
    borderRadius: '50%',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    boxShadow: '0 0 10px 1px #fff',
  }
}));

const FallingStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`, 
      left: `${Math.random() * 100}%`, 
      delay: `${Math.random() * 20}s`,
      duration: `${Math.random() * 4 + 4}s`,
      width: `${Math.random() * 200 + 150}px`,
    }));
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {stars.map((star) => (
        <StarLine
          key={star.id}
          sx={{
            top: star.top,
            left: star.left,
            width: star.width,
            opacity: 0,
            animation: `${starAnimation} ${star.duration} linear infinite`,
            animationDelay: star.delay,
            animationFillMode: 'backwards',
          }}
        />
      ))}
    </Box>
  );
};

export default FallingStars;