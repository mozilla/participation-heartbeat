var React = require("react");

var Design = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header">
          <h2>Bugs</h2>
        </div>
        <div className="main bugs">
          <div id="assets">
            <h2 className="clearfix">Do you have a bug or feature you want to file?</h2>
            <p>For bugs or feature requests regarding this site, use
            <a href="https://github.com/mozilla/build.webmaker.org/issues/">this repository</a>
            github issues list.</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Design;
