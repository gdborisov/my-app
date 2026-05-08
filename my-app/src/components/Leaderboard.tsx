import { useMemo, useState } from 'react'
import './Leaderboard.css'
import { leaderboardData, yearOptions, quarterOptions, categoryOptions } from './leaderboard-data'
import type { Performer } from './leaderboard-data'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

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
    <section className="leaderboard-header">
      <p className="leaderboard-header__eyebrow">Leaderboard</p>
      <h1 className="leaderboard-header__title">
        Top performers based on contributions and activity
      </h1>
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
    <section className="filter-panel">
      <div className="filter-row">
        <label className="filter-field">
          <select
            className="filter-select"
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

        <label className="filter-field">
          <select
            className="filter-select"
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

        <label className="filter-field">
          <select
            className="filter-select"
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

        <label className="filter-field">
          <input
            type="search"
            className="filter-search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search employee..."
          />
        </label>
      </div>
    </section>
  )
}

function Podium({ topPerformers }: { topPerformers: Performer[] }) {
  if (topPerformers.length === 0) {
    return <div className="podium-board">No performers match the current filters.</div>
  }

  if (topPerformers.length === 1) {
    const [first] = topPerformers
    return (
      <section className="podium-board">
        <div className="podium-grid">
          <article className="podium-card podium-card--first" data-rank="1">
            <div className="podium-card__body">
              <div className="podium-card__top">
                <div className="podium-card__avatar podium-card__avatar--first">
                  {initials(first.name)}
                </div>
              </div>
              <p className="podium-card__label">Top performer</p>
              <h2 className="podium-card__title">{first.name}</h2>
              <p className="podium-card__subtitle">{first.title}</p>
              <div className="podium-card__score">{first.score} pts</div>
            </div>
          </article>
        </div>
      </section>
    )
  }

  if (topPerformers.length === 2) {
    const [first, second] = topPerformers
    return (
      <section className="podium-board">
        <div className="podium-grid">
          <article className="podium-card podium-card--second" data-rank="2">
            <div className="podium-card__body">
              <div className="podium-card__top">
                <div className="podium-card__avatar podium-card__avatar--second">
                  {initials(second.name)}
                </div>
              </div>
              <p className="podium-card__label">2nd place</p>
              <h2 className="podium-card__title">{second.name}</h2>
              <p className="podium-card__subtitle">{second.title}</p>
              <div className="podium-card__score">{second.score} pts</div>
            </div>
          </article>

          <article className="podium-card podium-card--first" data-rank="1">
            <div className="podium-card__body">
              <div className="podium-card__top">
                <div className="podium-card__avatar podium-card__avatar--first">
                  {initials(first.name)}
                </div>
              </div>
              <p className="podium-card__label">Top performer</p>
              <h2 className="podium-card__title">{first.name}</h2>
              <p className="podium-card__subtitle">{first.title}</p>
              <div className="podium-card__score">{first.score} pts</div>
            </div>
          </article>
        </div>
      </section>
    )
  }

  const [first, second, third] = topPerformers

  return (
    <section className="podium-board">
      <div className="podium-grid">
        <article className="podium-card podium-card--second" data-rank="2">
          <div className="podium-card__body">
            <div className="podium-card__top">
              <div className="podium-card__avatar podium-card__avatar--second">
                {initials(second.name)}
              </div>
            </div>
            <p className="podium-card__label">2nd place</p>
            <h2 className="podium-card__title">{second.name}</h2>
            <p className="podium-card__subtitle">{second.title}</p>
            <div className="podium-card__score">{second.score} pts</div>
          </div>
        </article>

        <article className="podium-card podium-card--first" data-rank="1">
          <div className="podium-card__body">
            <div className="podium-card__top">
              <div className="podium-card__avatar podium-card__avatar--first">
                {initials(first.name)}
              </div>
            </div>
            <p className="podium-card__label">Top performer</p>
            <h2 className="podium-card__title">{first.name}</h2>
            <p className="podium-card__subtitle">{first.title}</p>
            <div className="podium-card__score">{first.score} pts</div>
          </div>
        </article>

        <article className="podium-card podium-card--third" data-rank="3">
          <div className="podium-card__body">
            <div className="podium-card__top">
              <div className="podium-card__avatar podium-card__avatar--third">
                {initials(third.name)}
              </div>
            </div>
            <p className="podium-card__label">3rd place</p>
            <h2 className="podium-card__title">{third.name}</h2>
            <p className="podium-card__subtitle">{third.title}</p>
            <div className="podium-card__score">{third.score} pts</div>
          </div>
        </article>
      </div>
    </section>
  )
}

function LeaderboardRow({ performer }: { performer: Performer }) {
  return (
    <article className="leaderboard-row">
      <div className="leaderboard-row__position">{performer.rank}</div>
      <div className="leaderboard-row__details">
        <h3 className="leaderboard-row__name">{performer.name}</h3>
        <p className="leaderboard-row__title">{performer.title}</p>
        <div className="leaderboard-row__tags">
          <span className="leaderboard-row__pill">{performer.label}</span>
          <span className="leaderboard-row__pill">{performer.category}</span>
          <span className="leaderboard-row__pill">{performer.quarter}</span>
        </div>
      </div>
      <div className="leaderboard-row__score">
        <p className="leaderboard-row__score-value">{performer.score}</p>
        <p className="leaderboard-row__score-label">Points</p>
      </div>
      <button className="leaderboard-row__action" type="button">
        �
      </button>
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
    <main className="leaderboard-page">
      <div className="leaderboard-container">
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
        <section className="leaderboard-summary">
          <div className="leaderboard-summary__top">
            <div>
              <p className="podium-card__label">Leaderboard</p>
              <h2 className="leaderboard-summary__title">Active contributors</h2>
            </div>
            <p className="leaderboard-summary__description">
              A clean ranked list with score badges and compact row cards.
            </p>
          </div>

          <div>
            {sortedPerformers.length > 0 ? (
              visibleRows.map((performer) => (
                <LeaderboardRow key={performer.id} performer={performer} />
              ))
            ) : (
              <div className="podium-board">No contributors match the current filters.</div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
