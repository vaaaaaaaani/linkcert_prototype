import type { Screen } from "../App"

interface SidebarProps {
  currentScreen: Screen
  navigate: (screen: Screen) => void
}

const navItems: { label: string; screen: Screen; icon: string }[] = [
  { label: "Dashboard", screen: "dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "Issue Credentials", screen: "csv-upload", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Submissions", screen: "dashboard", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
  { label: "Approvals", screen: "university-approval", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Credentials", screen: "issued-credential", icon: "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Verification", screen: "public-verification", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Integrations", screen: "dashboard", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
  { label: "Audit Log", screen: "audit-log", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { label: "Settings", screen: "dashboard", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
]

const institutionScreens: Screen[] = [
  "dashboard", "csv-upload", "data-protection", "correction", "batch-review",
  "external-requirement", "verify-ext-org", "external-portal", "attestation-signed",
  "university-approval", "university-signing", "final-fingerprint", "merkle-root",
  "blockchain-anchor", "issued-credential", "audit-log"
]

export default function Sidebar({ currentScreen, navigate }: SidebarProps) {
  const isActive = (screen: Screen) => currentScreen === screen

  return (
    <aside
      style={{ backgroundColor: "#0D1424", minHeight: "100vh", width: 240, flexShrink: 0 }}
      className="flex flex-col"
    >
      {/* Logo */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "20px 20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <div
            style={{
              width: 28, height: 28, borderRadius: 6,
              background: "#3157E5",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: "#FFFFFF", fontWeight: 600, fontSize: 15, letterSpacing: "0.01em" }}>LinkCert</span>
          <span style={{ color: "#3157E5", fontSize: 9, fontWeight: 600, background: "rgba(49,87,229,0.15)", padding: "1px 5px", borderRadius: 3, marginLeft: 2, letterSpacing: "0.05em" }}>ENTERPRISE</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>by LinkBlock</p>
      </div>

      {/* Institution context */}
      <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8, padding: "10px 12px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6, background: "#1E3A5F",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              fontSize: 11, fontWeight: 700, color: "#60A5FA"
            }}>AU</div>
            <div>
              <p style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 600, margin: 0 }}>Algoma University</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, margin: 0 }}>Credential Administrator</p>
            </div>
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, color: "rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.2)", padding: "3px 6px", borderRadius: 3,
            display: "inline-block"
          }}>
            tenant_algoma_001
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: "8px 0", overflowY: "auto" }}>
        {navItems.map(item => (
          <button
            key={item.label}
            onClick={() => navigate(item.screen)}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "8px 16px",
              background: isActive(item.screen) ? "rgba(49,87,229,0.15)" : "transparent",
              border: "none", cursor: "pointer",
              borderLeft: isActive(item.screen) ? "2px solid #3157E5" : "2px solid transparent",
              transition: "all 0.15s"
            }}
            onMouseEnter={e => {
              if (!isActive(item.screen)) {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"
              }
            }}
            onMouseLeave={e => {
              if (!isActive(item.screen)) {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent"
              }
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
              stroke={isActive(item.screen) ? "#3157E5" : "rgba(255,255,255,0.4)"}
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d={item.icon} />
            </svg>
            <span style={{
              fontSize: 13, fontWeight: isActive(item.screen) ? 500 : 400,
              color: isActive(item.screen) ? "#FFFFFF" : "rgba(255,255,255,0.55)"
            }}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "#1D2B4A", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#93C5FD", fontSize: 11, fontWeight: 600
          }}>AM</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 500, margin: 0 }}>Alex Morgan</p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>alex.morgan@algomau.ca</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
