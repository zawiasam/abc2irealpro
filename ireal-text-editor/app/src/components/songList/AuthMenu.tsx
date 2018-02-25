import * as React from "react";
import { Link } from "react-router-dom";

import { UserInfo } from "@ireal-text-editor/models";
import  Button  from "material-ui/Button";

interface AuthMenuProps {
  user?: UserInfo;
}

class AuthMenu extends React.Component<AuthMenuProps> {
  render() {
    return (
      <div>
        <Link style={{ textDecoration: 'none', color: 'inherit'}} to="/songList"><Button variant='raised'>My songs</Button></Link>
      </div>
    );
  }
}

export { AuthMenu };
