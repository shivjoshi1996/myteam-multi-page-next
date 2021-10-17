import styled from 'styled-components';

const StyledClientsSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary4};
  text-align: center;
  padding: 5.5rem 0rem;
  background-image: url('/bg-pattern-about-4.svg');
  background-repeat: no-repeat;
  background-position: calc(0% - 100px) calc(0% - 100px);

  h2 {
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 4rem;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  img {
    max-width: 160px;
    height: auto;

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
