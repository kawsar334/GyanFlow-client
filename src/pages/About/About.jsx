
import AboutUs from '../../components/about/About'

export default function About() {
  return (
    <div className='w-[100%] overflow-x-hidden bg-[red]  h-max'>
       <AboutUs/>


import OurAchievementSection from '../../components/About/OurAchievementSection/OurAchievementSection';
import Team from './../../components/About/Team/Team';
import OurMission from '../../components/About/OurMission/OurMission';

export default function About() {
  return (
    <div>
      {/*  */}

      {/* our achiement section */}
      <OurAchievementSection></OurAchievementSection>

      {/* Our Mission section */}
      <OurMission></OurMission>

      {/* Team section */}
      <Team></Te
    </div>
  );
}
