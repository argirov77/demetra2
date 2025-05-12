// components/AboutUs.js
'use client';
import Image from 'next/image';
import pic1 from '../public/images/about-us1.jpg';
import pic2 from '../public/images/about-us2.jpg';

export default function AboutUs() {
  const blocks = [
    {
      img: pic1,
      title: 'ABOUT US',
      text:
        'We are an advertising agency that specializes in working with CPA/CPS offers coming from advertisers in different niches. It means that our tight cooperation results in indirect marketing of your products or services to stimulate your brand awareness among the targeted audience.',
    },
    {
      img: pic2,
      title: 'RECIPE OF OUR SUCCESS',
      text:
        'As the vital cell of the affiliate network, ISHTAR Limited can boast of our own review sites with qualitative and unique traffic. What is more, we also have a network of partners (affiliates) who also supply us with traffic and contribute to the overall brand promotion circle.',
    },
  ];

  return (
    <section id="about-us" className="about">
      <div className="about__container">
        {blocks.map(({ img, title, text }, i) => (
          <div key={title} className={`about__row ${i % 2 ? 'rev' : ''}`}>
            <div className="about__img">
              <Image
                src={img}
                alt={title}
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ width: '100%', height: 'auto', borderRadius: 20 }}
              />
            </div>

            <div className="about__content">
              <h2>{title}</h2>
              <p>{text}</p>
              <a href="#contact" className="btn-primary">
                Tell me more
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* SECTION */
        .about {
          padding: 100px 0;
          background: #ffffff;
        }

        /* CENTRAL CONTAINER  –  строго 1100 px + авто-центрирование */
        .about__container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ДВУХКОЛОНОЧНАЯ GRID-СТРОКА */
        .about__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;     /* вертикальный центр */
          gap: 60px;
          margin-bottom: 140px;
        }
        /* инверсия колонок через modifier */
        .about__row.rev {
          direction: rtl;          /* простой способ «зеркалить» порядок */
        }
        .about__row.rev > * {
          direction: ltr;          /* возвращаем нормальный текст */
        }

        /* ТЕКСТ */
        .about__content h2 {
          font-size: 1.9rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 20px;
        }
        .about__content p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        /* КНОПКА */
        .btn-primary {
          display: inline-block;
          padding: 12px 32px;
          background: #6159f5;
          color: #fff;
          font-weight: 600;
          border-radius: 26px;
          text-decoration: none;
          transition: background 0.25s;
        }
        .btn-primary:hover {
          background: #5048df;
        }

        /* МОБИЛЬНАЯ АДАПТАЦИЯ */
        @media (max-width: 768px) {
          .about__row,
          .about__row.rev {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 100px;
          }
          .about__row.rev {
            direction: ltr; /* уже не нужно «зеркалить» */
          }
          .about__content {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
