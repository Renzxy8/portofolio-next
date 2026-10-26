export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-slate-800 sm:text-2xl">
        {judul}
      </h2>

      <div className="text-slate-600 leading-7">{children}</div>
    </section>
  );
}
