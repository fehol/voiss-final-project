import { css } from '@emotion/core';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';

const mainStyle = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const logoStyle = css``;

const imgStyle = css`
  margin-top: 3rem;

  @media screen and (max-width: 720px) {
    max-width: 100%;
    height: auto;
  }
`;

const h2Style = css``;

const audioBox = css`
  margin-left: 20rem;
  margin-right: 20rem;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  audio::-webkit-media-controls-panel {
    background-color: #f2e183;
  }
  audio {
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border-radius: 7px 7px 7px 7px;
    border-radius: 7px 7px 7px 7px;
  }
`;

const playerBox = css`
  background-color: none;
  margin: 10px;
  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:focus {
    -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:active {
    -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.6);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const newsletterPosition = css`
  margin-top: 3rem;
  @media screen and (max-width: 720px) {
    margin-top: auto;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <Layout>
      <title>Keith Voss - Voice Actor</title>
      <main css={mainStyle}>
        <div css={logoStyle}>
          <img src="/Logo/Logo.svg" alt="VossLogo" css={imgStyle} />
          <br />
          <h2 css={h2Style}>
            <span>Voice Actor - Teacher - Podcast Host</span>
          </h2>
        </div>
        <div css={audioBox}>
          <audio title="E-Learning Demo" controls css={playerBox}>
            <source src="/voice/Elearning.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/Elearning.wav" /> The
            Audio doesnt work with your browser
          </audio>
          <audio title="Commercial Demo" controls css={playerBox}>
            <source src="/voice/Commercial.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/Commercial.wav" /> The
            Audio doesnt work with your browser
          </audio>
          <audio title="Podcast Demo" controls css={playerBox}>
            <source src="/voice/Trilogy.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/Trilogy.wav" /> The Audio
            doesnt work with your browser
          </audio>

          <div css={newsletterPosition}>
            <Newsletter />
          </div>
        </div>
      </main>
    </Layout>
  );
}
