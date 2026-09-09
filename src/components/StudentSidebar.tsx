import type { Screen } from "../App"

interface Props {
  currentScreen: Screen
  navigate: (s: Screen) => void
}

const navItems: { label: string; screen: Screen; icon: string }[] = [
  { label: "Home", screen: "student-home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "My Credentials", screen: "student-credentials", icon: "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Career Credentials", screen: "student-add-credential", icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "My Submissions", screen: "student-submissions", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
  { label: "Approval Tracking", screen: "student-request-sent", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 4h6m-6 4h6" },
  { label: "Share & Verify", screen: "student-share", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
]

export default function StudentSidebar({ currentScreen, navigate }: Props) {
  const isActive = (s: Screen) => currentScreen === s

  return (
    <aside style={{ backgroundColor: "#0D1424", minHeight: "100vh", width: 240, flexShrink: 0, display: "flex", flexDirection: "column" }}>
      {/* Logo */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "20px 20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "#6941C6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 600, fontSize: 15 }}>LinkCert</span>
          <span style={{ color: "#9F7AEA", fontSize: 9, fontWeight: 600, background: "rgba(105,65,198,0.2)", padding: "1px 5px", borderRadius: 3, marginLeft: 2 }}>STUDENT</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>by LinkBlock</p>
      </div>

      {/* Student context */}
      <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2D1B69", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#C4B5FD" }}>OC</div>
            <div>
              <p style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 600, margin: 0 }}>Olivia Chen</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: 0 }}>Student / Learner</p>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, margin: "0 0 4px" }}>Algoma University</p>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)", padding: "2px 6px", borderRadius: 3, display: "inline-block" }}>
            tenant_algoma_001
          </div>
        </div>
      </div>

      {/* Access scope notice */}
      <div style={{ padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(105,65,198,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1, flexShrink: 0 }}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, margin: 0, lineHeight: 1.4 }}>
            Your records only · Record-level access enforced
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "8px 0", overflowY: "auto" }}>
        {navItems.map(item => (
          <button
            key={item.label}
            onClick={() => navigate(item.screen)}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "8px 16px",
              background: isActive(item.screen) ? "rgba(105,65,198,0.15)" : "transparent",
              border: "none", cursor: "pointer",
              borderLeft: isActive(item.screen) ? "2px solid #6941C6" : "2px solid transparent",
              transition: "all 0.15s"
            }}
            onMouseEnter={e => { if (!isActive(item.screen)) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)" }}
            onMouseLeave={e => { if (!isActive(item.screen)) (e.currentTarget as HTMLButtonElement).style.background = "transparent" }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
              stroke={isActive(item.screen) ? "#9F7AEA" : "rgba(255,255,255,0.4)"}
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            <span style={{ fontSize: 13, fontWeight: isActive(item.screen) ? 500 : 400, color: isActive(item.screen) ? "#FFFFFF" : "rgba(255,255,255,0.55)" }}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2D1B69", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD", fontSize: 11, fontWeight: 600 }}>OC</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 500, margin: 0 }}>Olivia Chen</p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, margin: 0 }}>olivia.chen@algomau.ca</p>
          </div>
        </div>
        <button
          onClick={() => navigate("login")}
          style={{ width: "100%", padding: "5px 10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 5, color: "rgba(255,255,255,0.35)", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}
        >
          Switch account
        </button>
      </div>
    </aside>
  )
}
