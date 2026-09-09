import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSScreen14TrustRegistry({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <div style={{ height: 16, width: 1, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
          <span style={{ color: "#94A3B8", fontSize: 13 }}>LinkBlock Trust Registry</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>TRUST ADMINISTRATION</span>
      </header>

      <div style={{ flex: 1, maxWidth: 760, margin: "0 auto", padding: "40px 24px", width: "100%" }}>
        {/* Success header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.02em" }}>NorthStar Technologies Activated</h1>
          <p style={{ color: "#667085", fontSize: 15, margin: 0 }}>Organization is now active in the LinkBlock Trust Registry</p>
        </div>

        {/* Trust Registry entry */}
        <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 16, overflow: "hidden", marginBottom: 24, boxShadow: "0 4px 20px rgba(22,122,90,0.08)" }}>
          <div style={{ padding: "16px 24px", background: "#F0FAF5", borderBottom: "1px solid #D1FAE5", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "#1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#60A5FA" }}>NT</div>
            <div>
              <p style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: 0 }}>NorthStar Technologies</p>
              <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>External Attestor / Employer</p>
            </div>
            <span style={{ marginLeft: "auto", background: "#167A5A", color: "#FFFFFF", fontSize: 11, fontWeight: 700, padding: "5px 12px", borderRadius: 6, letterSpacing: "0.04em" }}>ACTIVE</span>
          </div>

          <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Organization ID", value: "ORG-NT-01827", mono: true },
              { label: "Tenant", value: "tenant_northstar_001", mono: true },
              { label: "Verified Domain", value: "northstartech.ca", mono: true },
              { label: "Organization Type", value: "Employer" },
              { label: "Status", value: "ACTIVE", green: true },
              { label: "Approved Scope", value: "Employment / Placement Verification" },
              { label: "Administrator", value: "Sarah Thompson" },
              { label: "Authentication", value: "Verified", green: true },
              { label: "Signing Identity", value: "Active", green: true },
            ].map(item => (
              <div key={item.label} style={{ padding: "12px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                <p style={{ color: (item as any).green ? "#167A5A" : "#111827", fontSize: 12, margin: 0, fontWeight: (item as any).green ? 700 : 500, fontFamily: (item as any).mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's next */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "18px 22px", marginBottom: 24 }}>
          <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 12px" }}>NorthStar is now authorized to:</p>
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ flex: 1 }}>
              {["Receive attestation requests via their LinkCert workspace", "Sign employment and placement attestations", "Have attestations accepted into institutional workflows"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginTop: 3, flexShrink: 0 }}><path d="M1 6l3 3 7-7" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ color: "#374151", fontSize: 12 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              {["Access Algoma University's tenant or data", "Issue credentials on behalf of any institution", "Attest to academic or unrelated professional claims"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginTop: 3, flexShrink: 0 }}><path d="M2 2l8 8M10 2l-8 8" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <span style={{ color: "#374151", fontSize: 12 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigate("ns-request-inbox")}
            style={{ padding: "13px 32px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
          >
            Continue to Request →
          </button>
          <button
            onClick={() => navigate("ns-trust-details")}
            style={{ padding: "13px 20px", background: "#FFFFFF", color: "#374151", border: "1px solid #D1D5DB", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
          >
            View Trust Architecture
          </button>
        </div>
      </div>
    </div>
  )
}
