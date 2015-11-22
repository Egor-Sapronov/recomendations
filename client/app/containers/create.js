import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as createActions from '../actions/create';
import Loader from '../components/loader';
import TextField from 'material-ui/lib/text-field';
import Preview from '../components/preview';
import { debounce } from 'core-decorators';
import CreateButton from '../components/createButton';
import getUrls from 'get-urls';

export class CreateRecomendation extends Component {
    static propTypes() {
        return {
            dispatch: PropTypes.func,
            isLoading: PropTypes.bool,
            preview: PropTypes.object,
            data: PropTypes.array,
        };
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    @debounce(300)
    handleContentChange({target}) {
        this.setState({
            content: target.value,
        }, () => {
            const urls = getUrls(this.state.content);
            if (urls.length > 0) {
                this.props.dispatch(createActions.preview(urls));
            }
        });
    }

    handleClick() {
        this.props.dispatch(createActions.create({...this.state, data: this.props.preview.data }));
    }

    render() {
        return (
            <div>{ this.props.isLoading ? <Loader /> :
                <div>
                    <TextField
                        fullWidth
                        hintText="Text"
                        multiLine onChange={ this.handleContentChange.bind(this) }
                    />
                    <CreateButton
                        title="create"
                        onClick={ this.handleClick.bind(this) }
                        disabled={ this.props.preview.isLoading }
                    />
                    { this.props.preview.isLoading ? <Loader /> : <Preview {...this.props.preview} /> }
                </div>
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
