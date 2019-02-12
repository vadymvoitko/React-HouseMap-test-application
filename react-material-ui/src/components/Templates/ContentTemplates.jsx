import React from 'react';
import { connect } from "react-redux";
import { getTemplates, setTemplateType } from "../../store/actions";
import { Grid, Paper, Button } from '@material-ui/core';
import Tree from './Tree'
import HouseCard from './../House/HouseCard'
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

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
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: _ => dispatch(getTemplates()),
    setTemplateType: tmpl => dispatch(setTemplateType(tmpl))
  };
}

function mapStateToProps(state) {
  return {
    templates: state.templates,
    items: state.items,
    currentTemplate: state.currentTemplate.template,
    currentTemplateIndex: state.currentTemplate.index
  }
}

class Templates extends React.Component {
  state = {
    open: true
  }
  componentDidMount() {
    this.props.getTemplates()
  }
  selectTemplate(template, index) {
    this.setState({
      activeCardIndex: index
    })
    this.props.setTemplateType({template, index});
  }
  get getActiveCardIndex() {
    return this.props.currentTemplateIndex
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid 
        container 
        spacing={24} 
        justify="center"
      >
        <h2 className={classes.headTmpl}>Select the template for houseCards representation</h2>
        {(
          this.props.templates.map((itm, index) => {
            return (
                <Grid
                  key={itm.id || itm} 
                  item xs={4}
                >
                  <Paper 
                    style={{ backgroundColor: [this.getActiveCardIndex === index ? '#ebebeb' : 'unset'] }} 
                    onClick={() => this.selectTemplate(itm.template, index)}
                    className={this.props.width === 'xs' ? classes.cardTmpl : ''} 
                  >
                  <Tree arr={itm.template}/>
                  </Paper>
                </Grid>
            )
          })
        )}
        <Grid 
          container 
          spacing={24} 
          justify="center"
        >
          <HouseCard 
            item={this.props.items[0]}
            currentTemplate={this.props.currentTemplate}
          />
        </Grid>
        <Grid 
          container 
          spacing={24} 
          justify="center"
        >
          <Button 
            variant="contained" 
            color="primary"
            className={classes.btnShift}
            onClick={this.props.toggleDrawer('top', false)}
          >
            Ok
          </Button>
        </Grid>
      </Grid>
    );
  }
}
const StyledTemplate = withStyles(styles)(withWidth()(Templates))
const TemplatesConnect = connect(mapStateToProps, mapDispatchToProps)(StyledTemplate);
export default TemplatesConnect;