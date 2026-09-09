import type { Screen } from "../../App"
import Sidebar from "../../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function NSReturningOrg({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Returning Organization — Future Request</span>
        </div>

        <div style={{ padding: "32px", maxWidth: 780 }}>
          <div style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3157E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
            </svg>
            <p style={{ color: "#3730A3", fontSize: 13, margin: 0 }}>
              This screen demonstrates what happens on a <strong>future request</strong> after NorthStar has completed onboarding. Onboarding is a one-time process.
            </p>
          </div>

          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Returning Organization: Immediate Authorization</h1>
          <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>Once an organization is active in the Trust Registry, future requests skip onboarding entirely.</p>

          {/* Future flow diagram */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden", marginBottom: 24 }}>
            <div style={{ padding: "14px 20px", background: "#F9FAFB", borderBottom: "1px solid #E4E7EC" }}>
              <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 700, margin: 0, letterSpacing: "0.06em" }}>FUTURE WORKFLOW — NORTHSTAR ALREADY REGISTERED</p>
            </div>
            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { step: "External Verification Required", desc: "A new credential request requires NorthStar attestation" },
                  null,
                  { step: "Search Trust Registry", desc: "System automatically queries LinkBlock Trust Registry" },
                  null,
                  { step: "NorthStar Found — ACTIVE", desc: "Organization ID: ORG-NT-01827", success: true },
                  null,
                  { step: "Scope Check Passed", desc: "Employment / Placement Verification — AUTHORIZED", success: true },
                  null,
                  { step: "Send Secure Attestation Request", desc: "Routed directly to NorthStar's request inbox" },
                  null,
                  { step: "NorthStar Request Inbox", desc: "Sarah Thompson receives and responds immediately" },
                ].map((item, i) => {
                  if (item === null) {
                    return <div key={i} style={{ display: "flex", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 0v12M2 8l6 6 6-6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  }
                  return (
                    <div key={i} style={{
                      padding: "12px 16px", borderRadius: 8,
                      background: item.success ? "#F0FAF5" : "#F9FAFB",
                      border: `1px solid ${item.success ? "#D1FAE5" : "#E4E7EC"}`,
                      display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                      <div>
                        <p style={{ color: item.success ? "#167A5A" : "#111827", fontSize: 13, fontWeight: 600, margin: "0 0 2px" }}>{item.step}</p>
                        <p style={{ color: item.success ? "#059669" : "#667085", fontSize: 11, margin: 0, fontFamily: item.desc.includes("ORG-") ? "'JetBrains Mono', monospace" : "inherit" }}>{item.desc}</p>
                      </div>
                      {item.success && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#167A5A"/><path d="M4 9l3.5 3.5 6.5-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
            <p style={{ color: "#374151", fontSize: 13, fontWeight: 600, margin: "0 0 6px" }}>Onboarding is a one-time organization trust process</p>
            <p style={{ color: "#667085", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
              Once NorthStar Technologies is established in the Trust Registry, each future request goes directly to their inbox. Periodic lifecycle reviews may be required, but the full onboarding process does not repeat.
            </p>
          </div>

          <button
            onClick={() => navigate("verify-ext-org")}
            style={{ padding: "12px 24px", background: "#3157E5", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
          >
            View Verified State in Admin Flow →
          </button>
        </div>
      </main>
    </div>
  )
}
