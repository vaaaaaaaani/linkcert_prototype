# Build a production-quality interactive prototype for LinkBlock's standalone product: LinkCert

Create a **high-fidelity, clickable enterprise SaaS prototype** for a product called **LinkCert by LinkBlock**.

This is NOT a generic credential dashboard and NOT a cryptocurrency application.

The prototype must visually demonstrate the **actual LinkCert technical architecture and trust workflow**, including:

* institution / organization identification at login
* multi-tenant isolation
* role-aware access
* institution CSV ingestion
* learner-submitted claims as an alternate intake route
* preservation of original uploaded data
* cryptographic fingerprint/hash creation before approval
* versioning and change detection
* hash-linked audit/provenance events
* optional external-party approval for specific credential types
* verification of the external organization before it can approve anything
* external party digitally signing ONLY its approval/attestation
* institution retaining final academic/credential authority
* university final approval
* university digitally signing the final credential
* creation of final credential fingerprints
* batching credential fingerprints into a Merkle root where appropriate
* blockchain anchoring of cryptographic proof
* public verification
* tamper detection
* credential lifecycle and audit history

The central principle throughout the prototype must be:

**LinkCert orchestrates the trusted workflow, but LinkCert itself is not the academic authority and does not sign the final credential on behalf of the university. The institution signs its own final credential.**

---

# 1. VISUAL DIRECTION

The UI must look like a real enterprise product that could be purchased by a Canadian university, government organization, licensing body, healthcare regulator, or major employer.

Reference the quality and restraint of:

* Stripe Dashboard
* Linear
* Microsoft Entra
* modern government SaaS
* premium security/compliance products

Do NOT make it look like:

* a student project
* a crypto startup
* a blockchain explorer
* a colourful template
* a generic admin dashboard
* a Web3 application
* a presentation slide pretending to be an application

## Overall design

Use a sophisticated neutral palette.

Primary background:

* very light cool grey / off-white

Application shell:

* dark charcoal / very dark navy

Primary interaction colour:

* refined cobalt or royal blue

Success:

* muted emerald

Warnings:

* restrained amber

External attestation:

* subtle violet only when necessary

Errors:

* muted red

Avoid:

* rainbow cards
* bright gradients everywhere
* excessive pills
* glowing blockchain graphics
* crypto hexagons
* giant empty spaces
* cartoon icons
* unnecessary illustrations

Use approximately:

* Background: #F6F7FA
* Surface: #FFFFFF
* Dark navigation: #0D1424
* Primary blue: #3157E5
* Primary blue soft: #EEF2FF
* Text: #111827
* Secondary text: #667085
* Border: #E4E7EC
* Success: #167A5A
* Warning: #B66A15
* Violet: #6941C6
* Error: #C2414B

Use subtle 1px borders and very soft shadows.

Corner radius:

* cards 12–16px
* buttons 8–10px
* do not make everything extremely rounded

Typography:
Use Inter, Geist, or another clean modern enterprise sans serif.

The prototype should primarily be desktop:
**1440 × 900**

Use a left sidebar only once the institution user is inside their authenticated workspace.

Public verification and external-party approval pages should have their own simplified layouts.

---

# 2. PRODUCT STRUCTURE

This prototype is for **LinkCert as a complete standalone product**.

Do not make LinkID required.

LinkCert must be able to handle:

* credential creation
* credential approval
* institution signing
* external attestations
* hash generation
* blockchain proof
* verification
* audit history
* lifecycle management

Create a believable application shell with navigation:

* Dashboard
* Issue Credentials
* Submissions
* Approvals
* Credentials
* Verification
* Integrations
* Audit Log
* Settings

Show the current institution in the sidebar:

**Algoma University**

Show current role:

**Credential Administrator**

Show tenant context discreetly:

`tenant_algoma_001`

---

# 3. IMPORTANT TECHNICAL RULES

The prototype must follow these rules throughout.

## Tenant resolution

When a person signs in, LinkCert first resolves which institution or registered organization they belong to.

For the demo use:

`alex.morgan@algomau.ca`

The system recognizes:

`algomau.ca`

But DO NOT imply that matching an email domain alone automatically proves authority.

Show that:

1. email/domain is detected
2. organization is matched against the LinkBlock trust registry
3. organization status is checked
4. institution SSO or approved authentication can be used
5. role is resolved
6. tenant context is attached to the session
7. tenant isolation is enforced

