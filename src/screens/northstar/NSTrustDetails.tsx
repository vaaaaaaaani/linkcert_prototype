import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSTrustDetails({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
        </div>
        <button onClick={() => navigate("ns-trust-registry-active")} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#FFFFFF", fontSize: 12, cursor: "pointer", padding: "6px 14px", borderRadius: 6, fontFamily: "inherit" }}>← Back</button>
      </header>

      <div style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "40px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Trust Architecture</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 32px" }}>
          NorthStar never enters Algoma University's tenant. Only the specific scope-limited verification request is shared.
        </p>

        {/* Architecture diagram */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 16, padding: "32px", marginBottom: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            {[
              { label: "ALGOMA UNIVERSITY", sub: "tenant_algoma_001", color: "#1E3A5F", textColor: "#60A5FA", bg: "#0F172A" },
              { arrow: "Specific Attestation Request", note: "Scope-limited — no tenant access" },
              { label: "LINKCERT TRUST + WORKFLOW LAYER", sub: "Validates request against approved scope", color: "#3157E5", textColor: "#FFFFFF", bg: "#3157E5" },
              { arrow: "Routed Request" },
              { label: "NORTHSTAR TECHNOLOGIES", sub: "tenant_northstar_001", color: "#167A5A", textColor: "#FFFFFF", bg: "#167A5A" },
              { arrow: "Signed Attestation", note: "Scope: Employment / Placement only" },
              { label: "LINKCERT", sub: "Validates attestation signature + scope", color: "#6941C6", textColor: "#FFFFFF", bg: "#6941C6" },
              { arrow: "Verified Attestation" },
              { label: "ALGOMA UNIVERSITY WORKFLOW", sub: "Institution review → signing → credential", color: "#1E3A5F", textColor: "#60A5FA", bg: "#0F172A" },
            ].map((item, i) => {
              if ((item as any).arrow) {
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "8px 0" }}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M8 0v16M2 12l6 6 6-6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 600 }}>{(item as any).arrow}</span>
                    {(item as any).note && <span style={{ color: "#D97706", fontSize: 10, background: "#FFFBEB", padding: "1px 8px", borderRadius: 4, border: "1px solid #FCD34D" }}>{(item as any).note}</span>}
                  </div>
                )
              }
              return (
                <div key={i} style={{
                  background: item.bg, borderRadius: 10, padding: "14px 24px",
                  textAlign: "center", width: "100%", maxWidth: 400
                }}>
                  <p style={{ color: item.textColor, fontSize: 14, fontWeight: 700, margin: "0 0 3px" }}>{item.label}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>{item.sub}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key principles */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
          <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Key Trust Principles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "NorthStar has its own isolated LinkCert tenant with no visibility into Algoma's environment.",
              "Only the specific attestation request (not any student or institution data) crosses tenant boundaries.",
              "NorthStar's signing key is scoped to employment and placement attestations only.",
              "Algoma University's Registrar performs the final institutional review and issues the credential.",
              "The signed attestation from NorthStar is one piece of evidence in Algoma's issuance workflow.",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "8px 12px", background: "#F9FAFB", borderRadius: 7 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 3 }}><path d="M1 6l3 3 7-7" stroke="#3157E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ color: "#374151", fontSize: 12 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => navigate("ns-request-inbox")} style={{ padding: "12px 28px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            Continue to Request →
          </button>
          <button onClick={() => navigate("ns-returning-org")} style={{ padding: "12px 20px", background: "#FFFFFF", color: "#374151", border: "1px solid #D1D5DB", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            View Returning Org Case
          </button>
        </div>
      </div>
    </div>
  )
}
