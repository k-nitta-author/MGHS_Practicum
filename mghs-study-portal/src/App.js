import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InternDashboard from './pages/InternDashboard';
import AdminDashboard from './pages/AdminDashboard';
import TaskPage from './pages/TaskPage';
import ReflectionPage from './pages/ReflectionPage';
import ProgressTrackingPage from './pages/ProgressTrackingPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import FAQPage from './pages/FAQPage';
import ContactFormPage from './pages/ContactFormPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LinkDirectoryPage from './pages/LinkDirectoryPage';
import RatingPage from './pages/RatingPage';
import ProfilePage from './pages/ProfilePage';
import SubmissionOfResultsPage from './pages/SubmissionOfResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Application Pages */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/intern-dashboard" element={<InternDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/reflections" element={<ReflectionPage />} />

        {/* Progress, Subscriptions, and Support Pages */}
        <Route path="/progress-tracking" element={<ProgressTrackingPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* Link Directory, Rating, Profile, and Submission */}
        <Route path="/link-directory" element={<LinkDirectoryPage />} />
        <Route path="/rate-task" element={<RatingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/submit-results" element={<SubmissionOfResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
