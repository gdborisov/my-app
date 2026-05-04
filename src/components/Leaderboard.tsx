import { useMemo, useState } from 'react'

type Performer = {
  id: number
  name: string
  title: string
  score: number
  label: string
  rank: number
  badge: string
  highlight: string
  category: string
  quarter: string
  year: string
}

const leaderboardData: Performer[] = [
  { id: 1, name: 'Jordan Blake', title: 'Senior Software Engineer', score: 536, label: '1st place', rank: 1, badge: '⭐', highlight: 'Highest contribution this quarter', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 2, name: 'Morgan Lee', title: 'Group Manager', score: 328, label: '2nd place', rank: 2, badge: '✨', highlight: 'Strong leadership performance', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 3, name: 'Taylor Smith', title: 'Product Designer', score: 320, label: '3rd place', rank: 3, badge: '🎯', highlight: 'Outstanding product vision', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 4, name: 'Avery Novak', title: 'Frontend Engineer', score: 298, label: 'Top growth', rank: 4, badge: '🔥', highlight: 'Fastest sprint delivery', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 5, name: 'Riley Chen', title: 'Data Analyst', score: 286, label: 'Top insights', rank: 5, badge: '📊', highlight: 'Best performance analytics', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 6, name: 'Samira Patel', title: 'Engineering Lead', score: 274, label: 'Top support', rank: 6, badge: '🤝', highlight: 'Outstanding team enablement', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 7, name: 'Noah Martinez', title: 'Backend Engineer', score: 262, label: 'Strong delivery', rank: 7, badge: '💻', highlight: 'Reliable backend systems', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 8, name: 'Emma Johnson', title: 'UX Researcher', score: 258, label: 'User advocate', rank: 8, badge: '🧠', highlight: 'High empathy UX research', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 9, name: 'Lucas Kim', title: 'Data Scientist', score: 252, label: 'Insight leader', rank: 9, badge: '📈', highlight: 'Advanced predictive models', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 10, name: 'Mia Davis', title: 'Marketing Lead', score: 246, label: 'Growth driver', rank: 10, badge: '🚀', highlight: 'Campaigns with strong ROI', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 11, name: 'Ethan Brown', title: 'DevOps Engineer', score: 238, label: 'Reliability expert', rank: 11, badge: '⚙️', highlight: 'Improved deployment stability', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 12, name: 'Zoe Wilson', title: 'Product Manager', score: 232, label: 'Roadmap owner', rank: 12, badge: '📌', highlight: 'Aligned product delivery', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 13, name: 'Henry Clark', title: 'Frontend Engineer', score: 226, label: 'UI champion', rank: 13, badge: '🎨', highlight: 'Pixel-perfect interfaces', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 14, name: 'Ava Thompson', title: 'Customer Success', score: 220, label: 'Customer hero', rank: 14, badge: '❤️', highlight: 'Best customer retention', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 15, name: 'Leo Garcia', title: 'Quality Engineer', score: 214, label: 'QA leader', rank: 15, badge: '🧪', highlight: 'Reduced production bugs', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 16, name: 'Chloe Anderson', title: 'Visual Designer', score: 208, label: 'Creative lead', rank: 16, badge: '🎯', highlight: 'Beautiful brand visuals', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 17, name: 'Isaac Wright', title: 'BI Analyst', score: 202, label: 'Insights lead', rank: 17, badge: '📊', highlight: 'Data dashboards polished', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 18, name: 'Nora Hall', title: 'Operations Manager', score: 196, label: 'Ops excellence', rank: 18, badge: '🛠️', highlight: 'Streamlined operations', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 19, name: 'Owen Young', title: 'Security Engineer', score: 190, label: 'Security champion', rank: 19, badge: '🔒', highlight: 'Improved system security', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 20, name: 'Lily Scott', title: 'People Partner', score: 184, label: 'Team builder', rank: 20, badge: '🤝', highlight: 'Strengthened team morale', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 21, name: 'Mason Turner', title: 'Senior Analyst', score: 178, label: 'Data storyteller', rank: 21, badge: '📑', highlight: 'Clear executive insights', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 22, name: 'Ruby Hill', title: 'UX Designer', score: 172, label: 'Experience lead', rank: 22, badge: '✨', highlight: 'Smooth product flows', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 23, name: 'Caleb Rivera', title: 'Platform Engineer', score: 166, label: 'Platform success', rank: 23, badge: '🧩', highlight: 'Built reusable systems', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 24, name: 'Maya Cooper', title: 'Growth Strategist', score: 160, label: 'Growth lead', rank: 24, badge: '📈', highlight: 'Launched new acquisition', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 25, name: 'Eli Edwards', title: 'Software Architect', score: 154, label: 'Architecture lead', rank: 25, badge: '🏗️', highlight: 'Improved code standards', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 26, name: 'Ivy Brooks', title: 'Design Ops', score: 148, label: 'Design systems', rank: 26, badge: '🖌️', highlight: 'Optimized creative delivery', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 27, name: 'Ezra Bennett', title: 'Data Engineer', score: 142, label: 'Pipeline expert', rank: 27, badge: '🔧', highlight: 'Reliable data pipelines', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 28, name: 'Elena Ward', title: 'Project Manager', score: 136, label: 'Delivery lead', rank: 28, badge: '📅', highlight: 'Kept projects on schedule', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 29, name: 'Miles Kelly', title: 'Mobile Engineer', score: 130, label: 'App excellence', rank: 29, badge: '📱', highlight: 'Refined mobile experience', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 30, name: 'Anna Hughes', title: 'Product Designer', score: 124, label: 'Design thinker', rank: 30, badge: '🎯', highlight: 'Clarified UX patterns', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 31, name: 'Colin Reed', title: 'Analytics Lead', score: 118, label: 'Performance driver', rank: 31, badge: '📊', highlight: 'KPI focus improved', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 32, name: 'Paige Morgan', title: 'Operations Lead', score: 112, label: 'Scalable ops', rank: 32, badge: '🛠️', highlight: 'Improved team workflows', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 33, name: 'Aaron Price', title: 'Site Reliability', score: 106, label: 'Availability hero', rank: 33, badge: '🌐', highlight: 'Reduced downtime', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 34, name: 'Julia Gray', title: 'Visual Lead', score: 100, label: 'Brand keeper', rank: 34, badge: '🎨', highlight: 'Consistent design system', category: 'Design', quarter: 'Q2 2026', year: '2026' },
  { id: 35, name: 'Victor Foster', title: 'Insights Analyst', score: 94, label: 'Insight driver', rank: 35, badge: '📈', highlight: 'Delivered actionable reports', category: 'Data', quarter: 'Q1 2026', year: '2026' },
  { id: 36, name: 'Leah Sanders', title: 'Talent Partner', score: 88, label: 'People leader', rank: 36, badge: '🤝', highlight: 'Improved hiring process', category: 'Leadership', quarter: 'Q2 2026', year: '2026' },
  { id: 37, name: 'Julian Fox', title: 'Cloud Engineer', score: 82, label: 'Cloud expert', rank: 37, badge: '☁️', highlight: 'Optimized cloud spend', category: 'Engineering', quarter: 'Q1 2026', year: '2026' },
  { id: 38, name: 'Sophie Hart', title: 'Product Analyst', score: 76, label: 'Product analyst', rank: 38, badge: '🔍', highlight: 'Mapped product gaps', category: 'Management', quarter: 'Q2 2026', year: '2026' },
  { id: 39, name: 'Daniel James', title: 'Frontend Lead', score: 70, label: 'Lead engineer', rank: 39, badge: '💡', highlight: 'Mentored front-end team', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 40, name: 'Kira Nolan', title: 'Design Strategist', score: 64, label: 'Strategy lead', rank: 40, badge: '🧭', highlight: 'Shaped design direction', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 41, name: 'Andrew Bell', title: 'Data Ops', score: 58, label: 'Data steward', rank: 41, badge: '🔧', highlight: 'Improved data quality', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 42, name: 'Nina Moss', title: 'Program Manager', score: 52, label: 'Program lead', rank: 42, badge: '📋', highlight: 'Aligned cross-team delivery', category: 'Management', quarter: 'Q1 2026', year: '2026' },
  { id: 43, name: 'Tyler Bishop', title: 'Platform Lead', score: 46, label: 'Platform owner', rank: 43, badge: '🧩', highlight: 'Built reusable services', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 44, name: 'Grace Miles', title: 'Creative Director', score: 40, label: 'Creative leader', rank: 44, badge: '🎨', highlight: 'Elevated campaign visuals', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 45, name: 'Samuel Dale', title: 'Data Product', score: 34, label: 'Product insights', rank: 45, badge: '📈', highlight: 'Improved product metrics', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 46, name: 'Olivia Page', title: 'Customer Ops', score: 28, label: 'Customer care', rank: 46, badge: '🤝', highlight: 'Improved support workflows', category: 'Leadership', quarter: 'Q1 2026', year: '2026' },
  { id: 47, name: 'Cameron West', title: 'QA Lead', score: 22, label: 'Quality lead', rank: 47, badge: '🧪', highlight: 'Improved testing coverage', category: 'Engineering', quarter: 'Q2 2026', year: '2026' },
  { id: 48, name: 'Hannah Kent', title: 'Design Researcher', score: 16, label: 'Research lead', rank: 48, badge: '🧠', highlight: 'Validated user needs', category: 'Design', quarter: 'Q1 2026', year: '2026' },
  { id: 49, name: 'Jason Cole', title: 'Data Scientist', score: 12, label: 'Model builder', rank: 49, badge: '🤖', highlight: 'Built forecasting models', category: 'Data', quarter: 'Q2 2026', year: '2026' },
  { id: 50, name: 'Maya Bell', title: 'Operations Analyst', score: 8, label: 'Ops support', rank: 50, badge: '📎', highlight: 'Improved process tracking', category: 'Management', quarter: 'Q1 2026', year: '2026' },
]

