import React from 'react';
import BackButton from '../components/BackButton';


const LinkDirectoryPage = () => {
  const links = [
    { name: 'MGHS Home', url: 'https://www.mghsservices.com', section: 'General' },
    //{ name: 'Intern Handbook', url: '/intern-handbook', section: 'Intern' },
    //{ name: 'Study Resources', url: '/study-resources', section: 'General' },
    { name: 'Login Page', url: '/', section: 'General' },
    { name: 'Intern Dashboard', url: '/intern-dashboard', section: 'Intern' },
    { name: 'Admin Dashboard', url: '/admin-dashboard', section: 'Admin' },
    { name: 'Dashboard', url: '/dashboard', section: 'General' },
    { name: 'Reflections', url: '/reflections', section: 'General' },
    { name: 'Register User', url: '/register-user', section: 'Admin' },
    { name: 'Forgot Password', url: '/forgot-password', section: 'General' },
    { name: 'Register Team', url: '/register-team', section: 'Admin' },
    { name: 'Team Details', url: '/team-details/:id', section: 'Admin' },
    { name: 'Activities', url: '/activities', section: 'General' },
    { name: 'Register Activity', url: '/activity/register', section: 'Admin' },
    { name: 'Activity Details', url: '/activity/:id', section: 'General' },
    { name: 'Tasks', url: '/tasks', section: 'General' },
    { name: 'Register Task', url: '/task/register', section: 'Admin' },
    { name: 'Task Details', url: '/task-detail/:id', section: 'General' },
    { name: 'Progress Tracking', url: '/progress-tracking', section: 'General' },
    { name: 'Subscriptions', url: '/subscriptions', section: 'General' },
    { name: 'FAQ', url: '/faq', section: 'General' },
    { name: 'Contact Form', url: '/contact-form', section: 'General' },
    { name: 'Privacy Policy', url: '/privacy-policy', section: 'General' },
    { name: 'Link Directory', url: '/link-directory', section: 'General' },
    { name: 'Rate Task', url: '/rate-task', section: 'General' },
    { name: 'Profile', url: '/profile', section: 'General' },
    { name: 'Profile Details', url: '/profile/:id', section: 'General' },
    { name: 'Submit Results', url: '/submit-results', section: 'General' },
  ];

  const sortedLinks = links.reduce((acc, link) => {
    if (!acc[link.section]) {
      acc[link.section] = [];
    }
    acc[link.section].push(link);
    return acc;
  }, {});

  const sections = Object.keys(sortedLinks);

  return (
    <section>
      <header>
        <h1>Link Directory</h1>
        <p>
          This page contains a list of all the links in the study portal
        </p>
      </header>

        <nav>
          <BackButton/>
        </nav>
      
      {sections.map((section) => (
        <div key={section}>
          <h2>{section}</h2>
          <ul>
            {sortedLinks[section].map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default LinkDirectoryPage;
