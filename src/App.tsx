import { Routes, Route } from 'react-router-dom';
import { HomePage, AdmissionPage, CourseDetailsPage } from './screens';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/courses" element={<CourseDetailsPage />} /> */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
