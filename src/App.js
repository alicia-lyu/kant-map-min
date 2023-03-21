import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/content/Home';
import Terms from './components/content/Terms';

import termsData from "./assets/terms.json"
import { useEffect, useState } from 'react';
import Term from './components/content/Term';

// "id": 2,
// "name": "Vernunft",
// "weight": 7.324,
// "english": "reason",
// "weblink": "https://www.textlog.de/33219.html",
// "Nsentence": 817,
// "sentences": "...\n..."

function App() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const termsProcessed = termsData.map((term) => {
      return { ...term, sentences: term.sentences.split("\n") }
    })
    setTerms(termsProcessed);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/terms' element={<Terms terms={terms}/>} />
          {
            terms.map(term => <Route path={`/term/${term.name.replaceAll(" ", "-")}`}
            key={term.id}
              element={<Term
                id={term.id}
                name={term.name}
                weight={term.weight}
                english={term.english}
                weblink={term.weblink}
                Nsentence={term.Nsentence}
                sentences={term.sentences} />} />)
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
