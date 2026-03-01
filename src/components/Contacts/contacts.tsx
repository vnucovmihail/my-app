"use client";
import { Box, Container, Typography, Stack, Link, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AnimatedTitle from '../UI/animatedTitle';


const TerminalCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(25, 118, 210, 0.3)',
  borderRadius: '12px',
  padding: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.9), inset 0 0 20px rgba(25, 118, 210, 0.05)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #1976d2, transparent)',
  }
}));

const ContactLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid transparent',
  '&:hover': {
    color: '#42a5f5',
    background: 'rgba(25, 118, 210, 0.1)',
    borderColor: 'rgba(25, 118, 210, 0.4)',
    transform: 'translateX(10px)',
    boxShadow: '0 0 15px rgba(25, 118, 210, 0.1)',
  }
});

export default function ContactsPage() {
  return (
    <Box sx={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      py: 10 
    }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
                <AnimatedTitle text="CONTACTS_L" />
                <br />
                <Typography variant="caption" sx={{ color: '#1976d2', letterSpacing: '3px', fontWeight: 'bold' }}>
                  FREQUENTLY ASKED CONTACT LINKS // DATABASE_v1.0.4
                </Typography>
              </Box>

        <TerminalCard elevation={0}>
          <Typography variant="h6" sx={{ color: '#42a5f5', mb: 2, fontFamily: 'monospace', fontWeight: 'bold' }}>
            {">"} SENDER_INFO:
          </Typography>
          
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, lineHeight: 1.6 }}>
            If you have questions regarding mod architecture, bug reports, or colony management protocols, establish a connection through the secured channels below.
          </Typography>

          <Stack spacing={2}>
            <ContactLink href="mailto:myemail+website@gmail.com">
              <EmailIcon />
              <Box>
                <Typography sx={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Direct Frequency</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>your-email@example.com</Typography>
              </Box>
            </ContactLink>

            <ContactLink href="https://t.me/myTelegramId" target="_blank">
              <TelegramIcon />
              <Box>
                <Typography sx={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Instant Uplink</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>@yourusername</Typography>
              </Box>
            </ContactLink>

            <ContactLink href="https://github.com/MyGithubId" target="_blank">
              <GitHubIcon />
              <Box>
                <Typography sx={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Source Repository</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>github.com/logic-of-the-rim</Typography>
              </Box>
            </ContactLink>
          </Stack>

          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
              ENCRYPTION: AES-256 // STATUS: ONLINE
            </Typography>
          </Box>
        </TerminalCard>
      </Container>
    </Box>
  );
}