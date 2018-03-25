import { Action } from "redux";
import { NotificationModel } from "@ireal-text-editor/models";

interface ShowNotificationAction extends Action {
  type: "@APP/NOTIFY/SHOW";
  notification: NotificationModel;
}

function ShowNotificationCreate(
  notification: NotificationModel
): ShowNotificationAction {
  return {
    type: "@APP/NOTIFY/SHOW",
    notification: notification
  };
}

function GeneralFailNotificationCreate(): ShowNotificationAction {
  return {
    type: "@APP/NOTIFY/SHOW",
    notification: {
      autoclose: false,
      type: "failure",
      message: "Something went wrong, sorry!, please contact me."
    }
  };
}

type NotificationActions = ShowNotificationAction;

export {
  ShowNotificationCreate,
  NotificationActions,
  GeneralFailNotificationCreate
};
