import type { Screen } from "../../App"
import Sidebar from "../../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const steps = [
  { label: "Credential submitted", done: true },
  { label: "Evidence protected", done: true },
  { label: "External verification required", done: true },
  { label: "NorthStar invited", done: true },
  { label: "Organization onboarding", done: false, active: true },
  { label: "External attestation", done: false, active: false },
  { label: "Institution review", done: false, active: false },
  { label: "Credential verified", done: false, active: false },
]

export default function NSScreen02InvitationSent({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("ns-not-registered")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Organization Not Registered</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Invitation Sent</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 900 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Invitation Sent to NorthStar Technologies
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              NorthStar must complete LinkCert organization onboarding before responding to the verification request.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Invitation details */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "16px 22px", background: "#F0F9FF", borderBottom: "1px solid #BAE6FD", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0284C7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ color: "#0284C7", fontWeight: 700, fontSize: 14, margin: 0 }}>Invitation Successfully Sent</p>
                    <p style={{ color: "#0284C7", fontSize: 12, margin: 0, opacity: 0.8 }}>Secure onboarding link delivered · Expires 72 hours</p>
                  </div>
                  <span style={{ marginLeft: "auto", background: "#E0F2FE", color: "#0369A1", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: "0.04em", border: "1px solid #BAE6FD" }}>WAITING FOR ORGANIZATION</span>
                </div>

                <div style={{ padding: "20px 22px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { label: "Organization", value: "NorthStar Technologies" },
                      { label: "Contact", value: "sarah.thompson@northstartech.ca", mono: true },
                      { label: "Requested Purpose", value: "Employment / Placement Verification" },
                      { label: "Requested For", value: "Olivia Chen" },
                      { label: "Status", value: "Waiting for Organization", amber: true },
                      { label: "Invitation Expires", value: "72 hours" },
                    ].map(item => (
                      <div key={item.label} style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 8, padding: "11px 14px" }}>
                        <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                        <p style={{
                          color: (item as any).amber ? "#D97706" : "#111827",
                          fontSize: 12, margin: 0,
                          fontWeight: (item as any).amber ? 700 : 500,
                          fontFamily: (item as any).mono ? "'JetBrains Mono', monospace" : "inherit"
                        }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 12px" }}>What happens while we wait</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "NorthStar receives a secure invitation email with a time-limited onboarding link.",
                    "NorthStar completes identity, domain, and representative verification.",
                    "LinkBlock Trust Administration reviews and approves the application.",
                    "Once approved, the attestation request is automatically forwarded to NorthStar.",
                  ].map((text, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#EEF2FF", border: "1px solid #C7D2FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <span style={{ color: "#3157E5", fontSize: 10, fontWeight: 700 }}>{i + 1}</span>
                      </div>
                      <p style={{ color: "#374151", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => navigate("ns-invitation-email")}
                  style={{
                    padding: "11px 24px", background: "#3157E5", color: "#FFFFFF",
                    border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  View NorthStar's Perspective →
                </button>
                <button
                  onClick={() => navigate("batch-review")}
                  style={{
                    padding: "11px 20px", background: "#FFFFFF", color: "#374151",
                    border: "1px solid #D1D5DB", borderRadius: 8, fontSize: 13, fontWeight: 500,
                    cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Back to Batch Review
                </button>
              </div>
            </div>

            {/* Student progress */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", margin: "0 0 6px", letterSpacing: "0.06em" }}>STUDENT TRACKING</h3>
              <p style={{ color: "#667085", fontSize: 11, margin: "0 0 18px" }}>Olivia Chen · Professional Placement Credential</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? 14 : 0 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: "50%",
                        background: step.done ? "#167A5A" : (step as any).active ? "#3157E5" : "transparent",
                        border: step.done ? "none" : (step as any).active ? "2px solid #3157E5" : "2px solid #D1D5DB",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {step.done && <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        {(step as any).active && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3157E5" }} />}
                      </div>
                      {i < steps.length - 1 && <div style={{ width: 1, height: 12, background: "#E4E7EC", marginTop: 2 }} />}
                    </div>
                    <p style={{
                      color: step.done ? "#167A5A" : (step as any).active ? "#111827" : "#9CA3AF",
                      fontSize: 11, margin: 0, fontWeight: step.done || (step as any).active ? 600 : 400,
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
