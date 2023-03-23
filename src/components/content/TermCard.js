
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./termCard.css"


function TermCard(props) {
    const lottery = Math.floor(Math.random() * props.sentences.length);

    return <Card className="clickable mb-2">
        <Card.Body>
            <Link to={`/term/${props.name}`}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.english}</Card.Subtitle>
                <Card.Text className="mt-2">Significance Index in CPR: {props.weight}; Number of Occurrence in CPR: {props.Nsentence}</Card.Text>
                <Card.Text className="quote">{props.sentences[lottery]}</Card.Text>
            </Link>
            <Button as="a" href={props.weblink} target="_blank" rel="noreferrer" className="ms-auto d-block">
                Definition in Kant Lexicon <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Button>
        </Card.Body>
    </Card>
}

export default TermCard;