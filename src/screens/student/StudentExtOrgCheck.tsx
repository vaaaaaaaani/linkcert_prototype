import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const checks = [
  { label: "Organization", value: "Northstar Technologies" },
  { label: "Domain", value: "northstartech.ca", mono: true },
  { label: "Trust Registry", value: "Registered", ok: true },
  { label: "Organization ID", value: "ORG-NT-01827", mono: true },
  { label: "Authorized Claim", value: "Employment / Placement Verification" },
  { label: "Signing Identity", value: "Active", ok: true },
  { label: "Account Status", value: "Approved", ok: true },
]

export default function StudentExtOrgCheck({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-verification-reqs")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Verification</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Verifying External Organization</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 720 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>Verifying External Organization</h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>LinkCert confirms the external organization is registered and permitted before any request is sent.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
            <div>
              {/* Verified result */}
              <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                <div style={{ padding: "14px 20px", background: "#F0FAF5", borderBottom: "1px solid #D1FAE5", display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p style={{ color: "#167A5A", fontWeight: 700, fontSize: 14, margin: 0 }}>Northstar Technologies — Verified in Trust Registry</p>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {checks.map(c => (
                      <div key={c.label} style={{ background: "#F9FAFB", borderRadius: 7, padding: "9px 12px", border: "1px solid #E4E7EC", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                        <div>
                          <p style={{ color: "#9CA3AF", fontSize: 9, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{c.label.toUpperCase()}</p>
                          <p style={{ color: c.ok ? "#167A5A" : "#111827", fontSize: 12, margin: 0, fontWeight: 500, fontFamily: c.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{c.value}</p>
                        </div>
                        {c.ok && (
                          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#F0FAF5", border: "1px solid #167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Approver */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 14px" }}>Request will be sent to</h3>
                <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px", background: "#F9FAFB", borderRadius: 9, border: "1px solid #E4E7EC" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#3157E5", flexShrink: 0 }}>ST</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: 0 }}>Sarah Thompson</p>
                    <p style={{ color: "#667085", fontSize: 11, margin: 0 }}>Placement Supervisor · Northstar Technologies</p>
                    <p style={{ color: "#9CA3AF", fontSize: 10, margin: "2px 0 0", fontFamily: "'JetBrains Mono', monospace" }}>sarah.thompson@northstartech.ca</p>
                  </div>
                  <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>Authorized</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 18 }}>
                <p style={{ color: "#374151", fontSize: 12, fontWeight: 700, margin: "0 0 8px" }}>What LinkCert verified</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Organization is registered in the LinkBlock trust registry", "Organization has an active attestation permission for this claim type", "Signing identity is active and verified", "A named, authorized approver is available"].map(item => (
                    <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginTop: 1, flexShrink: 0 }}><path d="M2 6.5l3 3 6-6" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ color: "#374151", fontSize: 12, lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#EEF2FF", border: "1px solid #C7D7FD", borderRadius: 10, padding: 14 }}>
                <p style={{ color: "#3157E5", fontSize: 12, fontWeight: 700, margin: "0 0 4px" }}>This is not an arbitrary email link</p>
                <p style={{ color: "#374151", fontSize: 11, margin: 0, lineHeight: 1.5 }}>Only registered organizations with a verified signing identity can participate in the attestation workflow.</p>
              </div>

              <button
                onClick={() => navigate("student-request-sent")}
                style={{ width: "100%", padding: "11px 16px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >
                Send Verification Request →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
