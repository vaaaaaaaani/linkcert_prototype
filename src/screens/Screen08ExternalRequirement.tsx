import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function Screen08ExternalRequirement({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("batch-review")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Batch Review</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>External Party Requirement</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              External Attestation Required
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              This credential type requires confirmation from a registered external organization before institution signing can proceed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Credential summary */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 18px" }}>Credential Requiring External Confirmation</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "Credential Type", value: "Co-op / Professional Placement Credential" },
                    { label: "Recipient", value: "Olivia Chen" },
                    { label: "Issuing Institution", value: "Algoma University" },
                    { label: "Credential ID", value: "DRAFT-AU-2026-009821", mono: true },
                    { label: "Program", value: "Computer Science — Co-op Stream" },
                    { label: "Completion", value: "August 28, 2026" },
                  ].map(item => (
                    <div key={item.label}>
                      <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 3px", fontWeight: 500 }}>{item.label.toUpperCase()}</p>
                      <p style={{ color: "#111827", fontSize: 13, margin: 0, fontWeight: 500, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required claim */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>External Attestation Required</h2>
                <div style={{
                  background: "#F4F0FD", border: "1px solid #DDD6FE",
                  borderRadius: 10, padding: "16px 20px", marginBottom: 16
                }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8, background: "#6941C6",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: "#6941C6", fontSize: 12, fontWeight: 700, margin: "0 0 2px", letterSpacing: "0.03em" }}>EXTERNAL ORGANIZATION REQUIRED</p>
                      <p style={{ color: "#111827", fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Northstar Technologies</p>
                      <p style={{ color: "#667085", fontSize: 12, margin: "0 0 8px" }}>Role: Placement Employer</p>
                      <div style={{ background: "#FFFFFF", borderRadius: 6, padding: "8px 12px", border: "1px solid #DDD6FE" }}>
                        <p style={{ color: "#374151", fontSize: 12, fontWeight: 600, margin: "0 0 2px" }}>Required Attestation Claim</p>
                        <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>Confirm successful completion of approved work placement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#FFF8ED", borderRadius: 8, padding: "10px 14px",
                  border: "1px solid #FDE68A"
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B66A15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p style={{ color: "#92400E", fontSize: 12, margin: 0 }}>
                    <strong>Waiting for registered external attestor.</strong> LinkCert must verify Northstar Technologies before sending the request.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: verify first */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 12px" }}>Required Before Sending</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Organization registered in trust registry", done: false },
                    { label: "Attestation permission verified", done: false },
                    { label: "Signing identity active", done: false },
                    { label: "Account status approved", done: false },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        background: item.done ? "#F0FAF5" : "#F9FAFB",
                        border: `1px solid ${item.done ? "#167A5A" : "#E4E7EC"}`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {item.done
                          ? <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D1D5DB" }} />
                        }
                      </div>
                      <span style={{ color: "#374151", fontSize: 12 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#EEF2FF", border: "1px solid #C7D7FD", borderRadius: 12, padding: 18 }}>
                <p style={{ color: "#3157E5", fontSize: 12, fontWeight: 700, margin: "0 0 6px" }}>Verify Before Requesting</p>
                <p style={{ color: "#374151", fontSize: 12, lineHeight: 1.5, margin: "0 0 14px" }}>
                  LinkCert will verify Northstar Technologies in the trust registry before sending any attestation request.
                </p>
                <button
                  onClick={() => navigate("verify-ext-org")}
                  style={{
                    width: "100%", padding: "10px 16px", background: "#3157E5",
                    color: "#FFFFFF", border: "none", borderRadius: 8,
                    fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Verify Northstar Technologies →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
