import React from 'react';
import { connect } from "react-redux";
import { getTemplates, setTemplateType } from "../../js/actions";
import { Grid, Paper, Typography } from '@material-ui/core';

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: _ => dispatch(getTemplates()),
    setTemplateType: tmpl => dispatch(setTemplateType(tmpl))
  };
}

function mapStateToProps(state) {
  return {
    templates: state.templates
  }
}

function Tree({ arr }) {
  const render = (
    <ul>
      {
        arr.map(item => {
            return (
              <li key={item.id || item.component || item}>
                <Typography component="p">
                  {item.component}
                </Typography>
                {
                  item.children ?
                  <Tree arr={item.children || item}/> :
                  null
                }
              </li>
            )
        })
      }
    </ul>
  )
  return render
}
class Templates extends React.Component {
  constructor(state) {
    super();
    this.state = {
      open: true,
      templates: state.templates
    }
  }
  componentDidMount() {
    this.props.getTemplates()
  }
  render() {
    return (
      <Grid container spacing={24} justify="center">
        <h2 style={{ width: '100%', textAlign: 'center' }}>Select the template for houseCards representation</h2>
        {(
          this.props.templates.map(itm => {
            return (
                <Grid 
                  key={itm.id || itm} 
                  item xs={3}
                >
                  <Paper onClick={() => this.props.setTemplateType(itm.template)}>
                    <Tree arr={itm.template} />
                  </Paper>
                </Grid>
            )
          })
        )}
      </Grid>
    );
  }
}

const TemplatesConnect = connect(mapStateToProps, mapDispatchToProps)(Templates);
export default TemplatesConnect;