export type Variant = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type ExportProfile = 'standard' | 'tiktok';

export type CardContent = {
  subTitle: string;
  title: string;
  description: string;
  paragraphItems: string[];
  highlight: string;
  listItems: string[];
  handle: string;
};
