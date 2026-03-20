import { useState } from 'react';
import { AWARDS_FORMULA_WEIGHTS, AWARDS_RAW_DATA, PENDING_METHODOLOGY_CARDS } from '../data/constants';

function MethCard({ tag, desc, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="meth-card">
      <button
        className="meth-header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="meth-header-left">
          <span className="meth-tag">{tag}</span>
          <span className="meth-desc">{desc}</span>
        </div>
        <svg
          className={`meth-chevron${open ? ' open' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      <div className={`meth-body${open ? ' open' : ''}`}>
        <div className="meth-inner">{children}</div>
      </div>
    </div>
  );
}

function AwardsContent() {
  return (
    <div className="meth-inner-pad">
      <div className="meth-section-title">Formula weights</div>
      <div className="meth-weights">
        {AWARDS_FORMULA_WEIGHTS.map((w) => (
          <div key={w.label} className="meth-weight-row">
            <span className="meth-weight-label">{w.label}</span>
            <div className="meth-weight-bar-wrap">
              <div className="meth-weight-bar" style={{ width: w.width, background: w.color }} />
            </div>
            <span className="meth-weight-val">{w.val}</span>
          </div>
        ))}
      </div>
      <div className="meth-callout">
        Rate metrics = award count ÷ seasons played. Each component normalised to best in dataset,
        then weighted and summed. Final scaled to 1–10. Rate adjustment removes longevity bias —
        Bird's 9 All-NBA First Teams in 13 seasons ranks higher than Kobe's 11 in 20.
      </div>

      <div className="meth-section-title" style={{ marginTop: '18px' }}>Raw data</div>
      <div className="meth-table-wrap">
        <table className="meth-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Seasons</th>
              <th>MVPs</th>
              <th>Fin. MVPs</th>
              <th>DPOY</th>
              <th>All-NBA 1st</th>
              <th>1st rate</th>
              <th>All-Def 1st</th>
              <th>Def rate</th>
              <th>Scr titles</th>
              <th>Scr rate</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {AWARDS_RAW_DATA.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.seasons}</td>
                <td>{row.mvps}</td>
                <td>{row.finMvps}</td>
                <td>{row.dpoy}</td>
                <td>{row.allNba1}</td>
                <td>{row.allNba1Rate}</td>
                <td>{row.allDef1}</td>
                <td>{row.allDefRate}</td>
                <td>{row.scrTitles}</td>
                <td>{row.scrRate}</td>
                <td>
                  <span className={`meth-chip chip-${row.score}`}>{row.score}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="meth-section-title" style={{ marginTop: '18px' }}>Score distribution</div>
      <div className="meth-bars">
        {AWARDS_RAW_DATA.map((row, i) => (
          <div key={row.name} className="meth-bar-row">
            <span className="meth-bar-name">{row.name}</span>
            <div className="meth-bar-track">
              <div
                className="meth-bar-fill"
                style={{
                  width: `${row.score * 10}%`,
                  background: i === 0 ? 'rgba(240,192,64,0.45)' : undefined,
                }}
              />
            </div>
            <span className="meth-bar-score">{row.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PendingContent() {
  return (
    <div className="meth-inner-pad">
      <div className="meth-callout" style={{ borderColor: 'var(--border)', marginTop: 0 }}>
        Methodology pending — formula under review.
      </div>
    </div>
  );
}

export default function Methodology() {
  return (
    <div className="meth-list">
      <MethCard tag="Awards" desc="Individual hardware, rate-adjusted for longevity">
        <AwardsContent />
      </MethCard>
      {PENDING_METHODOLOGY_CARDS.map((m) => (
        <MethCard key={m.tag} tag={m.tag} desc={m.desc}>
          <PendingContent />
        </MethCard>
      ))}
    </div>
  );
}
