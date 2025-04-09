// File: src/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1
        className="text-4xl md:text-6xl font-bold glitch"
        data-text="Aryan Raj Joshi"
      >
        Aryan Raj Joshi
      </h1>
      <p className="mt-4 text-lg md:text-2xl max-w-xl">
        I build fast, think deep, and bring digital quests to life. Swift, C++, fullstack & beyond.
      </p>
    </section>
  );
}
