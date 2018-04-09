class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.state = {
            visibility: false
        };
    };


show() {
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };
    });
    
};

    render(){
        return (
            <div>
              <h1>Visibility Toggle</h1>
              <button onClick = {this.show}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Here are the details!</p>}
            </div>
        );
    };
};


ReactDOM.render(<Visibility />, document.getElementById('app'));




// const appRoot = document.getElementById('app');

// let visibility = false;

// const show = () => {
//     visibility = !visibility;
//     render();

// };

// const render = () => {

//     const template = (
//       <div>
//           <h1>Visibility Toggle</h1>
//          <button onClick = {show}>{visibility ? 'Hide details' : 'Show details'}</button>
//         {visibility && <p>Here are the details!</p>}
//          </div>
// );
// ReactDOM.render(template, appRoot);
// };




