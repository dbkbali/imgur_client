var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return <div className="image-preview">
      {this.image()}
    </div>
  },
  image: function() {
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

    return <img src={link} />

  }
});
