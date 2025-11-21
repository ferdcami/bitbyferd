import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-brand-heading">BitByFerd</h1>
        <p className="text-xl text-brand-primary mb-8">Where code meets clarity</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-all executive-shadow">
            View CV
          </button>
          <button className="px-6 py-3 bg-brand-secondary text-white rounded-lg hover:bg-opacity-90 transition-all executive-shadow">
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
