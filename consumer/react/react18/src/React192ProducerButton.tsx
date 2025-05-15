import { createRemoteComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/runtime';

const FallbackErrorComp = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>Error loading remote component</h1>
      <p>{error.message}</p>
      <button onClick={() => window.location.reload()}>
        resetErrorBoundary(try again)
      </button>
    </div>
  );
};

const FallbackComp = <div data-test-id="loading">loading...</div>;

const UiButton = createRemoteComponent({
  loader: () => loadRemote('react19_2_producer/UiButton'),
  fallback: FallbackErrorComp,
  loading: FallbackComp,
});

export function React192ProducerButton() {
  return <div>
    <h5>React 19 2 Producer</h5>
    <UiButton logMessage="Hello from Producer" />
    <hr />
  </div>
}