For the example:

Organization:
**Algoma University**

Tenant:
`tenant_algoma_001`

Role:
**Credential Administrator**

Trust registry:
**Active**

SSO:
**Verified**

Database isolation:
**tenant_id + PostgreSQL Row-Level Security**

Show a subtle technical detail explaining:

> Every authenticated request carries the resolved tenant context. PostgreSQL RLS and tenant-scoped storage prevent one institution from accessing another institution's credential data.

This is a major architecture feature and should be visible without making the application look like an engineering diagram.

---

# 4. SCREEN 1 — SECURE LOGIN

Create an elegant authentication page.

Left side:
LinkBlock / LinkCert branding with a short statement:

**Trusted credential infrastructure starts with verified authority.**

Supporting text:

> LinkCert determines the organization and role before any credential data is loaded.

Right side:
Login panel.

Field:

**Work or institution email**

Demo value:

`alex.morgan@algomau.ca`

Button:

**Continue securely**

Below show:

**Organization access is verified against the LinkBlock trust registry.**

Clicking Continue should trigger the next verification state.

---

# 5. SCREEN 2 — TENANT & ROLE RESOLUTION

Create a polished verification screen showing the process happening.

Animated/loading steps:

1. Detecting organization
2. Matching approved domain
3. Checking trust registry
4. Resolving authentication provider
5. Resolving user role
6. Establishing tenant-isolated session

Then reveal:

### Access verified

**Algoma University**

Domain:
`algomau.ca`

Trust Registry:
**Active**

Authentication:
**Institution SSO verified**

Role:
**Credential Administrator**

Tenant:
`tenant_algoma_001`

Data isolation:
**PostgreSQL RLS active**

File namespace:
`/tenant_algoma_001/*`

Button:

**Enter Algoma University workspace**

This screen should make the multi-tenant architecture extremely understandable to a non-technical executive.

---

# 6. SCREEN 3 — INSTITUTION DASHBOARD

After successful authentication, enter the Algoma University LinkCert workspace.

The sidebar should clearly show:

LINKCERT

Algoma University
Credential Administrator

Show four restrained summary cards:

**12,482**
Issued Credentials

**3**
Batches Awaiting Approval

**7**
External Attestations Pending

**1,821**
Verification Checks This Month

Add a section:

### Work requiring action

Example records:

**CS Graduation 2026**
Institution CSV • 246 records
Status: Review required

**Professional Licence Claim**
Learner submission • Olivia Chen
Status: External attestor required

**Cybersecurity Microcredential**
82 credentials
Status: Ready for institution signing

Include two main actions:

**Upload Institution CSV**

**Review Learner Submission**

This demonstrates that LinkCert supports more than one data-entry model.

---

# 7. TWO INTAKE PATHS

Visually communicate that LinkCert has two possible intake paths.

## Path A — Institution-supplied information

The institution uploads:

* CSV
* later LMS/API/SIS
* officially controlled institutional data

For the prototype, make CSV the primary demo.

## Path B — Learner-supplied information

A learner can submit:

* credential claim
* certification
* licence
* work-placement evidence
* supporting document

But display a clear message:

> Learner-submitted information is not institution-issued merely because it was uploaded. Required verification and institutional approval must occur first.

The main clickable demo should follow Path A first.

---

# 8. SCREEN 4 — CSV UPLOAD

Heading:

**Import Official Credential Data**

Context badges:

Source: Institution CSV

Tenant: Algoma University

Status: Draft

Upload file:

`2026_graduating_students.csv`

Show:

**246 rows**

Uploaded by:
`alex.morgan@algomau.ca`

Show field mapping:

| CSV Field | LinkCert Field | Result |
| student_id | Recipient ID | Matched |
| student_name | Recipient Name | Matched |
| program_name | Credential Title | Matched |
| completion_date | Completion Date | Matched |
| credential_type | Workflow Policy | Matched |

Then button:

**Validate & Protect Source**

---

# 9. SCREEN 5 — PRE-APPROVAL DATA PROTECTION

This screen is extremely important.

Do NOT jump directly from CSV upload to approval.

The prototype must show what LinkCert does to protect the information BEFORE final approval.

Visually show this transformation:

**Original CSV**

↓

**Preserve original source**

↓

**Create SHA-256 file fingerprint**

