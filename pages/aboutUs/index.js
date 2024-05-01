// our-domain.com/aboutus

import React from 'react';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our About Us page!</p>
      <p>
        Check out our <Link href="/aboutus/developer">Developer Page</Link>.
      </p>
    </div>
  );
};

export default AboutUsPage;
