import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Dessain Poster dan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dassar" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Reno Wahyu saputa"
        tagline="Siswa Kelas XI RPL 1 Pelajar dari SMKN 1 Pasuruan,Calon junior Web Deeloper di Kelas Industri UBIG."
      />
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Keahlian
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>
    </main>
  );
}
