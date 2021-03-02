import React from "react";
import _ from "lodash";
import { WidthProvider, Responsive } from "react-grid-layout";
import Widget from '../Widget/Widget';
import AddWidget from '../AddWidget/AddWidget';
import AddModal from '../AddModal/AddModal'
import './Grid.css';

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

      typeList: [
        "График",
        "Таблица"
      ],

      open: false,
      currentType: null,
      inputName: 'Название не задано',

    };

    this.onEditOpenModal = this.onEditOpenModal.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onValueName = this.onValueName.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const i = el.i;
    return (
      <div key={i} data-grid={el}>
        <Widget 
          type={el.type} 
          name={el.name} 
          onRemoveItem={this.onRemoveItem} 
          i={i}/>
      </div>
    );
  }

  onAddItem(item) {
    const {inputName, newCounter, cols} = this.state;

    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + newCounter,
        x: (this.state.items.length * 1) % (cols || 4),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 3,
        type: item,
        name: inputName
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: newCounter + 1,
      open: false
    });
    this.setState({inputName:'Название не задано'})
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

  onEditOpenModal(bool,item) {
    this.setState({open: bool})
    this.setState({currentType: item})
  }

  onValueName(e) {
    let name = e.target.value;
    this.setState({inputName: name})
  }

  render() {
    let {items, typeList, open, currentType}  = this.state;
    let elements = items.map(el => this.createElement(el))

    return (
      <div className="Grid">
        <AddModal
          open={open}
          currentType={currentType}
          onEditOpenModal={this.onEditOpenModal}
          onAddItem={this.onAddItem}
          onValueName={this.onValueName}
        />
        <AddWidget 
          onAddItem={this.onAddItem}
          onEditOpenModal={this.onEditOpenModal}
          typeList={typeList}
        />
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
        {elements}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}