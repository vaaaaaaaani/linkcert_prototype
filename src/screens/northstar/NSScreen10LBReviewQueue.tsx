import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSScreen10LBReviewQueue({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#0D1424", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.12)",
        padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <div style={{ height: 16, width: 1, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
          <span style={{ color: "#94A3B8", fontSize: 13 }}>LinkBlock Trust Administration</span>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>INTERNAL — NOT ACCESSIBLE TO INSTITUTIONS OR STUDENTS</span>
        </div>
      </header>

      {/* Sidebar + main */}
      <div style={{ flex: 1, display: "flex" }}>
        <nav style={{ width: 220, background: "#111827", borderRight: "1px solid rgba(255,255,255,0.08)", padding: "20px 0" }}>
          {[
            { label: "Review Queue", active: true, badge: "1" },
            { label: "Active Organizations", active: false },
            { label: "Suspended", active: false },
            { label: "Audit Log", active: false },
            { label: "Trust Registry", active: false },
          ].map(item => (
            <div key={item.label} style={{
              padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
              background: item.active ? "rgba(49,87,229,0.15)" : "transparent",
              borderLeft: item.active ? "3px solid #3157E5" : "3px solid transparent",
              cursor: "pointer"
            }}>
              <span style={{ color: item.active ? "#FFFFFF" : "#94A3B8", fontSize: 13, fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
              {item.badge && (
                <span style={{ background: "#DC2626", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 10 }}>{item.badge}</span>
              )}
            </div>
          ))}
        </nav>

        <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
          <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: 0 }}>Organization Review Queue</h1>
            <span style={{ background: "#FEF2F2", color: "#DC2626", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, border: "1px solid #FECACA" }}>1 REVIEW REQUIRED</span>
          </div>

          <div style={{ padding: "28px 32px" }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 20px", background: "#F9FAFB", borderBottom: "1px solid #E4E7EC", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 120px", gap: 12 }}>
                {["Organization", "Type", "Domain", "Requested Scope", "Status"].map(h => (
                  <span key={h} style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}>{h.toUpperCase()}</span>
                ))}
              </div>

              <div style={{ padding: "18px 20px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 120px", gap: 12, alignItems: "center" }}>
                <div>
                  <p style={{ color: "#111827", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>NorthStar Technologies Inc.</p>
                  <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>sarah.thompson@northstartech.ca</p>
                </div>
                <span style={{ color: "#374151", fontSize: 13 }}>Employer</span>
                <span style={{ color: "#374151", fontSize: 12, fontFamily: "'JetBrains Mono', monospace" }}>northstartech.ca</span>
                <span style={{ color: "#374151", fontSize: 13 }}>Employment / Placement Verification</span>
                <span style={{ background: "#FFFBEB", color: "#D97706", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, border: "1px solid #FCD34D", textAlign: "center" }}>REVIEW REQUIRED</span>
              </div>

              <div style={{ padding: "0 20px 18px", display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => navigate("ns-lb-org-review")}
                  style={{
                    padding: "9px 20px", background: "#3157E5", color: "#FFFFFF",
                    border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Open Review →
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
