import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function Screen07BatchReview({ navigate, currentScreen }: Props) {
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
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Batch Review & Workflow Policy</span>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
              Batch Review & Workflow Policy
            </h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>
              Workflow policies are configured per credential type. Some credentials require external regulatory approval before institution signing.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            {/* Standard batch */}
            <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "18px 22px", borderBottom: "1px solid #E4E7EC", background: "#F9FAFB" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>CS Graduation 2026</h2>
                    <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>246 records · Institution CSV · Aug 25, 2026</p>
                  </div>
                  <span style={{ background: "#EEF2FF", color: "#3157E5", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 5 }}>246 READY</span>
                </div>
              </div>
              <div style={{ padding: "20px 22px" }}>
                <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 600, margin: "0 0 14px", letterSpacing: "0.05em" }}>WORKFLOW POLICY · STANDARD DEGREE</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { step: "Department Review", status: "complete" },
                    { step: "Registrar Final Approval", status: "complete" },
                    { step: "University Signature", status: "active" },
                    { step: "Final Proof & Blockchain Anchor", status: "pending" },
                  ].map((item, i) => (
                    <div key={item.step} style={{ display: "flex", gap: 12, paddingBottom: i < 3 ? 0 : 0 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                          background: item.status === "complete" ? "#167A5A" : item.status === "active" ? "#3157E5" : "#F3F4F6",
                          border: `1px solid ${item.status === "complete" ? "#167A5A" : item.status === "active" ? "#3157E5" : "#E4E7EC"}`,
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          {item.status === "complete" && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          {item.status === "active" && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />}
                          {item.status === "pending" && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D1D5DB" }} />}
                        </div>
                        {i < 3 && <div style={{ width: 1, height: 20, background: "#E4E7EC", margin: "4px 0" }} />}
                      </div>
                      <div style={{ paddingBottom: i < 3 ? 14 : 0 }}>
                        <p style={{ color: item.status === "pending" ? "#9CA3AF" : "#111827", fontSize: 13, fontWeight: 500, margin: 0 }}>{item.step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: "10px 14px", background: "#F0FAF5", borderRadius: 8, border: "1px solid #D1FAE5" }}>
                  <p style={{ color: "#167A5A", fontSize: 12, fontWeight: 600, margin: 0 }}>External approval: Not required</p>
                </div>
              </div>
            </div>

            {/* Professional licence */}
            <div style={{ background: "#FFFFFF", border: "1px solid #6941C6", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "18px 22px", borderBottom: "1px solid #EDE9FE", background: "#F9F7FF" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 2px" }}>Professional Practice Licence</h2>
                    <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>12 records · Regulatory credential type</p>
                  </div>
                  <span style={{ background: "#F4F0FD", color: "#6941C6", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 5 }}>EXT. REQUIRED</span>
                </div>
              </div>
              <div style={{ padding: "20px 22px" }}>
                <p style={{ color: "#9CA3AF", fontSize: 11, fontWeight: 600, margin: "0 0 14px", letterSpacing: "0.05em" }}>WORKFLOW POLICY · REGULATED CREDENTIAL</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { step: "Institution Review", status: "complete" },
                    { step: "External Regulatory Approval", status: "active", external: true },
                    { step: "Institution Final Approval", status: "pending" },
                    { step: "University Signature", status: "pending" },
                    { step: "Final Proof", status: "pending" },
                  ].map((item, i) => (
                    <div key={item.step} style={{ display: "flex", gap: 12 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                          background: item.status === "complete" ? "#167A5A" : item.external ? "#6941C6" : item.status === "active" ? "#3157E5" : "#F3F4F6",
                          border: `1px solid ${item.status === "complete" ? "#167A5A" : item.external ? "#6941C6" : item.status === "active" ? "#3157E5" : "#E4E7EC"}`,
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          {item.status === "complete" && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          {(item.status === "active") && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />}
                          {item.status === "pending" && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D1D5DB" }} />}
                        </div>
                        {i < 4 && <div style={{ width: 1, height: 18, background: "#E4E7EC", margin: "4px 0" }} />}
                      </div>
                      <div style={{ paddingBottom: i < 4 ? 12 : 0 }}>
                        <p style={{ color: item.external ? "#6941C6" : item.status === "pending" ? "#9CA3AF" : "#111827", fontSize: 13, fontWeight: item.external ? 700 : 500, margin: 0 }}>{item.step}</p>
                        {item.external && <p style={{ color: "#9CA3AF", fontSize: 11, margin: "2px 0 0" }}>Registered regulatory body required</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: "10px 14px", background: "#F4F0FD", borderRadius: 8, border: "1px solid #DDD6FE" }}>
                  <p style={{ color: "#6941C6", fontSize: 12, fontWeight: 600, margin: "0 0 2px" }}>External approval required by credential type</p>
                  <p style={{ color: "#7C3AED", fontSize: 11, margin: 0 }}>Configurable per workflow policy in institution settings</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => navigate("external-requirement")}
              style={{
                padding: "10px 20px", background: "#6941C6", color: "#FFFFFF",
                border: "none", borderRadius: 8, fontSize: 13,
                fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Open External Approval Example →
            </button>
            <button
              onClick={() => navigate("university-approval")}
              style={{
                padding: "10px 20px", background: "#FFFFFF", color: "#374151",
                border: "1px solid #E4E7EC", borderRadius: 8, fontSize: 13,
                fontWeight: 500, cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Skip to University Approval
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
