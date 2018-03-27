import * as React from "react";
import { TextField, WithStyles } from "material-ui";
import {
  withStyles,
  Theme,
  StyleRules,
  StyleRulesCallback
} from "material-ui/styles";
import { ClassNameMap } from "material-ui/styles/withStyles";

const styles: StyleRules<string> | StyleRulesCallback<string> = (
  theme: Theme
) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit / 2,
    width: 200
  },
  menu: {
    width: 200
  }
});

interface SongInfoProps {
  defaultValue: SongInfoState;
  onChange: (value: SongInfoState) => void;
}

interface SongInfoState {
  composer: string;
  title: string;
  style: string;
  measure: string;
  keySignature: string;
  transpostion: string;
}

class SongInfoComponent extends React.Component<
  SongInfoProps & WithStyles<string>,
  SongInfoState
> {
  constructor(props: SongInfoProps & WithStyles<string>) {
    super(props);
    this.state = {
      ...this.props.defaultValue
    };

    this.doChanged = this.doChanged.bind(this);
  }

  componentWillReceiveProps(nextProps: SongInfoProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState({ ...nextProps.defaultValue });
    }
  }

  doChanged(value: Partial<SongInfoState>) {
    const state = { ...value } as SongInfoState;
    if (this.props.onChange) {
      this.props.onChange(state);
    }

    this.setState(state);
  }

  render() {
    const defaultValue = this.state;
    const { classes } = this.props;

    return (
      <div style={{ display: "block" }}>
        <TextField
          className={classes.textField}
          value={defaultValue.composer}
          fullWidth={true}
          label="Composer"
          onChange={event => {
            this.doChanged({ composer: event.currentTarget.value });
          }}
        />
        <br />
        <TextField
          className={classes.textField}
          value={defaultValue.title}
          fullWidth={true}
          label="Title"
          // onChange={event => {
          //   this.doChanged({ title: event.currentTarget.value });
          // }}
        />
        <br />
        <TextField
          className={classes.textField}
          value={defaultValue.style}
          fullWidth={true}
          label="Style"
        />
        <br />
        <TextField
          className={classes.textField}
          value={defaultValue.measure}
          fullWidth={true}
          label="Measure"
        />
        <br />
        <TextField
          className={classes.textField}
          value={defaultValue.keySignature}
          fullWidth={true}
          label="Key"
        />
      </div>
    );
  }
}
const SongInfo = withStyles(styles)(SongInfoComponent);
export { SongInfo };