const yearOptions = ['All Years', '2026']
const quarterOptions = ['All Quarters', 'Q1 2026', 'Q2 2026']
const categoryOptions = ['All Categories', 'Engineering', 'Management', 'Design', 'Data', 'Leadership']

function filterPerformers(
  performers: Performer[],
  year: string,
  quarter: string,
  category: string,
  query: string,
) {
  const normalized = query.trim().toLowerCase()

  return performers
    .filter((performer) => (year === 'All Years' ? true : performer.year === year))
    .filter((performer) => (quarter === 'All Quarters' ? true : performer.quarter === quarter))
    .filter((performer) => (category === 'All Categories' ? true : performer.category === category))
    .filter((performer) => {
      if (!normalized) return true
      return performer.name.toLowerCase().includes(normalized)
    })
}

function PageHeader() {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Leaderboard</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Top performers based on contributions and activity
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-right">
            Track the strongest contributors with filtering and search, then compare scores from the leaderboard list.
          </p>
        </div>
      </div>
    </section>
  )
}

function FilterNavigation({
  year,
  quarter,
  category,
  search,
  onYearChange,
  onQuarterChange,
  onCategoryChange,
  onSearchChange,
}: {
  year: string
  quarter: string
  category: string
  search: string
  onYearChange: (value: string) => void
  onQuarterChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onSearchChange: (value: string) => void
}) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex min-w-[980px] gap-3 sm:flex-row sm:items-end sm:justify-between sm:flex-nowrap">
        <label className="inline-flex min-w-[180px] flex-shrink-0 sm:flex-none">
          <span className="sr-only">Year</span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
            value={year}
            onChange={(event) => onYearChange(event.target.value)}
          >
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="inline-flex min-w-[180px] flex-shrink-0 sm:flex-none">
          <span className="sr-only">Quarter</span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
            value={quarter}
            onChange={(event) => onQuarterChange(event.target.value)}
          >
            {quarterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="inline-flex min-w-[180px] flex-shrink-0 sm:flex-none">
          <span className="sr-only">Category</span>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="flex min-w-0 items-center gap-3">
          <span className="sr-only">Search</span>
          <div className="relative min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">🔍</span>
            <input
              className="w-full rounded-2xl border-none bg-transparent pl-10 text-sm text-slate-900 outline-none"
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search employee..."
            />
          </div>
          <button
            type="button"
            className="inline-flex h-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

function Podium({ topPerformers }: { topPerformers: Performer[] }) {
  if (topPerformers.length === 0) {
    return (
      <section className="rounded-[32px] border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm sm:p-12">
        No performers match the current filters.
      </section>
    )
  }

  if (topPerformers.length === 1) {
    const [first] = topPerformers
    return (
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="grid gap-6 sm:grid-cols-[1fr] sm:items-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-amber-400 bg-slate-950 text-4xl font-semibold text-white shadow-xl">
              1
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Top performer</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950">{first.name}</p>
              <p className="mt-2 text-sm text-slate-500">{first.title}</p>
            </div>
            <div className="rounded-full bg-amber-100 px-6 py-3 text-sm font-semibold text-slate-950">
              {first.score} total points
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (topPerformers.length === 2) {
    const [first, second] = topPerformers
    return (
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {[second, first].map((performer, index) => (
            <div key={performer.id} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-slate-200 bg-slate-100 text-3xl font-semibold text-slate-900">
                {index === 1 ? 1 : 2}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{index === 1 ? 'Top performer' : '2nd place'}</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{performer.name}</p>
                <p className="text-sm text-slate-500">{performer.title}</p>
              </div>
              <div className="rounded-full bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700">
                {performer.score} pts
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  const [second, first, third] = topPerformers

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 text-2xl font-semibold text-white">
            2
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-500">2nd place</p>
          <p className="mt-3 text-lg font-semibold text-slate-950">{second.name}</p>
          <p className="mt-1 text-sm text-slate-500">{second.title}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            <span>Score</span>
            <span className="text-slate-950">{second.score}</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-6 text-white shadow-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-amber-500/20 to-transparent" />
          <div className="relative flex flex-col items-center gap-5 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-slate-950 text-4xl font-semibold text-white shadow-2xl">
              1
            </div>
            <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Top performer</p>
            <p className="text-2xl font-semibold tracking-tight text-white">{first.name}</p>
            <p className="text-sm text-slate-300">{first.title}</p>
            <div className="mt-4 rounded-full bg-amber-100 px-6 py-3 text-sm font-semibold text-slate-950">
              {first.score} points
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-300/80">
              Outstanding contribution and influence across the whole team this quarter.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 text-2xl font-semibold text-white">
            3
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-500">3rd place</p>
          <p className="mt-3 text-lg font-semibold text-slate-950">{third.name}</p>
          <p className="mt-1 text-sm text-slate-500">{third.title}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            <span>Score</span>
            <span className="text-slate-950">{third.score}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeaderboardRow({ performer }: { performer: Performer }) {
  return (
    <article className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-[28px] border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-xl font-semibold text-white">
        {performer.rank}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg">
            {performer.badge}
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-slate-950">{performer.name}</p>
            <p className="mt-1 text-sm text-slate-500">{performer.title}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
            {performer.label}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
            {performer.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
            {performer.quarter}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-500">{performer.highlight}</p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <div className="text-right">
          <p className="text-2xl font-semibold text-slate-950">{performer.score}</p>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">points</p>
        </div>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:bg-slate-100">
          <span className="text-base">›</span>
        </button>
      </div>
    </article>
  )
}

export default function Leaderboard() {
  const [year, setYear] = useState('All Years')
  const [quarter, setQuarter] = useState('All Quarters')
  const [category, setCategory] = useState('All Categories')
  const [search, setSearch] = useState('')

  const filteredPerformers = useMemo(
    () => filterPerformers(leaderboardData, year, quarter, category, search),
    [year, quarter, category, search],
  )

  const sortedPerformers = useMemo(
    () => [...filteredPerformers].sort((a, b) => b.score - a.score),
    [filteredPerformers],
  )

  const topPerformers = sortedPerformers.slice(0, 3)
  const leaderboardRows = sortedPerformers.slice(3)
  const visibleRows = leaderboardRows.length > 0 ? leaderboardRows : sortedPerformers

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <PageHeader />
        <FilterNavigation
          year={year}
          quarter={quarter}
          category={category}
          search={search}
          onYearChange={setYear}
          onQuarterChange={setQuarter}
          onCategoryChange={setCategory}
          onSearchChange={setSearch}
        />
        <Podium topPerformers={topPerformers} />
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Leaderboard</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Active contributors</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              A clean ranked list with score badges and compact row cards.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {sortedPerformers.length > 0 ? (
              visibleRows.map((performer) => (
                <LeaderboardRow key={performer.id} performer={performer} />
              ))
            ) : (
              <div className="rounded-[28px] border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
                No contributors match the current filters.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
