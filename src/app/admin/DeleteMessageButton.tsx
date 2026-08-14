"use client";

import { useTransition } from "react";
import { deleteMessage } from "./actions";

export default function DeleteMessageButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    const formData = new FormData();
    formData.set("id", id);
    startTransition(() => {
      deleteMessage(formData);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className="heading-font shrink-0 px-4 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-md hover:scale-105 transition-transform disabled:opacity-50"
    >
      {isPending ? "Deleting…" : "Delete"}
    </button>
  );
}
