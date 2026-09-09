import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const timeline = [
  { label: "Submission received", done: true },
  { label: "Evidence protected", done: true },
  { label: "Verification policy determined", done: true },
  { label: "External organization verified", done: true },
  { label: "Waiting for external attestor", done: false, active: true },
  { label: "Institution review", done: false },
  { label: "Verified credential", done: false },
]

export default function StudentRequestSent({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-home")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Home</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Approval Tracking</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 680 }}>
          {/* Sent confirmation */}
          <div style={{ background: "#FFFFFF", border: "1px solid #167A5A", borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ background: "#F0FAF5", padding: "18px 24px", borderBottom: "1px solid #D1FAE5", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p style={{ color: "#167A5A", fontSize: 15, fontWeight: 700, margin: 0 }}>Verification Request Sent</p>
                <p style={{ color: "#167A5A", fontSize: 12, margin: 0, opacity: 0.75 }}>Secure request delivered to Northstar Technologies</p>
              </div>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                {[
                  { label: "Credential", value: "Professional Placement Credential" },
                  { label: "External Organization", value: "Northstar Technologies" },
                  { label: "Requested", value: "August 25, 2026" },
                  { label: "Status", value: "Waiting for External Attestation", warn: true },
                ].map(item => (
                  <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                    <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                    <p style={{ color: (item as any).warn ? "#B66A15" : "#111827", fontSize: 12, fontWeight: 600, margin: 0 }}>{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Demo: go to external portal */}
              <div style={{ background: "#EEF2FF", border: "1px solid #C7D7FD", borderRadius: 9, padding: "12px 16px", marginBottom: 16, display: "flex", gap: 10, alignItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p style={{ color: "#374151", fontSize: 12, margin: 0 }}>
                  <strong style={{ color: "#3157E5" }}>Demo:</strong> Sarah Thompson at Northstar Technologies will receive a secure request. View the external attestor's experience:
                  <button onClick={() => navigate("external-portal")} style={{ background: "none", border: "none", color: "#3157E5", fontSize: 12, cursor: "pointer", fontFamily: "inherit", fontWeight: 600, padding: "0 4px" }}>Open External Portal →</button>
                </p>
              </div>
            </div>
          </div>

          {/* Tracking timeline */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 18px" }}>Request Status</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timeline.map((step, i) => (
                <div key={step.label} style={{ display: "flex", gap: 14 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                      background: step.done ? "#167A5A" : step.active ? "#F4F0FD" : "#F9FAFB",
                      border: `1px solid ${step.done ? "#167A5A" : step.active ? "#6941C6" : "#E4E7EC"}`,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      {step.done
                        ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : step.active
                        ? <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6941C6", animation: "pulse 2s ease-in-out infinite" }} />
                        : <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D1D5DB" }} />
                      }
                    </div>
                    {i < timeline.length - 1 && <div style={{ width: 1, height: 18, background: "#E4E7EC", margin: "3px 0" }} />}
                  </div>
                  <div style={{ paddingBottom: i < timeline.length - 1 ? 12 : 0 }}>
                    <p style={{
                      fontSize: 13, margin: 0, fontWeight: step.active ? 600 : 400,
                      color: step.done ? "#167A5A" : step.active ? "#6941C6" : "#9CA3AF"
                    }}>{step.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20 }}>
              <button
                onClick={() => navigate("student-attestation-received")}
                style={{ width: "100%", padding: "10px 16px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >
                Attestation Received → View Update
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
