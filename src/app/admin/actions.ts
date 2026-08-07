"use server";

import { cookies } from "next/headers";

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
