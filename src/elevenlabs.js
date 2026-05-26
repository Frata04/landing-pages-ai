import 'dotenv/config';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
import fs from 'fs';
import path from 'path';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export async function generateVoiceover(text, options = {}) {
  const {
    voiceId = 'JBFqnCBsd6RMkjVDRZzb', // George - voce professionale
    modelId = 'eleven_multilingual_v2',
    outputPath = null,
  } = options;

  const audioStream = await client.textToSpeech.convert(voiceId, {
    text,
    model_id: modelId,
    output_format: 'mp3_44100_128',
  });

  const chunks = [];
  for await (const chunk of audioStream) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);

  if (outputPath) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, buffer);
    console.log(`Audio salvato: ${outputPath}`);
  }

  return buffer;
}

export async function listVoices() {
  const { voices } = await client.voices.getAll();
  return voices.map((v) => ({ id: v.voice_id, name: v.name, category: v.category }));
}
