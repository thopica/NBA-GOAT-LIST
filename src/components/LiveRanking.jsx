import { getFinal } from '../utils/scoring';

export default function LiveRanking({ players }) {
  const ranked = [...players]
    .map((p) => ({ name: p.name, final: getFinal(p) }))
    .sort((a, b) => b.final - a.final);

  const max = ranked[0].final;

  return (
    <div className="ranking-grid">
      {ranked.map((r, i) => (
        <div key={r.name} className={`rank-card${i === 0 ? ' rank-1' : ''}`}>
          <div className="rank-num">{i + 1}</div>
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
  );
}
