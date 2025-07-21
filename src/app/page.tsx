import Hero from "@/components/Hero";

export const metadata = {
  title: "About",
  description: "Learn more about Osaro and his experience as a developer.",
};

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 flex flex-col justify-center items-center px-4">
      <Hero />
    </main>
  );
}
