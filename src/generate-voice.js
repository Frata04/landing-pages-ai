import { generateVoiceover, listVoices } from './elevenlabs.js';

// Esempio: genera un voiceover per una landing page
const testo = `
  Scopri il prodotto che ha già cambiato la vita di migliaia di persone.
  Qualità premium, spedizione gratuita, soddisfatti o rimborsati.
  Ordina ora e ricevi il tuo pacco in 24 ore.
`;

console.log('Recupero voci disponibili...');
const voci = await listVoices();
console.log('Voci:', voci.slice(0, 5));

console.log('\nGenerazione voiceover...');
await generateVoiceover(testo.trim(), {
  outputPath: 'output/landing-voiceover.mp3',
});
