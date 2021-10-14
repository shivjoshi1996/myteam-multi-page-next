import styled from 'styled-components';

const AboutHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary1};
  color: white;
  padding-top: 20px;
  padding-bottom: 108px;
  background-image: url('/bg-pattern-about-1-mobile-nav-1.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 100px) calc(100% + 100px);
`;

const AboutHeroContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  p {
    line-height: 28px;
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
