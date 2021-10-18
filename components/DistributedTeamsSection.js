import styled from 'styled-components';

const StyledDistributedSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary4};
  background-image: url('/bg-pattern-home-3.svg');
  background-repeat: no-repeat;
  background-position: left calc(100% + 100px) top 0px;
  padding-bottom: 4.1875rem;
  padding-top: 6.25rem;

  @media (min-width: 768px) {
    padding-bottom: 6.25rem;
  }

  @media (min-width: 1080px) {
    background-position: left calc(100% + 100px) top 100%;
  }
`;

const StyledDistributedWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1110px;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    display: flex;
    gap: 125px;
  }
`;

const StyledDistributedHeading = styled.div`
  width: 65%;
  margin-bottom: 56px;
  h2 {
    color: ${(props) => props.theme.colors.primary3};

    @media (min-width: 1080px) {
      font-size: 3rem;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
    margin-bottom: 64px;
  }
`;

const StyledDistributedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 48px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const StyledDistributedListItem = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 72px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'icon title'
      'icon description';
    align-items: center;
    grid-row-gap: 16px;
    grid-column-gap: 23px;
  }

  img {
    margin-bottom: 16px;
    grid-area: icon;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.primary2};
    margin-bottom: 16px;
    grid-area: title;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }

  p {
    color: ${(props) => props.theme.colors.primary3};
    opacity: 0.8;
    line-height: 25px;
    grid-area: description;
  }
`;

export default function DistributedTeamsSection() {
  return (
    <StyledDistributedSection>
      <StyledDistributedWrapper>
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
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
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
      </StyledDistributedWrapper>
    </StyledDistributedSection>
  );
}
