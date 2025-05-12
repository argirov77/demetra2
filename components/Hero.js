'use client';
import Image from 'next/image';
import heroImage from '../public/images/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        <div className="hero-img">
          <Image
            src={heroImage}
            alt="ISHTAR Team"
            priority
            style={{
              borderRadius: '40px 5px 40px 5px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          />
        </div>
        <div className="hero-copy">
          <p className="pretitle">
            EAGER TO ATTRACT MORE CUSTOMERS TO BUSINESS?
          </p>
          <h1 className="title">
            ISHTAR LIMITED<br />
            IS A SOLUTION
          </h1>
          <p className="desc">
            Have you already tested various advertising strategies to raise the
            customers interest to your product and ended with no tangible
            success? ISHTAR can offer your business a way to brand recognition
            and users appeal. That’s all about high-quality affiliate marketing
            and traffic supply.
          </p>
          <a href="#about-us" className="btn-primary">
            About ISHTAR
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 80px 0;
        }
        .hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
        }
        .hero-copy .pretitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #4b5563;
          margin-bottom: 15px;
        }
        .hero-copy .title {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 25px;
        }
        .hero-copy .desc {
          font-size: 16px;
          margin-bottom: 30px;
        }
      `}</style>
    </section>
  );
}
