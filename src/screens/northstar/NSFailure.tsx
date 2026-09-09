import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSFailure({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
          <div style={{ height: 16, width: 1, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
          <span style={{ color: "#94A3B8", fontSize: 13 }}>LinkBlock Trust Administration</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600 }}>INTERNAL</span>
      </header>

      <div style={{ flex: 1, maxWidth: 640, margin: "0 auto", padding: "60px 24px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "#FEF2F2", border: "2px solid #FCA5A5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>
            </svg>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Organization Verification Unsuccessful</h1>
          <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>NorthStar Technologies · Application ID: APP-NT-2024-0192</p>
        </div>

        <div style={{ background: "#FFFFFF", border: "1px solid #FCA5A5", borderRadius: 12, padding: "22px 24px", marginBottom: 20 }}>
          <p style={{ color: "#DC2626", fontSize: 13, fontWeight: 700, margin: "0 0 14px" }}>Verification could not be completed due to one or more of the following:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Domain Ownership", reason: "Domain ownership could not be confirmed" },
              { label: "Organization Identity", reason: "Organization identity could not be sufficiently verified" },
              { label: "Representative Authorization", reason: "Representative authorization could not be established" },
              { label: "Attestation Scope", reason: "Requested attestation scope could not be justified" },
            ].map(item => (
              <div key={item.label} style={{ padding: "10px 14px", background: "#FFF5F5", border: "1px solid #FECACA", borderRadius: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="7" cy="7" r="6" stroke="#DC2626" strokeWidth="1.5"/>
                  <path d="M7 4v3M7 9.5h.01" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <p style={{ color: "#991B1B", fontSize: 12, fontWeight: 700, margin: "0 0 1px" }}>{item.label}</p>
                  <p style={{ color: "#DC2626", fontSize: 12, margin: 0 }}>{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is NOT allowed */}
        <div style={{ background: "#FFF1F2", border: "1px solid #FECDD3", borderRadius: 10, padding: "16px 18px", marginBottom: 24 }}>
          <p style={{ color: "#BE123C", fontSize: 12, fontWeight: 700, margin: "0 0 10px", letterSpacing: "0.04em" }}>THESE OPTIONS ARE NOT AVAILABLE</p>
          {["Continue Anyway", "Trust Organization Anyway", "Student Override"].map(item => (
            <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 0" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="#BE123C" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span style={{ color: "#BE123C", fontSize: 12, textDecoration: "line-through" }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            style={{ flex: 1, padding: "11px", background: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: 8, color: "#374151", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
          >
            Request More Information
          </button>
          <button
            style={{ flex: 1, padding: "11px", background: "#DC2626", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
          >
            Reject Application
          </button>
        </div>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <button onClick={() => navigate("ns-lb-org-review")} style={{ background: "none", border: "none", color: "#667085", fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>← Return to Review</button>
        </div>
      </div>
    </div>
  )
}
