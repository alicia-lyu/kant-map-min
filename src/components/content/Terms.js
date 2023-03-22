import { Container } from "react-bootstrap";
import TermCard from "./TermCard";

import "./home.css";


function Terms(props) {
    return <Container className="flexContainer">        
    {
            props.terms.map((term) => <TermCard 
                key={term.id}
                id={term.id}
                name={term.name}
                weight={term.weight}
                english={term.english}
                weblink={term.weblink}
                Nsentence={term.Nsentence}
                sentences={term.sentences} />)
        }
    </Container>

}

export default Terms;