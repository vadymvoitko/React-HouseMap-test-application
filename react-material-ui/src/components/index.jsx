import React, { Component } from "react";
import { connect } from "react-redux";
import { setNewCellValue, addColumn, addRow, kickRow, kickColumn } from "../../js/actions/index";
import { Section, RemoveEntity, ShiftCell, EditedCell } from "./Styled/index";
// import { ThemeProvider } from 'styled-components'
function mapDispatchToProps(dispatch) {
  return {
    setNewCellValue: cell => dispatch(setNewCellValue(cell)),
    addColumn: table => dispatch(addColumn(table)),
    addRow: table => dispatch(addRow(table)),
    kickRow: num => dispatch(kickRow(num)),
    kickColumn: num => dispatch(kickColumn(num))
  };
}

function mapStateToProps(state) {
  return {
    table: state.table
  }
}

class ConnectedTable extends Component {
  constructor(state) {
    super();
    this.state = {
      table: state.table,
      flag: [[], [], [], []],
      rowNumber: null,
      columnNumber: null,
    };
  }
  render() {
    return (
      <Section>
        <table>
          <tbody>
            <tr>
              {
                // you can pass props as object like prop={{ myStyle: 'one' }}
                this.props.table[0].map((_, index) => {
                  return this.state.columnNumber === index ?
                      <RemoveEntity key={index} myStyle='one'
                        onClick={this.removeColumn.bind(this, this.props.table, index)}
                      >
                        x
                      </RemoveEntity> : <td key={index} />
                })
              }
            </tr>
            {this.props.table.map((item, index) => {
              return <tr key={index}>
                {this.state.rowNumber === index ? 
                  <RemoveEntity onClick={this.removeRow.bind(this, this.props.table, index)}>
                      x
                    </RemoveEntity> : <td key={index} />}
                {item.map((subItem, subIndex) => {
                  return !this.state.flag[index][subIndex] ?
                    <EditedCell
                      onClick={this.activateCell.bind(this, index, subIndex)}
                      onMouseEnter={this.showDeleteRow.bind(this, index, subIndex)}
                      key={subIndex}
                    >
                      {subItem}
                    </EditedCell> : <td key={subIndex} onMouseEnter={this.showDeleteRow.bind(this, index, subIndex)}>
                      <input 
                        type="text" 
                        value={subItem} 
                        onChange={this.setCell.bind(this, index, subIndex)} 
                        onBlur={this.activateCell.bind(this, index, subIndex)} 
                        style={{ width: "35px" }} 
                        autoFocus 
                        onKeyPress={e => e.key === "Enter" && e.target.blur()} />
                    </td>;
                })}
                {!index ? <td
                  onClick={this.addColumn.bind(this)}
                >
                  Add
                    </td> : null}
              </tr>;
            })
            }
            <tr>
              <ShiftCell onClick={this.addRow.bind(this)}>add</ShiftCell>
            </tr>
          </tbody>
        </table>
      </Section>
    );
  }

  showDeleteRow(row, column) {
    this.setState({
      rowNumber: row !== undefined ? row : null,
      columnNumber: column !== undefined ? column : null,
    });
  }
  removeRow(table, row) {
    this.props.kickRow({ table, row });
  }
  removeColumn(table, column) {
    this.props.kickColumn({table, column});
  }

  activateCell(row, column) {
    const intermediateArray = [...this.state.flag];
    intermediateArray[row][column] = !intermediateArray[row][column];
    this.setState({
      flag: intermediateArray
    });
  }
  setCell(index, subIndex, event) {
    this.props.setNewCellValue({
      row: index,
      column: subIndex,
      value: event.currentTarget.value,
      table: this.props.table
    });
  }
  addColumn() {
    this.props.addColumn(this.props.table);
  }
  addRow() {
    const intArray = this.state.flag.slice();
    intArray.push([]);
    this.setState({
      flag: intArray
    });
    this.props.addRow(this.props.table);
  }
}
// in case we are not taking from store we say null in connect first argument
const Tablet = connect(mapStateToProps, mapDispatchToProps)(ConnectedTable);
export default Tablet