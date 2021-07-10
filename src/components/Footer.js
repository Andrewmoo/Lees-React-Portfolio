import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Lee Campbell Perrie</h1>
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices nisl at pulvinar suscipit. Nam vitae enim diam. Nam eget
            vulputate ex. In ac fringilla dolor. Vivamus a vestibulum ligula.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+353012312',
                path: 'tel:+353012312',
              },
              {
                title: 'lee@gmail.com',
                path: 'mailto:webcifar@gmail.com',
              },
              {
                title: 'Dún Laoghaire, Dublin, Ireland',
                path:
                  'https://www.google.com/maps/place/D%C3%BAn+Laoghaire,+Dublin/@53.296138,-6.154876,14z/data=!3m1!4b1!4m5!3m4!1s0x486707defb471c8f:0xa00c7a9973229f0!8m2!3d53.2943958!4d-6.1338666',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Lee Campbell Perrie | Site Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://andrew-bell-portfolio.web.app/"
            >
              Andrew Bell
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
