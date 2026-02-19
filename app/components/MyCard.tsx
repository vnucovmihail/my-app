"use client";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';

export default function SimpleAudioCard() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Card sx={{ display: 'flex', width: 400 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://i.scdn.co/image/ab67616d00001e02866c1bcea643b112bc697b9f"
        alt="Album cover"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5">My september</Typography>
        <Typography variant="subtitle1" color="text.secondary">Nastyona</Typography>
        <Button onClick={handlePlayPause} variant="contained" sx={{ mt: 2 }}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <audio ref={audioRef} src="/audio/Nastyona - My september.mp3" />
      </CardContent>
    </Card>
  );
}