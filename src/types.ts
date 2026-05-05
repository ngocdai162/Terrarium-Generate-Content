export type Variant =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11';

export type ExportProfile = 'tiktok' | 'instagram-post' | 'facebook-post';

export type CardContent = {
  subTitle: string;
  title: string;
  description: string;
  paragraphItems: string[];
  highlight: string;
  listItems: string[];
  contentImage: string;
  handle: string;
};

export type TitleContainerStyle = {
  showBackground: boolean;
  showBorder: boolean;
};

export type ContentVisibility = {
  brand: boolean;
  subTitle: boolean;
  title: boolean;
  description: boolean;
  body: boolean;
  handle: boolean;
};
