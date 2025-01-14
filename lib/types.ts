import { StoryblokConfig, StoryblokComponent } from "storyblok-js-client";

declare global {
  interface Window {
    storyblokRegisterEvent: (cb: Function) => void;
    StoryblokBridge: (options?: StoryblokBridgeConfigV2) => void;
  }
}

export type SbBlokKeyDataTypes = string | number | object;

export interface SbBlokData extends StoryblokComponent<string> {
  [index: string]: SbBlokKeyDataTypes;
}

export interface SbSDKOptions {
  bridge?: boolean;
  accessToken?: string;
  use?: [];
  apiOptions?: StoryblokConfig;
}

// TODO: temporary till the right bridge types are updated on storyblok-js-client
export interface StoryblokBridgeConfigV2 {
  resolveRelations?: [string];
  customParent?: string;
  preventClicks?: boolean;
}

export interface StoryblokBridgeV2 {
  pingEditor: (event: any) => void;
  isInEditor: () => boolean;
  enterEditmode: () => void;
  on: (
    event:
      | "customEvent"
      | "published"
      | "input"
      | "change"
      | "unpublished"
      | "enterEditmode"
      | string[],
    callback: (payload?: StoryblokEventPayload) => void
  ) => void;
}

export type {
  StoryblokConfig,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokResult,
  StoryblokManagmentApiResult,
  StoryblokComponent,
  StoryData,
  AlternateObject,
  Stories,
  Story,
  StoriesParams,
  StoryParams,
  Richtext,
  RichtextInstance,
} from "storyblok-js-client";
