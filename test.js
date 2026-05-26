import fs from 'node:fs';
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import 'dotenv/config';

async function main() {
  const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
  });
  const response = await client.textToSpeech.convert(
    "21m00Tcm4TlvDq8ikWAM",
    {text: "This is a test for the API of ElevenLabs."}
  );
  const chunks = [];
  for await (const chunk of response) {
    chunks.push(chunk);
  }
  fs.writeFileSync('output.mp3', Buffer.concat(chunks));
  console.log('Saved output.mp3');
}
main();
