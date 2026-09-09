import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const timeline = [
  { label: "Submission received", done: true },
  { label: "Evidence protected", done: true },
  { label: "External organization verified", done: true },
  { label: "External attestation signed", done: true },
  { label: "Algoma University review", done: false, active: true },
  { label: "Verified credential", done: false },
]

export default function StudentAttestationReceived({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-request-sent")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Approval Tracking</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Attestation Received</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 680 }}>
          {/* Attestation received */}
          <div style={{ background: "#FFFFFF", border: "1px solid #6941C6", borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ background: "#F4F0FD", padding: "16px 22px", borderBottom: "1px solid #DDD6FE", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#6941C6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p style={{ color: "#6941C6", fontSize: 15, fontWeight: 700, margin: 0 }}>External Attestation Received</p>
                <p style={{ color: "#6941C6", fontSize: 12, margin: 0, opacity: 0.75 }}>Northstar Technologies has signed the attestation event</p>
              </div>
            </div>
            <div style={{ padding: "20px 22px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                {[
                  { label: "External Organization", value: "Northstar Technologies" },
                  { label: "Signed by", value: "Sarah Thompson" },
                  { label: "Attestation Status", value: "Valid", ok: true },
                  { label: "Signature", value: "Verified", ok: true },
                  { label: "Attestation ID", value: "ATT-2026-982271", mono: true },
                  { label: "Timestamp", value: "Aug 25, 2026 · 10:52 AM" },
                ].map(item => (
                  <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC" }}>
                    <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                    <p style={{ color: (item as any).ok ? "#167A5A" : "#111827", fontSize: 12, fontWeight: 600, margin: 0, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: "#EEF2FF", border: "1px solid #C7D7FD", borderRadius: 9, padding: "12px 16px", marginBottom: 16, display: "flex", gap: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  <strong>The external organization has verified the relevant claim.</strong> This does not automatically make it an Algoma University-issued credential. The submission is now with Algoma University for final institutional review.
                </p>
              </div>

              {/* Admin side note */}
              <div style={{ background: "#F9FAFB", border: "1px dashed #D1D5DB", borderRadius: 9, padding: "12px 16px", marginBottom: 16 }}>
                <p style={{ color: "#667085", fontSize: 11, fontWeight: 600, margin: "0 0 4px" }}>Demo: Admin perspective</p>
                <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 8px" }}>The submission now appears in the Algoma University administrator's Submissions queue for institutional review.</p>
                <button onClick={() => navigate("university-approval")} style={{ padding: "5px 12px", background: "#EEF2FF", color: "#3157E5", border: "1px solid #C7D7FD", borderRadius: 5, fontSize: 11, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                  View Admin Perspective →
                </button>
              </div>
            </div>
          </div>

          {/* Tracking timeline */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Credential Status</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timeline.map((step, i) => (
                <div key={step.label} style={{ display: "flex", gap: 12 }}>
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
                        ? <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6941C6" }} />
                        : <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D1D5DB" }} />
                      }
                    </div>
                    {i < timeline.length - 1 && <div style={{ width: 1, height: 16, background: "#E4E7EC", margin: "3px 0" }} />}
                  </div>
                  <div style={{ paddingBottom: i < timeline.length - 1 ? 10 : 0 }}>
                    <p style={{ fontSize: 13, margin: 0, fontWeight: step.active ? 600 : 400, color: step.done ? "#167A5A" : step.active ? "#6941C6" : "#9CA3AF" }}>{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <button onClick={() => navigate("student-verified-result")} style={{ width: "100%", padding: "10px 16px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                Credential Verified → View Result
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
