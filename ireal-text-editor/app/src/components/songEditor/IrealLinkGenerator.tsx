import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";
import { Snackbar, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { uuidv4 } from "@ireal-text-editor/lib";
import { SongEditorContainer } from "./SongEditorContainer";
import { RouteComponentProps } from "react-router";

const IrealLinkGenerator: React.SFC<RouteComponentProps<any>> = (props) => {

  return (
    <div>
      <SongEditorContainer {...props}/>
    </div>
  );
};

export { IrealLinkGenerator };
