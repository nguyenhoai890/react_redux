// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// const author = 
//   {
//     name: 'h1 name',
//     content: 'content'
//   };

// class Welcome extends React.Component
// {
//   constructor(props){
//     super(props);
//     this.state = {
//       date: new Date(),
//       isToggleOn: true
//     };
    
//     this.handleClickStopTime = this.handleClickStopTime.bind(this);
//   }
//   componentDidMount(){
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );  
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}</h1>
//         <h2>{this.state.date.toLocaleTimeString()}</h2>
//         <button onClick={this.handleClickStopTime}>Stop</button>
//       </div>
//     );
//   }
//   tick(){
//     if(this.state.isToggleOn){
//         this.setState({
//           date: new Date()
//         });
//       }
//   }
//   handleClickStopTime(){
//     this.setState((prevState)=>({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
// }
// // const element = <Welcome name="Hoai"/>;

// class Comment extends React.Component
// {
//   render()
//   {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           {this.props.author.name}
//         </div>
//         <div className="CommentContent">
//           {this.props.author.content}
//         </div>
//       </div>
//     );
//   }
// }

// class AppWelcome extends React.Component 
// {
//     render()
//     {
//       return (
//         <div>
//           <Welcome name="test"/>
//           <Comment author = {this.props.author}/>
//         </div>
//       );
//     }
// }

// class UserGreeting extends React.Component{
//   render()
//   {
//     return <h1>Welcome back {this.props.userName}!</h1>;  
//   }
  
// }
// class GuestGreeting extends React.Component{
//   render(){
//     return <h1>Hello, Please sign in</h1>;
//   }
// }

// class Greeting extends React.Component{  
//   render(){
//     if(this.props.isLoggedin){
//       return <UserGreeting userName={this.props.userName}/>;
//     }else{
//       return <GuestGreeting />;
//     }      
//   }
// }

// class TestInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       allowEdit: true,
//       textValue: ""
//     };
//     this.handleTextChange = this.handleTextChange.bind(this);
//     this.handleButtonClick = this.handleButtonClick.bind(this);
//   }
//   render(){
//     if(this.state.allowEdit)
//       {
//         return (
//           <div>
//           <input value={this.state.textValue} onChange={this.handleTextChange}/>
//           <button onClick={this.handleButtonClick}>Click</button>
//           </div>
//         );
//       }else
//         {
//           return(
//             <div>
//             <input value={null}/>
//             <button onClick={this.handleButtonClick}>Click</button>
//             </div>
//           );           
//         }  
//   }
//   handleTextChange(event){
//     debugger;
//     this.setState({
//       textValue: event.target.value.toUpperCase()
//     });
//   }
//   handleButtonClick(event){
//     this.setState((prevState)=> {
//       return{
//         allowEdit: !prevState.allowEdit
//       };
//     });
//   }
// }



// ///Lifting State

// function BoilingVerdict(props){
//   if(props.celsius >= 100){
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// }



// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }



// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// class TemperatureInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       temperature: ''
//       //scaleName: props.scaleName
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event){
//     // this.setState({
//     //   temperature: event.target.value
//     // });
//     this.props.onTemperatureChange(event.target.value);
//   }
//   render(){
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return(
//       <fieldset>
//         <legend>Endter temprature in {scaleNames[scale]}</legend>
//         <input value={temperature} onChange={this.handleChange}/>
        
//       </fieldset>      
//     );
//   }
// }

// class Calculator extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       temperature: '',
//       scale: 'c'
//     };
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheit = this.handleFahrenheit.bind(this);
    
//   }
//   render(){
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) :temperature;
//     return (<div>
//         <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
//         <TemperatureInput scale = {'f'} temperature={fahrenheit} onTemperatureChange={this.handleFahrenheit}/>
//         <BoilingVerdict celsius={celsius} />
//       </div>);
//   }
//   handleCelsiusChange(temperature){
//     this.setState({
//       scale: 'c',
//       temperature: temperature
//     });
//   }
//   handleFahrenheit(temperature){
//     this.setState({
//       scale: 'f',
//       temperature: temperature
//     });
//   }
//   handleF 
// }

// // ReactDOM.render(
// // //  <AppWelcome author={author}/>, 
// //   //<Greeting isLoggedin={true} userName={"Hoai"}/>,
// // //  <input value="asd" readOnly={true}/>,
// //   //<TestInput 
// //   <Calculator />,
// //   document.getElementById('root')
// // );


// const App = Calculator;

// export default App;

import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;