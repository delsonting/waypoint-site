export default function Step({ n, title, text }){
    return (
      <li className="flex gap-4">
        <div className="h-8 w-8 shrink-0 rounded-full brand-bg text-white grid place-items-center font-semibold">{n}</div>
        <div>
          <p className="font-medium brand-text">{title}</p>
          <p className="text-sm text-slate-600 mt-1">{text}</p>
        </div>
      </li>
    );
  }
  