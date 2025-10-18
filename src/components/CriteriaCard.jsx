import CheckMark from "./CheckMark";

export default function CriteriaCard({ title, items }){
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <p className="font-medium brand-text">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 items-start">
            <CheckMark /> <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
