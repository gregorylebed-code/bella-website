export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="card p-8 text-center text-foreground/60 font-medium">
      {text}
    </div>
  );
}
