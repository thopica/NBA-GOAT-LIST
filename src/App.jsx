import { useState, useCallback } from 'react';
import { INITIAL_PLAYERS } from './data/players';
import Header from './components/Header';
import LiveRanking from './components/LiveRanking';
import AchievementTable from './components/AchievementTable';
import ContextMultipliers from './components/ContextMultipliers';
import Methodology from './components/Methodology';

export default function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const adjScore = useCallback((pi, si, d) => {
    setPlayers((prev) =>
      prev.map((p, i) => {
        if (i !== pi) return p;
        const scores = [...p.scores];
        scores[si] = Math.min(10, Math.max(1, scores[si] + d));
        return { ...p, scores };
      })
    );
  }, []);

  const adjMult = useCallback((pi, d) => {
    setPlayers((prev) =>
      prev.map((p, i) => {
        if (i !== pi) return p;
        const mult = Math.round(Math.min(1.3, Math.max(0.3, p.mult + d * 0.05)) * 100) / 100;
        return { ...p, mult };
      })
    );
  }, []);

  const adjCtx = useCallback((pi, ci, d) => {
    setPlayers((prev) =>
      prev.map((p, i) => {
        if (i !== pi) return p;
        const ctx = p.ctx.map((c, j) => {
          if (j !== ci) return c;
          return { ...c, v: Math.round((c.v + d * 0.05) * 100) / 100 };
        });
        const base = ctx.reduce((sum, c) => sum + c.v, 1.0);
        const mult = Math.round(Math.min(1.3, Math.max(0.3, base)) * 100) / 100;
        return { ...p, ctx, mult };
      })
    );
  }, []);

  return (
    <>
      <Header />

      <div className="section-label">Live Ranking</div>
      <LiveRanking players={players} />

      <div className="divider" />
      <div className="section-label">
        Achievement Metrics{' '}
        <span style={{ color: 'var(--muted)', fontSize: '9px', letterSpacing: '1px' }}>
          — click +/− to adjust scores 1–10
        </span>
      </div>
      <AchievementTable players={players} onAdjScore={adjScore} onAdjMult={adjMult} />

      <div className="divider" />
      <div className="section-label">
        Context Multipliers{' '}
        <span style={{ color: 'var(--muted)', fontSize: '9px', letterSpacing: '1px' }}>
          — same 3 categories applied equally to all players
        </span>
      </div>
      <ContextMultipliers players={players} onAdjCtx={adjCtx} />

      <div className="method-note">
        <span>Formula:</span> raw score = sum of 9 achievement metrics (each 1–10). Final = raw ×
        context multiplier. Base multiplier is 1.0 — the three modifiers adjust it up or down
        equally for every player. <span>Adjust any value to run your own scenario.</span>
      </div>

      <div className="divider" />
      <div className="section-label">
        Metric Methodology{' '}
        <span style={{ color: 'var(--muted)', fontSize: '9px', letterSpacing: '1px' }}>
          — tap any card to see how the score is calculated
        </span>
      </div>
      <Methodology />
    </>
  );
}
