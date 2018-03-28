import * as React from "react";
import { Fade, LinearProgress } from "material-ui";
import s from './style.css';

interface ProgressIndicatorProps {
  loading: boolean;
}

class ProgressIndicator extends React.Component<ProgressIndicatorProps> {
  render() {
    const { loading } = this.props;
    return (
      <div className={s.placeHolder}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "800ms" : "0ms"
          }}
          unmountOnExit
        >
          <LinearProgress />
        </Fade>
      </div>
    );
  }
}

export { ProgressIndicator };
