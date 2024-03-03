# Let's Get Classy

Class-based components

It is a older way of creating components inside React. 
Creating functional component is a new way of writing React code.

## Older projects still use Classbased components

Learning class-based components will help us to understand React overall.

## Creating State Variables inside Class-based components

We use a hook inside a functional component. 
Never update state variables directly. It will result in inconstencies. 
Example : this.count.state = this.state.count+1;
Whenever the state variables in updated, React will re-render the component with latest value of the state variable.

