import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} My App. Built with{" "}
          <Link href="https://mui.com" target="_blank" underline="hover">
            Material UI
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}