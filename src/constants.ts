import type { CardContent } from './types';

export const BACKGROUNDS = [
  '/background.avif',
  '/cindy-bartillon-sXgByrwaa2o-unsplash.jpg',
  '/decry-yae-JidU7Cr6lmk-unsplash.jpg',
  '/keszthelyi-timi-IH2fN_Ec82w-unsplash.jpg',
  '/keszthelyi-timi-_UDLY5cDrSQ-unsplash.jpg',
  '/ryann-pham-Pss6-x1HCpI-unsplash.jpg',
];

export const DEFAULT_CARD_CONTENT: CardContent = {
  subTitle: 'KIEN THUC TERRARIUM #5',
  title: 'Tai sao phai co lop soi duoi day?',
  description: 'Bi quyet thoat nuoc hoan hao',
  paragraphItems: [
    'Terrarium la mot he sinh thai khep kin, nen viec chon dung loai cay la vo cung quan trong...',
  ],
  highlight:
    'Anh sang gian tiep la chia khoa vang cho terrarium phat trien khoe manh!',
  listItems: [
    'Thoat nuoc tu nhien, tranh ung dong',
    'Bao ve re khoi thoi nat',
    'Tao khong gian cho re ho hap',
    'Giup cay phat trien khoe manh',
  ],
  handle: '@happyterrarium',
};
