import React from 'react';
import Layout from '../layout';
import papan01 from '../../static/Konfest.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={papan01} className="user-avatar" alt="papan01" />
        <section className="about-context">
          <div>
            <h3>Chiyo</h3>
            <p className="time">2021-03-17</p>
            <p>マンガとアニメが好きです🥰</p>
            <p>このサイトでは、特に私が紹介したいマンガ・アニメのレビューを書いていきます！</p>
            <p>ゆる～くお付き合いいただければ幸いです😉</p>
            <p>
              <a href="https://github.com/papan01/gatsby-starter-papan01">
                ChiYoPU
              </a>
              新人エンジニアです👶🏻開発はここでやってます🔧
              </p>

            <p>I LOVE Manga&Anime!🥰</p>
            <p>This site is about my favorite ComicBook＆Anime Reviews!</p>
            <p>Feel free to come and visit.😉</p>
            <p>I recently started studying English.✍🏻</p>
            <p>
              <a href="https://github.com/papan01/gatsby-starter-papan01">
                ChiYoPU
              </a>
              Novice Engineer👶🏻This link is to the development space.🔧
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
