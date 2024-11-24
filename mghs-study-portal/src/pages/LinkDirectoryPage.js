import React from 'react';

const LinkDirectoryPage = () => {
  const links = [
    { name: 'MGHS Home', url: 'https://www.mghsservices.com' },
    { name: 'Intern Handbook', url: '/intern-handbook' },
    { name: 'Study Resources', url: '/study-resources' },
    // Add more links here
  ];

  return (
    <section>
      <h1>Link Directory</h1>
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
