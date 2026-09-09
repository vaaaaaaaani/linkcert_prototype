import type { Screen } from "../App"
import Sidebar from "../components/Sidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const statCards = [
  { value: "12,482", label: "Issued Credentials", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "#3157E5", bg: "#EEF2FF" },
  { value: "3", label: "Batches Awaiting Approval", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "#B66A15", bg: "#FFF8ED" },
  { value: "7", label: "External Attestations Pending", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", color: "#6941C6", bg: "#F4F0FD" },
  { value: "1,821", label: "Verification Checks This Month", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "#167A5A", bg: "#F0FAF5" },
]

const workItems = [
  { name: "CS Graduation 2026", meta: "Institution CSV • 246 records", status: "Review required", statusColor: "#B66A15", statusBg: "#FFF8ED", screen: "csv-upload" as Screen },
  { name: "Professional Licence Claim", meta: "Learner submission • Olivia Chen", status: "External attestor required", statusColor: "#6941C6", statusBg: "#F4F0FD", screen: "external-requirement" as Screen },
  { name: "Cybersecurity Microcredential", meta: "82 credentials", status: "Ready for institution signing", statusColor: "#167A5A", statusBg: "#F0FAF5", screen: "university-signing" as Screen },
]

export default function Screen03Dashboard({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar currentScreen={currentScreen} navigate={navigate} />

      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        {/* Top bar */}
        <div style={{
          background: "#FFFFFF", borderBottom: "1px solid #E4E7EC",
          padding: "0 32px", height: 56, display: "flex", alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div>
            <h1 style={{ fontSize: 16, fontWeight: 600, color: "#111827", margin: 0 }}>Dashboard</h1>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => navigate("csv-upload")}
              style={{
                padding: "7px 14px", background: "#3157E5", color: "#FFFFFF",
                border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500,
                cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Upload Institution CSV
            </button>
            <button
              style={{
                padding: "7px 14px", background: "#FFFFFF", color: "#374151",
                border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 13, fontWeight: 500,
                cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Review Learner Submission
            </button>
          </div>
        </div>

        <div style={{ padding: "28px 32px" }}>
          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {statCards.map(card => (
              <div key={card.label} style={{
                background: "#FFFFFF", border: "1px solid #E4E7EC",
                borderRadius: 12, padding: "20px 22px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <p style={{ color: "#667085", fontSize: 12, fontWeight: 500, margin: 0, letterSpacing: "0.02em" }}>
                    {card.label.toUpperCase()}
                  </p>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: card.bg, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke={card.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={card.icon}/>
                    </svg>
                  </div>
                </div>
                <p style={{ color: "#111827", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          {/* Intake paths */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
            <div style={{
              background: "#FFFFFF", border: "1px solid #E4E7EC",
              borderRadius: 12, padding: 24
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3157E5" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "#3157E5", letterSpacing: "0.05em" }}>PATH A</span>
              </div>
              <h3 style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>Institution-Supplied Data</h3>
              <p style={{ color: "#667085", fontSize: 13, margin: "0 0 16px", lineHeight: 1.5 }}>
                Official institutional data via CSV upload, LMS integration, or SIS API. Authoritative source of record.
              </p>
              <button
                onClick={() => navigate("csv-upload")}
                style={{
                  padding: "8px 16px", background: "#3157E5", color: "#FFFFFF",
                  border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500,
                  cursor: "pointer", fontFamily: "inherit"
                }}
              >
                Upload CSV →
              </button>
            </div>
            <div style={{
              background: "#FFFFFF", border: "1px solid #E4E7EC",
              borderRadius: 12, padding: 24
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6941C6" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "#6941C6", letterSpacing: "0.05em" }}>PATH B</span>
              </div>
              <h3 style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>Learner-Submitted Claims</h3>
              <p style={{ color: "#667085", fontSize: 13, margin: "0 0 8px", lineHeight: 1.5 }}>
                Learners may submit credential claims, certifications, or placement evidence for institutional review.
              </p>
              <div style={{
                background: "#FFF8ED", border: "1px solid #FDE68A",
                borderRadius: 6, padding: "7px 10px", marginBottom: 12
              }}>
                <p style={{ color: "#B66A15", fontSize: 11, margin: 0, lineHeight: 1.4 }}>
                  Learner-submitted information is not institution-issued merely because it was uploaded. Verification and institutional approval must occur first.
                </p>
              </div>
              <button
                style={{
                  padding: "8px 16px", background: "#FFFFFF", color: "#374151",
                  border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 13, fontWeight: 500,
                  cursor: "pointer", fontFamily: "inherit"
                }}
              >
                Review Submissions
              </button>
            </div>
          </div>

          {/* Work requiring action */}
          <div style={{
            background: "#FFFFFF", border: "1px solid #E4E7EC",
            borderRadius: 12, overflow: "hidden"
          }}>
            <div style={{
              padding: "18px 24px", borderBottom: "1px solid #E4E7EC",
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0 }}>Work Requiring Action</h2>
              <span style={{
                background: "#FFF8ED", color: "#B66A15",
                fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4,
                border: "1px solid #FDE68A"
              }}>3 items</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F9FAFB" }}>
                  {["Batch / Item", "Source", "Status", "Action"].map(h => (
                    <th key={h} style={{
                      padding: "10px 24px", textAlign: "left",
                      fontSize: 11, fontWeight: 600, color: "#667085",
                      letterSpacing: "0.04em", borderBottom: "1px solid #E4E7EC"
                    }}>{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {workItems.map((item, i) => (
                  <tr key={item.name} style={{ borderBottom: i < workItems.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                    <td style={{ padding: "14px 24px" }}>
                      <p style={{ color: "#111827", fontSize: 13, fontWeight: 600, margin: 0 }}>{item.name}</p>
                    </td>
                    <td style={{ padding: "14px 24px" }}>
                      <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>{item.meta}</p>
                    </td>
                    <td style={{ padding: "14px 24px" }}>
                      <span style={{
                        background: item.statusBg, color: item.statusColor,
                        fontSize: 11, fontWeight: 600, padding: "3px 8px",
                        borderRadius: 4, border: `1px solid ${item.statusColor}22`
                      }}>{item.status}</span>
                    </td>
                    <td style={{ padding: "14px 24px" }}>
                      <button
                        onClick={() => navigate(item.screen)}
                        style={{
                          padding: "5px 12px", background: "#EEF2FF", color: "#3157E5",
                          border: "1px solid #C7D7FD", borderRadius: 6,
                          fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit"
                        }}
                      >
                        Review →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
