import styled from 'styled-components';

const StyledHomepageHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.primary3};
  min-height: 80vh;

  background-image: url('bg-pattern-home-2.svg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    width: 65%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 18px;
  }
  span {
    color: ${(props) => props.theme.colors.primary2};
  }
  p {
    width: 95%;
    margin: 0 auto;
    line-height: 28px;
  }
`;

const StyledHomepageHeroContentWrapper = styled.div`
  margin: 0 auto;
`;

export default function HomepageHero() {
  return (
    <StyledHomepageHeroWrapper>
      <StyledHomepageHeroContentWrapper>
        <h1>
          Find the best <span>talent</span>
        </h1>
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </StyledHomepageHeroContentWrapper>
    </StyledHomepageHeroWrapper>
  );
}
