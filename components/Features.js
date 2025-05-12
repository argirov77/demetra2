// components/Features.js
'use client';
import Image from 'next/image';
import trafficIcon from '../public/images/web-traffic.png';
import targetIcon  from '../public/images/target.png';
import cycleIcon   from '../public/images/cycle.png';

export default function Features() {
  const items = [
    {
      icon: trafficIcon,
      title: 'High-Quality Traffic Supply',
      desc: 'We mix Google Ads, Facebook and native placements to deliver truly valuable visitors.',
    },
    {
      icon: targetIcon,
      title: 'Great Targeting Variety',
      desc: 'Gender, age, geo, devices, keywords and more — precision audience reach.',
    },
    {
      icon: cycleIcon,
      title: 'Full-Cycle Promotion',
      desc: 'From testing and trusted reviews to SEO & paid ads — a turnkey promo loop.',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="features__heading">Our Key Advantages</h2>

        <div className="features__grid">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="features__card">
              <Image src={icon} alt={title} width={56} height={56} className="features__icon" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* scoped styles */}
      <style jsx>{`
        .features {
          padding: 80px 0;
          background: #ffffff;
        }
        .features__heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 40px;
        }
        .features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .features__card {
          background: #f9f9f9;
          border-radius: 16px;
          padding: 32px 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          text-align: center;
        }
        .features__card h3 {
          margin: 16px 0 8px;
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
        }
        .features__card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .features__heading { font-size: 1.75rem; }
          .features__card { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
