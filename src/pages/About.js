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
              <h2 className="about__heading">A fat cunt artist</h2>
              <div className="about__info">
                <PText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultrices nisl at pulvinar suscipit. Nam vitae enim diam. Nam
                  eget vulputate ex. In ac fringilla dolor. Vivamus a vestibulum
                  ligula.
                  <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultrices nisl at pulvinar suscipit. Nam vitae enim diam. Nam
                  eget vulputate ex. In ac fringilla dolor. Vivamus a vestibulum
                  ligula.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ultrices nisl at pulvinar suscipit. Nam vitae enim diam. Nam
                  eget vulputate ex. In ac fringilla dolor. Vivamus a vestibulum
                  ligula.
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
                title="Collage"
                items={[
                  'BA (Hons) in Art from Institute of Art Design + Technology Dún Laoghaire',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="Blah"
                items={['Stuff', 'Stuff', 'Stuff', 'Stuff']}
              />
              <AboutInfoItems
                title="Blah"
                items={['Stuff', 'Stuff', 'Stuff']}
              />
              <AboutInfoItems
                title="Blah"
                items={['Stuff', 'Stuff', 'Stuff']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2010-2012"
                items={['Fattest Cunt imaginable']}
              />
              <AboutInfoItems
                title="2012-2016"
                items={['Honestly larger than a whale ']}
              />
              <AboutInfoItems title="2016-" items={['The next Robbie']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
