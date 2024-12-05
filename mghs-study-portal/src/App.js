import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
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
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
import TaskDetails from './pages/TaskDetails';
import TeamDetailsPage from './pages/TeamDetails';

import ActivityPage from './pages/ActivitiesPage';
import ActivityDetails from './pages/ActivityDetails';
import AddActivityPage from './pages/AddActivity';

import AddTeamPage from './pages/AddTeam';

import './styles/mghs-style.css';
import RegisterPage from './pages/UserRegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Main Application Pages */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/intern-dashboard" element={<InternDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          <Route path="/reflections" element={<ReflectionPage />} />
          <Route path='/register-user' element={<RegisterPage/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />

          {/*TEAM PAGES*/}
          <Route path='/register-team' element={<AddTeamPage/>}/>
          <Route path='/team-details/:id' element={<TeamDetailsPage/>}/>


          {/*ACTIVITY PAGES*/}
          <Route path='/activities' element={<ActivityPage/>}/>
          <Route path='/activity/register' element={<AddActivityPage/>}/>
          <Route path='/activity/:id' element={<ActivityDetails/>}/>

          {/*TASK PAGES*/}
          <Route path="/tasks" element={<TaskPage />} />
          <Route path='/task-detail' element={<TaskDetails/>} />

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
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/submit-results" element={<SubmissionOfResultsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
