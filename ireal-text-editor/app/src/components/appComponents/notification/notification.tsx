import * as React from "react";
import { Snackbar, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { NotificationModel } from "@ireal-text-editor/models";


export interface NotificationProps extends NotificationModel {
}

interface NotificationState {
  visible: boolean;
}

class Notification extends React.Component<
  NotificationProps,
  NotificationState
> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      visible: props.message !== undefined
    };
  }

  componentWillReceiveProps(nextProps: Readonly<NotificationProps>) {
    this.setState({ visible: this.props.message !== nextProps.message });
  }

  render() {
    const props = this.props;

    return (
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        open={this.state.visible}
        onClose={() => {
          this.setState({ visible: false });
        }}
        autoHideDuration={props.autoclose ? 6000 : undefined}
        SnackbarContentProps={{
          style: {
            backgroundColor: props.type === "success" ? "green" : "red"
          }
        }}
        message={<span id="message-id">{props.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

export { Notification }