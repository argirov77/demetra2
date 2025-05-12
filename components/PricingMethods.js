'use client';
export default function PricingMethods() {
  const methods = [
    {
      title: 'CPS (Cost-Per-Sale)',
      text: `Literally, that’s the amount an advertiser pays for each conversion coming as the result of a successful ad. In a cost-per-sale way, we aspire to broaden the scope of our business influence and attract the wider range of targeted audience.`,
    },
    {
      title: 'RevShares',
      text: `Through this payment method, a webmaster gets a fixed share of generated revenue. We refer to this pricing model as a shift from the CPL pattern to the next stage of the mutual benefit.`,
    },
    {
      title: 'CPL (Cost-Per-Lead)',
      text: `Finally, a cost-per-lead method is actualized as a part of ISHTAR’s affiliate marketing. We receive remuneration in case of the user’s redirect to the partner’s link.`,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="pricing__heading">Pricing Methods</h2>
        <div className="pricing__grid">
          {methods.map(({ title, text }) => (
            <div key={title} className="pricing__card">
              <h3 className="pricing__title">{title}</h3>
              <p className="pricing__text">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing {
          padding: 80px 0;
          background: #ffffff;
          position: relative;
          z-index: 1;
        }
        .pricing__heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 40px;
        }
        .pricing__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .pricing__card {
          background: #f9f9f9;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }
        .pricing__title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
        }
        .pricing__text {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 640px) {
          .pricing__heading {
            font-size: 1.75rem;
          }
          .pricing__grid {
            gap: 16px;
          }
          .pricing__card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
