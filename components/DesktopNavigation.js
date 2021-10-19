import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StyledDesktopNavWrapper = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
  display: none;

  background-color: ${(props) => props.theme.colors.primary1};
`;

const StyledDesktopNav = styled.nav`
  width: 90%;
  max-width: 1110px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary3};
  height: 20vh;
  max-height: 150px;

  ul {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary3};
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.primary2};
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
  transition: 0.2s;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary3};

  &:hover {
    color: #002529;
    background-color: white;
  }
`;

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
  cursor: pointer;
`;

export default function DesktopNavigation() {
  const desktopNav = useRef();

  useEffect(() => {
    gsap.fromTo(
      desktopNav.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <StyledDesktopNavWrapper>
      <StyledDesktopNav>
        <ul>
          <StyledDesktopLinksLeft>
            <li>
              <Link href="/">
                <StyledLogo
                  ref={desktopNav}
                  src="/logo.svg"
                  alt="myteam logo"
                />
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <StyledNavLink>Home</StyledNavLink>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <StyledNavLink>About</StyledNavLink>
              </Link>
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
  );
}
