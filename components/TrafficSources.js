// components/TrafficSources.js
'use client';
import Image from 'next/image';
import affiliateIcon from '../public/images/affiliate.svg';
import googleIcon    from '../public/images/google.png';
import facebookIcon  from '../public/images/facebook.png';
import tiktokIcon    from '../public/images/tik-tok.png';

export default function TrafficSources() {
  const sources = [
    {
      icon: affiliateIcon,
      title: 'Affiliate Network',
      text: `That's our main traffic source that stems from creating and broadening the network of our partners to promote the specific products and services. Such collaboration results in their brand recognition on the Internet. On our part, we receive compensation for affiliate links provided in our reviews and other website content. It means that when the user clicks on sponsored links, the owner may pay a commission to us.`,
    },
    {
      icon: googleIcon,
      title: 'Google Ads',
      text: `We are sure that this source of collecting traffic is still working these days. Thus, at ISHTAR, we buy search and display traffic at the largest ads network. This implies a considerable volume of targeting and the most user-oriented type of traffic supply.`,
    },
    {
      icon: facebookIcon,
      title: 'Facebook',
      text: `Social channel of traffic also remains actual, and ISHTAR refers to Facebook for raising the clients' attention to the particular services and goods. That's another great way of forming the brand awareness among the audience and appealing to the new users.`,
    },
    {
      icon: tiktokIcon,
      title: 'TikTok',
      text: `As ISHTAR stays abreast of modern technologies, we also use TikTok, a popular video-sharing network, for buying the bloggers' posts. Due to the increasing popularity of this venue, more and more users can be attracted to a certain brand.`,
    },
  ];

  return (
    <section id="traffic" className="traffic">
      <div className="container">
        <h2 className="traffic__heading">Our Traffic Sources</h2>

        <div className="traffic__list">
          {sources.map(({ icon, title, text }) => (
            <div key={title} className="traffic__item">
              <div className="traffic__item-header">
                <Image src={icon} alt={title} width={40} height={40} />
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="traffic__cta">
          <a href="#contact" className="btn-primary">Tell me more</a>
        </div>
      </div>

      <style jsx>{`
        .traffic {
          padding: 80px 0;
          background: none; /* фон задаётся глобально */
          position: relative;
          z-index: 1;
        }
        .traffic__heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 40px;
        }
        .traffic__list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .traffic__item {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }
        .traffic__item-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .traffic__item-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
        }
        .traffic__item p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }
        .traffic__cta {
          text-align: center;
          margin-top: 40px;
        }

        @media (min-width: 768px) {
          .traffic__list {
            max-width: 800px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
