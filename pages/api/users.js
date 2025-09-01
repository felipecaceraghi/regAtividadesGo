import { supabase } from "../../lib/supabaseClient";

async function users(request, response) {
  const { email } = request.query;
  let query = supabase.from("users").select("*");
  if (email) {
    query = query.eq("email", email);
  }
  const { data, error } = await query;
  if (error) {
    return response.status(500).json({ error: error.message });
  }
  // Remove o campo password e formata a resposta
  const users = data.map(({ password, ...user }) => user);
  response.status(200).json({ users, count: users.length });
}

export default users;
