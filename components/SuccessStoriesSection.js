import styled from 'styled-components';

const StyledSuccessStoriesSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary3};
  background-image: url('/bg-pattern-home-4-about-3.svg'),
    url('/bg-pattern-home-5.svg');
  background-position: top left, bottom right;
  background-repeat: no-repeat no-repeat;
  padding-top: 8.75rem;
  padding-bottom: 10.25rem;

  h2 {
    color: ${(props) => props.theme.colors.primary3};
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;

    span {
      color: ${(props) => props.theme.colors.secondary1};
    }
  }
`;

const StyledSuccessStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledSuccessStory = styled.div`
  color: ${(props) => props.theme.colors.primary3};
  background-image: url('/icon-quotes.svg');
  background-repeat: no-repeat;
  background-position: top center;

  h3 {
    color: ${(props) => props.theme.colors.secondary1};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }

  img {
    height: 62px;
    width: 62px;
    border: 2px solid #c4fffe;
    border-radius: 100px;
  }
`;

const StyledSuccessStoryDescription = styled.p`
  margin-bottom: 1rem;
  padding-top: 2.25rem;
  font-size: 0.9375rem;
  line-height: 25px;
`;

const StyledSuccessStoryJobTitle = styled.p`
  font-style: italic;
  font-size: 0.8125rem;
  margin-bottom: 16px;
`;

export default function SuccessStoriesSection() {
  return (
    <StyledSuccessStoriesSection>
      <h2>
        Delivering real results for top companies. Some of our
        <span> success stories.</span>
      </h2>
      <StyledSuccessStoriesContainer>
        <StyledSuccessStory>
          <StyledSuccessStoryDescription>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </StyledSuccessStoryDescription>
          <h3>Kady Baker</h3>
          <StyledSuccessStoryJobTitle>
            Product Manager at Bookmark
          </StyledSuccessStoryJobTitle>
          <img src="/avatar-kady.jpg" alt="" />
        </StyledSuccessStory>
        <StyledSuccessStory>
          <StyledSuccessStoryDescription>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </StyledSuccessStoryDescription>
          <h3>Aiysha Reese</h3>
          <StyledSuccessStoryJobTitle>
            Founder of Manage
          </StyledSuccessStoryJobTitle>
          <img src="/avatar-aiysha.jpg" alt="" />
        </StyledSuccessStory>
        <StyledSuccessStory>
          <StyledSuccessStoryDescription>
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </StyledSuccessStoryDescription>
          <h3>Arthur Clarke</h3>
          <StyledSuccessStoryJobTitle>
            Co-founder of MyPhysio
          </StyledSuccessStoryJobTitle>
          <img src="/avatar-arthur.jpg" alt="" />
        </StyledSuccessStory>
      </StyledSuccessStoriesContainer>
    </StyledSuccessStoriesSection>
  );
}
