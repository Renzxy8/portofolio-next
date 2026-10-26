import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const hobi = [
  { id: 1, nama: "Belajar pemrograman" },
  { id: 2, nama: "Mendesain UI/UX" },
  { id: 3, nama: "Mempelajari teknologi baru" },
];

const rencana = [
  { id: 1, nama: "Menjadi Web Developer" },
  { id: 2, nama: "Mendalami UI/UX Design" },
  { id: 3, nama: "Membuat proyek teknologi sendiri" },
];

const keahlian = [
  "HTML dan CSS",
  "JavaScript",
  "React dan Next.js",
  "UI/UX Design",
];

const jadwal = [
  { id: 1, hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Belajar HTML dan CSS" },
  { id: 2, hari: "Selasa", waktu: "19.00 - 20.00", kegiatan: "Latihan JavaScript" },
  { id: 3, hari: "Rabu", waktu: "19.00 - 20.00", kegiatan: "Belajar React dan Next.js" },
  { id: 4, hari: "Kamis", waktu: "19.00 - 20.00", kegiatan: "Latihan UI/UX Design" },
  { id: 5, hari: "Jumat", waktu: "19.00 - 20.00", kegiatan: "Mengerjakan proyek" },
  { id: 6, hari: "Sabtu", waktu: "19.00 - 20.00", kegiatan: "Mengulang materi" },
  { id: 7, hari: "Minggu", waktu: "19.00 - 20.00", kegiatan: "Istirahat dan evaluasi" },
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Dessain Poster dan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dassar" },
];

export default function Home() {
  return (
    <main className="bg-slate-100 text-slate-800 mx-auto max-w-5xl px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-10">
          <Hero
            nama="Reno Wahyu saputa"
            tagline="Siswa Kelas XI RPL 1 Pelajar dari SMKN 1 Pasuruan,Calon junior Web Deeloper di Kelas Industri UBIG."
          />
        </div>
        <section>
          <div className="space-y-6">
            <Kartu judul="Tentang Saya">
              <p>
                Halo, saya Reno Wahyu Saputra, siswa kelas 11 jurusan Rekayasa
                Perangkat Lunak (RPL) di SMKN 1 Pasuruan. Saya tertarik pada
                teknologi, desain, dan pengembangan website.
              </p>
            </Kartu>
          </div>
        </section>
        <section>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Kartu judul="Hobi">
              <ul className="list-inside list-disc space-y-2">
                {hobi.map((item) => (
                  <li key={item.id}>{item.nama}</li>
                ))}
              </ul>
            </Kartu>

            <Kartu judul="Cita-cita">
              <ul className="list-inside list-disc space-y-2">
                {rencana.map((item) => (
                  <li key={item.id}>{item.nama}</li>
                ))}
              </ul>
            </Kartu>
          </div>
        </section>
        <section className="mt-8 mb-8 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
          <h2 className="mb-4 text-xl font-bold text-slate-800">Keahlian</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </section>
        <section>
            <Kartu judul="Jadwal Belajar">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-slate-200 px-3 py-3">
                      Hari
                    </th>
                    <th className="border border-slate-200 px-3 py-3">
                      Waktu
                    </th>
                    <th className="border border-slate-200 px-3 py-3">
                      Kegiatan
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {jadwal.map((item) => (
                    <tr
                      key={item.id}
                      className="transition hover:bg-blue-50"
                    >
                      <td className="border border-slate-200 px-3 py-3 font-medium">
                        {item.hari}
                      </td>
                      <td className="border border-slate-200 px-3 py-3 font-medium">
                        {item.waktu}
                      </td>
                      <td className="border border-slate-200 px-3 py-3">
                        {item.kegiatan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Kartu>
        </section>
      </div>
    </main>
  );
}
