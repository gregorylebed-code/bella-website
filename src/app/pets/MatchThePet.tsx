"use client";

import { useMemo, useState } from "react";

type Pet = {
  name: string;
  photo: string;
  quote: string;
};

type Card = {
  id: string;
  petName: string;
  type: "photo" | "quote";
  content: string;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(pets: Pet[]): Card[] {
  const cards: Card[] = [];
  for (const pet of pets) {
    cards.push({ id: `${pet.name}-photo`, petName: pet.name, type: "photo", content: pet.photo });
    cards.push({ id: `${pet.name}-quote`, petName: pet.name, type: "quote", content: pet.quote });
  }
  return shuffle(cards);
}

export default function MatchThePet({ pets }: { pets: Pet[] }) {
  const [deck, setDeck] = useState<Card[]>(() => buildDeck(pets));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [busy, setBusy] = useState(false);

  const gameKey = useMemo(() => JSON.stringify(pets.map((p) => p.name)), [pets]);

  function reset() {
    setDeck(buildDeck(pets));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setBusy(false);
  }

  function handleFlip(card: Card) {
    if (busy || matched.has(card.petName + card.type) || flipped.includes(card.id)) return;
    if (flipped.length === 0) {
      setFlipped([card.id]);
      return;
    }
    if (flipped.length === 1) {
      const firstCard = deck.find((c) => c.id === flipped[0])!;
      const newFlipped = [...flipped, card.id];
      setFlipped(newFlipped);
      setMoves((m) => m + 1);
      setBusy(true);
      if (firstCard.petName === card.petName) {
        setTimeout(() => {
          setMatched((prev) => {
            const next = new Set(prev);
            next.add(firstCard.petName + firstCard.type);
            next.add(card.petName + card.type);
            return next;
          });
          setFlipped([]);
          setBusy(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 900);
      }
    }
  }

  const allMatched = matched.size === deck.length;

  return (
    <div className="card p-6 mt-10" key={gameKey}>
      <h3 className="heading-font text-xl font-bold mb-2 text-center">🧠 Match the Pet</h3>
      <p className="text-center text-foreground/70 text-sm mb-4">
        Flip two cards to match each pet with their quote! Moves: {moves}
      </p>

      {allMatched && (
        <p className="text-center heading-font font-bold text-green-600 mb-3">
          You matched them all in {moves} moves! 🎉
        </p>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-4">
        {deck.map((card) => {
          const isMatched = matched.has(card.petName + card.type);
          const isFlipped = flipped.includes(card.id) || isMatched;
          return (
            <button
              key={card.id}
              onClick={() => handleFlip(card)}
              className={`aspect-square rounded-xl shadow-md flex items-center justify-center p-2 text-center transition-colors ${
                isMatched
                  ? "bg-green-200"
                  : isFlipped
                    ? "bg-white"
                    : "bg-purple-300 hover:bg-purple-400"
              }`}
            >
              {isFlipped ? (
                card.type === "photo" ? (
                  <img
                    src={card.content}
                    alt={card.petName}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-[10px] sm:text-xs italic leading-tight">
                    &ldquo;{card.content}&rdquo;
                  </span>
                )
              ) : (
                <span className="text-2xl">🐾</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <button
          onClick={reset}
          className="heading-font text-sm font-bold px-4 py-2 rounded-full bg-pink-500 text-white shadow-md hover:scale-105 transition-transform"
        >
          🔄 Play Again
        </button>
      </div>
    </div>
  );
}
