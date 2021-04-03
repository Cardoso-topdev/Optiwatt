import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import Code from "../../components/Code";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Context() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Context API
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Context provides a way to pass data through the component tree without
        having to pass props down manually at every level.
        <br />
        <br />
        In a typical React application, data is passed top-down (parent to
        child) via props, but this can be cumbersome for certain types of props
        (e.g. locale preference, UI theme) that are required by many components
        within an application. Context provides a way to share values like these
        between components without having to explicitly pass a prop through
        every level of the tree.{" "}
        <Link
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Learn more
        </Link>
        .
      </Typography>
    </Box>
  );
}

function Redux() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Redux
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Redux is a predictable state container for JavaScript apps.
        <br />
        <br />
        It helps you write applications that behave consistently, run in
        different environments (client, server, and native), and are easy to
        test. On top of that, it provides a great developer experience, such as{" "}
        <Link
          href="https://github.com/reduxjs/redux-devtools"
          target="_blank"
          rel="noreferrer noopener"
        >
          live code editing combined with a time traveling debugger
        </Link>
        .<br />
        <br />
        <Link
          href="https://redux.js.org/introduction/getting-started"
          target="_blank"
          rel="noreferrer noopener"
        >
          Learn more about Redux &raquo;
        </Link>
      </Typography>
    </Box>
  );
}

function ReduxActions() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        Actions
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Actions are payloads of information that send data from your application
        to your store. They are the only source of information for the store.
        Here's an example action which represents adding a new todo item:
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        <code>redux/constants.js</code> (or <code>redux/constants.ts</code>)
        <Code>const ADD_TODO = 'ADD_TODO'</Code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        <code>redux/actions/todoActions.js</code> (or{" "}
        <code>redux/actions/todoActions.ts</code>)
        <Code>{`import * as types from '../constants';

export function addTodo(value) {
  return {
    type: types.ADD_TODO,
    payload: value
  }
}`}</Code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        How to dispatch an action:
        <Code>{`import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const DemoComponent = function() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(addTodo('My first todo item'))}>Click me!</Button>
  )
}`}</Code>
      </Typography>
    </Box>
  );
}

function ReduxReducers() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        Reducers
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Reducers specify how the application's state changes in response to
        actions sent to the store. Remember that actions only describe what
        happened, but don't describe how the application's state changes.
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        <code>redux/reducers/todoReducer.js</code> (or{" "}
        <code>redux/reducers/todoReducer.ts</code>)
        <Code>{`import * as types from '../constants';

const initialState = [
  {
    text: "Initial todo item",
    completed: true
  }
]

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case types.ADD_TODO:
      return [
        ...state,
        {
          text: actions.payload,
          completed: false
        }
      ]

    default:
      return state
  }
}`}</Code>
        Note: Reducers can be registered by adding them to the array in the{" "}
        <code>redux/reducers/index.js</code> (or{" "}
        <code>redux/reducers/index.ts</code>) file.
      </Typography>
    </Box>
  );
}

function ReduxStore() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        Store
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        In the previous sections, we defined the actions that represent the
        facts about “what happened” and the reducers that update the state
        according to those actions. The Store is the object that brings them
        together.
        <br />
        <br />
        It's important to note that you'll only have a single store in a Redux
        application. When you want to split your data handling logic, you'll use{" "}
        <Link
          href="https://redux.js.org/basics/reducers#splitting-reducers"
          target="_blank"
          rel="noreferrer noopener"
        >
          reducer composition
        </Link>{" "}
        instead of many stores.
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Demo component showing values from the store:
        <Code>{`import { useSelector } from 'react-redux';

const DemoComponent = () => {
  const todos = useSelector((state) => state.todoReducer);

  return (
    <ul>
      { todos.map((todo) => <li>{todo}</li>) }
    </ul>
  )
}

export default DemoComponent;`}</Code>
      </Typography>
    </Box>
  );
}

function ReduxDevTools() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Redux DevTools
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Redux DevTools offers developer tools to power-up Redux development
        workflow or any other architecture which handles the state change (see
        integrations).
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        It can be used as a browser extension (for{" "}
        <Link
          href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Chrome
        </Link>
        ,{" "}
        <Link
          href="https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Edge
        </Link>{" "}
        and{" "}
        <Link
          href="https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Firefox
        </Link>
        ), as{" "}
        <Link
          href="https://github.com/zalmoxisus/remotedev-app"
          target="_blank"
          rel="nofollow noreferrer"
        >
          a standalone app
        </Link>{" "}
        or as{" "}
        <Link
          href="https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools"
          target="_blank"
          rel="nofollow noreferrer"
        >
          a React component
        </Link>{" "}
        integrated in the client app.
      </Typography>
    </Box>
  );
}

function StateManagement() {
  return (
    <React.Fragment>
      <Helmet title="State Management" />

      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            State Management
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>
            <Link component={NavLink} exact to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>State Management</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Context />
          <Redux />
          <ReduxActions />
          <ReduxReducers />
          <ReduxStore />
          <ReduxDevTools />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default StateManagement;
