import type { Screen } from "../../App"
import Sidebar from "../../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const steps = [
  { label: "External organization identified", done: true, active: false },
  { label: "Organization onboarding required", done: false, active: true },
  { label: "Organization identity verification", done: false, active: false },
  { label: "Authority review", done: false, active: false },
  { label: "Authorized representative verification", done: false, active: false },
  { label: "Signing identity activation", done: false, active: false },
  { label: "Trust Registry activation", done: false, active: false },
]

export default function NSScreen01NotRegistered({ navigate, currentScreen }: Props) {
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
          <button onClick={() => navigate("verify-ext-org")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Verify External Approver</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Organization Not Registered</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 900 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              NorthStar Technologies Is Not Yet Registered
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              NorthStar Technologies must complete organization verification before a trusted external attestation can be accepted.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Trust Registry result */}
              <div style={{ background: "#FFFFFF", border: "1px solid #FCA5A5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "16px 22px", background: "#FEF2F2", borderBottom: "1px solid #FECACA", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 5v4M8 11h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <p style={{ color: "#DC2626", fontWeight: 700, fontSize: 14, margin: 0 }}>Organization Not Registered in Trust Registry</p>
                    <p style={{ color: "#DC2626", fontSize: 12, margin: 0, opacity: 0.75 }}>LinkBlock Trust Registry · Search completed</p>
                  </div>
                  <span style={{ marginLeft: "auto", background: "#FEE2E2", color: "#B91C1C", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: "0.04em", border: "1px solid #FECACA" }}>NOT REGISTERED</span>
                </div>

                <div style={{ padding: "20px 22px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { label: "Organization", value: "NorthStar Technologies", mono: false },
                      { label: "Domain", value: "northstartech.ca", mono: true },
                      { label: "Requested Verification", value: "Employment / Placement Verification", mono: false },
                      { label: "Trust Registry", value: "NOT REGISTERED", mono: false, red: true },
                    ].map(item => (
                      <div key={item.label} style={{
                        background: "#F9FAFB", border: "1px solid #E4E7EC",
                        borderRadius: 8, padding: "11px 14px",
                      }}>
                        <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                        <p style={{
                          color: item.red ? "#DC2626" : "#111827",
                          fontSize: 12, margin: 0, fontWeight: item.red ? 700 : 500,
                          fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit"
                        }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 6px" }}>Organization onboarding required before attestation</p>
                  <p style={{ color: "#667085", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
                    An organization is not trusted simply because a student or institution named it. NorthStar Technologies must independently establish its identity, domain ownership, and attestation authority through LinkCert's formal onboarding process.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("ns-invitation-sent")}
                style={{
                  padding: "12px 24px", background: "#3157E5", color: "#FFFFFF",
                  border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit", display: "flex",
                  alignItems: "center", gap: 8, alignSelf: "flex-start"
                }}
              >
                Invite NorthStar to LinkCert →
              </button>
            </div>

            {/* Progress tracker */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", margin: "0 0 18px", letterSpacing: "0.06em" }}>ONBOARDING PROGRESS</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? 16 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%",
                        background: step.done ? "#167A5A" : step.active ? "#3157E5" : "transparent",
                        border: step.done ? "none" : step.active ? "2px solid #3157E5" : "2px solid #D1D5DB",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {step.done && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        {step.active && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3157E5" }} />}
                      </div>
                      {i < steps.length - 1 && <div style={{ width: 1, height: 14, background: "#E4E7EC", marginTop: 2 }} />}
                    </div>
                    <p style={{
                      color: step.done ? "#167A5A" : step.active ? "#111827" : "#9CA3AF",
                      fontSize: 12, margin: 0, fontWeight: step.active ? 600 : step.done ? 600 : 400,
                      paddingTop: 1
                    }}>{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
