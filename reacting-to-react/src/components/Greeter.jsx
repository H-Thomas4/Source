
/*
Props Object
{
    name: 'Antonio',
    phrase: 'eat, shit and sleep.'
}
*/

const Greet = props => {
    return (
       <>
       <h1>
           Hello my name is {props.name} and my favorite thing to do is {props.phrase}
       </h1>
      
       </> 
    );
};







export default Greet;