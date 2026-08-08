"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("bella-admin", process.env.ADMIN_PASSWORD!, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("bella-admin");
}

export async function answerQuestion(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const answer = String(formData.get("answer") ?? "").trim();

  if (!id || !answer) return;

  await supabase
    .from("questions")
    .update({ answer, answered_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/ask");
}
