"use client";

import { useState, useTransition } from "react";
import { deleteMessage } from "./actions";

export default function DeleteMessageButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const [debug, setDebug] = useState<string | null>(null);

  function handleClick() {
    setDebug("tap registered…");
    const formData = new FormData();
    formData.set("id", id);

    startTransition(async () => {
      setDebug((d) => `${d}\nrequest sent…`);
      try {
        await deleteMessage(formData);
        setDebug((d) => `${d}\nserver action resolved OK`);
        setTimeout(() => setDebug(null), 4000);
      } catch (err) {
        setDebug((d) => `${d}\nERROR: ${err instanceof Error ? err.message : String(err)}`);
      }
    });
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
        className="heading-font shrink-0 px-4 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-md hover:scale-105 transition-transform disabled:opacity-50"
      >
        {isPending ? "Deleting…" : "Delete"}
      </button>
      {debug && (
        <pre className="text-[10px] leading-tight bg-black text-lime-400 p-2 rounded whitespace-pre-wrap max-w-[200px] text-left">
          {debug}
        </pre>
      )}
    </div>
  );
}
