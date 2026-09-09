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

const checks = [
  { label: "Legal Name", result: "MATCHED", detail: "NorthStar Technologies Inc. — verified against submission" },
  { label: "Domain", result: "VERIFIED", detail: "northstartech.ca — ownership confirmed" },
  { label: "Website", result: "VERIFIED", detail: "northstartech.ca — active, consistent with org name" },
  { label: "Business Information", result: "MATCHED", detail: "Registration BC-1092847 — authoritative source check where available" },
  { label: "Representative", result: "VERIFIED", detail: "Corporate email confirmed; association pending" },
  { label: "Organization Status", result: "ACTIVE", detail: "No adverse records found" },
]

export default function NSScreen07OrgLegitimacy({ navigate }: Props) {
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
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Step 3 of 7</span>
      </header>
      <StepBar step={2} />

      <div style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "32px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Verify Organization Identity</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>
          LinkBlock reviews your organization's submitted details against available authoritative sources and verification evidence.
        </p>

        {/* Processing indicator */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: 0 }}>Organization Identity Review</p>
              <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>Verification evidence · Authoritative source check where available</p>
            </div>
            <span style={{ marginLeft: "auto", background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, border: "1px solid #D1FAE5" }}>COMPLETED</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {checks.map(check => (
              <div key={check.label} style={{ display: "flex", gap: 14, alignItems: "center", padding: "12px 16px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F0FAF5", border: "1px solid #167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>{check.label}</p>
                    <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: "0.04em" }}>{check.result}</span>
                  </div>
                  <p style={{ color: "#9CA3AF", fontSize: 11, margin: "2px 0 0" }}>{check.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div style={{ background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 12, padding: "18px 22px", marginBottom: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#167A5A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <p style={{ color: "#167A5A", fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Organization Identity Verified</p>
            <p style={{ color: "#059669", fontSize: 13, margin: "0 0 8px" }}>NorthStar Technologies has been established as a legitimate organization.</p>
            <div style={{ background: "#FFFFFF", border: "1px solid #D1FAE5", borderRadius: 8, padding: "10px 14px", display: "flex", gap: 8, alignItems: "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/>
              </svg>
              <p style={{ color: "#374151", fontSize: 12, margin: 0 }}>
                <strong>Next:</strong> Determine what NorthStar is actually authorized to attest.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => navigate("ns-attestation-authority")}
            style={{ padding: "12px 28px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
          >
            Continue to Authority →
          </button>
        </div>
      </div>
    </div>
  )
}
