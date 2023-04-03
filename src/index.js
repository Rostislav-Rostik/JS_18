import React from 'react';
import ReactDOM from 'react-dom/client';

class Ex1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Iван', age: 25 };
    }

    render() {
        return (
            <div>
                Ім’я: {this.state.name}, вік: {this.state.age}
            </div>
        );
    }
}

class Ex2 extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        alert('hello');
    }

    render() {
        return (
            <div>
                <button onClick={this.showMessage}>Натисніть мене</button>
            </div>
        );
    }
}

class Ex3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Іван', age: 25 };
        this.showName = this.showName.bind(this);
    }

    showName() {
        alert(this.state.name);
    }

    render() {
        return (
            <div>
                <button onClick={this.showName}>Натисніть мене</button>
            </div>
        );
    }
}

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Iван', age: 25 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ name: 'Коля', age: 30 });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Натисніть мене</button>
                <div>имя: {this.state.name}, вік: {this.state.age}</div>
            </div>
        );
    }
}

class Ex5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            name: "Iван",
        };
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show,
        });
    };

    render() {
        const greeting = this.state.show ? "Привіт" : "Пока";
        return (
            <div>
                <p>{greeting}, {this.state.name}!</p>
                <button onClick={this.handleClick}>Змінити привітання</button>
            </div>
        );
    }
}

class Ex6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Іван', age: 25 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ name: 'Іван', age: 25 });

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <p>ім'я: {this.state.name}, вік: {this.state.age}</p>
                <button onClick={this.handleClick}>Натисни на мене</button>
            </div>
        );
    }
}

class Ex7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Іван", age: 25, isVisible: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    }

    render() {
        return (
            <div>
                {this.state.isVisible && (
                    <p>ім'я: {this.state.name}, вік: {this.state.age}</p>
                )}
                <button onClick={this.handleClick}>Натисни на мене</button>
            </div>
        );
    }
}

class Ex8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            buttonText: 'показати'
        };
        this.toggleText = this.toggleText.bind(this);
    }

    toggleText() {
        const showText = !this.state.showText;
        const buttonText = showText ? 'сховати' : 'показати';
        this.setState({ showText, buttonText });
    }

    render() {
        const { showText, buttonText } = this.state;
        return (
            <div>
                <button onClick={this.toggleText}>{buttonText}</button>
                {showText && <p>ім'я: Іван, вік: 25</p>}
            </div>
        );
    }
}

class Ex9 extends React.Component {
    state = {
        names: ['Коля', 'Вася', 'Петя'],
    }

    render() {
        return (
            <ul>
                {this.state.names.map(name => <li>{name}</li>)}
            </ul>
        );
    }
}

class Ex10 extends React.Component {
    state = {
        names: ['Коля', 'Вася', 'Петя'],
    }

    render() {
        return (
            <ul>
                {this.state.names.map((name, index) => (
                    <li>
                        {name} - {index + 1}
                    </li>
                ))}
            </ul>
        );
    }
}

class Ex11 extends React.Component {
    state = {
        hrefs: [
            { href: '1.html', text: 'посилання 1' },
            { href: '2.html', text: 'посилання 2' },
            { href: '3.html', text: 'посилання 3' },
        ]
    };

    render() {
        return (
            <ul>
                {this.state.hrefs.map((href, index) => (
                    <li key={index}>
                        <a href={href.href}>{href.text}</a>
                    </li>
                ))}
            </ul>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <p>Ex1</p>
        <Ex1 />
        
        <p>Ex2</p>
        <Ex2 />
        
        <p>Ex3</p>
        <Ex3 />
        
        <p>Ex4</p>
        <Ex4 />
        
        <p>Ex5</p>
        <Ex5 />
        
        <p>Ex6</p>
        <Ex6 />
        
        <p>Ex7</p>
        <Ex7 />

        <p>Ex8</p>
        <Ex8 />

        <p>Ex9</p>
        <Ex9 />

        <p>Ex10</p>
        <Ex10 />

        <p>Ex11</p>
        <Ex11 />
    </div>

);