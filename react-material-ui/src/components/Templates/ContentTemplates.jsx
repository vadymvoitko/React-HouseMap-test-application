import React, {Component} from 'react';
import { connect } from "react-redux";
import { getTemplates, setTemplateType } from "../../store/actions";
import { Grid, Paper, Button } from '@material-ui/core';
import Tree from './Tree'
import HouseCard from './../House/HouseCard'
import withWidth from '@material-ui/core/withWidth';
import injectSheet from 'react-jss'
import { HighlightClick } from './HighlightClick'

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
  get getActiveCardIndex() {
    return this.props.currentTemplateIndex
  }
  render() {
    const { classes, items, currentTemplate, toggleDrawer, width} = this.props
    return (
      <Grid 
        container 
        spacing={24} 
        justify="center"
      >
        <h2 className={classes.headTmpl}>Select the template for houseCards representation</h2>
        {(
          this.props.templates.map((itm, index) => {
            const PaperItem = () => (<Paper
              onClick={() => this.selectTemplate(itm.template, index)}
              className={width === 'xs' ? classes.cardTmpl : ''}
            >
              <Tree arr={itm.template} />
            </Paper>)
            const propsItem = {
              condition: this.getActiveCardIndex === index,
              classes
            }
            return (
                <Grid
                  key={itm.id || itm} 
                  item xs={4}
                >
                  {
                    HighlightClick( PaperItem, propsItem )
                  }
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
            item={items[0]}
            currentTemplate={currentTemplate}
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
            onClick={toggleDrawer('top', false)}
          >
            Ok
          </Button>
        </Grid>
      </Grid>
    );
  }
}
const StyledTemplate = injectSheet(styles)(withWidth()(Templates))
const TemplatesConnect = connect(mapStateToProps, mapDispatchToProps)(StyledTemplate);
export default TemplatesConnect;