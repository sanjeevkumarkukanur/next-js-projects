export default function PortfolioPage() {
  const projects = [
    { id: '1', name: 'Project Alpha', description: 'A cutting-edge web app.' },
    { id: '2', name: 'Project Beta', description: 'Mobile app redesign.' },
  ];

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
