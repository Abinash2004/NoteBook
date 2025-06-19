import React from 'react';

const About = () => {
  return (
    <div style={{
      padding: '2rem 1.5rem',
      maxWidth: '900px',
      margin: 'auto',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      lineHeight: '1.8',
      color: '#333',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '2.4rem', color: '#222', marginBottom: '1rem' }}>
        🗒️ About NoteKeeper
      </h1>

      <p style={{ marginBottom: '1.2rem' }}>
        <strong>NoteKeeper</strong> is a privacy-focused note-taking web application built using the powerful <strong>MERN stack</strong> — MongoDB, Express.js, React, and Node.js.
        It allows users to securely write, store, and manage personal notes, with each account maintaining its own private data.
      </p>

      <p style={{ marginBottom: '1.2rem' }}>
        The app includes full CRUD support — users can create, update, delete, and browse their notes anytime. With robust authentication in place, <strong>your notes remain yours only</strong>. No spying, no snooping.
      </p>

      <hr style={{ margin: '2rem 0', borderColor: '#ddd' }} />

      <h2 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '0.75rem' }}>🔐 Key Features</h2>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li>Secure JWT-based user authentication</li>
        <li>Private notes — visible only to logged-in users</li>
        <li>Real-time Create, Read, Update, Delete (CRUD) features</li>
        <li>Modern React-based frontend with responsive UI</li>
        <li>Clean backend using Express + MongoDB with Mongoose</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '0.75rem' }}>🛠 Tech Stack</h2>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li><strong>Frontend:</strong> React.js, Context API, Fetch/Axios</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB Atlas (with Mongoose)</li>
        <li><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '0.75rem' }}>🚀 Purpose & Goals</h2>
      <p style={{ marginBottom: '1.2rem' }}>
        This project was created as a full-stack exercise to implement real-world features like user scoping, secure data access, and token-based login flows. It’s ideal for learning practical MERN development and deploying a real-world secure app.
      </p>

      <hr style={{ margin: '2rem 0', borderColor: '#ddd' }} />

      <p style={{ marginBottom: '0.8rem' }}>
        Made with ❤️ and JavaScript by <strong>Abinash Parida</strong>
      </p>

      <p>
        🔗 <a href="https://github.com/Abinash2004" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc' }}>GitHub</a> &nbsp;|&nbsp;
        <a href="https://linkedin.com/in/abinashparida28" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc' }}>LinkedIn</a> &nbsp;|&nbsp;
        <a href="https://x.com/abinash_p28" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc' }}>Twitter</a>
      </p>
    </div>
  );
};

export default About;