↓

**Create row-level fingerprints**

↓

**Create record version 1**

↓

**Create hash-linked provenance event**

Show details:

Original file:
`2026_graduating_students.csv`

File SHA-256:
`98af3c72b6e8f91d4c...428fe3`

Rows protected:
`246 / 246`

Version:
`v1`

Tenant:
`tenant_algoma_001`

Actor:
`alex.morgan@algomau.ca`

Timestamp:
`August 25, 2026 • 10:32 AM`

Show a provenance chain such as:

UPLOAD
`H0`

↓

VALIDATION
`H1 = hash(H0 + validation event)`

↓

ROW VERSIONING
`H2 = hash(H1 + record fingerprints)`

↓

NEXT ACTION
will reference `H2`

Include explanation:

> Every important workflow event links to the previous event. A later change creates a new version and a new hash instead of silently replacing history.

Also clearly state:

**No raw student data is placed on blockchain.**

---

# 10. SCREEN 6 — DEMONSTRATE A CHANGE

Add a button on the previous screen:

**Demonstrate a correction**

When clicked, show an example record.

## Version 1 — Preserved

Olivia Chen

Program:
Computer Science

Completion date:
June 12, 2026

Fingerprint:
`a91c...7ef2`

Then show an administrator correcting:

Completion date:

June 12 → **June 13**

Do NOT overwrite Version 1.

Generate:

## Version 2 — Current

Olivia Chen

Program:
Computer Science

Completion date:
June 13, 2026

New fingerprint:
`f23b...94aa`

Then show:

### Correction Event

Changed by:
Alex Morgan

Role:
Credential Administrator

Reason:
Registrar correction

Previous event:
`H2`

New provenance event:

`H3 = hash(H2 + correction event + v2 fingerprint)`

Show visually:

**V1 remains preserved**

→

**Correction recorded**

→

**V2 becomes current**

Include:

> Nothing historical was deleted.

For a pending, not-yet-finalized batch, show:

**Pending batch integrity proof will be recalculated using the current approved fingerprints.**

This is crucial.

---

# 11. SCREEN 7 — BATCH REVIEW & WORKFLOW POLICY

Now show:

### CS Graduation 2026

**246 records ready**

Show workflow policy.

For ordinary degree credentials:

Department Review
↓
Registrar Final Approval
↓
University Signature
↓
Final Proof

External approval:
**Not required**

Then show another example credential type:

### Professional Practice Licence

Workflow:

Institution Review
↓
**External Regulatory Approval Required**
↓
Institution Final Approval
↓
University Signature
↓
Final Proof

This makes it obvious that external approval is configurable by credential type.

Button:

**Open external-approval example**

---

# 12. SCREEN 8 — EXTERNAL PARTY REQUIREMENT

Use a realistic example:

Credential:
**Co-op / Professional Placement Credential**

Recipient:
**Olivia Chen**

Institution:
**Algoma University**

External organization required:

**Northstar Technologies**

Role:
Placement Employer

Required claim:

**Confirm successful completion of work placement**

Show status:

**Waiting for registered external attestor**

Before sending the request, show LinkCert checking the external organization.

---

# 13. SCREEN 9 — VERIFY EXTERNAL ORGANIZATION

This is another critical architecture screen.

Show:

### Verify External Approver

Organization:
**Northstar Technologies**

Domain:
`northstartech.ca`

Trust Registry:
**Registered**

Organization ID:
`ORG-NT-01827`

Attestation permission:
**Employment / Placement Verification**

Signing identity:
**Active**

Signing key:
**Verified**

Account status:
**Approved**

Show that LinkCert is not simply emailing a random person a link.

Display:

> Only registered organizations with an approved attestation role may sign external approval events.

Then select:

Approver:
**Sarah Thompson**

Email:
`sarah.thompson@northstartech.ca`

Role:
**Placement Supervisor**

Button:

**Send Secure Approval Request**

---

# 14. SCREEN 10 — EXTERNAL APPROVER PORTAL

Switch perspective.

Remove the university admin sidebar.

Use a simplified secure portal.

Header:

**LinkCert Secure Attestation**

Show organization:

Northstar Technologies

Show a small badge:

**Registered External Organization**

Show:

### Algoma University requests your confirmation

Recipient:

**Olivia Chen**

Claim:

**Completed approved co-op placement**

