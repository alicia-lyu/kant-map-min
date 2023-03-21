import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/content/Home';
import Terms from './components/content/Terms';

import terms from "./assets/terms.json"
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
    const termsProcessed = terms.map((term) => {
      term.sentences = term.sentences.split("\n");
      return term;
    })
    setTerms(termsProcessed);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/terms' element={<Terms/>}/>
          {
            terms.map(term => <Route path={`/term/${term.name.replaceAll(" ", "-")}`} 
                                element={<Term 
                                  key={term.id}
                                  id={term.id}
                                  name={term.name}
                                  weight={term.weight}
                                  english={term.english}
                                  weblink={term.weblink}
                                  Nsentence={term.Nsentence}
                                  sentences={term.sentences}/>}/>)
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
