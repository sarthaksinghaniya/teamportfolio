# TechNeekX Team Join Forms Configuration

## 📋 Form Links (Central Configuration)

### 🎯 Core Team (Leadership Roles)
**Form Link**: https://docs.google.com/forms/d/e/1FAIpQLSdc52oyOanPxwuwAD6X90CXWfYZgaetzqvrhRgsUZgeIhd-1g/viewform?usp=sharing&ouid=104837717389254135158

**Used For:**
- "Join Core Team"
- "Apply as Chief Officer (CDO, CMO, etc.)"
- Any leadership / high-responsibility roles
- Core Team hiring section

---

### 👥 General Team Members
**Form Link**: https://forms.gle/B58bPKQufVLQ71zJ6

**Used For:**
- "Join as Member"
- "Become a Builder"
- "Join the Team"
- Community contributors (non-lead roles)
- General team applications

---

### 🤝 Community Partners / Sponsors
**Form Link**: https://forms.gle/AzoD5g1nUe9mNRDs9

**Used For:**
- "Join as Partner"
- "Become a Community Partner"
- "Sponsor / Collaborate"
- Partnership / ecosystem roles
- Community Partners Wall

---

## 🔧 Technical Implementation

### JavaScript/TypeScript Usage:
```javascript
// Import from this config file
const TEAM_FORMS = {
  coreTeam: "https://docs.google.com/forms/d/e/1FAIpQLSdc52oyOanPxwuwAD6X90CXWfYZgaetzqvrhRgsUZgeIhd-1g/viewform?usp=sharing&ouid=104837717389254135158",
  member: "https://forms.gle/B58bPKQufVLQ71zJ6",
  partner: "https://forms.gle/AzoD5g1nUe9mNRDs9"
};
```

### Button Attributes:
- Open in new tab: `target="_blank"`
- Security: `rel="noopener noreferrer"`
- Clear intent: Specific action labels

---

## 📊 Conversion Optimization

### Trust Indicators:
- "Join 50+ builders already in TechNeekX"
- "Takes 2 minutes to apply"
- "Leadership roles available"

### Clear CTAs:
- "Apply for Core Team" (not just "Apply")
- "Join as Member" (not just "Join Now")
- "Become a Partner" (not just "Get Started")

---

## 🎯 Implementation Mapping

### Core Team Section:
- Button: "Apply Now" → coreTeamForm
- Target: Leadership applicants

### Community Partners Wall:
- Button: "Join Community" → partnerForm
- Target: Partners and sponsors

### Build With Your Network:
- Primary: "Invite Team" (EmailJS)
- Secondary: "Join as Member" → memberForm

### Navbar/Hero CTAs:
- Primary: "Join as Member" → memberForm
- Secondary: "Apply for Core Team" → coreTeamForm

---

## ✅ Validation Checklist

### Link Mapping:
- [x] Core Team → Leadership form
- [x] Members → General form
- [x] Partners → Partnership form
- [x] No wrong link mappings
- [x] All CTAs functional

### UX Optimization:
- [x] Clear intent labels
- [x] New tab opening
- [x] Trust indicators
- [x] Conversion-focused copy

---

## 📧 EmailJS Configuration
- Service ID: service_8p0se74
- Template ID: template_g3z2zbj
- Public Key: F1Bc1zloRb22VM544
