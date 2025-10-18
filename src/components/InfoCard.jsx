export default function InfoCard({ title, text }){
    return (
      <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
        <p className="font-medium brand-text">{title}</p>
        <p className="mt-2 text-sm text-slate-600">{text}</p>
      </div>
    );
  }
  