Organization:

Northstar Technologies

Position:

Software Developer Intern

Dates:

May 4 – August 28, 2026

Required Hours:
560

Reported Hours:
576

Provide checkboxes:

* Placement was completed
* Employment dates are correct
* Required conditions were satisfied
* Submitted placement details are accurate

Add comment field.

Buttons:

**Request Correction**

**Approve & Sign Attestation**

Important wording:

The button must NOT say:

**Sign Credential**

The external organization is signing only the **attestation / approval event**.

---

# 15. SCREEN 11 — EXTERNAL ATTESTATION SIGNED

After approval show:

### Attestation Recorded

Organization:
Northstar Technologies

Approver:
Sarah Thompson

Role:
Placement Supervisor

Organization ID:
`ORG-NT-01827`

Attestation ID:
`ATT-2026-982271`

Signed:
August 25, 2026 • 10:52 AM

Signature:
**Valid**

Evidence fingerprint:
`7ac91f...30bd`

Show:

**External organization signed the approval evidence.**

Then clearly state:

> This does not issue the credential. The signed attestation is returned to Algoma University for final institutional review.

Button:

**Return to Institution**

---

# 16. SCREEN 12 — UNIVERSITY FINAL APPROVAL

Return to the Algoma University admin interface.

Show a clear approval timeline:

✓ Source submitted

✓ Source fingerprinted

✓ Provenance protected

✓ Internal review completed

✓ External attestation received

✓ External signature verified

● Registrar final approval

○ University credential signature

○ Final credential proof

Show:

### Ready for Institutional Decision

Credential:
Professional Placement Credential

Recipient:
Olivia Chen

Source integrity:
**Verified**

External attestation:
**Northstar Technologies • Valid**

Attestation signature:
**Verified**

History:
**No unresolved changes**

Then button:

**Approve Final Credential**

Make the authority distinction obvious:

> Algoma University remains the final issuing authority.

---

# 17. SCREEN 13 — UNIVERSITY SIGNING

This screen must clearly show WHO signs the credential.

Heading:

### Institution Signing

Issuer:

**Algoma University**

Signing Authority:

**Office of the Registrar**

Institution Issuer ID:
`ISSUER-AU-001`

Issuer key:
**Algoma University Credential Signing Key**

Key status:
**Active**

Credential:
Professional Placement Credential

Recipient:
Olivia Chen

Then:

**Sign Final Credential**

After click simulate:

✓ Final institution approval recorded

✓ Credential payload finalized

✓ Algoma University digital signature applied

✓ Credential fingerprint created

Do NOT say LinkBlock signed the credential.

Show explicitly:

**Signed by Algoma University**

---

# 18. SCREEN 14 — FINAL CREDENTIAL FINGERPRINT

Show:

### Final Signed Credential

Credential ID:
`LC-AU-2026-009821`

Issuer:
Algoma University

Issuer Signature:
**Valid**

Credential SHA-256:

`41e89f7ca02272c...`

Explain the difference between the early and final protection.

Create two visual cards.

## Source Integrity Proof

Protects:
**What entered and changed during the workflow**

Source hash:
`98af...fe3`

Provenance events:
`H0 → H1 → H2 → H3`

## Final Credential Proof

Protects:
**Exactly what Algoma University finally issued**

Final credential hash:
`41e89...72c`

---

# 19. SCREEN 15 — BATCH / MERKLE ROOT

For a credential batch show the final credential fingerprints being combined.

Example:

Credential Hash 001
Credential Hash 002
Credential Hash 003
...
Credential Hash 243

↓

**Merkle Tree**

↓

### Merkle Root

`0x82F7AC...912E`

Explain:

> LinkCert can anchor one Merkle root for a credential batch while each credential retains a proof path back to that root.

Show:

Credentials:
243

Merkle root:
`0x82F7AC...912E`

Issuer:
Algoma University

Status:
Ready to anchor

Button:

**Anchor Batch Proof**

---

# 20. SCREEN 16 — BLOCKCHAIN ANCHOR

Use Polygon as the demo network, but label blockchain infrastructure as configurable.

Show process:

Preparing Merkle root

✓

Verifying institution signature

✓

Submitting blockchain transaction

✓

Waiting for confirmation

↓

### Blockchain Proof Confirmed

Network:
Polygon

Root:
`0x82F7AC...912E`

