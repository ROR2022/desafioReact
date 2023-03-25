import React from 'react';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./DevtoFooterStyles";

const DevtoFooter = () => {
  return (
        <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        A constructive and inclusive social network for software developers.
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Home</Heading>
            <FooterLink href="#">Listing</FooterLink>
            <FooterLink href="#">Podcast</FooterLink>
            <FooterLink href="#">Videos</FooterLink>
          </Column>
          <Column>
            <Heading>Tags</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Forem Shop</FooterLink>
            <FooterLink href="#">Sponsors</FooterLink>
            <FooterLink href="#">About</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">Guides</FooterLink>
            <FooterLink href="#">Software</FooterLink>
            <FooterLink href="#">Privacy policy</FooterLink>
            <FooterLink href="#">Terms of use</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default DevtoFooter