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
    </>
  );
}
