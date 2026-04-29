function Origin() {
  return (
    <section className="page">
      <h1>出身</h1>
      <p>アトランティス（現在は水没中）</p>
      <h2>家系図</h2>
      <svg width="100%" viewBox="0 0 680 420" style={{ fontFamily: "sans-serif" }}>
        <defs>0
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* ── 祖父（父方） ── */}
        <rect x="60" y="40" width="120" height="44" rx="8" fill="#1D9E75" opacity="0.6" />
        <text x="120" y="62" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#084031">
          ギガ・ガガギゴ
        </text>

        {/* ── 祖母（父方） ── */}
        <rect x="220" y="40" width="120" height="44" rx="8" fill="#1D9E75" opacity="0.6" />
        <text x="280" y="62" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#084031">
          キミコ
        </text>

        {/* ── 祖父（母方） ── */}
        <rect x="370" y="40" width="120" height="56" rx="8" fill="#D85A30" opacity="0.6" />
        <text x="430" textAnchor="middle" fontSize="11" fontWeight="500" fill="#4A1B0C">
          <tspan x="430" y="58">"伝説の素潜り漁師"</tspan>
          <tspan x="430" dy="16">まっさる</tspan>
        </text>

        {/* ── 祖母（母方） ── */}
        <rect x="510" y="40" width="120" height="56" rx="8" fill="#D85A30" opacity="0.6" />
        <text x="570" textAnchor="middle" fontSize="11" fontWeight="500" fill="#4A1B0C">
          <tspan x="570" y="58">"歩く生活の知恵袋"</tspan>
          <tspan x="570" dy="16">チエコ</tspan>
        </text>

        {/* ── 祖父母間の結婚線 ── */}
        <line x1="180" y1="62" x2="220" y2="62" stroke="#888" strokeWidth="1.5" />
        <line x1="490" y1="62" x2="510" y2="62" stroke="#888" strokeWidth="1.5" />

        {/* ── 父方祖父母 → 父への線 ── */}
        <line x1="200" y1="62" x2="200" y2="110" stroke="#aaa" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="200" y1="110" x2="180" y2="110" stroke="#aaa" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="180" y1="110" x2="180" y2="160" stroke="#aaa" strokeWidth="1" strokeDasharray="4 3" />

        {/* ── 母方祖父母 → 母への線 ── */}
        <line x1="500" y1="62" x2="500" y2="110" stroke="#aaa" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="500" y1="110" x2="460" y2="110" stroke="#aaa" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="460" y1="110" x2="460" y2="160" stroke="#aaa" strokeWidth="1" strokeDasharray="4 3" />

        {/* ── 父 ── */}
        <rect x="120" y="160" width="120" height="56" rx="8" fill="#1D9E75" opacity="0.6" />
        <text x="180" textAnchor="middle" fontSize="9" fontWeight="500" fill="#084031">
          <tspan x="180" y="178">"笑いのエースストライカー"</tspan>
          <tspan x="180" dy="16">ダビットソン</tspan>
        </text>

        {/* ── 母 ── */}
        <rect x="400" y="160" width="120" height="56" rx="8" fill="#D85A30" opacity="0.6" />
        <text x="460" textAnchor="middle" fontSize="11" fontWeight="500" fill="#4A1B0C">
          <tspan x="460" y="178">"神託の天気予報士"</tspan>
          <tspan x="460" dy="16">ユキコ</tspan>
        </text>

        {/* ── 父母間の結婚線 ── */}
        <line x1="240" y1="182" x2="400" y2="182" stroke="#888" strokeWidth="1.5" />
        <line x1="320" y1="182" x2="320" y2="290" stroke="#888" strokeWidth="1.5" />

        {/* ── 私 ── */}
        <rect x="240" y="290" width="160" height="52" rx="10" fill="#7F77DD" opacity="0.8" />
        <text x="320" y="316" textAnchor="middle" dominantBaseline="central" fontSize="16" fontWeight="500" fill="#26215C">
          私
        </text>

        {/* ── 凡例 ── */}
        <rect x="40" y="375" width="14" height="14" rx="3" fill="#1D9E75" opacity="0.6" />
        <text x="60" y="386" fontSize="12" fill="#555">父方</text>
        <rect x="130" y="375" width="14" height="14" rx="3" fill="#D85A30" opacity="0.6" />
        <text x="150" y="386" fontSize="12" fill="#555">母方</text>
        <rect x="220" y="375" width="14" height="14" rx="3" fill="#7F77DD" opacity="0.6" />
        <text x="240" y="386" fontSize="12" fill="#555">自分</text>
      </svg>
    </section>
  )
}

export default Origin
