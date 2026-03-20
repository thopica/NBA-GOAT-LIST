import { useState, useCallback } from 'react';
import { INITIAL_PLAYERS } from './data/players';
import Header from './components/Header';
import LiveRanking from './components/LiveRanking';
import AchievementTable from './components/AchievementTable';
import ContextMultipliers from './components/ContextMultipliers';
import Methodology from './components/Methodology';

function SectionHeader({ num, title, desc, accent, badge }) {
  return (
    <div className={`section-header section-header--${accent}`}>
      <div className="section-header-inner">
        <div className="section-num">{num}</div>
        <div className="section-text">
          <div className="section-title">{title}</div>
          <div className="section-desc">{desc}</div>
        </div>
        {badge && <div className="section-badge">{badge}</div>}
      </div>
    </div>
  );
}

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

      <SectionHeader
        num="1"
        title="Live Ranking"
        desc="Final scores update in real time as you adjust metrics below."
        accent="amber"
        badge="12 players"
      />
      <div className="section-body">
        <LiveRanking players={players} />
      </div>

      <SectionHeader
        num="2"
        title="Achievement Metrics"
        desc="Score each player 1–10 across 9 categories. Click +/− to adjust any value."
        accent="blue"
        badge="9 metrics"
      />
      <div className="section-body">
        <AchievementTable players={players} onAdjScore={adjScore} onAdjMult={adjMult} />
      </div>

      <SectionHeader
        num="3"
        title="Context Multipliers"
        desc="Applies a bonus or penalty equally to every player's raw score based on career context."
        accent="violet"
        badge="3 factors"
      />
      <div className="section-body">
        <ContextMultipliers players={players} onAdjCtx={adjCtx} />
      </div>

      <SectionHeader
        num="4"
        title="Methodology"
        desc="How each metric is scored — expand any card to see the formula and raw data."
        accent="green"
        badge="1 of 9 complete"
      />
      <div className="section-body">
        <Methodology />
      </div>
    </>
  );
}
