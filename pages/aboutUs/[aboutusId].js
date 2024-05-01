// our-domain.com/aboutus/1,2,3

import React from 'react';
import { useRouter } from 'next/router';

const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' }
];

const AboutUsDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const member = details.find(member => member.id === id);

  return (
    <div>
      <h1>About Us</h1>
      {member ? (
        <div>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default AboutUsDetailPage;
