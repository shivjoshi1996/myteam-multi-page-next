import styled from 'styled-components';
import { useState } from 'react';

const StyledMobileNavWrapper = styled.div`
  position: relative;
`;

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary1};
  position: relative;
  ul {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
    padding-bottom: 48px;
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
`;

const StyledNavActiveMenuCloseWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  img {
    padding-right: 5%;
  }
`;

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <StyledMobileNavWrapper>
      <StyledNav>
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
      </StyledNav>
      {mobileNavOpen && (
        <StyledNavActive>
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
          </StyledNavActiveMenu>
        </StyledNavActive>
      )}
    </StyledMobileNavWrapper>
  );
}
