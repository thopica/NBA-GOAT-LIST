import { getRaw, getFinal, bandClass, multClass } from '../utils/scoring';
import { METRIC_HEADERS } from '../data/constants';

// Rings, Awards → Championships (gold)
// Stats, Alpha, Playoffs, Clutch → Performance (blue)
// Defense, Versatility, Longevity → Legacy (green)

function ScoreCell({ value, onDecrement, onIncrement }) {
  return (
    <div className="score-cell">
      <button className="adj-btn" onClick={onDecrement}>−</button>
      <span className={`score-val ${bandClass(value)}`}>{value}</span>
      <button className="adj-btn" onClick={onIncrement}>+</button>
    </div>
  );
}

function MultCell({ value, onDecrement, onIncrement }) {
  return (
    <div className="mult-cell">
      <button className="adj-btn" onClick={onDecrement}>−</button>
      <span className={`mult-val ${multClass(value)}`}>{value.toFixed(2)}x</span>
      <button className="adj-btn" onClick={onIncrement}>+</button>
    </div>
  );
}

export default function AchievementTable({ players, onAdjScore, onAdjMult }) {
  return (
    <>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-dot" style={{ background: 'var(--r1)' }} />1–3 weak
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: 'var(--r2)' }} />4–5 below avg
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: 'var(--r3)' }} />6 average
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: 'var(--r4)' }} />7–8 strong
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: 'var(--r5)' }} />9–10 elite
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            {/* Column group row */}
            <tr>
              <th className="col-name" rowSpan={2}>Player</th>
              <th colSpan={2} className="col-group col-group--gold">Championships</th>
              <th colSpan={4} className="col-group col-group--blue">Performance</th>
              <th colSpan={3} className="col-group col-group--green">Legacy</th>
              <th className="col-mult" rowSpan={2} title="Context multiplier — adjusts raw score">Mult.</th>
              <th className="col-raw" rowSpan={2}>Raw</th>
              <th className="col-fin" rowSpan={2}>Final</th>
            </tr>
            {/* Metric header row */}
            <tr>
              {METRIC_HEADERS.map((m) => (
                <th key={m.key} title={m.title}>{m.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((p, pi) => (
              <tr key={p.name}>
                <td className="col-name">{p.name}</td>
                {p.scores.map((v, si) => (
                  <td key={si}>
                    <ScoreCell
                      value={v}
                      onDecrement={() => onAdjScore(pi, si, -1)}
                      onIncrement={() => onAdjScore(pi, si, 1)}
                    />
                  </td>
                ))}
                <td>
                  <MultCell
                    value={p.mult}
                    onDecrement={() => onAdjMult(pi, -1)}
                    onIncrement={() => onAdjMult(pi, 1)}
                  />
                </td>
                <td className="col-raw">{getRaw(p)}</td>
                <td className="col-fin">{getFinal(p)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
