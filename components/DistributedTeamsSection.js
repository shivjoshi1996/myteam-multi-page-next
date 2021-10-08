import styled from 'styled-components';

const StyledDistributedSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary4};
  background-image: url('/bg-pattern-home-3.svg');
  background-repeat: no-repeat;
  background-position: 73vw 0px;
  background-size: 50vw;
  padding-bottom: 4.1875rem;
  padding-top: 6.25rem;
`;

const StyledDistributedHeading = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 56px;
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary3};
    font-weight: 700;
    max-width: 240px;
  }
`;

const StyledDistributedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 48px;
  width: 93%;
  margin: 0 auto;

  img {
    margin-bottom: 16px;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary2};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: ${(props) => props.theme.colors.primary3};
    opacity: 0.8;
    line-height: 25px;
  }
`;

const StyledDistributedListItem = styled.div``;

export default function DistributedTeamsSection() {
  return (
    <StyledDistributedSection>
      <StyledDistributedHeading>
        <h2>Build & manage distributed teams like no one else.</h2>
      </StyledDistributedHeading>
      <StyledDistributedListContainer>
        <StyledDistributedListItem>
          <img src="/icon-person.svg" alt="person" />
          <h3>Experienced Individuals</h3>
          <p>
            Our network is made up of highly experienced professionals who are
            passionate about what they do.
          </p>
        </StyledDistributedListItem>
        <StyledDistributedListItem>
          <img src="/icon-cog.svg" alt="cog" />
          <h3>Easy to Implement</h3>
          <p>
            Our processes have been refined over years of implementation meaning
            our teams always deliver.
          </p>
        </StyledDistributedListItem>
        <StyledDistributedListItem>
          <img src="/icon-chart.svg" alt="chart" />
          <h3>Enhanced Productivity</h3>
          <p>
            Our customized platform with in-built analytics helps you manage
            your distributed teams.
          </p>
        </StyledDistributedListItem>
      </StyledDistributedListContainer>
    </StyledDistributedSection>
  );
}
