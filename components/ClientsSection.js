import styled from 'styled-components';

const StyledClientsSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary4};
  text-align: center;
  padding: 5.5rem 0rem;
  background-image: url('/bg-pattern-about-4.svg');
  background-repeat: no-repeat;
  background-position: calc(0% - 100px) calc(0% - 100px);

  @media (min-width: 768px) {
    background-position: 0% calc(0% - 100px);
  }

  @media (min-width: 1080px) {
    background-position: 0% 0%;
    padding: 140px 0px;
  }

  h2 {
    color: white;
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      margin-bottom: 48px;
    }

    @media (min-width: 1080px) {
      font-size: 48px;
    }
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    flex-wrap: wrap;
    gap: 79px;
  }

  img {
    max-width: 160px;
    height: auto;

    @media (min-width: 768px) {
      max-width: 100px;
    }

    @media (min-width: 1080px) {
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
        <img src="/logo-the-verge.png" alt="" />
        <img src="/logo-jakarta-post.png" alt="" />
        <img src="/logo-the-guardian.png" alt="" />
        <img src="/logo-tech-radar.png" alt="" />
        <img className="small" src="/logo-gadgets-now.png" alt="" />
      </StyledLogoContainer>
    </StyledClientsSection>
  );
}
