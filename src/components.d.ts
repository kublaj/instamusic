/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppHome as AppHome
} from './components/app-home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  AppProfile as AppProfile
} from './components/app-profile/app-profile';

declare global {
  interface HTMLAppProfileElement extends AppProfile, HTMLStencilElement {
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-profile": JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  FavePage as FavePage
} from './components/fave-page/fave-page';

declare global {
  interface HTMLFavePageElement extends FavePage, HTMLStencilElement {
  }
  var HTMLFavePageElement: {
    prototype: HTMLFavePageElement;
    new (): HTMLFavePageElement;
  };
  interface HTMLElementTagNameMap {
    "fave-page": HTMLFavePageElement;
  }
  interface ElementTagNameMap {
    "fave-page": HTMLFavePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fave-page": JSXElements.FavePageAttributes;
    }
  }
  namespace JSXElements {
    export interface FavePageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  LazyImg as LazyImg
} from './components/lazy-img/lazy-img';

declare global {
  interface HTMLLazyImgElement extends LazyImg, HTMLStencilElement {
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-img": JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TrackDetail as TrackDetail
} from './components/track-detail/track-detail';

declare global {
  interface HTMLTrackDetailElement extends TrackDetail, HTMLStencilElement {
  }
  var HTMLTrackDetailElement: {
    prototype: HTMLTrackDetailElement;
    new (): HTMLTrackDetailElement;
  };
  interface HTMLElementTagNameMap {
    "track-detail": HTMLTrackDetailElement;
  }
  interface ElementTagNameMap {
    "track-detail": HTMLTrackDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "track-detail": JSXElements.TrackDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface TrackDetailAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  TrackList as TrackList
} from './components/track-list/track-list';

declare global {
  interface HTMLTrackListElement extends TrackList, HTMLStencilElement {
  }
  var HTMLTrackListElement: {
    prototype: HTMLTrackListElement;
    new (): HTMLTrackListElement;
  };
  interface HTMLElementTagNameMap {
    "track-list": HTMLTrackListElement;
  }
  interface ElementTagNameMap {
    "track-list": HTMLTrackListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "track-list": JSXElements.TrackListAttributes;
    }
  }
  namespace JSXElements {
    export interface TrackListAttributes extends HTMLAttributes {
      fave?: boolean;
      tracks?: any[];
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }