import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {withWrappers} from 'hoc/with-wrappers';

ReactDOM.render(
    withWrappers(<App/>),
    document.getElementById('root'),
);
