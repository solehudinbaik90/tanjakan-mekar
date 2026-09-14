const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://tanjakan-mekar.vercel.app";
const CSRF_INPUT_SELECTOR = 'input[name="csrf_tokentanjakanmekar"]';

function getCsrfToken() {
  return document.querySelector(CSRF_INPUT_SELECTOR)?.value ?? "";
}

function setCsrfToken(token) {
  const input = document.querySelector(CSRF_INPUT_SELECTOR);
  if (input && token) input.value = token;
}

export async function fetchPenawaran() {
  try {
    const res = await fetch(`${API_BASE_URL}/home/penawaran22`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ csrf_tokentanjakanmekar: getCsrfToken() }),
    });

    if (!res.ok) return null;

    const json = await res.json();
    setCsrfToken(json.csrf_tokentanjakanmekar);

    if (!json.data) return null;

    return { judul: "Penawaran Khusus", konten: json.data };
  } catch (error) {
    console.error("Gagal memuat penawaran:", error);
    return null;
  }
}
