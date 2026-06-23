"""
Generazione di script VSL (Video Sales Letter) tramite l'API di Claude.

Usa l'SDK ufficiale Anthropic. Richiede la variabile d'ambiente ANTHROPIC_API_KEY.
Il prompt di sistema è caricato da vsl_system_prompt.md (modificabile): puoi
incollarci le istruzioni del tuo progetto Claude esistente.
"""

import os
from pathlib import Path

import anthropic

MODEL = "claude-opus-4-8"
_PROMPT_FILE = Path(__file__).with_name("vsl_system_prompt.md")


def _system_prompt() -> str:
    """Carica il prompt di sistema VSL dal file (con fallback minimo)."""
    try:
        return _PROMPT_FILE.read_text(encoding="utf-8")
    except OSError:
        return "Sei un copywriter esperto in VSL per ecommerce. Scrivi in italiano."


def _client() -> anthropic.Anthropic:
    if not os.environ.get("ANTHROPIC_API_KEY"):
        raise RuntimeError(
            "ANTHROPIC_API_KEY non impostata: serve per generare gli script con Claude."
        )
    return anthropic.Anthropic()


def _ask_claude(user_prompt: str, max_tokens: int = 8000) -> str:
    """Chiama Claude in streaming e restituisce il testo finale."""
    client = _client()
    with client.messages.stream(
        model=MODEL,
        max_tokens=max_tokens,
        thinking={"type": "adaptive"},
        output_config={"effort": "high"},
        system=_system_prompt(),
        messages=[{"role": "user", "content": user_prompt}],
    ) as stream:
        message = stream.get_final_message()
    return "".join(b.text for b in message.content if b.type == "text")


def genera_vsl_script(
    prodotto: str,
    pubblico: str,
    problema: str = "",
    offerta: str = "",
    durata: str = "medio",  # "breve" (~60s), "medio" (~2-3min), "lungo" (~5min+)
    tono: str = "persuasivo",
) -> str:
    """
    Genera uno script VSL completo per un prodotto ecommerce.

    Args:
        prodotto: cosa stai vendendo (es. "crema viso anti-età").
        pubblico: a chi ti rivolgi (es. "donne 35-55 attente alla pelle").
        problema: il problema/dolore principale da agitare (opzionale).
        offerta: dettagli dell'offerta, bonus, garanzia, prezzo (opzionale).
        durata: "breve", "medio" o "lungo".
        tono: stile desiderato (es. "persuasivo", "amichevole", "diretto").
    """
    prompt = (
        f"Scrivi uno script VSL in italiano.\n"
        f"- Prodotto: {prodotto}\n"
        f"- Pubblico: {pubblico}\n"
        f"- Problema principale: {problema or 'deducilo dal pubblico e dal prodotto'}\n"
        f"- Offerta: {offerta or 'proponi una struttura d offerta sensata'}\n"
        f"- Durata target: {durata}\n"
        f"- Tono: {tono}\n"
    )
    max_tokens = {"breve": 2000, "medio": 5000, "lungo": 9000}.get(durata, 5000)
    return _ask_claude(prompt, max_tokens=max_tokens)


def genera_hook(prodotto: str, pubblico: str, n: int = 5) -> str:
    """Genera n possibili hook (aperture) per una VSL, numerati."""
    prompt = (
        f"Genera {n} hook diversi e potenti (max 2 frasi ciascuno) per l'apertura "
        f"di una VSL.\nProdotto: {prodotto}\nPubblico: {pubblico}\n"
        f"Restituisci una lista numerata, solo gli hook."
    )
    return _ask_claude(prompt, max_tokens=1500)


def migliora_script(script: str, obiettivo: str = "aumentare le conversioni") -> str:
    """Riscrive/migliora uno script VSL esistente verso un obiettivo."""
    prompt = (
        f"Migliora questo script VSL con l'obiettivo di {obiettivo}. "
        f"Mantieni la lingua italiana e la struttura VSL, poi spiega in 3 punti "
        f"cosa hai cambiato.\n\n--- SCRIPT ---\n{script}"
    )
    return _ask_claude(prompt, max_tokens=6000)
