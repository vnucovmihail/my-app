"use client";
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AnimatedTitle from '../UI/animatedTitle';
import { styled } from '@mui/material/styles';

const FaqAccordion = styled(Accordion)({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  marginBottom: '10px',
  transition: 'all 0.3s ease',
  '&:before': { display: 'none' },
  '&:hover': {
    borderColor: 'rgba(25, 118, 210, 0.4)',
    backgroundColor: 'rgba(25, 118, 210, 0.05)',
  },
  '&.Mui-expanded': {
    margin: '0 0 10px 0',
    border: '1px solid #1976d2',
    boxShadow: '0 0 20px rgba(25, 118, 210, 0.15)',
  },
});

const QuestionText = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  letterSpacing: '0.5px',
});

const AnswerText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.7,
  paddingLeft: '36px',
});

const faqs = [
  {
    q: "Why is my mod showing red errors in the log?",
    a: "In RimWorld, red means 'Critical Failure'. This usually happens due to XML syntax errors, missing defNames, or load order conflicts. Check your Assemblies version and ensure all ParentNames exist."
  },
  {
    q: "Do I need to restart the game to see XML changes?",
    a: "Yes. RimWorld loads all Defs into memory during the startup splash screen. For C# changes, you must recompile your .dll and restart the game."
  },
  {
    q: "Can I use multiple versions of Harmony?",
    a: "No. You should only have one Harmony file in your mod, or better yet, depend on the 'Brrainz.LibHarmony' workshop mod. Multiple versions often lead to 'Method not found' exceptions."
  },
  {
    q: "How do I find the internal name (defName) of a vanilla item?",
    a: "Use a decompiler like dnSpy on 'Assembly-CSharp.dll' or browse the game's Data folder. Most weapon defs are located in 'Data/Core/Defs/ThingDefs_Misc'."
  },
  {
    q: "Is it safe to add mods to an existing save?",
    a: "Usually yes for simple items (XML). However, removing mods or adding mods that change world generation (factions, biomes) will likely corrupt your save file."
  },
  {
    q: "Why should I use [StaticConstructorOnStartup] in my C# code?",
    a: "This attribute ensures your static constructor runs after all Defs are loaded. It is essential if your code needs to reference vanilla Defs or apply Harmony patches as soon as the game starts."
  },
  {
    q: "How do I fix 'Texture has mipmaps' warnings in the log?",
    a: "RimWorld prefers UI icons and some textures without mipmaps. Ensure your .png files are saved correctly, or use a 'Graphic_Single' class in XML to handle simple textures without extra overhead."
  },
  {
    q: "What is the 'LongEventHandler' and when should I use it?",
    a: "Use it for heavy operations (like generating a massive map or complex math) to prevent the game UI from freezing. It shows a 'Loading...' progress bar to the user."
  },
  {
    q: "Can I change a Pawn's stats (like moving speed) dynamically?",
    a: "Yes, usually via 'Hediffs' (health diffs) or 'PawnCapacities'. Adding an invisible Hediff to a pawn is the cleanest way to buff or debuff them through code or XML."
  },
  {
    q: "What does 'Graphic_Multi' do compared to 'Graphic_Single'?",
    a: "Graphic_Multi looks for suffixes like _front, _back, and _side. Use this for items or buildings that should look different depending on which way they are facing."
  },
  {
    q: "Why is 'BaseContent.BadGraphic' appearing in my game?",
    a: "This is the 'magenta square' of RimWorld. It means the game found your Def but failed to load the texture at the specified <texPath>. Check for typos or incorrect folder structures."
  },
  {
    q: "How do I make a building provide light or heat?",
    a: "Add a <compClass>CompGlower</compClass> for light or <compClass>CompHeatPusher</compClass> for temperature. You must also define the corresponding <comps> data in your XML."
  },
  {
    q: "What is the best way to ensure my mod is 'CE Compatible'?",
    a: "Combat Extended (CE) requires specific patches for weapons and armor. Most modders create a separate 'Patches' folder named 'CombatExtended' to house these compatibility layers."
  },
  {
    q: "How can I find out which mod is causing a specific error?",
    a: "Use the 'BetterLog' mod or read the stack trace. The trace often mentions the 'Namespace' of the mod that injected the failing method via Harmony."
  },
  {
    q: "Is it possible to save custom data in a save file?",
    a: "Yes. Your class must implement 'IExposable' and use the 'Scribe' system. Inside the 'ExposeData()' method, use Scribe_Values or Scribe_Deep to save and load your variables."
  }
];

export default function FAQPage() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <AnimatedTitle text="KNOWLEDGE_BASE" />
        <br />
        <Typography variant="caption" sx={{ color: '#1976d2', letterSpacing: '3px', fontWeight: 'bold' }}>
          FREQUENTLY ASKED QUESTIONS // DATABASE_v1.0.4
        </Typography>
      </Box>

      <Box>
        {faqs.map((item, index) => (
          <FaqAccordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1976d2' }} />}>
              <QuestionText>
                <HelpOutlineIcon sx={{ color: '#1976d2', fontSize: '1.2rem' }} />
                {item.q}
              </QuestionText>
            </AccordionSummary>
            <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', pt: 2 }}>
              <AnswerText>
                {item.a}
              </AnswerText>
            </AccordionDetails>
          </FaqAccordion>
        ))}
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center', opacity: 0.4 }}>
        <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
          END OF ARCHIVE // NO MORE ENTRIES FOUND
        </Typography>
      </Box>
    </Container>
  );
}