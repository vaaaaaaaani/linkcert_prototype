import type { Screen } from "../../App"

interface Props {
  navigate: (s: Screen) => void
}

export default function ExternalAccountReady({ navigate }: Props) {
  const checks = [
    "Corporate email verified",
    "Multi-factor authentication enabled",
    "NorthStar membership verified",
    "Placement Attestor role activated"
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F6F7FA",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32
    }}>
      <div style={{
        width: "100%",
        maxWidth: 580,
        background: "#FFFFFF",
        border: "1px solid #167A5A",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
      }}>
        <div style={{
          background: "#167A5A",
          padding: 28,
          textAlign: "center"
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: 24,
            margin: "0 auto 12px"
          }}>
            ✓
          </div>

          <h1 style={{
            color: "#FFFFFF",
            fontSize: 22,
            margin: "0 0 5px"
          }}>
            Your LinkCert account is ready
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 13,
            margin: 0
          }}>
            Sarah Thompson · NorthStar Technologies
          </p>
        </div>

        <div style={{ padding: 28 }}>
          {checks.map(label => (
            <div key={label} style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 14,
              padding: "10px 0",
              borderBottom: "1px solid #F3F4F6"
            }}>
              <span style={{
                color: "#374151",
                fontSize: 13
              }}>
                {label}
              </span>

              <span style={{
                color: "#167A5A",
                fontWeight: 700,
                fontSize: 12
              }}>
                ✓
              </span>
            </div>
          ))}

          <div style={{
            background: "#F9FAFB",
            border: "1px solid #E4E7EC",
            borderRadius: 9,
            padding: 14,
            marginTop: 20,
            marginBottom: 20
          }}>
            <p style={{
              color: "#9CA3AF",
              fontSize: 10,
              margin: 0,
              fontWeight: 600
            }}>
              ORGANIZATION
            </p>

            <p style={{
              color: "#111827",
              fontSize: 12,
              fontWeight: 600,
              margin: "3px 0 12px"
            }}>
              NorthStar Technologies
            </p>

            <p style={{
              color: "#9CA3AF",
              fontSize: 10,
              margin: 0,
              fontWeight: 600
            }}>
              DATA ACCESS
            </p>

            <p style={{
              color: "#111827",
              fontSize: 12,
              margin: "3px 0 0"
            }}>
              Assigned NorthStar attestation requests only
            </p>
          </div>

          <div style={{
            background: "#EEF2FF",
            border: "1px solid #C7D2FE",
            borderRadius: 8,
            padding: 12,
            marginBottom: 20
          }}>
            <p style={{
              color: "#374151",
              fontSize: 11,
              lineHeight: 1.5,
              margin: 0
            }}>
              LinkCert will now resolve your NorthStar tenant, authorized role
              and request access before opening the external attestor
              workspace.
            </p>
          </div>

          <button
            onClick={() => navigate("tenant-resolution")}
            style={{
              width: "100%",
              padding: 13,
              background: "#0F766E",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit"
            }}
          >
            Continue Secure Sign-In →
          </button>
        </div>
      </div>
    </div>
  )
}
