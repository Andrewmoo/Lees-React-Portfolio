import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Lee Campbell Perrie</span>
              </p>
              <h2 className="about__heading">A multimedia artist</h2>
              <div className="about__info">
                <PText>
                  My work explores the relationship between the Digital World
                  and Real Life and how I can blur the boundaries between these
                  two spaces. This is done by stitching a real-life location
                  with a digital reconstruction of the same space. New links are
                  made between geographic space and the infinity of digital
                  potential.
                  <br /> <br />
                  Ever since I was young, I have been fascinated with video
                  games and escaping to the virtual world. I often found the
                  virtual world held more potential than real- life which made
                  me question which one was more significant. This fuelled my
                  thinking throughout my life, ultimately leading me to explore
                  this subject in depth in college. Growing up in the South
                  Dublin area, surrounded by seaside views and nature trails,
                  these would inevitably become the focus of my work.
                  <br />
                  <br />
                  Experiences are blurred between Reality and Virtuality, and
                  the space becomes eternal. The viewer is left to question the
                  significance of the Digital realm.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="College"
                items={[
                  'BA (Hons) in Art from Institute of Art Design + Technology Dún Laoghaire',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="Video Editing"
                items={['Premier pro', 'Davinci Resolve']}
              />
              <AboutInfoItems
                title="Practical"
                items={['Lighting', 'Colour Grading', 'Video Recording']}
              />
              <AboutInfoItems
                title="Soft Skills"
                items={[
                  'Critical Thinking',
                  'Creative Resolution',
                  'Artistic Comprehension',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Exhibitions</h1>

              <AboutInfoItems
                title="2010-2012"
                items={['Perceived Dimensions (IMMA, 2018)']}
              />
              <AboutInfoItems
                title="2012-2016"
                items={['High Heart (Pallas Projects / Studios, 2021)']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
