'use client';
import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <>
      <div className='footer'>
        &copy; {year} Amy Rowell
        <Link
          className='pl-2'
          href='https://github.com/amy-maria'
          target='_blank'
          alt='link to GitHub repository'>
          <FaGithub />
        </Link>
      </div>
    </>
  );
};

export default Footer;