Transaction:
`0x937ac...829e`

Block:
`#72849314`

Timestamp:
August 25, 2026 • 11:07 AM

Show a privacy card:

### What was placed on-chain

* cryptographic proof
* Merkle root
* timestamp / transaction data
* issuer reference if appropriate

### What was NOT placed on-chain

* student name
* student ID
* grades
* CSV
* credential PDF
* private institutional records

Use the phrase:

**Long-term immutable verification proof**

Do not claim that the complete credential is stored forever on blockchain.

---

# 21. SCREEN 17 — ISSUED CREDENTIAL

Show a beautiful final digital credential.

Issuer:

ALGOMA UNIVERSITY

Recipient:

Olivia Chen

Credential:

Professional Placement Credential

Issued:

August 25, 2026

Credential ID:

`LC-AU-2026-009821`

Status:

**ACTIVE**

QR Code

Tabs:

Credential

Evidence

Proof

History

## Proof tab

Issuer:
Algoma University

Issuer Signature:
✓ Valid

External Attestation:
✓ Northstar Technologies

Attestation Signature:
✓ Valid

Credential Fingerprint:
✓ Match

Merkle Proof:
✓ Valid

Blockchain:
✓ Confirmed

Status:
✓ Active

Privacy:
**No personal information stored on-chain**

---

# 22. SCREEN 18 — PUBLIC VERIFICATION

Remove the admin interface.

Create a polished public LinkCert verification page.

Header:

LINKCERT

### Verify a Credential

Search field:

`LC-AU-2026-009821`

Button:

**Verify**

Then result:

### Credential Verified

**Olivia Chen**

Professional Placement Credential

Issued by:

**Algoma University**

Status:

**VALID**

Verification checks:

✓ Issuer is trusted

✓ Algoma University signature valid

✓ Credential fingerprint valid

✓ External attestation valid

✓ Credential has not been revoked

✓ Merkle proof valid

✓ Blockchain proof confirmed

Button:

**View Integrity Proof**

---

# 23. SCREEN 19 — HASH VERIFICATION

Visually demonstrate how verification works.

### Step 1

Calculate fingerprint of presented credential

`41e89f7ca02272c...`

↓

### Step 2

Verify institution signature

**Algoma University**

✓ Valid

↓

### Step 3

Validate credential's Merkle proof

Computed root:

`0x82F7AC...912E`

Blockchain root:

`0x82F7AC...912E`

↓

# MATCH

### Credential integrity confirmed

Explain:

> The presented credential produces the same cryptographic result as the institution-signed credential included in the anchored batch.

---

# 24. SCREEN 20 — TAMPER DEMONSTRATION

Add a clickable control:

**Demonstrate Tampered Credential**

Change one value:

Original:

Completion Date:
August 28, 2026

Tampered:

Completion Date:
August 21, 2026

Then show:

Presented Credential Hash:

`73AB91...002F`

Expected Credential Hash:

`41E89F...72C`

Large error:

### INTEGRITY CHECK FAILED

**Fingerprints do not match**

Explain:

> Even if the visual credential appears legitimate, changing the credential data creates a different fingerprint.

Show:

Institution signature:
Invalid for modified payload

Merkle proof:
Does not match

Blockchain proof:
Original proof still exists

Status:

**Credential cannot be verified**

This should be one of the strongest demo moments.

---

# 25. SCREEN 21 — AUDIT / PROVENANCE HISTORY

Create a detailed but elegant timeline.

Show:

10:32 AM
Alex Morgan
Algoma University
CSV uploaded

10:33 AM
LinkCert
Original file fingerprint created

10:33 AM
LinkCert
246 record versions created

10:35 AM
Alex Morgan
Record 018 corrected

10:35 AM
LinkCert
Version 2 + new fingerprint created

10:36 AM
Faculty Reviewer
Internal approval

10:41 AM
LinkCert
External attestation requested

10:52 AM
Sarah Thompson
Northstar Technologies
External attestation digitally signed

11:02 AM
Registrar
Algoma University
Final approval

11:04 AM
Algoma University
Final credential digitally signed

11:05 AM
LinkCert
Final credential fingerprints created

11:06 AM
LinkCert
Merkle root generated

11:07 AM
Blockchain
Batch proof confirmed

Every event should show:

* actor
* organization
* role
* tenant
* timestamp
* action
* event hash where useful

