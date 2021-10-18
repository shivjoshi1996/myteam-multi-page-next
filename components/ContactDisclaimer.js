import Link from 'next/link';
import styled from 'styled-components';

const StyledContactDisclaimerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary2};
  background-image: url('/bg-pattern-home-6-about-5.svg');
  background-repeat: no-repeat;
  background-position: 0px 115%;

  @media (min-width: 768px) {
    min-height: 13rem;
    display: flex;
    align-items: center;
    align-content: center;
  }
`;

const StyledContactDisclaimerContentWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 5.1875rem;
  padding-bottom: 6.25rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding-top: unset;
    padding-bottom: unset;
    justify-content: space-around;
    max-width: 917px;
  }

  h2,
  a {
    color: ${(props) => props.theme.colors.secondary4};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }

  a {
    padding: 11px 33px;
    text-decoration: none;
    border: 2px solid ${(props) => props.theme.colors.secondary4};
    border-radius: 24px;
    transition: 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary4};
      color: white;
    }
  }
`;

export default function ContactDisclaimer() {
  return (
    <StyledContactDisclaimerContainer>
      <StyledContactDisclaimerContentWrapper>
        <h2>Ready to get started?</h2>
        <Link href="/contact">Contact Us</Link>
      </StyledContactDisclaimerContentWrapper>
    </StyledContactDisclaimerContainer>
  );
}
