import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
   display:0,
   x:"",
   y:"",
   number:[0],
   res:0,
   perv:0,
   
   operation:"+"
   };
   

    render() {
      return(
        <div className="lc">
       
        
            <p className="label" >{this.state.display}</p>
            <table className="table">

          <tr>
          <td> <Calculater className="bAC" func={this.clear} value="AC" ></Calculater></td>
           <td><Calculater className="bpm"  value="+/-"></Calculater></td>
          <td><Calculater className="bmod" func={this.per} value="%"></Calculater></td>
          <td><Calculater className="bdiv" func={this.div} value="÷"></Calculater></td>
          </tr>


          <tr>
          <td> <Calculater className="seven" func={this.cv} value="7"></Calculater></td>
          <td><Calculater className="eight"func={this.cv} value="8"></Calculater></td>
          <td><Calculater className="nine" func={this.cv} value="9"></Calculater></td>
          <td><Calculater className="mult" func={this.mult} value="×"></Calculater></td>
          </tr>

           <tr>
          <td> <Calculater className="four" func={this.cv} value="4"></Calculater></td>
          <td><Calculater className="five"func={this.cv} value="5"></Calculater></td>
          <td><Calculater className="six"func={this.cv} value="6"></Calculater></td>
          <td><Calculater className="minus"  func={this.sub} value="-"></Calculater></td>
          </tr>

           <tr>
          <td> <Calculater className="one" func={this.cv}  value="1"></Calculater></td>
           <td><Calculater className="two" func={this.cv} value="2"></Calculater></td>
          <td><Calculater className="three" func={this.cv} value="3"></Calculater></td>
           <td><Calculater className="plus"func={this.add} value="+"></Calculater></td>
           </tr>

         

           <tr>
          <td colSpan="2"> <Calculater className="zero" func={this.cv} value="0"></Calculater></td>
          <td><Calculater className="dot" func={this.cv} value="."></Calculater></td>
           <td><Calculater className="equal" func={this.equal}  value="="></Calculater></td>
           </tr>
           </table>
          
      </div>

      );
    
    }
    clear = (e) =>{
      const {display} = this.state;
      const value=e.target.value;
   // console.log(value);
      this.setState({display:0})
      this.setState({res:0})
      this.setState({x:""})
      this.setState({y:""})
      this.setState({perv:0})



  
  };



  cv = (e) =>{
    const {number,x} = this.state;
    let z=x;
    const value=e.target.value;
    z+=value;
    this.setState({x:z})
    this.setState({display:z})



};


add = (e) =>{
  const {number,x,y,res} = this.state;
  if(res==0)
  {this.setState({y:x})}
  else this.setState({y:res})
  this.setState({x:""})
  this.setState({operation:"+"})

  console.log(y);
  console.log(x);

};

sub = (e) =>{
  const {number,x,y,res,operation} = this.state;
  if(res==0)
  {this.setState({y:x})}
  else this.setState({y:res})
  this.setState({x:""})
  this.setState({operation:"-"})



};


mult = (e) =>{
  const {number,x,y,res,operation} = this.state;
  if(res==0)
  {this.setState({y:x})}
  else this.setState({y:res})
  this.setState({x:""})
  this.setState({operation:"×"})



};

div = (e) =>{
  const {number,x,y,res,operation} = this.state;
  if(res==0)
  {this.setState({y:x})}
  else this.setState({y:res})
  this.setState({x:""})
  this.setState({operation:"÷"})

 
};




per = (e) =>{
  const {display,x,y,res,operation} = this.state;
  this.setState({operation:'%'})
  if(res===0)
  this.setState({display:x+"%"})
else
   this.setState({display:res+"%"})
  

  
};
 

equal = (e) =>{
  const {display,x,y,res,operation} = this.state;
  let xint = parseFloat(x, 10);
  let yint = parseFloat(y, 10);
  res.toFixed(10);
  xint.toFixed(10);
  yint.toFixed(10);
 
 
  let a;
 if(operation==="+"){
   a=xint+yint;
  this.setState({display:a})
  this.setState({res:a})}
  else if(operation==="-") {
     a=yint-xint;
    this.setState({display:a})
    this.setState({res:a})

  }
  else if(operation==="×") {
    
     a=xint*yint;
    this.setState({display:a})
    this.setState({res:a})

  }

  else if(operation==="÷") {
    
    a=yint/xint;

   this.setState({display:a})
   this.setState({res:a})

 }

 else if(operation==="%") {
  
  var k
  if(res===0)
  k=x
  else
   k = res
   k = k/100;

   this.setState({display:k})
   this.setState({res:k})

}

  console.log(a);

  
};
 






    }

    
   


function Calculater(props){
  const{className,value,func}=props;
  
  return(
    <div className="app">
  
      <button className={className}onClick={func} value={value}>{value}</button>
      
  </div>
     
  );
}



export default App;
