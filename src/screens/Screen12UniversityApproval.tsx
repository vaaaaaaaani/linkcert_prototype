import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const timeline = [
  { label: "Source submitted", done: true },
  { label: "Source fingerprinted", done: true },
  { label: "Provenance protected", done: true },
  { label: "Internal review completed", done: true },
  { label: "External attestation received", done: true },
  { label: "External signature verified", done: true },
  { label: "Registrar final approval", done: false, active: true },
  { label: "University credential signature", done: false },
  { label: "Final credential proof", done: false },
]

export default function Screen12UniversityApproval({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8
        }}>
          <button onClick={() => navigate("dashboard")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Dashboard</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>University Final Approval</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              University Final Approval
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              All required steps are complete. Algoma University makes the final institutional decision on issuance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
            {/* Timeline */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 22 }}>
              <h2 style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>Approval Timeline</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {timeline.map((item, i) => (
                  <div key={item.label} style={{ display: "flex", gap: 12 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                        background: item.done ? "#167A5A" : item.active ? "#3157E5" : "#F3F4F6",
                        border: `1px solid ${item.done ? "#167A5A" : item.active ? "#3157E5" : "#E4E7EC"}`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {item.done
                          ? <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : item.active
                          ? <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />
                          : <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D1D5DB" }} />
                        }
                      </div>
                      {i < timeline.length - 1 && <div style={{ width: 1, height: 16, background: "#E4E7EC", margin: "3px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < timeline.length - 1 ? 10 : 0 }}>
                      <p style={{
                        fontSize: 12, margin: 0, fontWeight: item.active ? 700 : 400,
                        color: item.done ? "#167A5A" : item.active ? "#3157E5" : "#9CA3AF"
                      }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main review */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Ready card */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "18px 24px", borderBottom: "1px solid #E4E7EC", background: "#F9FAFB" }}>
                  <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>Ready for Institutional Decision</h2>
                  <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>All verification checks have passed. Awaiting Registrar final approval.</p>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                    {[
                      { label: "Credential", value: "Professional Placement Credential" },
                      { label: "Recipient", value: "Olivia Chen" },
                    ].map(item => (
                      <div key={item.label} style={{ padding: "10px 14px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC" }}>
                        <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 3px", fontWeight: 600 }}>{item.label.toUpperCase()}</p>
                        <p style={{ color: "#111827", fontSize: 13, margin: 0, fontWeight: 600 }}>{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Verification summary */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                    {[
                      { label: "Source integrity", value: "Verified", ok: true },
                      { label: "External attestation", value: "Northstar Technologies · Valid", ok: true },
                      { label: "Attestation signature", value: "Verified", ok: true },
                      { label: "History", value: "No unresolved changes", ok: true },
                    ].map(item => (
                      <div key={item.label} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "10px 16px", background: "#F9FAFB", borderRadius: 8, border: "1px solid #E4E7EC"
                      }}>
                        <span style={{ color: "#374151", fontSize: 13 }}>{item.label}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span style={{ color: "#167A5A", fontSize: 12, fontWeight: 600 }}>{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Authority notice */}
                  <div style={{
                    background: "#0D1424", borderRadius: 10, padding: "16px 20px", marginBottom: 20
                  }}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontWeight: 600, margin: "0 0 4px", letterSpacing: "0.06em" }}>AUTHORITY DISTINCTION</p>
                    <p style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Algoma University is the final issuing authority</p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      LinkCert orchestrated the workflow and verified all inputs. The institution decides whether to issue. The institution signs the final credential with its own key.
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("university-signing")}
                    style={{
                      width: "100%", padding: "12px 24px", background: "#111827",
                      color: "#FFFFFF", border: "none", borderRadius: 9,
                      fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    Approve Final Credential →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
