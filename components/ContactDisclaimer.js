import Link from 'next/link';
import styled from 'styled-components';

const StyledContactDisclaimerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary2};
  background-image: url('/bg-pattern-home-6-about-5.svg');
  background-repeat: no-repeat;
  background-position: 0px 115%;

  @media (min-width: 768px) {
    display: flex;
    min-height: 13rem;
    align-items: center;
    align-content: center;
  }
`;

const StyledContactDisclaimerContentWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  padding: 5.1875rem 0rem 6.25rem 0rem;

  @media (min-width: 48rem) {
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
    margin-bottom: 2.5rem;

    @media (min-width: 48rem) {
      margin-bottom: unset;
    }
  }

  a {
    padding: 0.6875rem 2.0625rem;
    border: 2px solid ${(props) => props.theme.colors.secondary4};
    border-radius: 24px;
    text-decoration: none;
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
