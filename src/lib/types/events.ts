export interface IEventArtist {
  id: string;
  name: string;
  url?: string | undefined;
  embed?: string | undefined;
  embed_open?: boolean | undefined;
}

export type IEventArtistArray = IEventArtist[];