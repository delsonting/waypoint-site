export default function WaypointOperatingCo() {
  return (
    <>
      {/* Head: icons, metadata, analytics, and brand tokens */}
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/waypoint_logo_compass_512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B5DAA" />
        <meta property="og:image" content="/waypoint_logo_compass_1024.png" />
        <meta property="og:title" content="Waypoint Operating Co." />
        <meta property="og:description" content="Acquiring and operating a high-quality small business in Southern California." />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2NKLDM8DKM"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2NKLDM8DKM');
        `}</script>

        <style>{`
          :root{
            --brand-primary:#0B5DAA;
            --brand-secondary:#135FB8;
            --brand-gray:#7A7A7A;
          }
          .brand-text{color:var(--brand-primary)}
          .brand-border{border-color:var(--brand-primary)}
          .brand-bg{background-color:var(--brand-primary)}
          .brand-grad{background-image:linear-gradient(135deg,var(--brand-primary),var(--brand-secondary))}
          .link-primary{color:var(--brand-primary)}
          .link-primary:hover{color:var(--brand-secondary)}
          .btn-primary{background-image:linear-gradient(135deg,var(--brand-primary),var(--brand-secondary)); color:#fff}
          .btn-primary:hover{filter:brightness(0.95)}
          .btn-outline{border:1px solid var(--brand-primary); color:var(--brand-primary)}
          .btn-outline:hover{background:rgba(11,93,170,0.06)}
          html{scroll-behavior:smooth}
          a:focus, button:focus, input:focus, select:focus, textarea:focus{outline:2px solid var(--brand-secondary); outline-offset:2px}
        `}</style>
      </head>

      <main className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b brand-border">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Inline SVG logo to avoid broken external links */}
              <LogoCompass className="h-10 w-10" />
              <div>
                <p className="font-semibold leading-tight brand-text">Waypoint Operating Co.</p>
                <p className="text-xs text-slate-500 leading-tight">Newport Beach, CA</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#thesis" className="link-primary">Thesis</a>
              <a href="#criteria" className="link-primary">Criteria</a>
              <a href="#approach" className="link-primary">Approach</a>
              <a href="#about" className="link-primary">About</a>
              <a href="#contact" className="link-primary">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#contact" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium btn-outline">Let's Talk</a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 brand-grad opacity-[0.10]" />
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Charting the next chapter for a proven business.</h1>
              <p className="mt-4 text-slate-600 md:text-lg">
                Waypoint Operating Co. is looking to acquire and operate a high-quality small business in Southern California. We are hands-on owner-operators focused on people, operational excellence, and durable growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-medium btn-primary">Start a Conversation</a>
                <a href="#criteria" className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-medium btn-outline">Explore Fit</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-2"><span className='inline-block h-1.5 w-1.5 rounded-full brand-bg'></span> Local in Orange County</span>
                <span className="inline-flex items-center gap-2"><span className='inline-block h-1.5 w-1.5 rounded-full brand-bg'></span> Smooth Owner-operator transition</span>
                <span className="inline-flex items-center gap-2"><span className='inline-block h-1.5 w-1.5 rounded-full brand-bg'></span> Confidential & seller-friendly</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl border border-slate-200 shadow-sm p-6 bg-white">
                <h3 className="text-sm font-semibold text-slate-700">Acquisition Focus</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><CheckMark /> Businesses with strong fundamentals and recurring demand</li>
                  <li className="flex gap-2"><CheckMark /> EBITDA $500K–$1.0M; margins ≥ 20%</li>
                  <li className="flex gap-2"><CheckMark /> Southern California focus (Orange County ideal)</li>
                  <li className="flex gap-2"><CheckMark /> Healthy customer mix</li>
                  <li className="flex gap-2"><CheckMark /> Asset purchase; SBA / conventional financeable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section id="thesis" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight brand-text">What We Believe</h2>
            </div>
            <div className="md:col-span-2 text-slate-700 leading-relaxed">
              <p>
                Great small businesses are built on relationships, quality operations, and sustainable earnings. We partner with owners to preserve what has made the business successful and build for the future.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <InfoCard title="People First" text="Clear roles, training, and aligned incentives that retain talent and further our culture." />
                <InfoCard title="Process & KPIs" text="On-time delivery and service-level metrics customers feel." />
                <InfoCard title="Customer Focus" text="Long-term success is built on earning trust through reliability, communication, and results." />
                <InfoCard title="Prudent Finance" text="Predictable maintenance capex, cash discipline, and lender-friendly transparency." />
              </div>
            </div>
          </div>
        </section>

        {/* Criteria */}
        <section id="criteria" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight brand-text">Acquisition Criteria</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <CriteriaCard title="Size" items={["EBITDA $500K–$1.0M (or $700K–$1.4M SDE)", "EBITDA margins ≥ 20%", "Revenue $2M–$6M"]} />
              <CriteriaCard title="Business Model" items={["Recurring or repeat demand ≥ 60%", "Top customer ≤ 20%"]} />
              <CriteriaCard title="Operations" items={["Gross margin ≥ 30%", "On-time delivery ≥ 90%"]} />
              <CriteriaCard title="Capex & Assets" items={["Maintenance capex ≤ 10–15% of EBITDA", "Asset purchase preferred"]} />
              <CriteriaCard title="Geography" items={["Southern California focus, Orange County ideal", "Owner transition welcome"]} />
              <CriteriaCard title="Financing" items={["SBA / conventional financeable", "Clean books, steady cash flow", "Fair and confidential process"]} />
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight brand-text">Seller‑Friendly Approach</h2>
            </div>
            <div className="md:col-span-2">
              <ol className="space-y-6">
                <Step n={1} title="Confidential Intro" text="Quick call to learn your goals, timing, and what matters to you and your team with minimal disruption to your day‑to‑day operations." />
                <Step n={2} title="Fair Offer" text="Straightforward terms, asset purchase preferred, transition plan tailored to you." />
                <Step n={3} title="Smooth Close" text="Collaborative with your advisors and lender; steady communication, no surprises." />
                <Step n={4} title="Careful Transition" text="Seamless hand off with limited disruption to employees and customers." />
              </ol>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-1 gap-10 items-start">
          <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight brand-text">About the Operator</h2>
              <p className="mt-2 text-slate-900 font-medium">Delson Ting</p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Former Google Product Manager experienced in leading cross‑functional teams to identify customer needs and launch products that drive measurable results. Operations‑minded leader with a strong focus on KPIs and execution.
              </p>               
              <p className="mt-4 text-slate-700 leading-relaxed">  
                Lives in Newport Beach with his wife, 2 children (ages 16 and 12), and pet bernadoodle. Board member and CFO for the Newport Harbor Educational Foundation.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                UCLA Anderson MBA (Entrepreneurship), USC MS in Computer Science, and UC Berkeley BA in Biology.
              </p>
            </div>
          </div>
        </section>

          {/* Contact  */}
          <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight brand-text">Let’s Talk</h2>
              <p className="mt-3 text-slate-600">Owners, brokers, and lenders—reach out directly. I respond within one business day.</p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Name</p>
                    <p className="mt-1 font-medium">Delson Ting</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Email</p>
                    <p className="mt-1 font-medium"><a className="underline link-primary" href="mailto:delson@waypointoperating.com">delson@waypointoperating.com</a></p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">LinkedIn</p>
                    <p className="mt-1"><a className="underline link-primary" href="https://linkedin.com/in/delsonting/" target="_blank" rel="noreferrer">linkedin.com/in/delsonting</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t brand-border">
          <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 items-start text-sm">
            <div className="flex items-center gap-3">
              <LogoCompass className="h-8 w-8" />
              <div>
                <p className="font-semibold brand-text">Waypoint Operating Co.</p>
                <p className="text-slate-600 mt-1">Acquiring and operating a single, high‑quality small business in Southern California.</p>
              </div>
            </div>
            <div className="text-slate-600">
              <p className="font-medium text-slate-900">Contact</p>
              <p className="mt-1">Delson Ting</p>
              <p>Newport Beach, CA</p>
              <p><a className="underline link-primary" href="mailto:delson@waypointoperating.com">delson@waypointoperating.com</a></p>
              <p><a className="underline link-primary" href="https://linkedin.com/in/delsonting/" target="_blank" rel="noreferrer">linkedin.com/in/delsonting</a></p>
            </div>
            <div className="text-slate-600">
              <p className="font-medium text-slate-900">Links</p>
              <ul className="mt-1 space-y-1">
                <li><a className="underline link-primary" href="#criteria">Acquisition Criteria</a></li>
                <li><a className="underline link-primary" href="#approach">Approach</a></li>
                <li><a className="underline link-primary" href="#about">About</a></li>
                <li><a className="underline link-primary" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-xs text-slate-500 text-center pb-8">© {new Date().getFullYear()} Waypoint Operating Co. • waypointoperating.com</div>
        </footer>
      </main>
    </>
  )
}

/* ---------- Helper components ---------- */

function LogoCompass({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Waypoint compass logo" role="img">
      <g fill="#0B5DAA">
        <polygon points="60,2 64,22 60,38 56,22" />
        <polygon points="118,60 98,64 82,60 98,56" />
        <polygon points="60,118 56,98 60,82 64,98" />
        <polygon points="2,60 22,56 38,60 22,64" />
        <polygon points="95,25 85,37 74,46 80,32" />
        <polygon points="95,95 80,88 74,74 85,83" />
        <polygon points="25,95 35,83 46,74 40,88" />
        <polygon points="25,25 40,32 46,46 35,37" />
      </g>
      <circle cx="60" cy="60" r="38" fill="none" stroke="#0B5DAA" strokeWidth="10" />
      <circle cx="60" cy="60" r="28" fill="#FFFFFF" stroke="#7A7A7A" strokeWidth="4" />
      <g transform="translate(60,60)">
        <polygon points="0,-22 10,8 0,0" fill="#0A4E9F" />
        <polygon points="0,-22 -10,8 0,0" fill="#135FB8" />
      </g>
    </svg>
  )
}

function CheckMark(){
  return (
    <svg className="h-5 w-5 mt-[2px]" viewBox="0 0 20 20" fill="currentColor" style={{color:'var(--brand-primary)'}} aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function InfoCard({ title, text }){
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <p className="font-medium brand-text">{title}</p>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  )
}

function CriteriaCard({ title, items }){
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
  )
}

function Step({ n, title, text }){
  return (
    <li className="flex gap-4">
      <div className="h-8 w-8 shrink-0 rounded-full brand-bg text-white grid place-items-center font-semibold">{n}</div>
      <div>
        <p className="font-medium brand-text">{title}</p>
        <p className="text-sm text-slate-600 mt-1">{text}</p>
      </div>
    </li>
  )
}
