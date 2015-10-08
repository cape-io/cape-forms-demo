import path from 'path';
import Express from 'express';
import qs from 'qs';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { fetchCounter } from '../common/api/counter';
import createRootComponent from '../common';

const app = new Express();
const port = 3000;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('/kai', function (req, res) {
  res.send('GET request to the kai');
});

app.use(Express.static('public'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Query our mock API asynchronously
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 23;

    // Compile an initial state
    const initialState = {
      counter,
      db: {
        title: 'CAPE.io'
      },
      form: {
        editing: null,
        fields: [
          {
            type: 'text',
            id: 'id',
            label: 'User ID',
            editable: false
          },
          {
            type: 'fullName',
            id: 'name'
          },
          {
            type: 'email',
            id: 'email',
            label: 'Email',
            required: true
          },
          {
            type: 'dateTime',
            id: 'birthday',
            label: 'Birthday'
          }
        ],
        title: 'Profile',
        values: {
          id: 'kb',
          email: 'kb@ookb.co'
        }
      },
      theme: {
        css: [
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
          'dist/css/bootstrap-datetimepicker.min.css',
          'dist/css/cape-forms.css'
        ],
        js: [
          '/static/bundle.js'
        ],
        meta: [
          ['viewport', 'width=device-width, initial-scale=1'],
          ['generator', 'CAPE.io, v5.1.1']
        ]
      }
    };

    const RootComponent = createRootComponent(initialState);

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(<RootComponent />);

    // Grab the initial state from our Redux store.
    // This is what is actually sent down to the components.
    // const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html));
  });
}

function renderFullPage(html) {
  const doctype = "<!doctype html>\n";
  return doctype+html;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
