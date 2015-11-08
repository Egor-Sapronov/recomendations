import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';

import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import Loader from '../components/loader';

export class CreateRecomendation extends Component {
    static propTypes() {
        return {
            dispatch: PropTypes.func,
            isLoading: PropTypes.bool,
        };
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleContentChange({target}) {
        this.setState({
            content: target.value,
        });
    }

    handleClick() {
        this.props.dispatch(recomendationActions.create(this.state));
    }

    render() {
        return (
            <div>{ this.props.isLoading ? <Loader /> : <Card>
                    <CardTitle title="Create new" />
                    <CardText>
                        <TextField rows={3} fullWidth hintText="Text" multiLine onChange={this.handleContentChange.bind(this)}/>
                    </CardText>
                    <CardActions>
                        <FloatingActionButton onClick={this.handleClick.bind(this)}>
                            <FontIcon className="material-icons">send</FontIcon>
                        </FloatingActionButton>
                    </CardActions>
                < /Card>
            }</div>
        );
    }
}

function select(state) {
    return {
        ...state.create,
    };
}

export default connect(select)(CreateRecomendation);
