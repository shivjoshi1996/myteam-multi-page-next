import styled from 'styled-components';

const StyledClientsSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary1};
`;

export default function ClientsSection() {
  return (
    <StyledClientsSection>
      <h2>Some of our clients</h2>
      <div>
        <img src="/logo-the-verge.png" alt="" />
        <img src="/logo-the-jakarta-post.png" alt="" />
        <img src="/logo-the-guardian.png" alt="" />
        <img src="/logo-techradar.png" alt="" />
        <img src="/logo-gadgets-now.png" alt="" />
      </div>
    </StyledClientsSection>
  );
}
