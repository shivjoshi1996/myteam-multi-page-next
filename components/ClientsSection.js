import styled from 'styled-components';

const StyledClientsSection = styled.section`
  padding: 5.5rem 0rem;
  background-color: ${(props) => props.theme.colors.secondary4};
  background-image: url('/bg-pattern-about-4.svg');
  background-repeat: no-repeat;
  background-position: calc(0% - 100px) calc(0% - 100px);
  text-align: center;

  @media (min-width: 768px) {
    background-position: 0% calc(0% - 100px);
  }

  @media (min-width: 1080px) {
    padding: 8.75rem 0rem;
    background-position: 0% 0%;
  }

  h2 {
    color: white;
    margin-bottom: 4rem;

    @media (min-width: 48rem) {
      margin-bottom: 3rem;
    }
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 67.5rem) {
    flex-wrap: wrap;
    gap: 79px;
  }

  img {
    max-width: 160px;
    height: auto;

    @media (min-width: 48rem) {
      max-width: 100px;
    }

    @media (min-width: 67.5rem) {
      max-width: 170px;
    }

    &.small {
      max-width: 87px;
    }
  }
`;

export default function ClientsSection() {
  return (
    <StyledClientsSection>
      <h2>Some of our clients</h2>
      <StyledLogoContainer>
        <img src="/logo-the-verge.png" alt="Logo of the verge" />
        <img src="/logo-jakarta-post.png" alt="Logo of the jakarta post" />
        <img src="/logo-the-guardian.png" alt="Logo of the Guardian" />
        <img src="/logo-tech-radar.png" alt="Logo of tech rader" />
        <img
          className="small"
          src="/logo-gadgets-now.png"
          alt="Logo of gadgets now"
        />
      </StyledLogoContainer>
    </StyledClientsSection>
  );
}
