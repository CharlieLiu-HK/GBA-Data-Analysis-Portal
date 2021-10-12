import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import GBAImageFile from './Images/Image1.png';
import IntroImageFile from './Images/Image2.png';
import NavImageLeft from './Images/Image4.jpg';
import NavImageMiddle from './Images/Image3.jpg';
import NavImageRight from './Images/Image5.jpg'

function App() {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [buttonName, setButtonName] = useState("Click to See Some Magic!");
  const [welcomText, setWelcomeText] = useState(true);
  const [projectTitle, setProjectTitle] = useState(true);
  const [mainTitle, setMainTitle] = useState(false);
  const [externalLinks, setExternalLinks] = useState(false);
  const [backgroundText, setBackgroundText] = useState(false);
  const [gbaImage, setGBAImage] = useState(false);
  const [introImage, setIntroImage] = useState(false);
  const [introText, setIntroText] = useState(false);
  const [navSection, setNavSection] = useState(false);

  const MainButton = () => {
    return(
      <button type="button" onClick={() => {setButtonClicks(buttonClicks + 1); if(buttonClicks>=0 && buttonClicks<2){setButtonName("Click to Continue!")}; if(buttonClicks>=2){setButtonName("End of Intro!")}}} className="main-button-div text-xl bg-opacity-50 rounded-full h-32 w-32 bg-violet-400 text-gray-100 z-50 hover:bg-gray-100 hover:text-gray-600 shadow-3xl transition duration-1000 font-bold">
        {buttonName}
      </button>
    )
  }
  const WelcomeWords = () => {
    return(
      <div className="welcome-words-div border border-amber-200 text-6xl text-blueGray-100 py-10 px-20 leading-relaxed text-left rounded-xl bg-violet-900 bg-opacity-30 hover:bg-yellow-50 hover:text-gray-600 shadow-3xl transition duration-1000">
        Welcome! To THE Coolest Teaching Prop
        <br></br>
        ever made!
      </div>
    )
  }
  const ProjectTitle = () => {
    return(
      <div className="project-title-div border border-amber-200 text-6xl text-gray-100 py-10 px-20 leading-relaxed text-left rounded-xl bg-pink-900 bg-opacity-30 hover:bg-green-50 hover:text-gray-600 shadow-3xl transition duration-1000">
        Presenting:
        <br></br>
        The Greater Bay Area
        <br></br>
        Data Analytics Portal
      </div>
    )
  }
  const MainTitle = () => {
    return(
      <div className="main-title-div rounded-xl p-6 w-1/4 bg-red-500 bg-opacity-30 text-warmGray-100 hover:bg-green-50 hover:text-warmGray-900 shadow-3xl transition duration-1000 font-bold text-3xl text-center">
        GBA Data Analytics Portal
      </div>
    )
  }
  const ExternalLinks = () => {
    return(
      <div className="external-links-div px-4 py-3 shadow-xl w-5/12 flex text-blueGray-200 justify-between rounded-xl bg-transparent text-2xl text-center font-semibold">
        <a className="rounded-xl bg-violet-400 p-4 italic bg-opacity-80 hover:bg-yellow-50 hover:text-gray-600 transition duration-700" href="https://github.com/CharlieLiu-HK/" target="_blank" rel="noreferrer">About the Author</a>
        <a className="rounded-xl bg-violet-400 p-4 italic bg-opacity-80 hover:bg-yellow-50 hover:text-gray-600 transition duration-700" href="https://github.com/CharlieLiu-HK/GBA-Data" target="_blank" rel="noreferrer">Download the Data</a>
        <a className="rounded-xl bg-violet-400 p-4 italic bg-opacity-80 hover:bg-yellow-50 hover:text-gray-600 transition duration-700" href="https://github.com/CharlieLiu-HK/GBA-Data-Analysis-Portal" target="_blank" rel="noreferrer">Download the Code</a>
      </div>
    )
  }
  const BackgroundText = () => {
    return(
      <div className="background-text-div rounded-xl shadow-3xl bg-gray-900 bg-opacity-40 text-warmGray-200 w-6/12 text-center italic text-3xl p-6 leading-loose hover:bg-green-50 hover:text-gray-600 transition duration-1000">
        <p>
          The Guangdong-Hong Kong-Macau Greater Bay Area is a vision to create not only an economic and technological powerhouse for China and the world economy, but to create a region of prosperity and well-being. After all, the principle goal of development should be improving peoples’ lives. The objective of this website is enable you to explore where the GBA stands in its delivery of well-being to its citizens and what challenges the region needs to overcome. Two main issues stand out. The first is the absolute level of well-being provided by the GBA and the second is the relative differences in well-being among the GBA cities.
        </p>
      </div>
    )
  }
  const GBAImage = () => {
    return(
      <img src={GBAImageFile} className="gba-image-div w-4/12 shadow-3xl rounded-3xl"></img>
    )
  }
  const IntroImage = () => {
    return(
      <img src={IntroImageFile} className="intro-image-div w-5/12 rounded-3xl"></img>
    )
  }
  const IntroText = () => {
    return(
      <div className="intro-text-div rounded-xl shadow-3xl bg-gray-900 bg-opacity-40 text-warmGray-200 w-5/12 text-center italic text-2xl p-6 leading-loose hover:bg-yellow-50 hover:text-gray-600 transition duration-1000">
        <p>
          This website uses government statistics to provide you with indicators of well-being so you can see the absolute level of each city and compare them in terms of economic development, health care and education, environment, etc. However, perhaps the most important indicator of well-being and of the prospects for prosperity is social mobility, the capacity of each person to develop to their potential within their social system. Using recent advances, we provide a means for you to explore social mobility within cities and to compare them.
        </p>
      </div>
    )
  }
  const NavSection = () => {
    return(
      <div className="nav-section-div container-div w-10/12">
        <div className="item text-center shadow-3xl rounded-3xl bg-pink-900 bg-opacity-30">
          <div className="card">
            <img className="card__img" src={NavImageLeft} />
            <div className="card__content">
              <h1 className="card__header">Data Visualization</h1>
              <p className="card__text text-blueGray-300">Nothing is more effective to present the data than using charts and graphs. In this section, you can explore the data using the interactive visulization tools that we have built for you.</p>
              <a href="https://page1-gba.jundeliu.com/" target="_blank" className="card__btn">Explore<span>&rarr;</span></a>
            </div>
          </div>
        </div>
        <div className="item text-center shadow-3xl rounded-3xl bg-violet-900 bg-opacity-30">
          <div className="card">
            <img className="card__img" src={NavImageMiddle} />
            <div className="card__content">
              <h1 className="card__header">Data Mapping</h1>
              <p className="card__text text-blueGray-300">Sometime, mapping the data can offer us fresh insights since it reveals the geo-special information about our data. In this section, you can carry out interavtive map generation using the custom tools we've built for you.</p>
              <a href="https://page2-gba.jundeliu.com/" target="_blank" className="card__btn">Explore<span>&rarr;</span></a>
            </div>
          </div>
        </div>
        <div className="item text-center shadow-3xl rounded-3xl bg-rose-900 bg-opacity-30">
          <div className="card">
            <img className="card__img" src={NavImageRight} />
            <div className="card__content">
              <h1 className="card__header">Explore Social Mobility</h1>
              <p className="card__text text-blueGray-300">We will finally turn our attention to the study of social mobility accross the GBA cities. In this section, you can use the custom tools we've built for you to explore this topic in depth.</p>
              <a href="https://page3-gba.jundeliu.com/" target="_blank" className="card__btn">Explore<span>&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-xl">
      <CSSTransition in={buttonClicks>=0 && buttonClicks < 3} appear={true} timeout={500} classNames="main-button" unmountOnExit>
          <div>
            <MainButton />
            <div className="main-button-ring ring-2 rounded-full h-32 w-32 z-40 ring-amber-400"></div>
          </div>
      </CSSTransition>
      <CSSTransition in={welcomText && buttonClicks === 0} timeout={1000} appear={true} classNames="welcome-words" unmountOnExit onExited={() => {setMainTitle(true);}}>
        <WelcomeWords />
      </CSSTransition>
      <CSSTransition in={projectTitle && buttonClicks === 0} timeout={1000} appear={true} classNames="project-title" unmountOnExit onExited={() => {setMainTitle(true);}}>
        <ProjectTitle />
      </CSSTransition>
      <CSSTransition in={mainTitle && buttonClicks >= 1} timeout={500} classNames="main-title" unmountOnExit onEntered={() => {setExternalLinks(true);}} onExited={() => {setMainTitle(false);}}>
        <MainTitle />
      </CSSTransition>
      <CSSTransition in={externalLinks && buttonClicks >= 1} timeout={500} classNames="external-links" unmountOnExit onEntered={() => {setBackgroundText(true);}} onExited={() => {setExternalLinks(false);}}>
        <ExternalLinks />
      </CSSTransition>
      <CSSTransition in={backgroundText && buttonClicks === 1} timeout={500} classNames="background-text" unmountOnExit onEntered={() => {setGBAImage(true);}} onExited={() => {setIntroImage(true);}}>
        <BackgroundText />
      </CSSTransition>
      <CSSTransition in={gbaImage && buttonClicks === 1} timeout={500} classNames="gba-image" unmountOnExit onExited={() => {setIntroImage(true);}}>
        <GBAImage />
      </CSSTransition>
      <CSSTransition in={introImage && buttonClicks === 2} timeout={500} classNames="intro-image" unmountOnExit onEntered={() => {setIntroText(true);}} onExited={() => {setNavSection(true);}}>
        <IntroImage />
      </CSSTransition>
      <CSSTransition in={introText && buttonClicks === 2} timeout={500} classNames="intro-text" unmountOnExit onExited={() => {setNavSection(true);}}>
        <IntroText />
      </CSSTransition>
      <CSSTransition in={navSection && buttonClicks >=2} timeout={500} classNames="nav-section" unmountOnExit>
        <NavSection />
      </CSSTransition>
    </div>
  );
}

export default App;