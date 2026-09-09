import { useState } from "react"
import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

const StepBar = ({ step }: { step: number }) => {
  const steps = ["Organization Details", "Verify Domain", "Verify Organization", "Attestation Authority", "Verify Representative", "Review", "Activate"]
  return (
    <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "12px 40px", display: "flex", gap: 0, overflowX: "auto" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 12px" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: i < step ? "#167A5A" : i === step ? "#3157E5" : "#F3F4F6", border: i === step ? "2px solid #3157E5" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {i < step ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> : <span style={{ color: i === step ? "#FFFFFF" : "#9CA3AF", fontSize: 10, fontWeight: 700 }}>{i + 1}</span>}
            </div>
            <span style={{ color: i === step ? "#111827" : i < step ? "#167A5A" : "#9CA3AF", fontSize: 12, fontWeight: i === step ? 700 : 500, whiteSpace: "nowrap" }}>{s}</span>
          </div>
          {i < steps.length - 1 && <div style={{ width: 20, height: 1, background: "#E4E7EC", flexShrink: 0 }} />}
        </div>
      ))}
    </div>
  )
}

export default function NSScreen06VerifyDomain({ navigate }: Props) {
  const [phase, setPhase] = useState<"choose" | "sent" | "verified">("choose")
  const [selected, setSelected] = useState("corporate-email")

  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginLeft: 4 }}>Organization Onboarding</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Step 2 of 7</span>
      </header>
      <StepBar step={1} />

      <div style={{ flex: 1, maxWidth: 680, margin: "0 auto", padding: "32px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Verify Official Organization Domain</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>
          We need to establish that your organization controls the domain being claimed.
        </p>

        {/* Domain badge */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 10, padding: "14px 20px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
          </div>
          <div>
            <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 600, margin: "0 0 2px", letterSpacing: "0.04em" }}>CLAIMED DOMAIN</p>
            <p style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>northstartech.ca</p>
          </div>
          {phase === "verified" && (
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 6, padding: "6px 12px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6l3 3 7-7" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 700 }}>VERIFIED</span>
            </div>
          )}
        </div>

        {phase === "choose" && (
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "24px 28px", marginBottom: 24 }}>
            <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 16px" }}>Select Verification Method</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { id: "corporate-email", label: "Corporate Email Verification", desc: "Send a verification code to an email at your claimed domain", recommended: true },
                { id: "dns", label: "DNS Verification", desc: "Add a TXT record to your domain's DNS configuration" },
                { id: "sso", label: "Organization SSO", desc: "Authenticate via your organization's single sign-on provider" },
                { id: "manual", label: "Manual Verification", desc: "Submit documentation for manual review by LinkBlock" },
              ].map(method => (
                <div
                  key={method.id}
                  onClick={() => setSelected(method.id)}
                  style={{
                    padding: "14px 16px", borderRadius: 8, cursor: "pointer",
                    border: selected === method.id ? "2px solid #3157E5" : "1px solid #E4E7EC",
                    background: selected === method.id ? "#EEF2FF" : "#F9FAFB",
                    display: "flex", gap: 12, alignItems: "flex-start"
                  }}
                >
                  <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${selected === method.id ? "#3157E5" : "#D1D5DB"}`, background: selected === method.id ? "#3157E5" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1, flexShrink: 0 }}>
                    {selected === method.id && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFFFFF" }} />}
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>{method.label}</p>
                      {method.recommended && <span style={{ background: "#EEF2FF", color: "#3157E5", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>RECOMMENDED</span>}
                    </div>
                    <p style={{ color: "#667085", fontSize: 12, margin: "2px 0 0" }}>{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {phase === "choose" && (
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
            <p style={{ color: "#374151", fontSize: 13, fontWeight: 600, margin: "0 0 4px" }}>Send verification to:</p>
            <p style={{ color: "#111827", fontSize: 14, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>sarah.thompson@northstartech.ca</p>
          </div>
        )}

        {phase === "sent" && (
          <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 12, padding: "20px 24px", marginBottom: 24, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0284C7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </div>
            <div>
              <p style={{ color: "#0284C7", fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Verification Email Sent</p>
              <p style={{ color: "#0369A1", fontSize: 13, margin: "0 0 12px" }}>A 6-digit code has been sent to sarah.thompson@northstartech.ca</p>
              <div style={{ display: "flex", gap: 8 }}>
                {["4", "8", "2", "1", "9", "3"].map((d, i) => (
                  <div key={i} style={{ width: 40, height: 48, border: "2px solid #BAE6FD", borderRadius: 8, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#111827", fontFamily: "'JetBrains Mono', monospace" }}>{d}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {phase === "verified" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            <div style={{ background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p style={{ color: "#167A5A", fontSize: 14, fontWeight: 700, margin: "0 0 2px" }}>Domain Verified</p>
                <p style={{ color: "#059669", fontSize: 13, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>✓ northstartech.ca</p>
              </div>
            </div>
            <div style={{ background: "#FFFBEB", border: "1px solid #FCD34D", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 10 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
              </svg>
              <p style={{ color: "#92400E", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
                Domain ownership is one identity check. It does not by itself grant attestation authority.
              </p>
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          {phase === "choose" && (
            <button onClick={() => setPhase("sent")} style={{ padding: "12px 28px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Send Verification Email
            </button>
          )}
          {phase === "sent" && (
            <button onClick={() => setPhase("verified")} style={{ padding: "12px 28px", background: "#167A5A", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Confirm Code ✓
            </button>
          )}
          {phase === "verified" && (
            <button onClick={() => navigate("ns-org-legitimacy")} style={{ padding: "12px 28px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
