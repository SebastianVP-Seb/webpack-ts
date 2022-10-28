import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoListApp from './ToDoListApp';
// import '../  '

ReactDOM.createRoot(
    document.getElementById('root-main') as HTMLElement,
).render(
    <ToDoListApp />
    // React.createElement('h1', null, 'iAmSebastian Jade' )
    // <>
        // <h1>iAmSebastian Jade</h1>
    // </>
)
