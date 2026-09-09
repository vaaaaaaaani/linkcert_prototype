import { useState } from "react"
import type { Screen } from "../../App"
import StudentSidebar from "../../components/StudentSidebar"

interface Props { navigate: (s: Screen) => void; currentScreen: Screen }

export default function StudentShare({ navigate, currentScreen }: Props) {
  const [copied, setCopied] = useState(false)
  const [linkType, setLinkType] = useState<"public" | "limited">("public")

  const verifyLink = "https://verify.linkcert.io/LC-AU-2026-009821"

  function handleCopy() {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <StudentSidebar currentScreen={currentScreen} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto", background: "#F6F7FA" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC", padding: "0 32px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => navigate("student-credential-detail")} style={{ background: "none", border: "none", cursor: "pointer", color: "#667085", fontSize: 13, padding: 0, fontFamily: "inherit" }}>Credential Detail</button>
          <span style={{ color: "#D1D5DB" }}>›</span>
          <span style={{ color: "#111827", fontSize: 13, fontWeight: 500 }}>Share Credential</span>
        </div>

        <div style={{ padding: "28px 32px", maxWidth: 680 }}>
          <div style={{ marginBottom: 22 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px", letterSpacing: "-0.01em" }}>Share Your Credential</h1>
            <p style={{ color: "#667085", fontSize: 14, margin: 0 }}>Share a verification link or QR code. Recipients can independently verify the credential without needing a LinkCert account.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Credential being shared */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 20 }}>
                <p style={{ color: "#9CA3AF", fontSize: 10, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.06em" }}>CREDENTIAL BEING SHARED</p>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: "#1E1E4E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>🎓</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#111827", fontSize: 13, fontWeight: 700, margin: "0 0 2px" }}>Professional Placement Credential</p>
                    <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>Algoma University · LC-AU-2026-009821</p>
                  </div>
                  <span style={{ background: "#F0FAF5", color: "#167A5A", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>VERIFIED</span>
                </div>
              </div>

              {/* Link type */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 20 }}>
                <p style={{ color: "#374151", fontSize: 13, fontWeight: 600, margin: "0 0 12px" }}>Verification link type</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  {([
                    { id: "public", label: "Public verification link", desc: "Anyone with the link can verify — no personal details exposed beyond the credential itself" },
                    { id: "limited", label: "Time-limited link (24 hrs)", desc: "Link expires after 24 hours for extra control" },
                  ] as const).map(opt => (
                    <label key={opt.id} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 12px", borderRadius: 9, border: `1px solid ${linkType === opt.id ? "#6941C6" : "#E4E7EC"}`, background: linkType === opt.id ? "#F4F0FD" : "#F9FAFB", cursor: "pointer" }}>
                      <input type="radio" checked={linkType === opt.id} onChange={() => setLinkType(opt.id)} style={{ marginTop: 2, accentColor: "#6941C6" }} />
                      <div>
                        <p style={{ color: "#111827", fontSize: 13, fontWeight: 500, margin: "0 0 2px" }}>{opt.label}</p>
                        <p style={{ color: "#667085", fontSize: 11, margin: 0 }}>{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Link display */}
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ flex: 1, background: "#F9FAFB", border: "1px solid #E4E7EC", borderRadius: 7, padding: "9px 12px" }}>
                    <p style={{ color: "#374151", fontSize: 11, margin: 0, fontFamily: "'JetBrains Mono', monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{verifyLink}</p>
                  </div>
                  <button onClick={handleCopy} style={{ padding: "9px 14px", background: copied ? "#167A5A" : "#6941C6", color: "#FFFFFF", border: "none", borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap", transition: "background 0.2s" }}>
                    {copied ? "Copied!" : "Copy link"}
                  </button>
                </div>
              </div>

              {/* Share options */}
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 20 }}>
                <p style={{ color: "#374151", fontSize: 13, fontWeight: 600, margin: "0 0 12px" }}>Share via</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { icon: "✉️", label: "Email verification link", desc: "Send to a recruiter or employer" },
                    { icon: "💼", label: "LinkedIn (verification URL)", desc: "Add to your profile or a post" },
                    { icon: "📋", label: "Export as PDF", desc: "Include QR code + credential summary" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 10, padding: "10px 12px", borderRadius: 8, border: "1px solid #E4E7EC", background: "#F9FAFB", alignItems: "center", cursor: "pointer" }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <div>
                        <p style={{ color: "#111827", fontSize: 13, fontWeight: 500, margin: "0 0 1px" }}>{item.label}</p>
                        <p style={{ color: "#9CA3AF", fontSize: 11, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QR code column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: 12, padding: 24, textAlign: "center" }}>
                <p style={{ color: "#374151", fontSize: 13, fontWeight: 600, margin: "0 0 16px" }}>QR Code</p>
                {/* Stylized QR placeholder */}
                <div style={{ width: 180, height: 180, margin: "0 auto 16px", background: "#F9FAFB", borderRadius: 12, border: "1px solid #E4E7EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                    {/* QR code art approximation */}
                    <rect x="5" y="5" width="50" height="50" rx="4" fill="#0D1424"/>
                    <rect x="12" y="12" width="36" height="36" rx="2" fill="#F9FAFB"/>
                    <rect x="19" y="19" width="22" height="22" rx="1" fill="#0D1424"/>
                    <rect x="85" y="5" width="50" height="50" rx="4" fill="#0D1424"/>
                    <rect x="92" y="12" width="36" height="36" rx="2" fill="#F9FAFB"/>
                    <rect x="99" y="19" width="22" height="22" rx="1" fill="#0D1424"/>
                    <rect x="5" y="85" width="50" height="50" rx="4" fill="#0D1424"/>
                    <rect x="12" y="92" width="36" height="36" rx="2" fill="#F9FAFB"/>
                    <rect x="19" y="99" width="22" height="22" rx="1" fill="#0D1424"/>
                    {/* Data cells */}
                    {[63,70,77,84,91,98,105,112,63,77,91,105,70,84,98,112].map((x, i) => (
                      <rect key={i} x={x} y={63 + (i % 4) * 7} width="5" height="5" fill="#0D1424" opacity={Math.random() > 0.4 ? 1 : 0.3}/>
                    ))}
                    {[5,12,19,26,33,40,47].map((y, i) => (
                      <rect key={`d${i}`} x={63 + i * 7} y={y} width="5" height="5" fill="#0D1424" opacity={i % 2 === 0 ? 1 : 0.2}/>
                    ))}
                    <rect x="58" y="58" width="14" height="14" rx="3" fill="#6941C6"/>
                    <rect x="62" y="62" width="6" height="6" rx="1" fill="#FFFFFF"/>
                  </svg>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: 11, margin: "0 0 14px", lineHeight: 1.5 }}>Point a phone camera to verify this credential instantly</p>
                <button style={{ width: "100%", padding: "9px 16px", background: "#F9FAFB", color: "#374151", border: "1px solid #E4E7EC", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                  Download QR Code
                </button>
              </div>

              {/* Privacy note */}
              <div style={{ background: "#F4F0FD", border: "1px solid #DDD6FE", borderRadius: 10, padding: 16 }}>
                <p style={{ color: "#6941C6", fontSize: 12, fontWeight: 700, margin: "0 0 6px" }}>Your privacy is protected</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {[
                    "No personal data is stored on-chain",
                    "Verifiers see only what is in the credential itself",
                    "You control what you share",
                  ].map(item => (
                    <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginTop: 1, flexShrink: 0 }}><path d="M2 6l2.5 2.5L10 3" stroke="#6941C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ color: "#374151", fontSize: 12 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => navigate("public-verification")} style={{ width: "100%", padding: "10px 16px", background: "#FFFFFF", color: "#3157E5", border: "1px solid #C7D7FD", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                Preview what verifiers see →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
