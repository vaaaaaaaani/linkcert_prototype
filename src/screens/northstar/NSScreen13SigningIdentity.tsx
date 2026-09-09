import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSScreen13SigningIdentity({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#0D1424", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <div style={{ height: 16, width: 1, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
          <span style={{ color: "#94A3B8", fontSize: 13 }}>LinkBlock Trust Administration</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>INTERNAL</span>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ maxWidth: 620, width: "100%" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ background: "#1E3A5F", padding: "24px 28px", display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700, margin: "0 0 2px" }}>Configure External Attestation Signing</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, margin: 0 }}>NorthStar Technologies · External Attestations Only</p>
              </div>
            </div>

            <div style={{ padding: "28px 32px" }}>
              {/* Prerequisites */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: "#374151", fontSize: 13, fontWeight: 700, margin: "0 0 12px" }}>Prerequisites</p>
                {[
                  "Organization approved",
                  "Attestation scope approved",
                  "Organization administrator verified",
                  "Signing identity created",
                  "Public verification identity registered",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 14px", background: "#F0FAF5", borderRadius: 7, marginBottom: 6, border: "1px solid #D1FAE5" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ color: "#059669", fontSize: 12 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Signing identity details */}
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: 0 }}>Signing Identity Configuration</p>
                  <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, border: "1px solid #D1FAE5" }}>ATTESTATION SIGNING ACTIVE</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Signing Identity", value: "NorthStar Technologies" },
                    { label: "Key Status", value: "Active", green: true },
                    { label: "Public Verification Identity", value: "Registered", green: true },
                    { label: "Key Version", value: "1", mono: true },
                    { label: "Purpose", value: "External Attestations Only" },
                    { label: "Scope", value: "Employment / Placement Verification" },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "10px 12px", background: "#FFFFFF", borderRadius: 7, border: "1px solid #E4E7EC" }}>
                      <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                      <p style={{ color: (item as any).green ? "#167A5A" : "#111827", fontSize: 12, margin: 0, fontWeight: (item as any).green ? 700 : 500, fontFamily: (item as any).mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 12, padding: "10px 14px", background: "#FFF1F2", borderRadius: 7, border: "1px solid #FECDD3", display: "flex", gap: 8, alignItems: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  <p style={{ color: "#BE123C", fontSize: 11, margin: 0, fontWeight: 500 }}>Private key material is never exposed. Only the public verification identity is registered.</p>
                </div>
              </div>

              <div style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
                <p style={{ color: "#3730A3", fontSize: 12, margin: 0 }}>
                  NorthStar's signing identity is used only to sign external attestations within its approved scope. NorthStar does not sign Algoma University's final credential.
                </p>
              </div>

              <button
                onClick={() => navigate("ns-trust-registry-active")}
                style={{ width: "100%", padding: "12px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >
                Activate in Trust Registry →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
