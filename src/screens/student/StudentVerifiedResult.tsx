import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function StudentVerifiedResult({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => navigate("student-home")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Home</button>
            <span style={{ color: "#D1D5DB" }}>›</span>
            <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Credential Verified</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => navigate("student-share")} style={{ padding: "7px 14px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Share Credential</button>
          </div>
        </div>

        <div style={{ padding: "32px", maxWidth: 680 }}>
          {/* Verified banner */}
          <div style={{ background: "#167A5A", borderRadius: 14, padding: "24px 28px", marginBottom: 20, display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 13l6.5 6.5L22 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 700, margin: "0 0 4px", letterSpacing: "0.05em" }}>CREDENTIAL VERIFIED</p>
              <p style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 800, margin: "0 0 2px", letterSpacing: "-0.01em" }}>Professional Placement Credential</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: 0 }}>Claim: Completed Software Developer Co-op Placement</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ background: "rgba(255,255,255,0.2)", color: "#FFFFFF", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 20, letterSpacing: "0.05em" }}>VERIFIED</span>
            </div>
          </div>

          {/* Trust details */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24, marginBottom: 16 }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Trust Details</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
              {[
                { label: "External Attestor", value: "Northstar Technologies", ok: true },
                { label: "Institution Review", value: "Algoma University", ok: true },
                { label: "Evidence Integrity", value: "Verified", ok: true },
                { label: "External Attestation", value: "Valid", ok: true },
                { label: "Institution Approval", value: "Valid", ok: true },
                { label: "Credential Proof", value: "Confirmed", ok: true },
              ].map(item => (
                <div key={item.label} style={{ background: "#F9FAFB", borderRadius: 8, padding: "10px 14px", border: "1px solid #E4E7EC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#374151", fontSize: 12 }}>{item.label}</span>
                  <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 600 }}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Institution-issued section */}
            <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 16 }}>
              <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 600, margin: "0 0 10px", letterSpacing: "0.04em" }}>INSTITUTION-ISSUED CREDENTIAL</p>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "#F0FAF5", borderRadius: 8, padding: "10px 14px", border: "1px solid #D1FAE5" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>ISSUER SIGNATURE</p>
                  <p style={{ color: "#167A5A", fontSize: 12, fontWeight: 700, margin: 0 }}>✓ Algoma University · Valid</p>
                </div>
                <div style={{ flex: 1, background: "#F0FAF5", borderRadius: 8, padding: "10px 14px", border: "1px solid #D1FAE5" }}>
                  <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>BLOCKCHAIN PROOF</p>
                  <p style={{ color: "#167A5A", fontSize: 12, fontWeight: 700, margin: 0 }}>✓ Confirmed · Polygon</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => navigate("student-credential-detail")} style={{ flex: 1, padding: "11px 20px", background: "#FFFFFF", color: "#374151", border: "1px solid #E4E7EC", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
              View Full Details
            </button>
            <button onClick={() => navigate("student-share")} style={{ flex: 1, padding: "11px 20px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Share Credential →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
