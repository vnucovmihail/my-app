"use client";
import * as React from 'react';
import { 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TerminalIcon from '@mui/icons-material/Terminal';
import AnimatedTitle from '../UI/animatedTitle';

export default function RequirementsAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    mb: 1,
    '&:before': { display: 'none' },
    '&.Mui-expanded': { 
      border: '1px solid #1976d2',
      boxShadow: '0 0 15px rgba(25, 118, 210, 0.2)' 
    },
  };

  const headerStyle = {
    fontWeight: 800,
    color: '#42a5f5',
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  return (
    <Box sx={{ mt: 15, maxWidth: '900px', mx: 'auto' }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <AnimatedTitle text="MODDING" />
        <br />
        <Typography variant="caption" sx={{ color: '#1976d2', letterSpacing: '3px', fontWeight: 'bold' }}>
          CORE MODS REQUIREMENTS // DATABASE_v1.0.4
        </Typography>
      </Box>

      {}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <CodeIcon /> 1. IDE & Environments
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            Your primary workspace for writing and debugging code.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText 
                primary="Visual Studio 2022 / JetBrains Rider" 
                secondary="Industry standards for C# development. Rider is faster for decompiled code analysis."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="VS Code" 
                secondary="Lightweight editor, perfect for XML tweaking with 'XML Language Support' extension."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <VisibilityIcon /> 2. Decompilers (The Eyes)
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            Tools to reverse-engineer RimWorld's core logic hidden in Assembly-CSharp.dll.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText 
                primary="dnSpy / dnSpyEx" 
                secondary="Crucial for reading and live-debugging game methods. Allows you to see exactly how Vanilla works."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="ILSpy" 
                secondary="A solid alternative for quick assembly structure browsing."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <TerminalIcon /> 3. Essential Frameworks
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            The glue that connects your mod to the game engine.
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText 
                primary="Harmony Library" 
                secondary="The 'Holy Grail'. Allows you to patch game methods without overwriting core files."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary=".NET Framework 4.7.2 / 4.8" 
                secondary="Required targeting pack for compiling RimWorld C# assemblies. Or a linux replacement like `mono` package"
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <BuildIcon /> 4. Assets & Management
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <List dense>
            <ListItem>
              <ListItemText 
                primary="RimPy" 
                secondary="Essential mod manager to check XML errors and sort load orders."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Graphics Editor" 
                secondary="Photoshop, GIMP or Paint.NET. Supports .png with transparency for textures. You can use Inkscape, its good linux replacement instead of Illustrator"
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <TerminalIcon /> 5. Mod Directory Structure
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            The internal architecture of your mod. Case sensitivity matters!
          </Typography>
          
          <Box sx={{ 
            bgcolor: 'rgba(0,0,0,0.5)', 
            p: 2, 
            borderRadius: 1, 
            fontFamily: 'monospace', 
            fontSize: '0.85rem',
            border: '1px dashed rgba(255,255,255,0.2)',
            color: '#81c784'
          }}>
            <div>YourModName/</div>
            <div>├── About/ <Box component="span" sx={{color: 'rgba(255,255,255,0.4)'}}>— Metadata (Manifest, Preview.png)</Box></div>
            <div>├── Assemblies/ <Box component="span" sx={{color: 'rgba(255,255,255,0.4)'}}>— Compiled C# .dll files</Box></div>
            <div>├── Defs/ <Box component="span" sx={{color: 'rgba(255,255,255,0.4)'}}>— XML data (Items, Pawns, etc.)</Box></div>
            <div>├── Patches/ <Box component="span" sx={{color: 'rgba(255,255,255,0.4)'}}>— XML PatchOperations</Box></div>
            <div>├── Textures/ <Box component="span" sx={{color: 'rgba(255,255,255,0.4)'}}>— Your .png assets</Box></div>
            <div>└── Sounds/ <Box component="span" sx={{color: 'rgba(255,255,255,0.4)'}}>— .wav and .ogg files</Box></div>
          </Box>

          <List dense sx={{ mt: 2 }}>
            <ListItem>
              <ListItemText 
                primary="About/" 
                secondary="The only mandatory folder. Contains About.xml (mod name, author, description) and Preview.png (the image seen in the mod menu)."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Assemblies/" 
                secondary="If your mod has logic (C#), your compiled .dll goes here. RimWorld loads these automatically on startup."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Defs/" 
                secondary="Where the 'objects' live. If you want to add a new 'Laser Sword', its XML stats go here."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Patches/" 
                secondary="Used to modify existing Vanilla data without overwriting it (e.g., making Muffalos explode when hit)."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <BuildIcon /> 6. Case Study: Creating a Machete
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          
          <Typography variant="subtitle1" sx={{ color: '#42a5f5', mb: 1, fontWeight: 'bold' }}>
            Step 1: About.xml (Manifest)
          </Typography>
          <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: 1, mb: 3, border: '1px solid rgba(255,255,255,0.1)' }}>
            <pre style={{ margin: 0, color: '#ce9178', fontSize: '0.8rem', overflowX: 'auto' }}>
              {`<?xml version="1.0" encoding="utf-8"?>
              <ModMetaData>
                <packageId>AuthorName.MacheteExample</packageId>
                <name>Example Machete Mod</name>
                <author>YourName</author>
                <supportedVersions>
                  <li>1.5</li>
                </supportedVersions>
                <description>A simple melee weapon example.</description>
              </ModMetaData>`}
            </pre>
          </Box>

          <Typography variant="subtitle1" sx={{ color: '#42a5f5', mb: 1, fontWeight: 'bold' }}>
            Step 2: XML Breakdown (ThingDef)
          </Typography>
          
          <Box sx={{ overflowX: 'auto', mb: 3 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(25, 118, 210, 0.2)' }}>
                  <th style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>XML Tag</th>
                  <th style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#9cdcfe' }}>{`<defName>`}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>Internal ID. Must be globally unique (use prefixes).</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#9cdcfe' }}>{`<label>`}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>In-game name (lowercase recommended).</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#9cdcfe' }}>{`<graphicData>`}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>Defines texture path and shader (e.g., CutoutComplex for masks).</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#9cdcfe' }}>{`<statBases>`}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>Base stats: Mass, Work to Make, Market Value.</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#9cdcfe' }}>{`<equippedStatOffsets>`}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>Passive bonuses while holding the item (e.g., +10% Plant Work Speed).</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#9cdcfe' }}>{`<tools>`}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>Attack types: Point (Stab), Edge (Cut), Handle (Blunt).</td>
                </tr>
              </tbody>
            </table>
          </Box>

          <Typography variant="subtitle1" sx={{ color: '#42a5f5', mb: 1, fontWeight: 'bold' }}>
            Step 3: Complete ThingDef Code
          </Typography>
          <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
            <pre style={{ margin: 0, color: '#dcdccc', fontSize: '0.8rem', overflowX: 'auto' }}>
              {`<?xml version="1.0" encoding="utf-8" ?>
              <Defs>
                <ThingDef ParentName="BaseMeleeWeapon_Sharp_Quality">
                  <defName>ExampleMeleeWeapon_Machete</defName>
                  <label>machete</label>
                  <description>A broad blade for cutting vegetation or combat.</description>
                  <graphicData>
                    <texPath>ExampleMod/ExampleWeapon_Machete</texPath>
                    <graphicClass>Graphic_Single</graphicClass>
                    <shaderType>CutoutComplex</shaderType>
                  </graphicData>
                  <equippedStatOffsets>
                    <PlantWorkSpeed>0.10</PlantWorkSpeed>
                  </equippedStatOffsets>
                  <costStuffCount>40</costStuffCount>
                  <statBases>
                    <WorkToMake>10000</WorkToMake>
                    <Mass>0.75</Mass>
                  </statBases>
                  </ThingDef>
              </Defs>`}
            </pre>
          </Box>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <TerminalIcon /> 7. Advanced: Ranged Weapon Protocol
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
            Creating a ranged weapon is a multi-step process. You must define the <strong>Gun</strong>, the <strong>Projectile</strong>, the <strong>Damage Type</strong>, and <strong>Sound Effects</strong>.
          </Typography>

          {}
          <Typography variant="subtitle2" sx={{ color: '#81c784', mb: 1, fontFamily: 'monospace' }}>
            [REQUIRED_FILES_LOG]
          </Typography>
          <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: 1, mb: 3, border: '1px dashed rgba(255,255,255,0.2)', fontFamily: 'monospace', fontSize: '0.8rem' }}>
            <div>Defs/ThingDefs/ExampleWeapons_Ranged.xml <span style={{color: '#42a5f5'}}>// Weapon & Bullet</span></div>
            <div>Defs/DamageDefs/ExampleDamage_Ranged.xml <span style={{color: '#42a5f5'}}>// Custom Saw Damage</span></div>
            <div>Defs/SoundDefs/ExampleSounds_Ranged.xml <span style={{color: '#42a5f5'}}>// SFX Config</span></div>
          </Box>

          {}
          <Box sx={{ overflowX: 'auto', mb: 3 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(25, 118, 210, 0.3)' }}>
                  <th style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>Component</th>
                  <th style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>XML Key Logic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', fontWeight: 'bold', color: '#42a5f5' }}>Weapon (Gun)</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Uses <code>&lt;verbs&gt;</code> to link the <code>&lt;defaultProjectile&gt;</code>. We added <code>&lt;ConstructionSpeed&gt;</code> 10% as a utility bonus.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', fontWeight: 'bold', color: '#42a5f5' }}>Projectile</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Defines <code>&lt;speed&gt;</code> (55) and <code>&lt;damageAmountBase&gt;</code> (25). It points to our custom <code>DamageDef</code>.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', fontWeight: 'bold', color: '#42a5f5' }}>DamageDef</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Inherits from <code>Arrow</code>. Overrides <code>&lt;deathMessage&gt;</code> to specifically say the pawn was "sliced to death".
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)', fontWeight: 'bold', color: '#42a5f5' }}>SoundDef</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Uses <code>&lt;context&gt;MapOnly&lt;/context&gt;</code>. Randomizes <code>&lt;pitchRange&gt;</code> so every shot sounds slightly different.
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>

          <Typography variant="subtitle1" sx={{ color: '#42a5f5', mb: 1, fontWeight: 'bold' }}>
            Critical Configuration: The Verb System
          </Typography>
          <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
            <pre style={{ margin: 0, color: '#dcdccc', fontSize: '0.8rem', overflowX: 'auto' }}>
              {`<verbs>
                <li>
                  <verbClass>Verb_Shoot</verbClass>
                  <defaultProjectile>ExampleBullet_SawBlade</defaultProjectile> <warmupTime>1.2</warmupTime>
                  <range>12.9</range>
                  <soundCast>ExampleWeapon_SawLauncher</soundCast> <muzzleFlashScale>0</muzzleFlashScale>
                </li>
              </verbs>`}
            </pre>
          </Box>

          <Typography variant="body2" sx={{ mt: 2, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
            Note: The Saw Launcher also includes a "Demolish" tool in the &lt;tools&gt; section, making it effective against buildings.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <TerminalIcon /> 8. C# Injection: Harmony Logic
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            When XML isn't enough, you use <b>Harmony</b> to inject code into Vanilla methods. 
            This allows you to change how the game *behaves*, not just how it *looks*.
          </Typography>
          
          <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
            <Typography sx={{ color: '#81c784', fontSize: '0.8rem', mb: 1, fontFamily: 'monospace' }}>// Example: Making every punch explode</Typography>
            <pre style={{ margin: 0, color: '#dcdccc', fontSize: '0.8rem', overflowX: 'auto' }}>
              {`[HarmonyPatch(typeof(Pawn_MeleeTracker), "TryMeleeAttack")]
              public static class MyExplosivePunchPatch {
                  [HarmonyPostfix]
                  static void Postfix(Pawn ___pawn, Thing target) {
                      if (target is Pawn victim) {
                          GenExplosion.DoExplosion(victim.Position, ___pawn.Map, 1.9f, 
                              DamageDefOf.Bomb, ___pawn);
                      }
                  }
              }`}
            </pre>
          </Box>
          <List dense sx={{ mt: 1 }}>
            <ListItem>
              <ListItemText 
                primary="Prefix" 
                secondary="Runs BEFORE the original method. Can skip the original code by returning 'false'."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Postfix" 
                secondary="Runs AFTER. Best for modifying results or adding extra effects safely."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Transpiler" 
                secondary="The most advanced tool. Modifies the IL (Intermediate Language) code directly. Hard to write, but very powerful."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <VisibilityIcon /> 9. Localization (Languages)
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            Never hardcode text! Use the <b>Languages</b> folder so people can translate your mod.
          </Typography>
          <Box sx={{ 
            bgcolor: 'rgba(0,0,0,0.5)', 
            p: 2, 
            borderRadius: 1, 
            fontFamily: 'monospace', 
            fontSize: '0.85rem',
            color: '#ce9178'
          }}>
            <div>Languages/</div>
            <div>├── English/</div>
            <div>│   ├── Keyed/ <Box component="span" sx={{color: '#42a5f5'}}>— UI Text (Keys)</Box></div>
            <div>│   └── DefInjected/ <Box component="span" sx={{color: '#42a5f5'}}>— Labels & Descriptions</Box></div>
            <div>└── Russian/</div>
            <div>    └── ...</div>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, color: 'rgba(255,255,255,0.6)' }}>
            Example DefInjected path: <code style={{color: '#81c784'}}>Languages/Russian/DefInjected/ThingDef/Machete.xml</code>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {}
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography sx={headerStyle}>
            <BuildIcon /> 10. Modding Performance (TPS)
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" sx={{ mb: 2, color: '#ff7043', fontWeight: 'bold' }}>
            Warning: Inefficient code can destroy game speed (Ticks Per Second).
          </Typography>
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 2 }} />
          <List dense>
            <ListItem>
              <ListItemText 
                primary="Avoid 'Find.ClosestThing' in Ticks" 
                secondary="Searching the whole map 60 times per second is expensive. Cache the result or run it every 250 ticks (TickRare)."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Use XML Inheritance" 
                secondary="Use 'Abstract' Defs to avoid repeating code. It makes your XML cleaner and faster to load."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="DDS Textures" 
                secondary="For large texture packs, use .dds format with 'Graphics Settings+' mod for lightning-fast loading and less VRAM usage."
                slotProps={{ secondary: {sx: { color: 'rgba(255,255,255,0.5)' }}  }}
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}