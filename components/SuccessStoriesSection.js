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
`;

const StyledSuccessStory = styled.div`
  color: ${(props) => props.theme.colors.primary3};

  p {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 16px;
  }

  h3 {
    color: ${(props) => props.theme.colors.secondary1};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 2px;
  }

  h3 + p {
    font-style: italic;
    font-size: 0.8125rem;
    margin-bottom: 16px;
  }

  img {
    height: 62px;
    width: 62px;
    border: 2px solid #c4fffe;
    border-radius: 100px;
  }
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
          <p>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3>Kady Baker</h3>
          <p>Product Manager at Bookmark</p>
          <img src="/avatar-kady.jpg" alt="" />
        </StyledSuccessStory>
        <StyledSuccessStory>
          <p>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3>Kady Baker</h3>
          <p>Product Manager at Bookmark</p>
          <img src="/avatar-kady.jpg" alt="" />
        </StyledSuccessStory>
        <StyledSuccessStory>
          <p>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3>Kady Baker</h3>
          <p>Product Manager at Bookmark</p>
          <img src="/avatar-kady.jpg" alt="" />
        </StyledSuccessStory>
      </StyledSuccessStoriesContainer>
    </StyledSuccessStoriesSection>
  );
}
