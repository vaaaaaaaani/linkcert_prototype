import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

const StepBar = ({ step }: { step: number }) => {
  const steps = ["Organization Details", "Verify Domain", "Verify Organization", "Attestation Authority", "Verify Representative", "Review", "Activate"]
  return (
    <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "12px 40px", display: "flex", gap: 0, overflowX: "auto" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
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

export default function NSScreen09VerifyRep({ navigate }: Props) {
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
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Step 5 of 7</span>
      </header>
      <StepBar step={4} />

      <div style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "32px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Verify Organization Representative</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>
          Verifying NorthStar Technologies and verifying Sarah Thompson are two separate checks.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {/* Representative info */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#3157E5" }}>ST</div>
              <div>
                <p style={{ color: "#111827", fontSize: 14, fontWeight: 700, margin: 0 }}>Sarah Thompson</p>
                <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>Placement Supervisor</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Organization", value: "NorthStar Technologies" },
                { label: "Email", value: "sarah.thompson@northstartech.ca", mono: true },
                { label: "Requested Role", value: "Organization Administrator" },
              ].map(item => (
                <div key={item.label} style={{ padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                  <p style={{ color: "#111827", fontSize: 12, margin: 0, fontWeight: 500, fontFamily: (item as any).mono ? "'JetBrains Mono', monospace" : "inherit" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verification checks */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
              <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Identity Checks</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Organization domain verified",
                  "Email belongs to verified domain",
                  "Organization association confirmed",
                ].map(check => (
                  <div key={check} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#F0FAF5", border: "1px solid #167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 5l2.5 2.5 5-5" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ color: "#374151", fontSize: 12 }}>{check}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
              <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Authentication Setup</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "MFA", value: "ENABLED", green: true },
                  { label: "Passkey", value: "AVAILABLE", green: true },
                  { label: "Organization SSO", value: "OPTIONAL", grey: true },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "#F9FAFB", borderRadius: 6 }}>
                    <span style={{ color: "#374151", fontSize: 12 }}>{item.label}</span>
                    <span style={{ color: item.green ? "#167A5A" : "#9CA3AF", fontSize: 11, fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div style={{ background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 12, padding: "16px 20px", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p style={{ color: "#167A5A", fontSize: 13, fontWeight: 700, margin: "0 0 2px" }}>Representative Verified</p>
            <p style={{ color: "#059669", fontSize: 12, margin: 0 }}>Identity: VERIFIED · MFA: ENABLED · Status: ACTIVE</p>
          </div>
        </div>

        <div style={{ background: "#FFFBEB", border: "1px solid #FCD34D", borderRadius: 10, padding: "12px 16px", marginBottom: 24, display: "flex", gap: 10 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
          </svg>
          <p style={{ color: "#92400E", fontSize: 12, margin: 0 }}>
            Verifying NorthStar Technologies and verifying Sarah Thompson are separate checks. Both must be complete before submission.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => navigate("ns-lb-review-queue")}
            style={{ padding: "12px 28px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
          >
            Submit for LinkBlock Review →
          </button>
        </div>
      </div>
    </div>
  )
}
