import * as React from 'react';
import { Notification } from './notification';
import { RootState } from '@ireal-text-editor/models';
import { connect } from 'react-redux';

function mapStateToProps (state: RootState) {
    return {
        ...state.notification
    };
}

export const NotificationContainer = connect(mapStateToProps)(Notification);