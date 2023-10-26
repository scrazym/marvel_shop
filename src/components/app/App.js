import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/vision.png";

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          {/* <RandomChar />
        <div className="char__content">
          <CharList onCharSelected={onCharSelected} />
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" /> */}
          <AppBanner />

          <ComicsList />
        </main>
      </div>
    </Router>
  );
};

export default App;
