import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSScreen03InvitationEmail({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#0D1424", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{
        background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>LinkCert</span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>External Organization Onboarding Invitation</span>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ maxWidth: 620, width: "100%" }}>
          {/* Perspective label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>NORTHSTAR TECHNOLOGIES PERSPECTIVE</span>
            <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Email simulation */}
          <div style={{ background: "#FFFFFF", borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ background: "#F3F4F6", padding: "12px 20px", borderBottom: "1px solid #E4E7EC", display: "flex", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ color: "#9CA3AF", fontSize: 12, minWidth: 40 }}>From:</span>
                  <span style={{ color: "#111827", fontSize: 12 }}>LinkCert Trust &lt;trust@linkcert.io&gt;</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ color: "#9CA3AF", fontSize: 12, minWidth: 40 }}>To:</span>
                  <span style={{ color: "#111827", fontSize: 12 }}>sarah.thompson@northstartech.ca</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ color: "#9CA3AF", fontSize: 12, minWidth: 40 }}>Subject:</span>
                  <span style={{ color: "#111827", fontSize: 12, fontWeight: 600 }}>Algoma University has requested verification through LinkCert</span>
                </div>
              </div>
            </div>

            <div style={{ padding: "32px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#3157E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: "#111827", fontWeight: 700, fontSize: 16 }}>LinkCert</span>
              </div>

              <p style={{ color: "#374151", fontSize: 15, fontWeight: 600, margin: "0 0 8px" }}>Hello Sarah,</p>
              <p style={{ color: "#374151", fontSize: 14, margin: "0 0 20px", lineHeight: 1.6 }}>
                <strong>Algoma University</strong> has requested an employment attestation through LinkCert as part of a credential issuance process for one of their students.
              </p>

              <div style={{ background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 10, padding: "18px 20px", marginBottom: 20 }}>
                <p style={{ color: "#667085", fontSize: 12, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.04em" }}>REQUEST DETAILS</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
                    <span style={{ color: "#9CA3AF", fontSize: 13 }}>Institution</span>
                    <span style={{ color: "#111827", fontSize: 13, fontWeight: 600 }}>Algoma University</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
                    <span style={{ color: "#9CA3AF", fontSize: 13 }}>Student</span>
                    <span style={{ color: "#111827", fontSize: 13, fontWeight: 600 }}>Olivia Chen</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
                    <span style={{ color: "#9CA3AF", fontSize: 13 }}>Requested Claim</span>
                    <span style={{ color: "#111827", fontSize: 13, fontWeight: 600 }}>Professional work placement completion</span>
                  </div>
                </div>
              </div>

              <div style={{ background: "#FFFBEB", border: "1px solid #FCD34D", borderRadius: 10, padding: "14px 18px", marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                  </svg>
                  <p style={{ color: "#92400E", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
                    <strong>NorthStar Technologies is not yet a registered LinkCert attestor.</strong> Your organization must first complete a verification process before responding to this request.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("ns-onboarding-welcome")}
                style={{
                  width: "100%", padding: "14px 24px", background: "#3157E5",
                  color: "#FFFFFF", border: "none", borderRadius: 8,
                  fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                  marginBottom: 12
                }}
              >
                Begin Organization Onboarding
              </button>

              <p style={{ color: "#9CA3AF", fontSize: 11, textAlign: "center", margin: 0 }}>
                This secure link expires in 72 hours · Sent to sarah.thompson@northstartech.ca
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
