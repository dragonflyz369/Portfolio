import Projects from "../../assets/projects.json"

export async function getAll() {
  return Projects;
}

export async function getById(id: number) {

  return new Response(JSON.stringify(id), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}