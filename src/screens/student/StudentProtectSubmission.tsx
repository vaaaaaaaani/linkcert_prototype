import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const steps = [
  { label: "Evidence Received", detail: "aws_certificate.pdf · 2.4 MB", done: true },
  { label: "Original File Preserved", detail: "Immutable copy stored in your tenant namespace", done: true },
  { label: "SHA-256 Fingerprint Created", detail: "74bc19ef...2a91", done: true, mono: true },
  { label: "Submission Version 1 Created", detail: "v1 · baseline record established", done: true },
  { label: "Provenance Event Recorded", detail: "Hash-linked anchor event H0 created", done: true },
]

export default function StudentProtectSubmission({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-add-credential")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Add Credential</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Evidence Protection</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 720 }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F4F0FD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: 0, letterSpacing: "-0.01em" }}>Evidence Protection</h1>
            </div>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>Your submission has been received and protected with cryptographic fingerprints before any verification begins.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
            {/* Pipeline */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 18px" }}>Protection Pipeline</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {steps.map((s, i) => (
                  <div key={s.label} style={{ display: "flex", gap: 14 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#167A5A", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      {i < steps.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 20, background: "#E4E7EC", margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < steps.length - 1 ? 14 : 0 }}>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>{s.label}</p>
                      <p style={{ color: "#667085", fontSize: 11, margin: 0, fontFamily: s.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Protection record */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 14px" }}>Protection Record</h3>
                {[
                  { label: "Original Evidence", value: "aws_certificate.pdf" },
                  { label: "Fingerprint", value: "74bc19ef...2a91", mono: true },
                  { label: "Version", value: "v1" },
                  { label: "Submitted by", value: "Olivia Chen" },
                  { label: "Role", value: "Student" },
                  { label: "Tenant", value: "tenant_algoma_001", mono: true },
                  { label: "Timestamp", value: "August 25, 2026" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #F3F4F6" }}>
                    <span style={{ color: "#667085", fontSize: 11 }}>{item.label}</span>
                    <span style={{ color: "#111827", fontSize: 11, fontWeight: 500, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 10, padding: 14 }}>
                <p style={{ color: "#92400E", fontSize: 12, fontWeight: 700, margin: "0 0 4px" }}>No evidence placed on blockchain</p>
                <p style={{ color: "#B45309", fontSize: 11, margin: 0, lineHeight: 1.5 }}>
                  Your file is stored in your tenant-scoped storage. Only cryptographic fingerprints are used for verification.
                </p>
              </div>

              <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 10, padding: 14 }}>
                <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  The original learner submission is preserved. Any later correction creates a new version rather than silently replacing the original.
                </p>
              </div>

              <button
                onClick={() => navigate("student-verification-reqs")}
                style={{ width: "100%", padding: "11px 16px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >
                Continue to Verification →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
