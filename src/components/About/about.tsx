"use client";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import AnimatedTitle from '../UI/animatedTitle';

export default function AboutUsHideAppBar() {
  return (
    <Box sx={{ mb: 6, mt: 30 }}>
        <AnimatedTitle text='RimWorld' />
        <Stack spacing={5} sx={{ mt: 4, textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
                RimWorld is a sci-fi construction and management simulation game developed and produced by the independent Canadian studio Ludeon Studios. The game was in early access in 2013 and was released on October 17, 2018.
            </Typography>
            
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
                The game takes place on an unknown habitable planet. The goal is to build a colony within the given conditions and survive long enough to build a ship and escape, thus completing the game. The game features a deep simulation, a variety of slot mechanics, procedural world and story generation, and technological advancements. RimWorld supports modifications.
            </Typography>
        </Stack>

        <Stack spacing={3} sx={{ mt: 6, textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            Mastering the inner workings of RimWorld. From basic XML tweaks to advanced C# injection, 
            we bridge the gap between creative ideas and functional code.
            </Typography>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            At <strong>Logic of the Rim</strong>, we don't just scratch the surface. We dive deep into the 
            game's core to empower the modding community. Whether you are looking to define new 
            items via <strong>XML defs</strong> or implement complex behaviors through <strong>C# scripts</strong>, 
            our guides cover the entire development lifecycle.
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            Our specialty lies in <strong>Technical Deep Dives</strong>: we decompile and analyze the 
            game's <code>Assembly-CSharp.dll</code> to understand the underlying logic. We teach you how to 
            use <strong>Harmony patches</strong> to hook into methods, decipher obfuscated code, and 
            reverse-engineer game mechanics to build seamless, stable, and high-performance modifications.
            </Typography>  
        </Stack>

        {}
        <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {['XML Definitions', 'C# Scripting', 'Decompiling DLLs', 'Harmony Patches', 'Reverse Engineering'].map((tag) => (
            <Box 
                key={tag}
                sx={{ 
                px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'action.selected', 
                fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                color: 'primary.main', border: '1px solid', borderColor: 'primary.light'
                }}
            >
                {tag}
            </Box>
            ))}
        </Box>

        {}
        <Typography 
            variant="h4" 
            sx={{ 
                mt: 6, mb: 2, fontWeight: 700, color: '#fff',
                textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
            }}
        >
            Coding for Compatibility
        </Typography>

        <Stack spacing={3} sx={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000', color: '#fff' }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                In the world of 200+ mod lists, <strong>stability is king</strong>. We focus on teaching 
                modern modding standards: using <strong>Harmony Transpilers</strong> instead of destructive 
                prefixes, managing performance-heavy <code>Tick()</code> methods, and ensuring your 
                C# logic doesn't break other mods. Our goal is to make your mod as lightweight as the vanilla game.
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                Beyond just "how-to" guides, we explore the <strong>RimWorld API</strong> to discover hidden 
                classes and methods that aren't documented elsewhere. We believe that understanding 
                <em>why</em> the game works a certain way is the only path to creating truly 
                unique mechanics that feel native to the Rim.
            </Typography>
        </Stack>

        {}
        <Box 
            sx={{ 
                mt: 6, p: 3, borderLeft: '4px solid #1976d2', bgcolor: 'rgba(25, 118, 210, 0.1)',
                textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Join the Rim Modding Revolution
            </Typography>
            <Typography variant="body1">
                Logic of the Rim is an evolving knowledge base. Whether you're a seasoned C# developer 
                or a curious player wanting to change your first XML value, you belong here. 
                Let's build the future of the Rim, one DLL at a time.
            </Typography>
        </Box>

        {}
        <Typography 
            variant="body2" 
            sx={{ 
                mt: 4, textAlign: 'center', opacity: 0.8, fontStyle: 'italic',
                textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' 
            }}  
        >
            "No matter how many mods you install, the logic must remain unbreakable."
        </Typography>

    </Box>
  );
}
