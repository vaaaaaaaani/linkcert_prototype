import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const checks = [
  { label: "Organization", value: "Northstar Technologies", status: "verified" },
  { label: "Domain", value: "northstartech.ca", mono: true, status: "verified" },
  { label: "Trust Registry", value: "Registered", status: "verified" },
  { label: "Organization ID", value: "ORG-NT-01827", mono: true, status: "verified" },
  { label: "Attestation Permission", value: "Employment / Placement Verification", status: "verified" },
  { label: "Signing Identity", value: "Active", status: "verified" },
  { label: "Signing Key", value: "Verified", status: "verified" },
  { label: "Account Status", value: "Approved", status: "verified" },
]

export default function Screen09VerifyExtOrg({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("external-requirement")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>External Requirement</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Verify External Approver</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Verify External Approver
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              Only registered organizations with an approved attestation role may sign external approval events.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Verification result */}
              <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "16px 22px", background: "#F0FAF5", borderBottom: "1px solid #D1FAE5", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p style={{ color: "#167A5A", fontWeight: 700, fontSize: 14, margin: 0 }}>Organization Verified in Trust Registry</p>
                    <p style={{ color: "#167A5A", fontSize: 12, margin: 0, opacity: 0.75 }}>All verification checks passed · LinkBlock Trust Registry</p>
                  </div>
                </div>

                <div style={{ padding: "20px 22px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {checks.map(check => (
                      <div key={check.label} style={{
                        background: "#F9FAFB", border: "1px solid #E4E7EC",
                        borderRadius: 8, padding: "11px 14px",
                        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12
                      }}>
                        <div style={{ minWidth: 0 }}>
                          <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{check.label.toUpperCase()}</p>
                          <p style={{
                            color: "#111827", fontSize: 12, margin: 0, fontWeight: 500,
                            fontFamily: check.mono ? "'JetBrains Mono', monospace" : "inherit",
                            wordBreak: "break-all"
                          }}>{check.value}</p>
                        </div>
                        <div style={{
                          width: 20, height: 20, borderRadius: "50%", background: "#F0FAF5",
                          border: "1px solid #167A5A", display: "flex", alignItems: "center",
                          justifyContent: "center", flexShrink: 0
                        }}>
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key principle */}
              <div style={{
                background: "#FFFFFF", border: "1px solid #E4E7EC",
                borderRadius: 12, padding: "16px 20px",
                display: "flex", gap: 14, alignItems: "flex-start"
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 4px" }}>LinkCert is not emailing a random person a link</p>
                  <p style={{ color: "#667085", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
                    Only registered organizations with an active account, approved attestation role, and a verified signing identity can participate in the approval workflow. The request goes to a specific, pre-authorized contact.
                  </p>
                </div>
              </div>
            </div>

            {/* Select approver */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 14px" }}>Select Registered Approver</h3>
                <div style={{
                  background: "#F9FAFB", border: "2px solid #3157E5",
                  borderRadius: 10, padding: "14px 16px", marginBottom: 14
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#3157E5" }}>ST</div>
                    <div>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: 0 }}>Sarah Thompson</p>
                      <p style={{ color: "#667085", fontSize: 11, margin: 0 }}>Placement Supervisor</p>
                    </div>
                    <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: "50%", background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#9CA3AF", fontSize: 11 }}>Email</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#374151", fontSize: 11 }}>sarah.thompson@northstartech.ca</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#9CA3AF", fontSize: 11 }}>Role</span>
                      <span style={{ color: "#374151", fontSize: 11, fontWeight: 500 }}>Placement Supervisor</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#9CA3AF", fontSize: 11 }}>Status</span>
                      <span style={{ color: "#167A5A", fontSize: 11, fontWeight: 600 }}>Active</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                  <p style={{ color: "#374151", fontSize: 12, fontWeight: 600, margin: "0 0 4px" }}>Attestation request will include:</p>
                  <ul style={{ color: "#667085", fontSize: 12, margin: 0, paddingLeft: 16, lineHeight: 1.7 }}>
                    <li>Recipient: Olivia Chen</li>
                    <li>Placement details & dates</li>
                    <li>Required confirmation checklist</li>
                    <li>Secure signing link (time-limited)</li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate("external-portal")}
                  style={{
                    width: "100%", padding: "11px 16px", background: "#3157E5",
                    color: "#FFFFFF", border: "none", borderRadius: 8,
                    fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Send Secure Approval Request →
                </button>
                <div style={{ marginTop: 10, padding: "10px 12px", background: "#EEF2FF", borderRadius: 6, border: "1px solid #C7D2FE" }}>
                  <p style={{ color: "#374151", fontSize: 11, margin: "0 0 4px", fontWeight: 600 }}>First time with a new organization?</p>
                  <button
                    onClick={() => navigate("ns-not-registered")}
                    style={{ background: "none", border: "none", padding: 0, color: "#3157E5", fontSize: 11, cursor: "pointer", fontFamily: "inherit", fontWeight: 600, textDecoration: "underline" }}
                  >
                    View onboarding flow for unregistered organizations →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
