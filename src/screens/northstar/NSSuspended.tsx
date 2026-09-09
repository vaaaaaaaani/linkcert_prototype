import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSSuspended({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <div style={{ height: 16, width: 1, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
          <span style={{ color: "#94A3B8", fontSize: 13 }}>LinkBlock Trust Administration</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600 }}>INTERNAL</span>
      </header>

      <div style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "40px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Organization Trust Lifecycle</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>External organization trust is not permanent — it can be suspended, restricted, or revoked.</p>

        {/* Suspended state card */}
        <div style={{ background: "#FFFFFF", border: "2px solid #F59E0B", borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
          <div style={{ padding: "16px 24px", background: "#FFFBEB", borderBottom: "1px solid #FCD34D", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "#92400E", fontSize: 15, fontWeight: 700, margin: "0 0 2px" }}>NorthStar Technologies</p>
              <p style={{ color: "#D97706", fontSize: 12, margin: 0 }}>Trust Status: SUSPENDED · Organization ID: ORG-NT-01827</p>
            </div>
            <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: 12, fontWeight: 800, padding: "5px 12px", borderRadius: 6, border: "1px solid #FCD34D", letterSpacing: "0.04em" }}>SUSPENDED</span>
          </div>

          <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ padding: "14px 16px", background: "#FFF5F5", borderRadius: 10, border: "1px solid #FCA5A5" }}>
              <p style={{ color: "#9CA3AF", fontSize: 10, fontWeight: 700, margin: "0 0 6px", letterSpacing: "0.04em" }}>NEW ATTESTATIONS</p>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#DC2626" strokeWidth="1.5"/><path d="M5 8h6" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span style={{ color: "#DC2626", fontSize: 14, fontWeight: 700 }}>DISABLED</span>
              </div>
              <p style={{ color: "#9CA3AF", fontSize: 11, margin: "6px 0 0" }}>NorthStar cannot issue new trusted attestations while suspended</p>
            </div>
            <div style={{ padding: "14px 16px", background: "#F0FAF5", borderRadius: 10, border: "1px solid #D1FAE5" }}>
              <p style={{ color: "#9CA3AF", fontSize: 10, fontWeight: 700, margin: "0 0 6px", letterSpacing: "0.04em" }}>HISTORICAL ATTESTATIONS</p>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#167A5A"/><path d="M4 8l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ color: "#167A5A", fontSize: 14, fontWeight: 700 }}>PRESERVED</span>
              </div>
              <p style={{ color: "#9CA3AF", fontSize: 11, margin: "6px 0 0" }}>Available for audit and verification of existing credentials</p>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
          <p style={{ color: "#374151", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
            Existing historical records remain preserved, but NorthStar cannot issue new trusted attestations while suspended. Any in-progress attestation requests will be placed on hold and institutions notified.
          </p>
        </div>

        {/* Trust lifecycle states */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 24px", marginBottom: 24 }}>
          <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Organization Trust Lifecycle States</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              { state: "PENDING", color: "#D97706", bg: "#FFFBEB", border: "#FCD34D", desc: "Onboarding in progress" },
              { state: "ACTIVE", color: "#167A5A", bg: "#F0FAF5", border: "#D1FAE5", desc: "Fully authorized to attest" },
              { state: "SUSPENDED", color: "#D97706", bg: "#FFFBEB", border: "#FCD34D", desc: "New attestations blocked" },
              { state: "RESTRICTED", color: "#0284C7", bg: "#F0F9FF", border: "#BAE6FD", desc: "Scope reduced" },
              { state: "REVOKED", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", desc: "Trust fully withdrawn" },
              { state: "EXPIRED", color: "#9CA3AF", bg: "#F9FAFB", border: "#E4E7EC", desc: "Periodic review required" },
            ].map(item => (
              <div key={item.state} style={{ padding: "10px 12px", background: item.bg, borderRadius: 8, border: `1px solid ${item.border}` }}>
                <p style={{ color: item.color, fontSize: 11, fontWeight: 800, margin: "0 0 3px", letterSpacing: "0.04em" }}>{item.state}</p>
                <p style={{ color: "#374151", fontSize: 11, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => navigate("ns-trust-registry-active")} style={{ padding: "12px 24px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
          ← Return to Trust Registry Entry
        </button>
      </div>
    </div>
  )
}
