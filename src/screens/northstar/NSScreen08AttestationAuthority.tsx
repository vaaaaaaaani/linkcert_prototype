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

const scopeTypes = [
  { id: "employment", label: "Employment / Placement Verification", selected: true },
  { id: "training", label: "Training Completion", selected: false },
  { id: "licence", label: "Professional Licence", selected: false },
  { id: "academic", label: "Academic Credential", selected: false },
  { id: "certification", label: "Industry Certification", selected: false },
]

const canAttest = [
  "Individual worked at NorthStar",
  "Employment dates",
  "Position / title",
  "Placement completion",
  "Placement hours",
  "NorthStar-issued workplace training",
]

const cannotAttest = [
  "University degrees",
  "Academic transcripts",
  "Unrelated professional licences",
  "Third-party certifications",
]

export default function NSScreen08AttestationAuthority({ navigate }: Props) {
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
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Step 4 of 7</span>
      </header>
      <StepBar step={3} />

      <div style={{ flex: 1, maxWidth: 720, margin: "0 auto", padding: "32px 24px", width: "100%" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>What Does Your Organization Need to Verify?</h1>
        <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>
          Attestation authority is limited to claims the organization has legitimate real-world authority to confirm.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
          {/* Scope selector */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px" }}>
            <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Select Verification Scope</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {scopeTypes.map(scope => (
                <div key={scope.id} style={{
                  padding: "10px 14px", borderRadius: 8, cursor: "pointer",
                  border: scope.selected ? "2px solid #3157E5" : "1px solid #E4E7EC",
                  background: scope.selected ? "#EEF2FF" : "#F9FAFB",
                  display: "flex", alignItems: "center", gap: 10
                }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${scope.selected ? "#3157E5" : "#D1D5DB"}`, background: scope.selected ? "#3157E5" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {scope.selected && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#FFFFFF" }} />}
                  </div>
                  <span style={{ color: scope.selected ? "#3157E5" : "#374151", fontSize: 13, fontWeight: scope.selected ? 600 : 400 }}>{scope.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proposed authority */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "#F0FAF5", border: "1px solid #167A5A", borderRadius: 12, padding: "18px 20px" }}>
              <p style={{ color: "#167A5A", fontSize: 12, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.04em" }}>NORTHSTAR MAY ATTEST</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {canAttest.map(item => (
                  <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6l3 3 7-7" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ color: "#059669", fontSize: 12 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#FFF1F2", border: "1px solid #FECDD3", borderRadius: 12, padding: "18px 20px" }}>
              <p style={{ color: "#BE123C", fontSize: 12, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.04em" }}>NORTHSTAR MAY NOT ATTEST</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {cannotAttest.map(item => (
                  <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="#BE123C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    <span style={{ color: "#BE123C", fontSize: 12 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
          </svg>
          <p style={{ color: "#374151", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
            Attestation authority is limited to claims the organization has legitimate real-world authority to confirm. This scope will be reviewed and approved by LinkBlock Trust Administration before activation.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => navigate("ns-verify-rep")}
            style={{ padding: "12px 28px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
          >
            Submit Authority Request →
          </button>
        </div>
      </div>
    </div>
  )
}
