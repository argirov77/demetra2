// components/Contact.js
'use client';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner container">
        <h2 className="contact__title">Contacts</h2>

        <address className="contact__address">
          <strong>ISHTAR, SL</strong><br />
          Carrer Ciutat de Valls, Núm. 56-58<br />
          Casa Margarita 2-1<br />
          Andorra la Vella, Andorra lfd
        </address>

        <a href="mailto:info@nadelir.com" className="btn-primary">
          Send mail
        </a>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, #254eda 0%, #1e3a8a 100%);
          color: #fff;
          padding: 120px 0 100px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .contact__inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .contact__title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .contact__address {
          font-style: normal;
          line-height: 1.6;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.85);
        }
        .contact__address strong {
          display: block;
          font-size: 1.125rem;
          margin-bottom: 8px;
        }
      `}</style>
    </section>
  );
}
