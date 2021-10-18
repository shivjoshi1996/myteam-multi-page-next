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
    padding-right: calc(0vh + 10%);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.6;
    }
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
  cursor: pointer;
`;

const StyledNavActive = styled.nav`
  min-height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 99;
  display: flex;
  top: 0;
  transform: ${(props) =>
    props.mobileNavOpen ? 'translateX(0%)' : 'translateX(100%)'};
`;

const StyledNavOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  width: 30%;
  opacity: ${(props) => (props.mobileNavOpen ? '1' : '0')};
  transition: 2s;
  cursor: pointer;
`;

const StyledNavActiveMenu = styled.div`
  background-color: ${(props) => props.theme.colors.secondary2};
  min-height: 100vh;
  width: 70%;
  background-image: url('/bg-pattern-about-1-mobile-nav-1.svg');
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: calc(100% + 100px) calc(100%);
  opacity: ${(props) => (props.mobileNavOpen ? '1' : 0)};
  transition: 0.5s;
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
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary2};
    }
  }
`;

const StyledContactLink = styled.li`
  margin-top: 36px;

  a {
    border-radius: 24px;
    border: 2px solid white;
    padding: 9px 33px;
    transition: 0.2s;

    &:hover {
      color: #002529;
      background-color: white;
    }
  }
`;

export default function MobileNavigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <StyledMobileNavWrapper>
      <StyledMobileNav>
        <ul>
          <li>
            <Link href="/">
              <StyledLogo src="/logo.svg" alt="myteam logo" />
            </Link>
          </li>
          <li>
            <button type="button">
              {/* eslint-disable-next-line  */}
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
        <StyledNavOverlay
          mobileNavOpen={mobileNavOpen}
          onClick={() => setMobileNavOpen(false)}
        />
        <StyledNavActiveMenu mobileNavOpen={mobileNavOpen}>
          <StyledNavActiveMenuCloseWrapper>
            <button type="button">
              {/* eslint-disable-next-line  */}
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
            <StyledContactLink>
              <Link href="/contact">Contact Us</Link>
            </StyledContactLink>
          </StyledNavActiveMenuLinksWrapper>
        </StyledNavActiveMenu>
      </StyledNavActive>
    </StyledMobileNavWrapper>
  );
}
