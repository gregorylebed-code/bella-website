type Pet = {
  name: string;
  type: string;
  photo: string;
  traits: string[];
  likes: string[];
  dislikes: string[];
  quote?: string;
  zoomies?: number;
  cuddliness?: number;
  foodMotivation?: number;
};

const rainbowGradient =
  "linear-gradient(90deg, #ff5c5c, #ff9f43, #ffd93d, #6bcB77, #4d96ff, #9b5de5)";

function StatBar({ label, value }: { label: string; value: number }) {
  const percent = Math.max(0, Math.min(100, (value / 10) * 100));
  return (
    <div className="w-full text-left">
      <div className="flex justify-between text-xs font-bold text-foreground/70 mb-1">
        <span>{label}</span>
        <span>{value}/10</span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-white/70 shadow-inner overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, background: rainbowGradient }}
        />
      </div>
    </div>
  );
}

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="card p-6 flex flex-col items-center text-center gap-3">
      {pet.photo ? (
        <img
          src={pet.photo}
          alt={pet.name}
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-white/70 shadow-md flex items-center justify-center text-5xl">
          🐾
        </div>
      )}
      <h3 className="heading-font text-xl font-bold">{pet.name}</h3>
      <p className="text-sm text-foreground/60 font-medium">{pet.type}</p>
      {pet.quote && (
        <p className="italic text-sm text-foreground/80">"{pet.quote}"</p>
      )}
      {pet.traits.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {pet.traits.map((trait) => (
            <span
              key={trait}
              className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700"
            >
              {trait}
            </span>
          ))}
        </div>
      )}
      {(pet.zoomies !== undefined ||
        pet.cuddliness !== undefined ||
        pet.foodMotivation !== undefined) && (
        <div className="w-full flex flex-col gap-2 mt-1">
          {pet.zoomies !== undefined && <StatBar label="Zoomies Meter" value={pet.zoomies} />}
          {pet.cuddliness !== undefined && (
            <StatBar label="Cuddliness" value={pet.cuddliness} />
          )}
          {pet.foodMotivation !== undefined && (
            <StatBar label="Food Motivation" value={pet.foodMotivation} />
          )}
        </div>
      )}
      <div className="w-full text-left text-sm mt-2">
        {pet.likes.length > 0 && (
          <p className="font-bold text-green-700">
            Likes: <span className="font-medium text-foreground">{pet.likes.join(", ")}</span>
          </p>
        )}
        {pet.dislikes.length > 0 && (
          <p className="font-bold text-red-500 mt-1">
            Dislikes: <span className="font-medium text-foreground">{pet.dislikes.join(", ")}</span>
          </p>
        )}
      </div>
    </div>
  );
}