---

# 26. IMPORTANT AUTHORITY DISTINCTIONS

The interface must repeatedly communicate these distinctions correctly.

## LinkCert

LinkCert:

* orchestrates workflow
* validates inputs
* stores protected provenance
* creates hashes
* verifies signatures
* manages tenant isolation
* routes approval requests
* constructs Merkle proofs
* anchors blockchain proof
* verifies credentials

LinkCert does NOT impersonate the issuing university.

## External Organization

The external organization:

* verifies only the required external claim
* signs its attestation / approval event
* does NOT issue the final university credential

## University / Institution

The university:

* conducts final review
* retains credential authority
* approves issuance
* signs the final credential with its own institution issuer key

Make this distinction visually obvious.

---

# 27. PROTOTYPE INTERACTIONS

Make the prototype fully clickable.

Main presentation route:

Secure Login

→ Tenant Resolution

→ Institution Workspace

→ Upload CSV

→ Validate

→ Protect Source

→ Create Fingerprints

→ Demonstrate Correction

→ New Version Created

→ Batch Review

→ External Approval Required

→ Verify External Organization

→ Send Request

→ External Approver Portal

→ External Approver Signs Attestation

→ Return to Institution

→ University Final Approval

→ University Signs Credential

→ Final Credential Fingerprint

→ Generate Merkle Root

→ Anchor Blockchain Proof

→ Credential Issued

→ Public Verification

→ Hash Match

→ Tamper Demo

Use realistic:

* click interactions
* loading states
* confirmation modals
* success states
* transitions
* status changes

Do not create fake navigation for every possible button.

Prioritize the buttons needed for this presentation flow.

---

# 28. OPTIONAL ALTERNATE LEARNER-SUBMISSION ROUTE

Also create a short secondary route from the institution dashboard demonstrating learner-originated information.

Example:

Olivia Chen submits:

**Ontario Professional Certification Claim**

Evidence:
`certification.pdf`

The learner's submission should enter the same protected provenance system.

Show:

Learner submission received

↓

Original evidence preserved

↓

Fingerprint created

↓

Institution review

↓

Registered regulator / external attestor required

↓

External attestation

↓

Institution final approval

↓

Institution signing

This route is secondary.

Do not imply that a learner can self-issue a trusted university credential.

---

# 29. MULTI-TENANT DEMONSTRATION

Include at least one subtle demonstration proving tenant isolation.

For example, in Settings or organization switcher show:

Current:

**Algoma University**

`tenant_algoma_001`

Attempting to access another tenant's data should not be possible.

Display:

**Tenant boundaries enforced**

Data:
tenant-scoped

Storage:
tenant-scoped

Database:
PostgreSQL RLS

Issuer keys:
institution-scoped

Audit logs:
tenant-aware

The application should feel multi-tenant without exposing unnecessary infrastructure everywhere.

---

# 30. FINAL QUALITY REQUIREMENTS

Before finishing, review every screen and ensure:

* visual consistency
* premium enterprise appearance
* proper hierarchy
* no random colours
* no childish UI
* no huge empty areas
* no excessive gradients
* no generic crypto imagery
* professional copy
* realistic institutional terminology
* believable timestamps and data
* consistent spacing
* clear statuses
* readable tables
* sophisticated navigation
* smooth prototype transitions

Most importantly, the prototype must visually answer these questions without someone having to explain the architecture verbally:

1. How does LinkCert know which institution the user belongs to?
2. How is tenant data isolated?
3. Who is allowed to upload or submit information?
4. What happens immediately after data is uploaded?
5. When is the first fingerprint/hash created?
6. How is the original data preserved?
7. What happens if somebody edits information?
8. Can changes happen silently?
9. When would an external organization become involved?
10. How does LinkCert know that external organization is legitimate?
11. What exactly does the external organization sign?
12. Who gives the final credential approval?
13. Who signs the final credential?
14. What does LinkCert hash after final issuance?
15. How are batch credentials combined into a Merkle root?
16. What exactly is stored on blockchain?
17. What stays off-chain?
18. How does a verifier prove the credential is authentic?
19. What happens if the credential is altered later?
20. How is the entire workflow auditable?

If a screen does not support this story, simplify or remove it.

The final experience should feel like a **real working LinkCert product demo**, not a technical diagram placed inside UI cards.
