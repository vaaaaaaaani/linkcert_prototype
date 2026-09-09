import type { Screen } from "../../App"

interface Props { navigate: (s: Screen) => void }

export default function NSScreen15RequestInbox({ navigate }: Props) {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F7FA", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0D1424", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 40px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#1E3A5F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#60A5FA" }}>NT</div>
          <div>
            <p style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700, margin: 0 }}>NorthStar Technologies</p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, margin: 0 }}>LinkCert External Attestor</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#3157E5" }}>ST</div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600, margin: 0 }}>Sarah Thompson</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: 0 }}>Organization Administrator / Placement Attestor</p>
          </div>
        </div>
      </header>

      <div style={{ flex: 1, display: "flex" }}>
        {/* NorthStar-specific sidebar */}
        <nav style={{ width: 220, background: "#111827", padding: "20px 0" }}>
          <div style={{ padding: "0 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: 12 }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em" }}>NORTHSTAR ATTESTOR PORTAL</span>
          </div>
          {[
            { label: "Requests", active: true, badge: "1" },
            { label: "Attestations", active: false },
            { label: "Authorized Users", active: false },
            { label: "Organization Profile", active: false },
            { label: "Security", active: false },
          ].map(item => (
            <div key={item.label} style={{
              padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
              background: item.active ? "rgba(49,87,229,0.15)" : "transparent",
              borderLeft: item.active ? "3px solid #3157E5" : "3px solid transparent",
              cursor: "pointer"
            }}>
              <span style={{ color: item.active ? "#FFFFFF" : "#94A3B8", fontSize: 13, fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
              {item.badge && <span style={{ background: "#DC2626", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 10 }}>{item.badge}</span>}
            </div>
          ))}
          {/* Explicitly absent items */}
          <div style={{ marginTop: 20, padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, fontWeight: 600, margin: "0 0 6px", letterSpacing: "0.04em" }}>NOT AVAILABLE IN THIS ROLE</p>
            {["Issue Credentials", "University Batches", "Student Directory", "Registrar Controls"].map(item => (
              <p key={item} style={{ color: "rgba(255,255,255,0.15)", fontSize: 11, margin: "4px 0", textDecoration: "line-through" }}>{item}</p>
            ))}
          </div>
        </nav>

        <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
          <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: 0 }}>Requests</h1>
            <span style={{ background: "#FEF2F2", color: "#DC2626", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, border: "1px solid #FECACA" }}>1 READY FOR REVIEW</span>
          </div>

          <div style={{ padding: "28px 32px" }}>
            {/* Context notice */}
            <div style={{ background: "#F0FAF5", border: "1px solid #D1FAE5", borderRadius: 10, padding: "14px 18px", marginBottom: 20, display: "flex", gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#167A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
              </svg>
              <p style={{ color: "#059669", fontSize: 13, margin: 0 }}>
                NorthStar Technologies is now a verified LinkCert attestor. You may respond to attestation requests within your approved scope: <strong>Employment / Placement Verification</strong>.
              </p>
            </div>

            {/* Request card */}
            <div style={{ background: "#FFFFFF", border: "2px solid #3157E5", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(49,87,229,0.08)" }}>
              <div style={{ padding: "14px 20px", background: "#EEF2FF", borderBottom: "1px solid #C7D2FE", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3157E5" }} />
                <span style={{ color: "#3157E5", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>READY FOR REVIEW</span>
                <span style={{ color: "#667085", fontSize: 12, marginLeft: "auto" }}>Received today</span>
              </div>

              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#F0F9FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#0284C7" }}>AU</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#111827", fontSize: 14, fontWeight: 700, margin: "0 0 2px" }}>Algoma University</p>
                    <p style={{ color: "#667085", fontSize: 12, margin: 0 }}>via LinkCert Secure Request Channel</p>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                  {[
                    { label: "Student", value: "Olivia Chen" },
                    { label: "Credential", value: "Professional Placement Credential" },
                    { label: "Request", value: "Confirm completed work placement" },
                    { label: "Scope", value: "Employment / Placement Verification" },
                  ].map(item => (
                    <div key={item.label} style={{ padding: "10px 12px", background: "#F9FAFB", borderRadius: 7, border: "1px solid #E4E7EC" }}>
                      <p style={{ color: "#9CA3AF", fontSize: 10, margin: "0 0 2px", fontWeight: 600, letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</p>
                      <p style={{ color: "#111827", fontSize: 12, margin: 0, fontWeight: 500 }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate("external-portal")}
                  style={{
                    width: "100%", padding: "12px", background: "#3157E5", color: "#FFFFFF",
                    border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Open Request →
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
