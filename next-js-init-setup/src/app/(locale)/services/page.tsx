export default function ServicesPage() {
  const services = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design'];

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc pl-6 space-y-2">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </main>
  );
}
