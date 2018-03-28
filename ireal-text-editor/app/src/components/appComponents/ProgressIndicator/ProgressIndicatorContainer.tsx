import * as React from 'react';
import { ProgressIndicator } from './ProgressIndicator';
import { RootState } from '@ireal-text-editor/models';
import { connect } from 'react-redux';

function mapStateToProps (state: RootState) {
    return {
        loading: state.appState.loading
    };
}

export const ProgressIndicatorContainer = connect(mapStateToProps)(ProgressIndicator);