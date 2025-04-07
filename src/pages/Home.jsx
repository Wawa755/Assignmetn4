import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Dog</h2>
      <div>
      <img src="/dog.jpg" alt="Dog" />
      </div>
      
  <div>
      <Link to="/privacy-policy">
        <button>Go to Privacy Policy</button>
      </Link>
</div>
      
    </div>
  );
}

export default Home;
