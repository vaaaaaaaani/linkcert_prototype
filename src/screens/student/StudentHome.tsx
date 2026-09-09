import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

const credentials = [
  { name: "Bachelor of Computer Science", issuer: "Algoma University", type: "institution", status: "Verified", date: "May 2026" },
  { name: "Cybersecurity Fundamentals", issuer: "Algoma University", type: "institution", status: "Verified", date: "Apr 2026" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", type: "career", status: "Verified", date: "Mar 2026" },
]

const activity = [
  { label: "Professional Certification submitted", time: "Aug 25 · 10:32 AM", type: "submit" },
  { label: "External verification requested from Northstar Technologies", time: "Aug 25 · 10:41 AM", type: "request" },
  { label: "Employer attestation received from Sarah Thompson", time: "Aug 26 · 10:52 AM", type: "received" },
  { label: "Credential approved by Algoma University", time: "Aug 27 · 11:04 AM", type: "approved" },
]

export default function StudentHome({ navigate, currentScreen }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        {/* Top bar */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: 16, fontWeight: 600, color: "#111827", margin: 0 }}>Good evening, Olivia</h1>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => navigate("student-credentials")} style={{ padding: "7px 14px", background: "#F4F0FD", color: "#6941C6", border: "1px solid #DDD6FE", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>View My Credentials</button>
            <button onClick={() => navigate("student-add-credential")} style={{ padding: "7px 14px", background: "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Add Career Credential</button>
          </div>
        </div>

        <div style={{ padding: "28px 32px" }}>
          <p style={{ color: "#667085", fontSize: 14, margin: "0 0 28px" }}>Your credentials, claims and verification requests in one place.</p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
            {[
              { value: "3", label: "Verified Credentials", color: "#167A5A", bg: "#F0FAF5", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "1", label: "Career Credential Under Review", color: "#B66A15", bg: "#FFF8ED", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "1", label: "External Approval Pending", color: "#6941C6", bg: "#F4F0FD", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
            ].map(card => (
              <div key={card.label} style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "20px 22px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <p style={{ color: "#667085", fontSize: 11, fontWeight: 600, margin: 0, letterSpacing: "0.04em" }}>{card.label.toUpperCase()}</p>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={card.icon}/></svg>
                  </div>
                </div>
                <p style={{ color: "#111827", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>{card.value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
            {/* Credential cards */}
            <div>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 14px" }}>My Credentials</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {credentials.map(cred => (
                  <div
                    key={cred.name}
                    onClick={() => navigate("student-credential-detail")}
                    style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 16, transition: "box-shadow 0.15s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)"}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "none"}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: cred.type === "institution" ? "#EEF2FF" : "#F4F0FD",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700,
                      color: cred.type === "institution" ? "#3157E5" : "#6941C6"
                    }}>
                      {cred.type === "institution" ? "AU" : "EXT"}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: "#111827", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{cred.name}</p>
                      <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>{cred.issuer} · {cred.date}</p>
                      <span style={{ fontSize: 10, fontWeight: 600, color: cred.type === "institution" ? "#3157E5" : "#6941C6", letterSpacing: "0.03em" }}>
                        {cred.type === "institution" ? "INSTITUTION-ISSUED" : "EXTERNAL CAREER CREDENTIAL"}
                      </span>
                    </div>
                    <div style={{ display: "flex", flex: "column", alignItems: "flex-end", gap: 6 }}>
                      <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4, display: "block" }}>✓ {cred.status}</span>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => navigate("student-credentials")}
                  style={{ padding: "11px 16px", background: "#FFFFFF", color: "#667085", border: "1px dashed #D1D5DB", borderRadius: 12, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}
                >
                  View all credentials →
                </button>
              </div>
            </div>

            {/* Recent activity */}
            <div>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 14px" }}>Recent Activity</h2>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, overflow: "hidden" }}>
                {activity.map((item, i) => {
                  const dotColor = item.type === "approved" ? "#167A5A" : item.type === "received" ? "#6941C6" : item.type === "request" ? "#B66A15" : "#3157E5"
                  return (
                    <div key={i} style={{ padding: "13px 16px", borderBottom: i < activity.length - 1 ? "1px solid #F3F4F6" : "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: dotColor, flexShrink: 0, marginTop: 4 }} />
                      <div>
                        <p style={{ color: "#111827", fontSize: 13, margin: 0, lineHeight: 1.4 }}>{item.label}</p>
                        <p style={{ color: "#9CA3AF", fontSize: 11, margin: "2px 0 0", fontFamily: "'JetBrains Mono', monospace" }}>{item.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* RBAC note */}
              <div style={{ marginTop: 16, background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 10, padding: "12px 14px" }}>
                <p style={{ color: "#374151", fontSize: 11, fontWeight: 700, margin: "0 0 4px" }}>Your access scope</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {[
                    { label: "Own credentials", ok: true },
                    { label: "Submission tracking", ok: true },
                    { label: "Share & verify", ok: true },
                    { label: "Institution batch management", ok: false },
                    { label: "Other students' records", ok: false },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 7, alignItems: "center" }}>
                      {item.ok
                        ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#167A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#C2414B" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      }
                      <span style={{ color: item.ok ? "#374151" : "#9CA3AF", fontSize: 11 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
