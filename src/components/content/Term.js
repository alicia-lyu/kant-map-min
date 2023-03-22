import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ListGroup } from "react-bootstrap";

import "./home.css";
import "./termCard.css";


function Term(props) {
    const Sentences = () => props.sentences.map((sentence) => {
        return <p className="quote">— {sentence}</p>
    })

    return <Container className="flexContainer"><h1>{props.name}</h1>
        <ListGroup as="ul" variant="flush" className="my-3">
            <ListGroup.Item as="li">In English: {props.english}</ListGroup.Item>
            <ListGroup.Item as="li">Significance Index in CPR: {props.weight}; Number of Occurrence in CPR: {props.Nsentence}</ListGroup.Item>
            <ListGroup.Item as="li">
                <a href={props.weblink} target="_blank" rel="noreferrer">
                    Definition in Kant Lexicon <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </ListGroup.Item>
        </ListGroup>
        <p>Sentences in CPR:</p>
        <Sentences/>
    </Container>
}

export default Term;