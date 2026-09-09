import { useState } from "react"
import Screen01Login from "./screens/Screen01Login"
import Screen02TenantResolution from "./screens/Screen02TenantResolution"
import Screen03Dashboard from "./screens/Screen03Dashboard"
import Screen04CSVUpload from "./screens/Screen04CSVUpload"
import Screen05DataProtection from "./screens/Screen05DataProtection"
import Screen06Correction from "./screens/Screen06Correction"
import Screen07BatchReview from "./screens/Screen07BatchReview"
import Screen08ExternalRequirement from "./screens/Screen08ExternalRequirement"
import Screen09VerifyExtOrg from "./screens/Screen09VerifyExtOrg"
import Screen10ExternalPortal from "./screens/Screen10ExternalPortal"
import Screen11AttestationSigned from "./screens/Screen11AttestationSigned"
import Screen12UniversityApproval from "./screens/Screen12UniversityApproval"
import Screen13UniversitySigning from "./screens/Screen13UniversitySigning"
import Screen14FinalFingerprint from "./screens/Screen14FinalFingerprint"
import Screen15MerkleRoot from "./screens/Screen15MerkleRoot"
import Screen16BlockchainAnchor from "./screens/Screen16BlockchainAnchor"
import Screen17IssuedCredential from "./screens/Screen17IssuedCredential"
import Screen18PublicVerification from "./screens/Screen18PublicVerification"
import Screen19HashVerification from "./screens/Screen19HashVerification"
import Screen20TamperDemo from "./screens/Screen20TamperDemo"
import Screen21AuditLog from "./screens/Screen21AuditLog"
// NorthStar onboarding screens
import NSScreen01NotRegistered from "./screens/northstar/NSScreen01NotRegistered"
import NSScreen02InvitationSent from "./screens/northstar/NSScreen02InvitationSent"
import NSScreen03InvitationEmail from "./screens/northstar/NSScreen03InvitationEmail"
import NSScreen04Welcome from "./screens/northstar/NSScreen04Welcome"
import NSScreen05OrgDetails from "./screens/northstar/NSScreen05OrgDetails"
import NSScreen06VerifyDomain from "./screens/northstar/NSScreen06VerifyDomain"
import NSScreen07OrgLegitimacy from "./screens/northstar/NSScreen07OrgLegitimacy"
import NSScreen08AttestationAuthority from "./screens/northstar/NSScreen08AttestationAuthority"
import NSScreen09VerifyRep from "./screens/northstar/NSScreen09VerifyRep"
import NSScreen10LBReviewQueue from "./screens/northstar/NSScreen10LBReviewQueue"
import NSScreen11LBOrgReview from "./screens/northstar/NSScreen11LBOrgReview"
import NSScreen12Provisioning from "./screens/northstar/NSScreen12Provisioning"
import NSScreen13SigningIdentity from "./screens/northstar/NSScreen13SigningIdentity"
import NSScreen14TrustRegistry from "./screens/northstar/NSScreen14TrustRegistry"
import NSScreen15RequestInbox from "./screens/northstar/NSScreen15RequestInbox"
import NSTrustDetails from "./screens/northstar/NSTrustDetails"
import NSReturningOrg from "./screens/northstar/NSReturningOrg"
import NSFailure from "./screens/northstar/NSFailure"
import NSSuspended from "./screens/northstar/NSSuspended"
// Student screens
import StudentHome from "./screens/student/StudentHome"
import StudentCredentials from "./screens/student/StudentCredentials"
import StudentAddCredential from "./screens/student/StudentAddCredential"
import StudentProtectSubmission from "./screens/student/StudentProtectSubmission"
import StudentVerificationReqs from "./screens/student/StudentVerificationReqs"
import StudentExtOrgCheck from "./screens/student/StudentExtOrgCheck"
import StudentRequestSent from "./screens/student/StudentRequestSent"
import StudentAttestationReceived from "./screens/student/StudentAttestationReceived"
import StudentVerifiedResult from "./screens/student/StudentVerifiedResult"
import StudentCredentialDetail from "./screens/student/StudentCredentialDetail"
import StudentShare from "./screens/student/StudentShare"
import StudentSubmissions from "./screens/student/StudentSubmissions"

export type Persona = "admin" | "student"

