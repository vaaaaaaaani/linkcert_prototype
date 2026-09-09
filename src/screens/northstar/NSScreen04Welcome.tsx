import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

const steps = [
  { num: 1, label: "Organization Details", desc: "Legal name, address, and contact information" },
  { num: 2, label: "Verify Domain", desc: "Confirm your organization controls the claimed domain" },
  { num: 3, label: "Verify Organization", desc: "Establish legitimacy via authoritative source checks" },
  { num: 4, label: "Define Attestation Authority", desc: "Specify what claims your organization may confirm" },
  { num: 5, label: "Verify Representative", desc: "Confirm authorized individual identity and association" },
  { num: 6, label: "LinkBlock Review", desc: "Manual review and approval by LinkBlock Trust Administration" },
  { num: 7, label: "Activate Organization", desc: "Signing identity and Trust Registry entry created" },
]

export default function NSScreen04Welcome({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginLeft: 4 }}>Organization Onboarding</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Secure session active</span>
        </div>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ maxWidth: 680, width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#111827", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
              Become a Verified LinkCert Attestor
            </h1>
            <p style={{ color: "#667085", fontSize: 15, margin: 0, lineHeight: 1.6, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              Establish your organization's identity, authority, and authorized users before responding to credential verification requests.
            </p>
          </div>

          {/* Context banner */}
          <div style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 10, padding: "14px 18px", marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
            </svg>
            <div>
              <p style={{ color: "#3157E5", fontSize: 13, fontWeight: 700, margin: "0 0 3px" }}>Pending Request from Algoma University</p>
              <p style={{ color: "#4F46E5", fontSize: 12, margin: 0 }}>
                Once onboarding is complete, you will be able to respond to the attestation request for Olivia Chen's Professional Placement Credential.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                padding: "16px 22px",
                borderBottom: i < steps.length - 1 ? "1px solid #F3F4F6" : "none",
                display: "flex", gap: 16, alignItems: "center"
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "#EEF2FF", border: "2px solid #C7D2FE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0
                }}>
                  <span style={{ color: "#3157E5", fontSize: 12, fontWeight: 700 }}>{step.num}</span>
                </div>
                <div>
                  <p style={{ color: "#111827", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{step.label}</p>
                  <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => navigate("ns-org-details")}
              style={{
                padding: "14px 48px", background: "#3157E5", color: "#FFFFFF",
                border: "none", borderRadius: 8, fontSize: 14, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Start Organization Onboarding
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
