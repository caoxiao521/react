/*var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});*/
var ToDoList = React.createClass({
	render:function(){
		var item=this.props.data.map(function(data,i){
			return <p key={i}>{data}</p>
		});
		return <div>{item}</div>
	}
});
var ToDoInput = React.createClass({
	getInitialState:function(){
		return {text:"",default:"请输入"}
	},
	changeText:function(e){
		this.setState({text:e.target.value});
	},
	render:function(){
		return <form onSubmit={this.props.handle}>
			<input value={this.state.text} onChange={this.changeText} type="input" />
			<input type="submit" value="提交" />
		</form>
	}
});
var TodoApp = React.createClass({
	getInitialState:function(){
		return {item:[]}
	},
	tochange:function(e){
		e.preventDefault();
		let date=$(e.target).find('[type=input]').val();
		let newDate=this.state.item;
		date!=''?newDate.push(date):'';		
		this.setState({item:newDate});
		console.log(this.ref);
	},
	render:function(){
		return <div>
			<h1>input框测试</h1>
			<ToDoInput  handle={this.tochange} ref="test"/>
			<ToDoList data={this.state.item} />
		</div>
	}
});

ReactDOM.render(<TodoApp />, document.getElementById('example'));
