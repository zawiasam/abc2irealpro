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

type NotificationActions = ShowNotificationAction;

export { ShowNotificationCreate, NotificationActions };
