import React from 'react';

const LinkDirectoryPage = () => {
  const links = [
    { name: 'MGHS Home', url: 'https://www.mghsservices.com' },
    { name: 'Intern Handbook', url: '/intern-handbook' },
    { name: 'Study Resources', url: '/study-resources' },
    { name: 'Login Page', url: '/' },
    { name: 'Intern Dashboard', url: '/intern-dashboard' },
    { name: 'Admin Dashboard', url: '/admin-dashboard' },
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Reflections', url: '/reflections' },
    { name: 'Register User', url: '/register-user' },
    { name: 'Forgot Password', url: '/forgot-password' },
    { name: 'Register Team', url: '/register-team' },
    { name: 'Team Details', url: '/team-details/:id' },
    { name: 'Activities', url: '/activities' },
    { name: 'Register Activity', url: '/activity/register' },
    { name: 'Activity Details', url: '/activity/:id' },
    { name: 'Tasks', url: '/tasks' },
    { name: 'Register Task', url: '/task/register' },
    { name: 'Task Details', url: '/task-detail/:id' },
    { name: 'Progress Tracking', url: '/progress-tracking' },
    { name: 'Subscriptions', url: '/subscriptions' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contact Form', url: '/contact-form' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Link Directory', url: '/link-directory' },
    { name: 'Rate Task', url: '/rate-task' },
    { name: 'Profile', url: '/profile' },
    { name: 'Profile Details', url: '/profile/:id' },
    { name: 'Submit Results', url: '/submit-results' },
  ];

  return (
    <section>
      <header>
        <h1>Link Directory</h1>
        </header>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinkDirectoryPage;
