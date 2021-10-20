import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';

gsap.registerPlugin(ScrollTrigger);

const StyledDirectorsSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary3};
  padding: 5.5rem 0rem;
  background-image: url('/bg-pattern-about-2-contact-1.svg'),
    url('/bg-pattern-home-4-about-3.svg');
  background-repeat: no-repeat;
  background-position: calc(0% - 100px) calc(0% - 100px), 100% 100%;

  h2 {
    color: white;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const StyledDirectorsGrid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  row-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(281px, 1fr));
  column-gap: 11px;
  max-width: 1110px;
`;

export default function DirectorsSection() {
  const directorsRef = useRef();
  const q = gsap.utils.selector(directorsRef);

  useEffect(() => {
    gsap.to(q('.profile-card'), {
      scrollTrigger: {
        trigger: '.section',
        start: 'top 50%',
      },
      y: 0,
      opacity: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <StyledDirectorsSection className="section">
      <h2>Meet the directors</h2>
      <StyledDirectorsGrid ref={directorsRef}>
        <ProfileCard
          profileImage="/avatar-nikita.jpg"
          name="Nikita Marks"
          title="Founder & CEO"
          quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
        />
        <ProfileCard
          profileImage="/avatar-christian.jpg"
          name="Cristian Duncan"
          title="Co-founder & COO"
          quote="“Distributed teams required unique processes. You need to approach work in a new way.”"
        />
        <ProfileCard
          profileImage="/avatar-cruz.jpg"
          name="Cruz Hamer"
          title="Co-founder & CTO"
          quote="“Technology is at the forefront of enabling distributed teams. That's where we come in.”"
        />
        <ProfileCard
          profileImage="/avatar-drake.jpg"
          name="Drake Heaton"
          title="Business Development Lead"
          quote=" “Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”"
        />
        <ProfileCard
          profileImage="/avatar-griffin.jpg"
          name="Griffin Wise"
          title="Lead Marketing"
          quote="“Unique perspectives shape unique products, which is what you need to survive these days.”"
        />
        <ProfileCard
          profileImage="/avatar-aden.jpg"
          name="Aden Allan"
          title="Head of Talent"
          quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
        />
      </StyledDirectorsGrid>
    </StyledDirectorsSection>
  );
}