export type Screen =
  // Admin screens
  | "login"
  | "tenant-resolution"
  | "dashboard"
  | "csv-upload"
  | "data-protection"
  | "correction"
  | "batch-review"
  | "external-requirement"
  | "verify-ext-org"
  | "external-portal"
  | "attestation-signed"
  | "university-approval"
  | "university-signing"
  | "final-fingerprint"
  | "merkle-root"
  | "blockchain-anchor"
  | "issued-credential"
  | "public-verification"
  | "hash-verification"
  | "tamper-demo"
  | "audit-log"
  // NorthStar onboarding screens
  | "ns-not-registered"
  | "ns-invitation-sent"
  | "ns-invitation-email"
  | "ns-onboarding-welcome"
  | "ns-org-details"
  | "ns-verify-domain"
  | "ns-org-legitimacy"
  | "ns-attestation-authority"
  | "ns-verify-rep"
  | "ns-lb-review-queue"
  | "ns-lb-org-review"
  | "ns-provisioning"
  | "ns-signing-identity"
  | "ns-trust-registry-active"
  | "ns-request-inbox"
  | "ns-trust-details"
  | "ns-returning-org"
  | "ns-failure"
  | "ns-suspended"
  // Student screens
  | "student-home"
  | "student-credentials"
  | "student-add-credential"
  | "student-protect-submission"
  | "student-verification-reqs"
  | "student-ext-org-check"
  | "student-request-sent"
  | "student-attestation-received"
  | "student-verified-result"
  | "student-credential-detail"
  | "student-share"
  | "student-submissions"

