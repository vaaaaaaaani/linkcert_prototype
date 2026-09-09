import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

const provisioningSteps = [
  "Creating Organization ID",
  "Creating restricted LinkCert tenant",
  "Applying tenant isolation",
  "Creating external-attestor permissions",
  "Registering organization administrator",
]

export default function NSScreen12Provisioning({ navigate }: Props) {
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
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>INTERNAL</span>
        </div>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ maxWidth: 580, width: "100%" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ background: "#167A5A", padding: "24px 28px", display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <p style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700, margin: "0 0 2px" }}>Organization Approved</p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, margin: 0 }}>Creating NorthStar Technologies workspace</p>
              </div>
            </div>

            <div style={{ padding: "24px 28px" }}>
              {/* Provisioning steps */}
              <div style={{ marginBottom: 24 }}>
                {provisioningSteps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 14px", marginBottom: 6, background: "#F0FAF5", borderRadius: 8, border: "1px solid #D1FAE5" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ color: "#059669", fontSize: 13, fontWeight: 500 }}>{step}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: "auto" }}><path d="M1 6l3 3 7-7" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                ))}
              </div>

              {/* Organization result card */}
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 10, padding: "18px 20px", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#60A5FA" }}>NT</div>
                  <div>
                    <p style={{ color: "#111827", fontSize: 14, fontWeight: 700, margin: 0 }}>NorthStar Technologies</p>
                    <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>External Attestor / Employer</p>
                  </div>
                  <span style={{ marginLeft: "auto", background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, border: "1px solid #D1FAE5" }}>APPROVED</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Organization ID", value: "ORG-NT-01827", mono: true },
                    { label: "Tenant", value: "tenant_northstar_001", mono: true },
                    { label: "Trust Status", value: "APPROVED", green: true },
                    { label: "Organization Type", value: "External Attestor / Employer" },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "8px 12px", background: "#FFFFFF", borderRadius: 6, border: "1px solid #E4E7EC" }}>
                      <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                      <p style={{ color: (item as any).green ? "#167A5A" : "#111827", fontSize: 12, margin: 0, fontWeight: (item as any).green ? 700 : 500, fontFamily: (item as any).mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 8, padding: "12px 16px", marginBottom: 20, display: "flex", gap: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                </svg>
                <p style={{ color: "#3730A3", fontSize: 12, margin: 0 }}>
                  NorthStar Technologies receives its own restricted LinkCert environment. It never receives access to Algoma University's tenant.
                </p>
              </div>

              <button
                onClick={() => navigate("ns-signing-identity")}
                style={{ width: "100%", padding: "12px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >
                Configure Signing Identity →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
