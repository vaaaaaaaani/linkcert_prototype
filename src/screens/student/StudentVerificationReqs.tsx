import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function StudentVerificationReqs({ navigate, currentScreen }: Props) {
  const steps = [
    { label: "Student identity authenticated", done: true },
    { label: "Evidence fingerprint created", done: true },
    { label: "Issuing / external organization verification required", done: false, active: true },
    { label: "Institution review", done: false },
    { label: "Final verified status", done: false },
  ]

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-protect-submission")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Evidence Protection</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Verification Requirements</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 720 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>Verification Required</h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>This credential cannot become verified simply because it was uploaded. Required checks must be completed.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Verification checklist */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Required Verification Steps</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {steps.map((step, i) => (
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
                        {i < steps.length - 1 && <div style={{ width: 1, height: 18, background: "#E4E7EC", margin: "3px 0" }} />}
                      </div>
                      <div style={{ paddingBottom: i < steps.length - 1 ? 12 : 0 }}>
                        <p style={{ color: step.done ? "#167A5A" : step.active ? "#6941C6" : "#9CA3AF", fontSize: 13, fontWeight: step.active ? 600 : 400, margin: 0 }}>{step.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* External org required */}
              <div style={{ background: "#FFFFFF", border: "1px solid #6941C6", borderRadius: 12, padding: 24 }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.06em" }}>EXTERNAL VERIFICATION REQUIRED</p>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 9, background: "#F4F0FD", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#6941C6" }}>NT</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#111827", fontSize: 14, fontWeight: 700, margin: "0 0 2px" }}>Northstar Technologies</p>
                    <p style={{ color: "#667085", fontSize: 12, margin: "0 0 10px" }}>Authorized claim: Employment / Placement Verification</p>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ background: "#F0FAF5", border: "1px solid #D1FAE5", borderRadius: 6, padding: "5px 10px" }}>
                        <span style={{ color: "#167A5A", fontSize: 11, fontWeight: 600 }}>✓ Registered in trust registry</span>
                      </div>
                      <div style={{ background: "#F0FAF5", border: "1px solid #D1FAE5", borderRadius: 6, padding: "5px 10px" }}>
                        <span style={{ color: "#167A5A", fontSize: 11, fontWeight: 600 }}>✓ Signing identity active</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 14, padding: "10px 14px", background: "#F4F0FD", borderRadius: 8 }}>
                  <p style={{ color: "#6941C6", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                    <strong>Status: External verification required.</strong> LinkCert has identified the required registered attestor. You can initiate the request below.
                  </p>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 12px" }}>Submission Summary</h3>
                {[
                  { label: "Credential", value: "AWS Cloud Practitioner" },
                  { label: "Org", value: "Amazon Web Services" },
                  { label: "Number", value: "AWS-CP-482910", mono: true },
                  { label: "Evidence", value: "aws_certificate.pdf" },
                  { label: "Fingerprint", value: "74bc19ef...2a91", mono: true },
                  { label: "Version", value: "v1" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F3F4F6" }}>
                    <span style={{ color: "#9CA3AF", fontSize: 11 }}>{item.label}</span>
                    <span style={{ color: "#111827", fontSize: 11, fontWeight: 500, fontFamily: item.mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#F4F0FD", border: "1px solid #DDD6FE", borderRadius: 10, padding: 14 }}>
                <p style={{ color: "#6941C6", fontSize: 12, fontWeight: 700, margin: "0 0 4px" }}>What happens next</p>
                <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                  LinkCert will verify Northstar Technologies in the trust registry and send a secure attestation request to an authorized approver.
                </p>
              </div>

              <button
                onClick={() => navigate("student-ext-org-check")}
                style={{ width: "100%", padding: "11px 16px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              >
                Request Verification →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
