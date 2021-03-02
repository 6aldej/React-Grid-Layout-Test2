import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import TestComponent from '../TestComponent/TestComponent';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
export default class Grid extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 },
    rowHeight: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      newCounter: 0,

      main: '',

      isActive: false,
      availableCoins: [
          "график",
          "таблица"
      ]

    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  editIsActive() {
    let isActive2 = !this.state.isActive
    this.setState({
        isActive: isActive2
    })
    console.log(this.state.isActive)
  }

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.i;
    return (
      <div key={i} data-grid={el}>
        <TestComponent
          number={i}
          main={this.state.main}
          style={{
          color: "green",
          height: "100%",
          width: "100%",
          background: "red"
          }}
        />
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  }

  onAddItem(item) {
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 1) % (this.state.cols || 4),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 3
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1,
      main: item
    });
    this.editIsActive()
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    return (
      <div>
        <div className="dropdown">
            <button
                onClick={()=> this.editIsActive()}
                className="btn dropdown-toggle" 
                >
                    Добавить виджет
            </button>
            <div className={this.state.isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {
                    this.state.availableCoins.map(item => {
                        return(
                            <button onClick={() =>{this.onAddItem(item)}} key={item} className="dropdown-item">
                                {item}
                            </button>
                        );
                    })

                }
            </div>
        </div>

        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}