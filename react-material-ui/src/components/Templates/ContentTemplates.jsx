import React, {Component} from 'react';
import { connect } from "react-redux";
import { getTemplates, setTemplateType } from "../../store/actions";
import { Grid, Paper, Button } from '@material-ui/core';
import Tree from './common/Tree'
import HouseCard from './../House/HouseCard'
import withWidth from '@material-ui/core/withWidth';
import injectSheet from 'react-jss'
import { HighlightClick } from './common/HighlightClick'

const styles = {
  btnShift: {
    marginTop: '31px'
  },
  headTmpl: {
    width: '100%', 
    textAlign: 'center'
  },
  cardTmpl: {
    marginLeft: '-20px'
  },
  tree: {
    listStyleType: 'none'
  },
  overlay: {
    '& :first-child': {
      backgroundColor: 'unset !important',
    }
  }
};

const mapDispatchToProps = dispatch => ({
    getTemplates: _ => dispatch(getTemplates()),
    setTemplateType: tmpl => dispatch(setTemplateType(tmpl))
  })

const mapStateToProps = state => ({
    templates: state.templates,
    items: state.items,
    currentTemplate: state.currentTemplate.template,
    currentTemplateIndex: state.currentTemplate.index
  })

class Templates extends Component {
  state = {
    open: true
  }
  componentDidMount() {
    this.props.getTemplates()
  }
  selectTemplate(template, index) {
    this.props.setTemplateType({template, index});
  }
  mapTemplates = classes => (itm, index) => {
      const PaperItem = () => (
        <Paper
          onClick={() => this.selectTemplate(itm.template, index)}
          className={this.props.width === 'xs' ? classes.cardTmpl : ''}
        >
          <Tree arr={itm.template}/>
        </Paper>
      )
      const propsItem = {
        condition: this.props.currentTemplateIndex === index,
        classes
      }
      return (
        <Grid
          key={itm.id || itm}
          item xs={4}
        >
          { HighlightClick(PaperItem, propsItem) }
        </Grid>
      )
  }
  mapGrids (item, index) {
      console.log(item)
      return (
        <Grid
          container
          spacing={24}
          key={index}
          justify="center"
        >
          {item}
        </Grid>
      )
  }
  render() {
    const { classes} = this.props
    const grids = [(
      <HouseCard
        item={this.props.items[0]}
        currentTemplate={this.props.currentTemplate}
      />
    ), (
      <Button
        variant="contained"
        color="primary"
        className={classes.btnShift}
        onClick={() => this.props.toggleDrawer('top', false)}
      >
        Ok
        </Button>
    )]
    return (
      <Grid
        container  
        spacing={24} 
        justify="center"
      >
        <h2 className={classes.headTmpl}>Select the template for houseCards representation</h2>
        {this.props.templates.map(this.mapTemplates(classes)) }
        {grids.map(this.mapGrids)}
      </Grid>
    );
  }
}
const StyledTemplate = injectSheet(styles)(withWidth()(Templates))
const TemplatesConnect = connect(mapStateToProps, mapDispatchToProps)(StyledTemplate);
export default TemplatesConnect;