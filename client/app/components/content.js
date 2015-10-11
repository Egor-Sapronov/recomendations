import React, {Component, PropTypes} from 'react';

export default class Content extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (<div className="mdl-textfield mdl-js-textfield">
                    <textarea
                        onChange={this.props.onChange}
                        className="mdl-textfield__input"
                        type="text"
                        rows="3"
                        id="content_textarea"
                    />
                    <label className="mdl-textfield__label" htmlFor="content_textarea">Content</label>
                </div>);
    }
}

Content.propTypes = {
  onChange: PropTypes.func.isRequired,
};

