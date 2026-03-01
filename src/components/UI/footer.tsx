"use client"
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          gap: 1 
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            © {new Date().getFullYear()} Logic of the Rim
          </Typography>
          
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.4)',
              textAlign: 'center' 
            }}
          >
            Mastering the inner workings of RimWorld. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}