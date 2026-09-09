import type { Screen } from "../../App"

interface Props {
  navigate: (s: Screen) => void
}

export default function ExternalWelcome({ navigate }: Props) {
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
        maxWidth: 600,
        background: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: 16,
        padding: 32,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
      }}>
        <p style={{
          color: "#0F766E",
          fontSize: 11,
          fontWeight: 700,
          margin: "0 0 8px",
          letterSpacing: "0.06em"
        }}>
          NORTHSTAR TECHNOLOGIES
        </p>

        <h1 style={{
          fontSize: 24,
          color: "#111827",
          margin: "0 0 8px"
        }}>
          Welcome to LinkCert, Sarah
        </h1>

        <p style={{
          color: "#667085",
          fontSize: 14,
          lineHeight: 1.6,
          margin: "0 0 24px"
        }}>
          NorthStar Technologies is already an active trusted external
          organization. You only need to activate your authorized user
          account before responding to verification requests.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 24
        }}>
          {[
            ["Organization", "NorthStar Technologies"],
            ["Trust Registry", "ACTIVE"],
            ["Organization ID", "ORG-NT-01827"],
            ["Approved Scope", "Employment / Placement"],
            ["Invited User", "Sarah Thompson"],
            ["Work Email", "sarah.thompson@northstartech.ca"]
          ].map(([label, value]) => (
            <div key={label} style={{
              background: "#F9FAFB",
              border: "1px solid #E4E7EC",
              borderRadius: 8,
              padding: 12
            }}>
              <p style={{
                color: "#9CA3AF",
                fontSize: 10,
                fontWeight: 600,
                margin: "0 0 4px",
                letterSpacing: "0.04em"
              }}>
                {label.toUpperCase()}
              </p>

              <p style={{
                color: label === "Trust Registry" ? "#167A5A" : "#111827",
                fontSize: 12,
                fontWeight: 600,
                margin: 0
              }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          background: "#F0FDFA",
          border: "1px solid #99F6E4",
          borderRadius: 9,
          padding: 14,
          marginBottom: 24
        }}>
          <p style={{
            color: "#0F766E",
            fontSize: 12,
            margin: 0,
            lineHeight: 1.6
          }}>
            NorthStar's organization trust has already been established.
            These next steps verify that you are Sarah Thompson, secure your
            account, and confirm which NorthStar requests you are authorized
            to sign.
          </p>
        </div>

        <button
          onClick={() => navigate("external-security-setup")}
          style={{
            width: "100%",
            padding: 13,
            border: "none",
            borderRadius: 8,
            background: "#0F766E",
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit"
          }}
        >
          Activate My Account →
        </button>
      </div>
    </div>
  )
}
