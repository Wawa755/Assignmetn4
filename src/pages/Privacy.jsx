import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>Last updated: April 07, 2025</p>
      <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
      <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank">Free Privacy Policy Generator</a>.</p>

      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.</p>
      <h3>Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party...</li>
        {/* Add the rest of your definitions */}
      </ul>

      {/* Add all the content from your privacy policy as you mentioned */}

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul>
        <li>By visiting this page on our website: <a href="https://assignment4-git-main-wawas-projects-1a787b7f.vercel.app/privacy-policy" target="_blank" rel="noopener noreferrer">https://assignment4-git-main-wawas-projects-1a787b7f.vercel.app/privacy-policy</a></li>
      </ul>

      {/* Back to Home Button */}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default PrivacyPolicy;
