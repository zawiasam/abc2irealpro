import * as React from "react";
import { UserInfo } from "@ireal-text-editor/models";
import  Button  from "material-ui/Button";
interface AuthMenuProps {
  user?: UserInfo;
}

class AuthMenu extends React.Component<AuthMenuProps> {
  render() {
    return (
      <div>
        <Button raised>My songs</Button>
      </div>
    );
  }
}

export { AuthMenu };
