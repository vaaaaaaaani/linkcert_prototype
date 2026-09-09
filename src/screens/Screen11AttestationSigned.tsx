import type { Screen } from "../App"

import type { Persona } from "../App"
interface Props { navigate: (s: Screen) => void; persona?: Persona }

export default function Screen11AttestationSigned({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA" }}>
      <header style={{
        background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginLeft: 4 }}>Secure Attestation Portal</span>
        </div>
      </header>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px" }}>
        {/* Success state */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #167A5A",
          borderRadius: 16, overflow: "hidden", marginBottom: 20
        }}>
          <div style={{ background: "#167A5A", padding: "28px 32px", textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l6.5 6.5L23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h1 style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Attestation Recorded</h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: 0 }}>Your digital signature has been applied to the attestation event</p>
          </div>

          <div style={{ padding: "24px 28px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              {[
                { label: "Organization", value: "NorthStar Technologies" },
                { label: "Authorized Attestor", value: "Sarah Thompson" },
                { label: "Role", value: "Placement Supervisor" },
                { label: "Organization ID", value: "ORG-NT-01827", mono: true },
                { label: "Attestation ID", value: "ATT-2026-982271", mono: true },
                { label: "Signed", value: "August 25, 2026 · 10:52 AM" },
              ].map(item => (
                <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: "#111827", fontSize: 12, margin: 0, fontWeight: 500, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              <div style={{ background: "#F0FAF5", borderRadius: 8, padding: "12px 16px", border: "1px solid #D1FAE5" }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 4px", fontWeight: 600, letterSpacing: "0.04em" }}>SIGNATURE STATUS</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <p style={{ color: "#167A5A", fontSize: 14, fontWeight: 700, margin: 0 }}>Valid</p>
                </div>
              </div>
              <div style={{ background: "#F9FAFB", borderRadius: 8, padding: "12px 16px", border: "1px solid #E4E7EC" }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 4px", fontWeight: 600, letterSpacing: "0.04em" }}>EVIDENCE FINGERPRINT</p>
                <p style={{ color: "#111827", fontSize: 12, fontWeight: 600, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>7ac91f...30bd</p>
              </div>
            </div>

            {/* Authority distinction */}
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#EEF2FF", borderRadius: 10, padding: "14px 16px", marginBottom: 20, border: "1px solid #C7D7FD" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <p style={{ color: "#3157E5", fontSize: 13, fontWeight: 700, margin: "0 0 3px" }}>NorthStar signed the external attestation</p>
                <p style={{ color: "#374151", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                  This does not issue the credential. The signed attestation is returned to Algoma University for final institutional review and signing.
                </p>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: 16 }}>
                <div style={{ height: 1, flex: 1, background: "#E4E7EC" }} />
                <span style={{ color: "#9CA3AF", fontSize: 11 }}>Attestation complete</span>
                <div style={{ height: 1, flex: 1, background: "#E4E7EC" }} />
              </div>
              <button
                onClick={() => navigate("ns-request-inbox")}
                style={{
                  padding: "11px 28px", background: "#3157E5", color: "#FFFFFF",
                  border: "none", borderRadius: 8, fontSize: 13,
                  fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                }}
              >
                Return to NorthStar Requests →
              </button>
            </div>
          </div>
        </div>

        <p style={{ color: "#9CA3AF", fontSize: 11, textAlign: "center" }}>
          This attestation event has been recorded in the LinkCert audit trail with a tamper-evident hash.
        </p>
      </div>
    </div>
  )
}
