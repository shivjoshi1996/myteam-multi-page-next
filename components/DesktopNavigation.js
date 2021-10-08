import styled from 'styled-components';
import Link from 'next/link';

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

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
`;

export default function DesktopNavigation() {
  return (
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
  );
}
