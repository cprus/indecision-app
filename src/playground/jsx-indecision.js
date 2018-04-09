console.log("APP.js is running, yo.")

// JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderArray();
    }
};

const remove = () => {
    app.options = [];
    renderArray();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderArray = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={remove}>Remove All</button>
            <ol>{
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }</ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
};


renderArray();

