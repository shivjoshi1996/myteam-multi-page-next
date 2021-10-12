import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary5};
  text-align: center;
  color: white;
  padding-top: 4.125rem;
  padding-bottom: 4rem;

  p {
    opacity: 0.6;
  }
`;

const StyledFooterNavigationLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: white;
  }
`;

const StyledFooterAddress = styled.address`
  opacity: 0.6;
`;

const StyledFooterSocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <img src="/logo.svg" alt="myteam logo" />
      <StyledFooterNavigationLinks>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </StyledFooterNavigationLinks>
      <StyledFooterAddress>
        987 Hillcrest Lane
        <br />
        Irvine, CA
        <br />
        California 92714
        <br />
        Call Us : 949-833-7432
        <br />
      </StyledFooterAddress>
      <StyledFooterSocialLinks>
        <li>
          <img src="/icon-facebook.svg" alt="" />
        </li>
        <li>
          <img src="/icon-pinterest.svg" alt="" />
        </li>
        <li>
          <img src="/icon-twitter.svg" alt="" />
        </li>
      </StyledFooterSocialLinks>
      <p>Copyright 2020. All Rights Reserved</p>
    </StyledFooter>
  );
}
