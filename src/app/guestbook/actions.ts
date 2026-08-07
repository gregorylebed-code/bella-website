"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function postMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message) return;

  await supabase.from("messages").insert({ name, message });
  revalidatePath("/guestbook");
}

export async function signUpEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();

  if (!email) return;

  await supabase.from("email_signups").insert({ email });
  revalidatePath("/guestbook");
}
