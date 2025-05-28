export async function GET(request) {
  return new Response(JSON.stringify({ message: "أهلاً يا نجم!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
