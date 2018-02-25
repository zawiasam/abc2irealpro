import { NotificationModel } from "@ireal-text-editor/models";
import { NotificationActions } from "@ireal-text-editor/redux-actions";

export function NotificationReducer(
  state: NotificationModel = { autoclose: true, message: undefined, type: 'failure' },
  action: NotificationActions
): NotificationModel {
  switch (action.type) {
    case "@APP/NOTIFY/SHOW":
      return {
        ...action.notification
        }
    default:
      return state;
  }
}
