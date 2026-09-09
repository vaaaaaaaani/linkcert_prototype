import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const creds = [
  { name: "Bachelor of Computer Science", issuer: "Algoma University", type: "institution", status: "Verified", date: "May 10, 2026", id: "LC-AU-2026-004201", signature: true, blockchain: true },
  { name: "Professional Placement Credential", issuer: "Algoma University", type: "institution", status: "Verified", date: "Aug 25, 2026", id: "LC-AU-2026-009821", signature: true, blockchain: true, attestation: "Northstar Technologies" },
  { name: "Cybersecurity Fundamentals", issuer: "Algoma University", type: "institution", status: "Verified", date: "Apr 18, 2026", id: "LC-AU-2026-003890", signature: true, blockchain: true },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", type: "career", status: "Verified", date: "Mar 5, 2026", id: "EXT-AWS-CP-482910", signature: false, blockchain: false, note: "Externally issued · verified through LinkCert" },
]

export default function StudentCredentials({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: 16, fontWeight: 600, color: "#111827", margin: 0 }}>My Credentials</h1>
          <button onClick={() => navigate("student-add-credential")} style={{ padding: "7px 14px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            + Add Career Credential
          </button>
        </div>

        <div style={{ padding: "28px 32px" }}>
          {/* Legend */}
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: "#EEF2FF", border: "1px solid #C7D7FD" }} />
              <span style={{ color: "#667085", fontSize: 12 }}>Institution-Issued Credential</span>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: "#F4F0FD", border: "1px solid #DDD6FE" }} />
              <span style={{ color: "#667085", fontSize: 12 }}>Externally Issued / Career Credential</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {creds.map(cred => (
              <div
                key={cred.id}
                onClick={() => navigate("student-credential-detail")}
                style={{
                  background: "#FFFFFF", borderRadius: 14, cursor: "pointer",
                  border: `1px solid ${cred.type === "institution" ? "#E4E7EC" : "#DDD6FE"}`,
                  overflow: "hidden", transition: "box-shadow 0.15s"
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.07)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "none"}
              >
                <div style={{
                  padding: "4px 20px", fontSize: 10, fontWeight: 700, letterSpacing: "0.05em",
                  background: cred.type === "institution" ? "#EEF2FF" : "#F4F0FD",
                  color: cred.type === "institution" ? "#3157E5" : "#6941C6",
                  borderBottom: `1px solid ${cred.type === "institution" ? "#C7D7FD" : "#DDD6FE"}`
                }}>
                  {cred.type === "institution" ? "INSTITUTION-ISSUED · ALGOMA UNIVERSITY" : "EXTERNALLY ISSUED · CAREER CREDENTIAL"}
                </div>
                <div style={{ padding: "18px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: cred.type === "institution" ? "#EEF2FF" : "#F4F0FD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: cred.type === "institution" ? "#3157E5" : "#6941C6", flexShrink: 0 }}>
                    {cred.type === "institution" ? "AU" : "EXT"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div>
                        <p style={{ color: "#111827", fontSize: 15, fontWeight: 700, margin: "0 0 3px" }}>{cred.name}</p>
                        <p style={{ color: "#667085", fontSize: 13, margin: "0 0 6px" }}>{cred.issuer} · {cred.date}</p>
                        {cred.note && <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 6px", fontStyle: "italic" }}>{cred.note}</p>}
                      </div>
                      <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 5, flexShrink: 0 }}>✓ {cred.status}</span>
                    </div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ color: "#9CA3AF", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{cred.id}</span>
                      {cred.signature && <span style={{ color: "#167A5A", fontSize: 11 }}>· Issuer Signature: Valid</span>}
                      {cred.blockchain && <span style={{ color: "#167A5A", fontSize: 11 }}>· Blockchain Proof: Confirmed</span>}
                      {cred.attestation && <span style={{ color: "#6941C6", fontSize: 11 }}>· Attested by {cred.attestation}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
