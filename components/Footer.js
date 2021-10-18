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

  @media (min-width: 1080px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

const StyledFooterWrapper = styled.div`
  @media (min-width: 1080px) {
    display: flex;
    width: 90%;
    max-width: 1110px;
    margin: 0 auto;
  }
`;

const StyledFooterTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: stretch;
  }

  @media (min-width: 1080px) {
    width: 100%;
    margin-bottom: unset;
    justify-content: unset;
    gap: 125px;
  }
`;

const StyledFooterLogoLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    text-align: left;
    gap: unset;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const StyledFooterAddress = styled.address`
  opacity: 0.6;
  line-height: 25px;

  @media (min-width: 768px) {
    text-align: right;
  }

  @media (min-width: 1080px) {
    text-align: left;
  }
`;

const StyledFooterBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const StyledFooterNavigationLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: white;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary2};
    }
  }
`;

const StyledFooterSocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  li {
    &:hover {
      opacity: 0.6;
    }
  }
`;

const StyledLogo = styled.img`
  width: 96px;
  height: auto;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledFooterTopContainer>
          <StyledFooterLogoLinksWrapper>
            <Link href="/">
              <StyledLogo src="/logo.svg" alt="myteam logo" />
            </Link>
            <StyledFooterNavigationLinks>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
            </StyledFooterNavigationLinks>
          </StyledFooterLogoLinksWrapper>
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
        </StyledFooterTopContainer>
        <StyledFooterBottomContainer>
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
        </StyledFooterBottomContainer>
      </StyledFooterWrapper>
    </StyledFooter>
  );
}
