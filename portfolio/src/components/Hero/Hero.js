import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import DownloadLink from 'react-download-link';
// import Resume from ;

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        <a href = {process.env.PUBLIC_URL + '../../files/Aundre_Resume.pdf'} target='_blank'>
          <Button>Resume / CV</Button>
        </a>
        {/* onClick={props.handleClick} */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;