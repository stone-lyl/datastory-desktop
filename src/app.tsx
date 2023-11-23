// import { core } from '@data-story/core';
// import { DataStory, core } from '@data-story/ui';
import { DataStory } from '@data-story/ui';
import { Application, coreNodeProvider } from '@data-story/core';
import { createRoot } from 'react-dom/client';
import '@data-story/ui/dist/data-story.css';

const root = createRoot(document.body);

const app = new Application();

app.register([
  coreNodeProvider
]);

app.boot();

root.render(<div style={{
  // height: '400px',
  height: '95vh',
  // width: '400px',
  margin: '0px',
}}>
  <DataStory 
    server={{
      type: 'JS',
      app,
    }}
  />
</div>);