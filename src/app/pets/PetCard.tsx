type Pet = {
  name: string;
  type: string;
  photo: string;
  traits: string[];
  likes: string[];
  dislikes: string[];
};

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
