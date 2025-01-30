"use server";

export async function handleRegister(
  prevState: { success: boolean | null } | null,
  formData: FormData
): Promise<{ success: boolean }> {
  const email = formData.get("email");

  if (email) {
    const response = await fetch(
      "https://n8n.isgrow.in/webhook/95ddd0f9-0071-44a9-92c5-6245f6fec207",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      return { success: true };
    }
  }

  return { success: false };
}
