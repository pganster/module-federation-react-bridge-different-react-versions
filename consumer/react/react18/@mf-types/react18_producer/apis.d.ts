
    export type RemoteKeys = 'react18_producer/UiButton';
    type PackageType<T> = T extends 'react18_producer/UiButton' ? typeof import('react18_producer/UiButton') :any;