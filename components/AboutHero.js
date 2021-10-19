import styled from 'styled-components';

const AboutHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.primary3};
  padding-top: 1.25rem;
  padding-bottom: 6.75rem;
  background-image: url('/bg-pattern-about-1-mobile-nav-1.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 100px) calc(100% + 100px);

  @media (min-width: 48rem) {
    padding-top: 3rem;
    padding-bottom: 7rem;
    background-position: calc(100% + 100px) 100%;
  }
  @media (min-width: 67.5rem) {
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
  }
`;

const AboutHeroContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 67.5rem) {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    max-width: 69.375rem;
    text-align: left;
  }

  h1 {
    margin-bottom: 1rem;
  }
  p {
    line-height: 28px;

    @media (min-width: 48rem) {
      width: 65%;
      margin: 0 auto;
    }
    @media (min-width: 67.5rem) {
      position: relative;
      padding-top: 2.75rem;

      &::before {
        content: '';
        width: 50px;
        height: 4px;
        background-color: #f67e7e;
        position: absolute;
        top: 0;
      }
    }
  }
`;

export default function AboutHero() {
  return (
    <AboutHeroWrapper>
      <AboutHeroContentWrapper>
        <h1>About</h1>
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </AboutHeroContentWrapper>
    </AboutHeroWrapper>
  );
}
