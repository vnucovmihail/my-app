"use client";
import { Typography, keyframes, styled, Box } from '@mui/material';

const scanline = keyframes`
  0% { top: -10%; opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { top: 110%; opacity: 0; }
`;

const TitleWrapper = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  padding: '10px 0',
});

const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '3.75rem',
  color: '#fff',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  position: 'relative',
  textShadow: '0 0 10px rgba(25, 118, 210, 0.3)',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '2px',
    background: '#fff',
    zIndex: 2,
    boxShadow: '0 0 15px 4px rgba(25, 118, 210, 0.8)',
    animation: `${scanline} 4s linear infinite`,
  },

  '&::before': {
    content: 'attr(data-text)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
    backgroundSize: '100% 4px, 3px 100%',
    pointerEvents: 'none',
  }
}));

export default function DystopiaTitle({ text }: { text: string }) {
  return (
    <TitleWrapper>
      <StyledText variant="h2" data-text={text}>
        {text}
      </StyledText>
      
      {}
      <Box sx={{ 
        width: '100%', 
        height: '2px', 
        bgcolor: 'rgba(25, 118, 210, 0.5)', 
        mt: 0.5,
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            width: '30%',
            height: '4px',
            bgcolor: '#1976d2',
            top: -1
        }
      }} />
    </TitleWrapper>
  );
}