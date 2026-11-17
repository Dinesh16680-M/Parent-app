const team = [
  {
    initials: "VN",
    color: "#5b8fba",
    name: "Vishal Naroju",
    role: "UI implementation & component integration",
    badge: "Frontend",
    badgeClass: "badge-fe",
  },
  {
    initials: "DM",
    color: "#378add",
    name: "Dinesh Mariappan",
    role: "UI design, styling & backend services",
    badge: "Full Stack",
    badgeClass: "badge-be",
  },
  {
    initials: "AM",
    color: "#185fa5",
    name: "Animesh Mondol",
    role: "Chat interface & frontend-backend integration",
    badge: "Frontend",
    badgeClass: "badge-fe",
  },
  {
    initials: "MG",
    color: "#4a7c59",
    name: "Mitali Gaikwad",
    role: "API development & backend services",
    badge: "Backend",
    badgeClass: "badge-be",
  },
  {
    initials: "NB",
    color: "#8b6dab",
    name: "Nidhi Bennur",
    role: "AI integration & prompt engineering",
    badge: "AI Lead",
    badgeClass: "badge-ai",
  },
];

const contacts = [
  {
    initials: "NB",
    color: "#8b6dab",
    name: "Nidhi Pramod Bennur",
    email: "n.bennur@oth-aw.de",
  },
  {
    initials: "DM",
    color: "#378add",
    name: "Dinesh Mariappan",
    email: "dineshmariappann@gmail.com",
  },
];

export default function Team() {
  return (
    <section className="landing-section team-section" id="team">
      <div className="section-inner">
        <div className="section-tag">The team</div>
        <h2 className="section-title">
          Built by passionate developers
          <br />
          at OTH Amberg-Weiden
        </h2>
        <p className="section-sub">
          A multidisciplinary team bringing together frontend craft, backend
          engineering, AI integration, and quality assurance.
        </p>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-card">
              <div className="team-avatar" style={{ background: m.color }}>
                {m.initials}
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className={`team-role-badge ${m.badgeClass}`}>{m.badge}</div>
            </div>
          ))}
        </div>
        <div
          className="team-contact-bar"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            padding: 16,
          }}
        >
          {contacts.map((c) => (
            <div
              key={c.email}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "grid",
                  placeItems: "center",
                  background: c.color,
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  boxShadow: "0 0 0 3px rgba(255,255,255,0.08)",
                }}
              >
                {c.initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                  }}
                >
                  Project Contact
                </div>
                <div
                  style={{ color: "white", fontWeight: 600, margin: "2px 0" }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    color: "#8ed4a3",
                    fontSize: "0.85rem",
                    overflowWrap: "anywhere",
                  }}
                >
                  {c.email}
                </div>
              </div>
              <a
                href={`mailto:${c.email}`}
                style={{
                  marginLeft: "auto",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#8ed4a3",
                  border: "1px solid rgba(142,212,163,0.4)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Email
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
