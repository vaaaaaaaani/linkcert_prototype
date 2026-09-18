import { useState } from "react"
import type { Screen } from "../App"

interface Props { navigate: (s: Screen) => void }

export default function Screen10ExternalPortal({ navigate }: Props) {
  const [checks, setChecks] = useState({ c1: false, c2: false, c3: false, c4: false })
  const [comment, setComment] = useState("")
  const allChecked = checks.c1 && checks.c2 && checks.c3 && checks.c4

  const toggle = (k: keyof typeof checks) => setChecks(p => ({ ...p, [k]: !p[k] }))

  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA" }}>
      {/* Simplified header — no institution sidebar */}
      <header style={{
        background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginLeft: 4 }}>Secure Attestation Portal</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Encrypted · Session expires 60 min</span>
        </div>
      </header>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px" }}>
        {/* Org badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{
            background: "#FFFFFF", border: "1px solid #E4E7EC",
            borderRadius: 10, padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 12, flex: 1
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#60A5FA" }}>NT</div>
            <div>
              <p style={{ color: "#111827", fontSize: 14, fontWeight: 700, margin: 0 }}>Northstar Technologies</p>
              <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>sarah.thompson@northstartech.ca</p>
            </div>
            <span style={{
              marginLeft: "auto", background: "#F4F0FD", color: "#6941C6",
              fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4,
              border: "1px solid #DDD6FE", letterSpacing: "0.02em"
            }}>REGISTERED EXTERNAL ORGANIZATION</span>
          </div>
        </div>

        {/* Request */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ padding: "18px 24px", borderBottom: "1px solid #E4E7EC", background: "#F9FAFB" }}>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>Algoma University requests your confirmation</h1>
            <p style={{ color: "#667085", fontSize: 13, margin: 0 }}>Review the placement details below and provide your attestation</p>
          </div>

          <div style={{ padding: "22px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              {[
                { label: "Recipient", value: "Olivia Chen" },
                { label: "Credential Claim", value: "Completed approved co-op placement" },
                { label: "Organization", value: "Northstar Technologies" },
                { label: "Position", value: "Software Developer Intern" },
                { label: "Placement Dates", value: "May 4 – August 28, 2026" },
                { label: "Required Hours", value: "560" },
                { label: "Reported Hours", value: "576" },
                { label: "Placement Supervisor", value: "Sarah Thompson" },
              ].map(item => (
                <div key={item.label} style={{ padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: "#111827", fontSize: 13, margin: 0, fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Checkboxes */}
            <div style={{
              background: "#F9FAFB", border: "1px solid #E4E7EC",
              borderRadius: 10, padding: "18px 20px", marginBottom: 16
            }}>
              <p style={{ color: "#374151", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Please confirm each of the following:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {([
                  ["c1", "The work placement was completed as described"],
                  ["c2", "Employment dates are correct (May 4 – August 28, 2026)"],
                  ["c3", "All required conditions and performance standards were satisfied"],
                  ["c4", "Submitted placement details are accurate to the best of my knowledge"],
                ] as [keyof typeof checks, string][]).map(([key, label]) => (
                  <label key={key} style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
                    <div
                      onClick={() => toggle(key)}
                      style={{
                        width: 18, height: 18, borderRadius: 4, border: `2px solid ${checks[key] ? "#3157E5" : "#D1D5DB"}`,
                        background: checks[key] ? "#3157E5" : "#FFFFFF", flexShrink: 0, marginTop: 1,
                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                        transition: "all 0.15s"
                      }}
                    >
                      {checks[key] && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5L8.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <span style={{ color: "#374151", fontSize: 13, lineHeight: 1.4 }}>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", color: "#374151", fontSize: 12, fontWeight: 500, marginBottom: 6 }}>Additional comments (optional)</label>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                rows={3}
                placeholder="Any notes or observations about this placement…"
                style={{
                  width: "100%", padding: "10px 14px", border: "1px solid #E4E7EC",
                  borderRadius: 8, fontSize: 13, color: "#111827", fontFamily: "inherit",
                  resize: "vertical", outline: "none", background: "#FFFFFF"
                }}
              />
            </div>

            {/* Important notice */}
            <div style={{
              background: "#EEF2FF", border: "1px solid #C7D7FD",
              borderRadius: 8, padding: "10px 14px", marginBottom: 20
            }}>
              <p style={{ color: "#3157E5", fontSize: 12, fontWeight: 700, margin: "0 0 3px" }}>You are signing an attestation event — not issuing an academic credential</p>
              <p style={{ color: "#374151", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                Your digital signature confirms only the external employment claim above. Algoma University retains full academic authority and issues the final credential with its own institution signing key.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  flex: 1, padding: "11px 20px", background: "#FFFFFF", color: "#374151",
                  border: "1px solid #E4E7EC", borderRadius: 8, fontSize: 13,
                  fontWeight: 500, cursor: "pointer", fontFamily: "inherit"
                }}
              >
                Request Correction
              </button>
              <button
                onClick={() => navigate("attestation-signed")}
                disabled={!allChecked}
                style={{
                  flex: 2, padding: "11px 20px",
                  background: allChecked ? "#3157E5" : "#E4E7EC",
                  color: allChecked ? "#FFFFFF" : "#9CA3AF",
                  border: "none", borderRadius: 8, fontSize: 13,
                  fontWeight: 600, cursor: allChecked ? "pointer" : "not-allowed",
                  fontFamily: "inherit", transition: "all 0.2s"
                }}
              >
                {allChecked ? "Approve & Sign Attestation →" : "Complete all confirmations to sign"}
              </button>
            </div>
          </div>
        </div>

        <p style={{ color: "#9CA3AF", fontSize: 11, textAlign: "center" }}>
          This session is encrypted and time-limited. Your signing action will be recorded in the LinkCert audit trail.
        </p>
      </div>
    </div>
  )
}
