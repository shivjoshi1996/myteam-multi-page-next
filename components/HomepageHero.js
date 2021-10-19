import styled from 'styled-components';

const StyledHomepageHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  max-height: 500px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.primary3};
  text-align: center;
  background-image: url('bg-pattern-home-2.svg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 358px;

  @media (min-width: 67.5rem) {
    background-image: url('bg-pattern-home-2.svg'), url('bg-pattern-home-1.svg');
    background-size: 358px, 200px;
    background-position: calc(80%) 100%, calc(0% - 100px) 40%;
    text-align: left;
    justify-content: center;
    padding-bottom: 1.875rem;
  }

  h1 {
    width: 65%;
    margin: 0 auto;
    margin-top: 3.125rem;
    margin-bottom: 1.125rem;

    @media (min-width: 48rem) {
      max-width: 683px;
      margin-bottom: 1.5rem;
    }

    @media (min-width: 67.5rem) {
      font-size: 6.25rem;
      width: 55%;
      margin-bottom: unset;
      margin-top: unset;
    }
  }
  span {
    color: ${(props) => props.theme.colors.primary2};
  }
  p {
    width: 95%;
    margin: 0 auto;
    line-height: 28px;
    position: relative;

    @media (min-width: 48rem) {
      max-width: 457px;
    }

    @media (min-width: 67.5rem) {
      font-size: 1.125rem;
      width: 45%;

      &::before {
        position: absolute;
        top: -79px;
        content: '';
        width: 50px;
        height: 4px;
        background-color: ${(props) => props.theme.colors.secondary1};
      }
    }
  }
`;

const StyledHomepageHeroContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 67.5rem) {
    display: flex;
    align-items: flex-end;
    gap: 1.875rem;
    width: 80%;
    max-width: 1110px;
  }
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
