
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import "./termCard.css"


function TermCard(props) {
    const lottery = Math.floor(Math.random() * props.sentences.length);
    return <Card className="mb-2">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.english}</Card.Subtitle>
            <Card.Text className="mt-2">Significance Index in CPR: {props.weight}; Number of Occurrence in CPR: {props.Nsentence}</Card.Text>
            <Card.Text className="quote">{props.sentences[lottery]}</Card.Text>
            <Button as="a" href={props.weblink} target="_blank" className="mx-auto">
                Definition in Kant Lexicon <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Button>
        </Card.Body>
    </Card>
}

export default TermCard;