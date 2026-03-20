export default function Header() {
  return (
    <header>
      <div>
        <div className="logo">
          <div className="logo-ball">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0d0f12" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18M5.5 5.5C8 8 9 10 9 12s-1 4-3.5 6.5M18.5 5.5C16 8 15 10 15 12s1 4 3.5 6.5" />
            </svg>
          </div>
          <div>
            <div className="logo-title">NBA GOAT Index</div>
            <div className="logo-sub">Scoring Framework v1.0</div>
          </div>
        </div>
      </div>
      <div className="header-tag">12 players · 9 metrics · 1 truth</div>
    </header>
  );
}
