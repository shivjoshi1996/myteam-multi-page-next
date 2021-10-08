import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const StyledMobileNavWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  position: relative;

  button {
    background-color: transparent;
    border: none;
    padding-right: 7%;
    cursor: pointer;
  }
`;

const StyledMobileNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary1};
  position: relative;
  ul {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    max-height: 200px;
    position: relative;
  }
`;

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
`;

const StyledNavActive = styled.nav`
  min-height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 99;
  display: flex;
  top: 0;
  transition: 1s;
  transform: ${(props) =>
    props.mobileNavOpen ? 'translateX(0vw)' : 'translateX(100vw)'};
`;

const StyledNavOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  width: 30%;
`;

const StyledNavActiveMenu = styled.div`
  background-color: ${(props) => props.theme.colors.secondary2};
  min-height: 100vh;
  width: 70%;
  background-image: url('/bg-pattern-about-1-mobile-nav-1.svg');
  background-repeat: no-repeat;
  background-position: right -30vw bottom 0vh;
`;

const StyledNavActiveMenuCloseWrapper = styled.div`
  min-height: 20vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const StyledNavActiveMenuLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 48px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const StyledDesktopNavWrapper = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
  display: none;

  background-color: ${(props) => props.theme.colors.primary1};
`;

const StyledDesktopNav = styled.nav`
  width: 90%;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary3};
  height: 20vh;
  max-height: 150px;

  ul {
    display: flex;
    align-items: center;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary3};
  }
`;

const StyledDesktopLinksLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15%;
  width: 50%;
`;

const StyledDesktopLinksRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

const StyledContactLink = styled.a`
  border-radius: 24px;
  border: 2px solid white;
  padding: 9px 33px;
`;

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <StyledMobileNavWrapper>
        <StyledMobileNav>
          <ul>
            <li>
              <StyledLogo src="/logo.svg" alt="myteam logo" />
            </li>
            <li>
              <button type="button">
                <img
                  src="/icon-hamburger.svg"
                  alt=""
                  onClick={() => setMobileNavOpen(true)}
                />
              </button>
            </li>
          </ul>
        </StyledMobileNav>
        <StyledNavActive mobileNavOpen={mobileNavOpen}>
          <StyledNavOverlay />
          <StyledNavActiveMenu>
            <StyledNavActiveMenuCloseWrapper>
              <button type="button">
                <img
                  src="/icon-close.svg"
                  alt="close icon"
                  onClick={() => setMobileNavOpen(false)}
                />
              </button>
            </StyledNavActiveMenuCloseWrapper>
            <StyledNavActiveMenuLinksWrapper>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <StyledContactLink>Contact Us</StyledContactLink>
                </Link>
              </li>
            </StyledNavActiveMenuLinksWrapper>
          </StyledNavActiveMenu>
        </StyledNavActive>
      </StyledMobileNavWrapper>
      <StyledDesktopNavWrapper>
        <StyledDesktopNav>
          <ul>
            <StyledDesktopLinksLeft>
              <li>
                <StyledLogo src="/logo.svg" alt="myteam logo" />
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </StyledDesktopLinksLeft>
            <StyledDesktopLinksRight>
              <li>
                <Link href="/contact" passHref>
                  <StyledContactLink>Contact</StyledContactLink>
                </Link>
              </li>
            </StyledDesktopLinksRight>
          </ul>
        </StyledDesktopNav>
      </StyledDesktopNavWrapper>
    </>
  );
}
