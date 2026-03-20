import { multClass } from '../utils/scoring';

function ContextCard({ player, playerIndex, onAdjCtx }) {
  const mc = multClass(player.mult);

  return (
    <div className="ctx-card">
      <div className="ctx-player">
        <span>{player.name}</span>
        <span className={`ctx-mult-big ${mc}`}>{player.mult.toFixed(2)}x</span>
      </div>
      {player.ctx.map((c, ci) => {
        const isPos = c.v >= 0;
        const color = isPos ? '#15803d' : '#dc2626';
        const background = isPos ? '#f0fdf4' : '#fef2f2';
        return (
          <div key={c.label} className="ctx-row">
            <span className="ctx-label">{c.label}</span>
            <div className="ctx-adj">
              <button className="ctx-btn" onClick={() => onAdjCtx(playerIndex, ci, -1)}>−</button>
              <span className="ctx-val" style={{ color, background }}>
                {c.v >= 0 ? '+' : ''}{c.v.toFixed(2)}
              </span>
              <button className="ctx-btn" onClick={() => onAdjCtx(playerIndex, ci, 1)}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const LEGEND_ITEMS = [
  { color: '#15803d', text: 'Loyalty +', suffix: '= stayed / never requested exit' },
  { color: '#dc2626', text: 'Loyalty −', suffix: '= player-requested departure' },
  { color: '#dc2626', text: 'Help −',    suffix: '= elite co-stars inflated rings' },
  { color: '#dc2626', text: 'Era −',     suffix: '= fewer top-50 rivals to beat' },
];

export default function ContextMultipliers({ players, onAdjCtx }) {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px', padding: '0 40px 14px', flexWrap: 'wrap' }}>
        {LEGEND_ITEMS.map((item) => (
          <div
            key={item.text}
            style={{ fontSize: '11px', color: 'var(--muted)' }}
          >
            <span style={{ color: item.color }}>{item.text}</span> {item.suffix}
          </div>
        ))}
      </div>
      <div className="context-grid">
        {players.map((p, pi) => (
          <ContextCard key={p.name} player={p} playerIndex={pi} onAdjCtx={onAdjCtx} />
        ))}
      </div>
    </>
  );
}
