import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    renderDish(selectedDish) {
        if (selectedDish != null) {
            return (
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(selectedDish) {
        if (selectedDish != null) {
            const comments = selectedDish.comments.map((comment) => {
                return (
                    <>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US")}</p>
                    </>
                );
            })

            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1 text-left">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;