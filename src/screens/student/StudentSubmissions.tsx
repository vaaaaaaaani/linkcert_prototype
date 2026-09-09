import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const submissions = [
  {
    id: "SUB-2026-00421",
    name: "Professional Placement Credential",
    type: "Co-op / Placement",
    org: "Northstar Technologies",
    submitted: "Aug 20, 2026",
    status: "verified",
    statusLabel: "Verified",
    statusColor: "#167A5A",
    statusBg: "#F0FAF5",
    step: "Complete",
    screen: "student-verified-result" as Screen,
  },
  {
    id: "SUB-2026-00388",
    name: "AWS Cloud Practitioner",
    type: "Professional Certification",
    org: "Amazon Web Services",
    submitted: "Aug 14, 2026",
    status: "pending",
    statusLabel: "Awaiting External Attestation",
    statusColor: "#B66A15",
    statusBg: "#FFFBF0",
    step: "External verification in progress",
    screen: "student-request-sent" as Screen,
  },
  {
    id: "SUB-2026-00301",
    name: "Google Data Analytics Certificate",
    type: "Professional Certificate",
    org: "Google / Coursera",
    submitted: "Jul 30, 2026",
    status: "correction",
    statusLabel: "Correction Requested",
    statusColor: "#C03737",
    statusBg: "#FFF5F5",
    step: "Review required",
    screen: "student-home" as Screen,
  },
  {
    id: "SUB-2026-00214",
    name: "First Aid & CPR Certification",
    type: "Safety Certification",
    org: "Canadian Red Cross",
    submitted: "Jun 12, 2026",
    status: "verified",
    statusLabel: "Verified",
    statusColor: "#167A5A",
    statusBg: "#F0FAF5",
    step: "Complete",
    screen: "student-credentials" as Screen,
  },
]

const statusIcon = (status: string) => {
  if (status === "verified") return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  if (status === "correction") return <span style={{ fontSize: 11 }}>⚠️</span>
  return <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#B66A15", animation: "pulse 2s ease-in-out infinite" }} />
}

export default function StudentSubmissions({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#111827", fontSize: 14, fontWeight: 600 }}>My Submissions</span>
          <button onClick={() => navigate("student-add-credential")} style={{ padding: "7px 14px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            + Add Credential
          </button>
        </div>

        <div style={{ padding: "28px 32px" }}>
          <div style={{ marginBottom: 22 }}>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: "0 0 5px", letterSpacing: "-0.01em" }}>Learner-Submitted Credentials</h1>
            <p style={{ color: "#667085", fontSize: 13, margin: 0 }}>Credentials you have submitted for verification. You can view status and evidence — only Algoma University administrators can approve or issue.</p>
          </div>

          {/* Access scope notice */}
          <div style={{ background: "#F4F0FD", border: "1px solid #DDD6FE", borderRadius: 10, padding: "12px 16px", marginBottom: 20, display: "flex", gap: 10, alignItems: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <p style={{ color: "#374151", fontSize: 12, margin: 0 }}>
              <strong style={{ color: "#6941C6" }}>Your records only</strong> — You can view status and your submitted evidence. Approval, issuance, and signing are performed by Algoma University administrators.
            </p>
          </div>

          {/* Submissions table */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #F3F4F6", display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr auto", gap: 12 }}>
              {["Credential", "Organization", "Submitted", "Status", "Actions"].map(h => (
                <span key={h} style={{ color: "#9CA3AF", fontSize: 10, fontWeight: 700, letterSpacing: "0.05em" }}>{h.toUpperCase()}</span>
              ))}
            </div>
            {submissions.map((sub, i) => (
              <div key={sub.id} style={{ padding: "16px 20px", borderBottom: i < submissions.length - 1 ? "1px solid #F3F4F6" : "none", display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr auto", gap: 12, alignItems: "center" }}>
                <div>
                  <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>{sub.name}</p>
                  <p style={{ color: "#9CA3AF", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", margin: "0 0 2px" }}>{sub.id}</p>
                  <span style={{ background: "#F3F4F6", color: "#667085", fontSize: 10, fontWeight: 500, padding: "2px 7px", borderRadius: 4 }}>{sub.type}</span>
                </div>
                <div>
                  <p style={{ color: "#374151", fontSize: 12, fontWeight: 500, margin: "0 0 2px" }}>{sub.org}</p>
                </div>
                <div>
                  <p style={{ color: "#667085", fontSize: 12, margin: "0 0 2px" }}>{sub.submitted}</p>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>{sub.step}</p>
                </div>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: sub.statusBg, color: sub.statusColor, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20, border: `1px solid ${sub.statusColor}30` }}>
                    {statusIcon(sub.status)}
                    {sub.statusLabel}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => navigate(sub.screen)} style={{ padding: "6px 12px", background: "#F9FAFB", color: "#374151", border: "1px solid #E4E7EC", borderRadius: 6, fontSize: 11, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                    View Status
                  </button>
                  {sub.status === "correction" && (
                    <button style={{ padding: "6px 12px", background: "#FFF5F5", color: "#C03737", border: "1px solid #FECACA", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                      Respond
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{ marginTop: 16, padding: "10px 14px", background: "#F9FAFB", borderRadius: 9, border: "1px solid #E4E7EC" }}>
            <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>
              <strong style={{ color: "#667085" }}>Reminder:</strong> Submitting a credential does not make it verified. Each submission undergoes evidence integrity protection, external attestation (where required), and institutional approval before a verified credential is issued.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
