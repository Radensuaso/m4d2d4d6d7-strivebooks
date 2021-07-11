import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CommentArea from "./CommentArea"
import React, { useState } from "react"

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)

  return (
    <Card className={"position-relative"}>
      <Card.Img
        variant="top"
        src={props.book.img}
        className="img-fluid"
        onClick={() => setSelected(!selected)}
        style={{
          borderLeft: selected && "4px solid rgb(223, 108, 31)",
          borderRight: selected && "4px solid rgb(223, 108, 31)",
          borderTop: selected && "4px solid rgb(223, 108, 31)",
        }}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          <strong>Category: </strong> {props.book.category}
        </Card.Text>
        <Button variant="success">€ {props.book.price}</Button>
      </Card.Body>
      {selected && (
        <CommentArea
          changeSelected={() => setSelected(false)}
          book={props.book}
        />
      )}
    </Card>
  )
}

export default SingleBook
