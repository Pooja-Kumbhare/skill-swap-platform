import React, { useState } from "react";
import "./App.css";

const skills = [
  {
    name: "Aarav Sharma",
    skill: "Photography",
    wants: "Graphic Design",
    category: "Creative",
    rating: 4.9,
    icon: "📸",
  },
  {
    name: "Ananya Mehta",
    skill: "Python Programming",
    wants: "Video Editing",
    category: "Technology",
    rating: 4.8,
    icon: "💻",
  },
  {
    name: "Rohan Verma",
    skill: "Guitar",
    wants: "Public Speaking",
    category: "Music",
    rating: 4.7,
    icon: "🎸",
  },
  {
    name: "Sara Khan",
    skill: "Digital Art",
    wants: "French",
    category: "Creative",
    rating: 4.9,
    icon: "🎨",
  },
  {
    name: "Kabir Singh",
    skill: "Public Speaking",
    wants: "Photography",
    category: "Communication",
    rating: 4.6,
    icon: "🎤",
  },
  {
    name: "Diya Patel",
    skill: "Web Development",
    wants: "Guitar",
    category: "Technology",
    rating: 4.8,
    icon: "🌐",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const filteredSkills = skills.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.skill.toLowerCase().includes(search.toLowerCase()) ||
      person.wants.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || person.category === category;

    return matchesSearch && matchesCategory;
  });

  const connect = (name) => {
    setMessage(`Swap request sent to ${name}!`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>🔄</span> Skill<span>Swap</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#how">How It Works</a>
          <a href="#about">About</a>
        </div>

        <button
          className="join-btn"
          onClick={() => setShowForm(true)}
        >
          Join SkillSwap
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="badge">
            ✨ Learn. Share. Grow.
          </div>

          <h1>
            Your Skills Are
            <br />
            <span>Worth Sharing.</span>
          </h1>

          <p>
            Connect with people, exchange knowledge, and learn
            something amazing — without spending a fortune.
          </p>

          <div className="hero-buttons">
            <a href="#explore" className="primary-btn">
              Explore Skills →
            </a>

            <button
              className="secondary-btn"
              onClick={() => setShowForm(true)}
            >
              Share My Skill
            </button>
          </div>

          <div className="stats">
            <div>
              <strong>2,500+</strong>
              <span>Members</span>
            </div>

            <div>
              <strong>1,200+</strong>
              <span>Skills</span>
            </div>

            <div>
              <strong>4,800+</strong>
              <span>Swaps Made</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="floating-card card-one">
            <span>🎨</span>
            <div>
              <b>Graphic Design</b>
              <small>Sarah wants to learn</small>
            </div>
          </div>

          <div className="swap-circle">
            🔄
          </div>

          <div className="floating-card card-two">
            <span>💻</span>
            <div>
              <b>Web Development</b>
              <small>Alex can teach</small>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="explore" id="explore">

        <div className="section-heading">
          <div>
            <span className="mini-title">DISCOVER</span>
            <h2>Find Your Next Skill</h2>
            <p>
              Search for something you want to learn or someone
              who can teach you.
            </p>
          </div>
        </div>

        <div className="search-area">
          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search skills, people..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Technology</option>
            <option>Creative</option>
            <option>Music</option>
            <option>Communication</option>
          </select>
        </div>

        <div className="skill-grid">

          {filteredSkills.map((person, index) => (
            <div className="skill-card" key={index}>

              <div className="person-top">
                <div className="avatar">
                  {person.icon}
                </div>

                <div>
                  <h3>{person.name}</h3>
                  <div className="rating">
                    ⭐ {person.rating}
                  </div>
                </div>
              </div>

              <div className="skill-info">
                <div>
                  <small>CAN TEACH</small>
                  <strong>{person.skill}</strong>
                </div>

                <div>
                  <small>WANTS TO LEARN</small>
                  <strong>{person.wants}</strong>
                </div>
              </div>

              <button
                className="connect-btn"
                onClick={() => connect(person.name)}
              >
                🔄 Request Skill Swap
              </button>

            </div>
          ))}

        </div>

        {filteredSkills.length === 0 && (
          <div className="no-results">
            😕 No skills found. Try another search.
          </div>
        )}

      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">

        <span className="mini-title">SIMPLE PROCESS</span>

        <h2>How SkillSwap Works</h2>

        <p className="center-text">
          Turn what you know into an opportunity to learn.
        </p>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">👤</div>
            <h3>Create Your Profile</h3>
            <p>
              Tell the community what you know and
              what you want to learn.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">🔎</div>
            <h3>Find Your Match</h3>
            <p>
              Discover people whose skills match
              what you want to learn.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">🔄</div>
            <h3>Swap & Learn</h3>
            <p>
              Connect, exchange knowledge and
              grow together.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="about">
        <div>
          <span className="mini-title">READY TO START?</span>
          <h2>Everyone Has Something<br />Worth Teaching.</h2>
          <p>
            Your next great learning experience could be
            one skill swap away.
          </p>
        </div>

        <button
          className="white-btn"
          onClick={() => setShowForm(true)}
        >
          Join the Community →
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          🔄 SkillSwap
        </div>

        <p>
          Share knowledge. Build connections. Grow together.
        </p>

        <div className="socials">
          Instagram &nbsp; • &nbsp; LinkedIn &nbsp; • &nbsp; Discord
        </div>

        <small>
          © 2026 SkillSwap. Made for learning and sharing.
        </small>
      </footer>

      {/* POPUP FORM */}
      {showForm && (
        <div className="modal-overlay">

          <div className="modal">

            <button
              className="close"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Join SkillSwap 🚀</h2>

            <p>
              Add your skills and discover your perfect
              learning partner.
            </p>

            <input placeholder="Your name" />

            <input placeholder="Skill you can teach" />

            <input placeholder="Skill you want to learn" />

            <select>
              <option>Select category</option>
              <option>Technology</option>
              <option>Creative</option>
              <option>Music</option>
              <option>Communication</option>
            </select>

            <button
              className="submit-btn"
              onClick={() => {
                setShowForm(false);
                setMessage("Welcome to SkillSwap! 🎉");
                setTimeout(() => setMessage(""), 3000);
              }}
            >
              Create My Profile
            </button>

          </div>
        </div>
      )}
