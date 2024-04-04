import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>&copy; {new Date().getFullYear()} IAS-GIN Network</div>
      <div>Contact: info@ias-gin.com</div>
      <div>
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
