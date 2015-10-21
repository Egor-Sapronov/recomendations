import stampit from 'react-stampit';
import * as cache from 'react-stampit/lib/utils/cache';

const id = cache.uniqueId();

export const componentFactory = React => {
  return cache.find(id) || cache.save(
    stampit(React, {
      render() {
        return (<div>
                  <h1>{this.props.title}< /h1>
                  < div >
                    <div className="mdl-textfield mdl-js-textfield" >
                      <input ref="email_ref" className= "mdl-textfield__input" type= "text" id= "email_input" />
                      <label className="mdl-textfield__label" htmlFor= "email_input" > Email < /label>
                    < /div>
                    < div className= "mdl-textfield mdl-js-textfield" >
                      <input ref="password_ref" className= "mdl-textfield__input" type= "text" id= "password_input" />
                      <label className="mdl-textfield__label" htmlFor= "password_input" > Password < /label>
                    < /div>
                  < /div>
                  < button onClick= { this.handleClick.bind(this) || ()=>{} } className= "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" >
                    <i className="material-icons" > add < /i>
                  < /button>
               < /div>);
      },
    })
  );
};
