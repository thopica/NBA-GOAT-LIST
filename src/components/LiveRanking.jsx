import { getFinal } from '../utils/scoring';

export default function LiveRanking({ players }) {
  const ranked = [...players]
    .map((p) => ({ name: p.name, final: getFinal(p) }))
    .sort((a, b) => b.final - a.final);

  const max = ranked[0].final;
  const [top, ...rest] = ranked;

  return (
    <div className="ranking-wrap">
      {/* Hero — #1 */}
      <div className="rank-hero">
        <div className="rank-num">1</div>
        <div className="rank-info">
          <div className="rank-name">{top.name}</div>
          <div className="rank-hero-label">Current GOAT</div>
          <div className="rank-bar-wrap">
            <div className="rank-bar" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="rank-score">{top.final}</div>
      </div>

      {/* Ranks 2–12 */}
      <div className="ranking-grid">
        {rest.map((r, i) => (
          <div key={r.name} className="rank-card">
            <div className="rank-num">{i + 2}</div>
            <div className="rank-info">
              <div className="rank-name">{r.name}</div>
              <div className="rank-bar-wrap">
                <div
                  className="rank-bar"
                  style={{ width: `${((r.final / max) * 100).toFixed(1)}%` }}
                />
              </div>
            </div>
            <div className="rank-score">{r.final}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