export default function App() {
  const [screen, setScreen] = useState<Screen>("login")
  const [persona, setPersona] = useState<Persona>("admin")

  const navigate = (s: Screen) => setScreen(s)
  const setPersonaAndNavigate = (p: Persona) => {
    setPersona(p)
    setScreen("tenant-resolution")
  }

  const screenProps = { navigate, currentScreen: screen, persona }

  const isStudentScreen = screen.startsWith("student-")
  const isNSScreen = screen.startsWith("ns-")
  const isPublicScreen = ["public-verification", "hash-verification", "tamper-demo", "external-portal", "attestation-signed"].includes(screen)

  return (
    <div style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Progress bar */}
      {!["login", "tenant-resolution", "external-portal", "attestation-signed", "public-verification", "hash-verification", "tamper-demo"].includes(screen) && !isNSScreen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "#E4E7EC", zIndex: 1000 }}>
          <div style={{
            height: "100%",
            background: isStudentScreen ? "#6941C6" : "#3157E5",
            width: `${getProgress(screen)}%`,
            transition: "width 0.4s ease"
          }} />
        </div>
      )}

      <div style={{ flex: 1, height: "100vh" }}>
        {/* Auth */}
        {screen === "login" && <Screen01Login navigate={navigate} onSelectPersona={setPersonaAndNavigate} />}
        {screen === "tenant-resolution" && <Screen02TenantResolution navigate={navigate} persona={persona} />}

        {/* Admin screens */}
        {screen === "dashboard" && <Screen03Dashboard {...screenProps} />}
        {screen === "csv-upload" && <Screen04CSVUpload {...screenProps} />}
        {screen === "data-protection" && <Screen05DataProtection {...screenProps} />}
        {screen === "correction" && <Screen06Correction {...screenProps} />}
        {screen === "batch-review" && <Screen07BatchReview {...screenProps} />}
        {screen === "external-requirement" && <Screen08ExternalRequirement {...screenProps} />}
        {screen === "verify-ext-org" && <Screen09VerifyExtOrg {...screenProps} />}
        {screen === "external-portal" && <Screen10ExternalPortal navigate={navigate} />}
        {screen === "attestation-signed" && <Screen11AttestationSigned navigate={navigate} persona={persona} />}
        {screen === "university-approval" && <Screen12UniversityApproval {...screenProps} />}
        {screen === "university-signing" && <Screen13UniversitySigning {...screenProps} />}
        {screen === "final-fingerprint" && <Screen14FinalFingerprint {...screenProps} />}
        {screen === "merkle-root" && <Screen15MerkleRoot {...screenProps} />}
        {screen === "blockchain-anchor" && <Screen16BlockchainAnchor {...screenProps} />}
        {screen === "issued-credential" && <Screen17IssuedCredential {...screenProps} />}
        {screen === "public-verification" && <Screen18PublicVerification navigate={navigate} />}
        {screen === "hash-verification" && <Screen19HashVerification navigate={navigate} />}
        {screen === "tamper-demo" && <Screen20TamperDemo navigate={navigate} />}
        {screen === "audit-log" && <Screen21AuditLog {...screenProps} />}

        {/* NorthStar onboarding screens */}
        {screen === "ns-not-registered" && <NSScreen01NotRegistered navigate={navigate} currentScreen={screen} />}
        {screen === "ns-invitation-sent" && <NSScreen02InvitationSent navigate={navigate} currentScreen={screen} />}
        {screen === "ns-invitation-email" && <NSScreen03InvitationEmail navigate={navigate} />}
        {screen === "ns-onboarding-welcome" && <NSScreen04Welcome navigate={navigate} />}
        {screen === "ns-org-details" && <NSScreen05OrgDetails navigate={navigate} />}
        {screen === "ns-verify-domain" && <NSScreen06VerifyDomain navigate={navigate} />}
        {screen === "ns-org-legitimacy" && <NSScreen07OrgLegitimacy navigate={navigate} />}
        {screen === "ns-attestation-authority" && <NSScreen08AttestationAuthority navigate={navigate} />}
        {screen === "ns-verify-rep" && <NSScreen09VerifyRep navigate={navigate} />}
        {screen === "ns-lb-review-queue" && <NSScreen10LBReviewQueue navigate={navigate} />}
        {screen === "ns-lb-org-review" && <NSScreen11LBOrgReview navigate={navigate} />}
        {screen === "ns-provisioning" && <NSScreen12Provisioning navigate={navigate} />}
        {screen === "ns-signing-identity" && <NSScreen13SigningIdentity navigate={navigate} />}
        {screen === "ns-trust-registry-active" && <NSScreen14TrustRegistry navigate={navigate} />}
        {screen === "ns-request-inbox" && <NSScreen15RequestInbox navigate={navigate} />}
        {screen === "ns-trust-details" && <NSTrustDetails navigate={navigate} />}
        {screen === "ns-returning-org" && <NSReturningOrg navigate={navigate} currentScreen={screen} />}
        {screen === "ns-failure" && <NSFailure navigate={navigate} />}
        {screen === "ns-suspended" && <NSSuspended navigate={navigate} />}

        {/* Student screens */}
        {screen === "student-home" && <StudentHome navigate={navigate} currentScreen={screen} />}
        {screen === "student-credentials" && <StudentCredentials navigate={navigate} currentScreen={screen} />}
        {screen === "student-add-credential" && <StudentAddCredential navigate={navigate} currentScreen={screen} />}
        {screen === "student-protect-submission" && <StudentProtectSubmission navigate={navigate} currentScreen={screen} />}
        {screen === "student-verification-reqs" && <StudentVerificationReqs navigate={navigate} currentScreen={screen} />}
        {screen === "student-ext-org-check" && <StudentExtOrgCheck navigate={navigate} currentScreen={screen} />}
        {screen === "student-request-sent" && <StudentRequestSent navigate={navigate} currentScreen={screen} />}
        {screen === "student-attestation-received" && <StudentAttestationReceived navigate={navigate} currentScreen={screen} />}
        {screen === "student-verified-result" && <StudentVerifiedResult navigate={navigate} currentScreen={screen} />}
        {screen === "student-credential-detail" && <StudentCredentialDetail navigate={navigate} currentScreen={screen} />}
        {screen === "student-share" && <StudentShare navigate={navigate} currentScreen={screen} />}
        {screen === "student-submissions" && <StudentSubmissions navigate={navigate} currentScreen={screen} />}
      </div>
    </div>
  )
}

function getProgress(screen: Screen): number {
  const adminOrder: Screen[] = [
    "login", "tenant-resolution", "dashboard", "csv-upload",
    "data-protection", "correction", "batch-review",
    "external-requirement", "verify-ext-org", "external-portal",
    "attestation-signed", "university-approval", "university-signing",
    "final-fingerprint", "merkle-root", "blockchain-anchor",
    "issued-credential", "public-verification", "hash-verification",
    "tamper-demo", "audit-log"
  ]
  const studentOrder: Screen[] = [
    "student-home", "student-credentials", "student-add-credential",
    "student-protect-submission", "student-verification-reqs",
    "student-ext-org-check", "student-request-sent",
    "student-attestation-received", "student-verified-result",
    "student-credential-detail", "student-share", "student-submissions"
  ]
  const order = screen.startsWith("student-") ? studentOrder : adminOrder
  const idx = order.indexOf(screen)
  if (idx < 0) return 0
  return Math.round(((idx + 1) / order.length) * 100)
}
