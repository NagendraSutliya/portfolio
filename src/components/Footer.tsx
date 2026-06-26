

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Nagendra Sutliya. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
