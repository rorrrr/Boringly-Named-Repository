// var React = require('react');

// var PremTeamSelector = React.createClass({
//   getInitialState: function() {
//     return {name: undefined}
//   },

//   render: function() {
//     return (
//       <div> 
//         <form onSubmit={this.handleSubmit}>
//           <label>
//         Team Name:
//         <input type="text" value={this.state.name} onChange={this.handleChangeFirst} />
//             </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }, 

//   handleChangeFirst: function(event) {
//     this.setState({name: event.target.value})
//   }, 

//   handleSubmit: function(event) {
//     event.preventDefault();
//     this.props.didSelectActor(this.state.name);
//   }
// });

// module.exports = PremTeamSelector;