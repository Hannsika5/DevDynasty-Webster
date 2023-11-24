import React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color:  rgb(2,0,36);
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height:50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>&copy; 2023 Your Blog Name. All rights reserved.</p>
        <p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
        </p>
        <p>Follow us on <a href="https://twitter.com/yourblog" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p>Subscribe to our newsletter for updates.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;