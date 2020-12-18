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
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1 text-left">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;