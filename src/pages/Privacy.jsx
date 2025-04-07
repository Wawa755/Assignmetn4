import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div>
      <h2>Privacy Policy</h2>
      <p>This is your privacy policy.</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default PrivacyPolicy;
