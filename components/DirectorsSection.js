import ProfileCard from './ProfileCard';

export default function DirectorsSection() {
  return (
    <>
      <h2>Meet the directors</h2>
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
    </>
  );
}
