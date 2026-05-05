import styled, { createGlobalStyle } from 'styled-components';
import type { ExportProfile } from './types';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Quicksand:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #1a1a1a;
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background-color: #121212;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns:
      minmax(220px, 0.8fr)
      minmax(220px, 0.8fr)
      minmax(320px, 1.2fr)
      minmax(260px, 420px);
    align-items: start;
    justify-content: stretch;
    gap: clamp(12px, 1vw, 20px);
  }
`;

export const PanelColumn = styled.div`
  width: 100%;
  max-width: 320px;
  flex-shrink: 0;
  min-width: 0;

  @media (min-width: 1200px) {
    max-width: none;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  color: #f39c12;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const PanelTitle = styled(SectionTitle)``;

export const EditorTitle = styled(SectionTitle)``;

export const DynamicTextarea = styled.textarea`
  min-height: 80px;
  resize: vertical;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover:not(:disabled) {
    color: #e74c3c;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  color: #f39c12;
  border: 1px dashed #f39c12;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
  transition: all 0.2s;

  &:hover {
    background: #f39c1211;
  }
`;

export const ListInputsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
`;

export const AddItemButton = styled(ActionButton)`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const EditorSection = styled.div`
  flex: 1;
  max-width: 600px;
  min-width: 0;
  background: #2a2a2a;
  padding: 28px 32px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-height: min(56vh, 520px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  @media (min-width: 1200px) {
    max-width: none;
    max-height: min(58vh, calc(100vh - 220px));
  }
`;

export const EditorColumn = styled.div`
  width: 100%;
  max-width: 600px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;

  @media (min-width: 1200px) {
    max-width: none;
  }
`;

/** Export controls sit below the scrollable editor so the primary action stays in reach */
export const ExportBlock = styled.div`
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  & > label {
    margin-bottom: 0;
  }
`;

export const PreviewColumn = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  min-width: 0;

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

export const Section = styled.div`
  background: #2a2a2a;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const LayoutSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const LayoutOption = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? '#f39c1222' : 'transparent'};
  border: 2px solid ${props => props.$active ? '#f39c12' : '#444'};
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  color: ${props => props.$active ? '#f39c12' : '#888'};

  &:hover {
    border-color: #f39c12;
  }

  span {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const LayoutPreview = styled.div<{ $variant: string }>`
  width: 60px;
  height: 100px;
  background: #111;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;
`;

export const LayoutHeaderPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span { height: 4px; width: 10px; background: #f39c12; border-radius: 2px; }
  strong { height: 6px; width: 30px; background: #fff; border-radius: 3px; }
  i { height: 4px; width: 20px; background: #f39c12; border-radius: 2px; opacity: 0.5; }
`;

export const LayoutBodyPreview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  span { height: 3px; width: 100%; background: #444; border-radius: 2px; }
`;

export const LayoutListPreview = styled.div`
  height: 6px;
  width: 100%;
  background: #222;
  border-radius: 2px;
  border-left: 2px solid #f39c12;
`;

export const LayoutStepPreview = styled.div`
  height: 12px;
  width: 100%;
  background: #222;
  border-radius: 3px;
`;

export const LayoutFactPreview = styled.div`
  height: 40px;
  width: 100%;
  border: 1px solid #b8ff55;
  border-radius: 4px;
  background: rgba(184, 255, 85, 0.1);
`;

export const LayoutQuestionPreview = styled.div`
  height: 12px;
  width: 100%;
  background: #f39c12;
  border-radius: 3px;
`;

export const LayoutAnswerPreview = styled.div`
  height: 24px;
  width: 100%;
  background: #222;
  border-radius: 3px;
`;

export const LayoutIssuePreview = styled.div`
  height: 10px;
  width: 100%;
  background: #1e1e1e;
  border-radius: 3px;
`;

export const LayoutQuotePreview = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  &::before { content: '"'; color: #f39c12; font-size: 16px; line-height: 1; }
  &::after { content: ''; width: 10px; height: 1px; background: #f39c12; }
`;

export const LayoutHighlightPreview = styled.div`
  height: 14px;
  width: 100%;
  background: linear-gradient(135deg, #f39c12, #d35400);
  border-radius: 3px;
`;

export const LayoutStatPreview = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ff9800;
  }

  &::after {
    content: '';
    width: 38px;
    height: 7px;
    border-radius: 999px;
    background: #fff;
  }
`;

export const LayoutTipsGridPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  span {
    height: 15px;
    background: #263246;
    border: 1px solid #3d4d69;
    border-radius: 4px;
  }
`;

export const LayoutImagePreview = styled.div`
  height: 34px;
  width: 100%;
  border-radius: 4px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)),
    linear-gradient(135deg, #3a5d43, #121812);
  border: 1px solid rgba(184, 255, 85, 0.35);
`;

export const AssetsSection = styled(Section)``;

export const OptionSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0;
  flex-wrap: wrap;
`;

export const OptionButton = styled.button<{ $active: boolean }>`
  flex: 1;
  min-width: 80px;
  padding: 12px;
  border: 2px solid ${props => props.$active ? '#f39c12' : '#444'};
  background: ${props => props.$active ? '#f39c1222' : 'transparent'};
  color: ${props => props.$active ? '#f39c12' : '#888'};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #f39c12;
  }
`;

export const BackgroundSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const BackgroundOption = styled.div<{ $active: boolean; $src: string }>`
  aspect-ratio: 9/16;
  border-radius: 8px;
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 3px solid ${props => props.$active ? '#f39c12' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
    border-color: #f39c12;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0;
  color: #ccc;
  font-size: 14px;
`;

export const InputGroup = styled.div`
  margin-bottom: 26px;

  &:last-of-type {
    margin-bottom: 8px;
  }

  & > label {
    display: block;
    margin-bottom: 10px;
    color: #ddd;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    background: #333;
    border: 1px solid #444;
    border-radius: 8px;
    font-family: inherit;
    color: white;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #f39c12;
    }
  }

  textarea {
    height: 80px;
    resize: vertical;
  }
`;

export const ContentImageUploadLabel = styled.label<{ $src: string }>`
  width: 100%;
  min-height: 150px;
  border: 1px dashed #f39c12;
  border-radius: 10px;
  background:
    linear-gradient(rgba(18, 18, 18, 0.25), rgba(18, 18, 18, 0.58)),
    url(${props => props.$src});
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;

  span {
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(18, 18, 18, 0.72);
    color: #f39c12;
    font-size: 13px;
    font-weight: 800;
  }

  input {
    display: none;
  }
`;

export const ListItemInput = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;

  input {
    flex: 1;
  }

  button {
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 8px;
    width: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ExportButton = styled.button`
  width: 100%;
  padding: 14px 16px;
  background: #f39c12;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 800;
  font-size: 17px;
  cursor: pointer;
  margin-top: 0;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// CARD PREVIEW STYLES
export const CardPreview = styled.div<{ $exportProfile: ExportProfile }>`
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: ${props =>
    props.$exportProfile === 'tiktok' ? '9 / 16' : '4 / 5'};
  max-height: calc(100dvh - 40px);
  flex-shrink: 0;
  background-color: #121212;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &[data-exporting='true'] {
    border-radius: 0 !important;
  }
`;

export const BackgroundImage = styled.div<{ $src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: 0;
`;

export const CardOverlay = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  /*
   * TikTok safe zone — margins are scaled from common 1080×1920 creator guides
   * (e.g. ~150–220px top UI, ~300–350px bottom caption/audio, ~100–120px right rail)
   * to this card (450×800, same 9:16): multiply ref Y by (800/1920), ref X by (450/1080).
   * Using literal 1920px-space pixel values on an 800px-tall card over-reserves space and
   * squeezes content upward next to the top chrome.
   */
  [data-export-profile='tiktok'] & {
    /* ~200px @1920 top chrome + extra clearance vs back/search (conservative) */
    padding-top: 158px;
    /* ~365px @1920 bottom caption + username + sound (long captions vary) */
    padding-bottom: 152px;
    padding-left: 28px;
    /* ~125px @1080 right action column */
    /* ~144px @1080 — tránh cột nút tương tác khi chữ dài */
    padding-right: 60px;
    gap: 10px;
    justify-content: flex-start;
  }

  [data-export-profile='tiktok'][data-variant='11'] & {
    padding-top: 132px;
    padding-bottom: 182px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    padding: 56px 18px 56px;
    gap: 8px;
    justify-content: flex-start;
  }
`;

export const HeaderBlock = styled.div<{
  $showBackground?: boolean;
  $showBorder?: boolean;
}>`
  background: ${props =>
    props.$showBackground === false ? 'transparent' : 'rgba(25, 25, 25, 0.95)'};
  border-radius: 24px;
  padding: 32px;
  border: 1px solid
    ${props =>
      props.$showBorder === false ? 'transparent' : 'rgba(243, 156, 18, 0.15)'};
  margin-bottom: 24px;
  text-align: center;
  flex-shrink: 0;

  [data-export-profile='tiktok'] & {
    padding: 14px 16px;
    margin-bottom: 10px;
    border-radius: 18px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    padding: 18px 14px;
    margin-bottom: 10px;
    border-radius: 16px;
  }
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  [data-export-profile='tiktok'] & {
    gap: 6px;
    margin-bottom: 8px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    gap: 7px;
    margin-bottom: 8px;
  }
`;

export const LogoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #f39c12;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  [data-export-profile='tiktok'] & {
    width: 36px;
    height: 36px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    width: 32px;
    height: 32px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const LogoBrand = styled.span`
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
  text-transform: uppercase;

  [data-export-profile='tiktok'] & {
    font-size: 13px;
    letter-spacing: 1.5px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    font-size: 12px;
    letter-spacing: 1.2px;
  }
`;

export const SubTitle = styled.div`
  color: #f39c12;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;

  [data-export-profile='tiktok'] & {
    font-size: 10px;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    font-size: 9px;
    letter-spacing: 0.8px;
    margin-bottom: 6px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 16px 0;
  color: #fff;

  [data-export-profile='tiktok'] & {
    font-size: 24px;
    line-height: 1.18;
    margin: 0 0 8px 0;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    font-size: 19px;
    line-height: 1.15;
    margin: 0 0 6px 0;
  }
`;

export const Description = styled.p`
  color: #f39c12;
  font-size: 16px;
  font-style: italic;
  margin: 0;
  opacity: 0.9;

  [data-export-profile='tiktok'] & {
    font-size: 13px;
    line-height: 1.35;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    font-size: 11px;
    line-height: 1.3;
  }
`;

// VARIANT STYLES
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 8px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    margin-top: 0;
    gap: 6px;
  }
`;

export const ListItem = styled.div`
  background: rgba(18, 18, 18, 0.96);
  border: 1px solid rgba(243, 156, 18, 0.2);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  padding: 16px 20px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 600;
  border-left: 5px solid #f39c12;
  color: #fff;

  [data-export-profile='tiktok'] & {
    padding: 11px 14px;
    border-radius: 12px;
    font-size: 13px;
    gap: 10px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    padding: 9px 10px;
    border-radius: 11px;
    font-size: 11px;
    gap: 8px;
  }
`;

export const Bullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f39c12;
  flex-shrink: 0;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  background: transparent;
  padding: 0;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 8px;
  }
`;

/** Mỗi đoạn một panel riêng — đọc được trên nền ảnh */
export const ParagraphChunk = styled.div`
  background: rgba(18, 18, 18, 0.94);
  border: 1px solid rgba(243, 156, 18, 0.2);
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.38);

  [data-export-profile='tiktok'] & {
    padding: 12px 14px;
    border-radius: 12px;
  }
`;

export const ParagraphText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #ececec;
  text-align: justify;
  margin: 0;
`;

export const HighlightContent = styled.div`
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
  }
`;

export const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f39c12 0%, #d35400 100%);
  padding: 24px;
  border-radius: 16px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;

  [data-export-profile='tiktok'] & {
    padding: 14px 12px;
    font-size: 16px;
    line-height: 1.35;
    margin-bottom: 10px;
    border-radius: 14px;
  }
`;

export const CompactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  [data-export-profile='tiktok'] & {
    gap: 6px;
  }
`;

export const FooterHandle = styled.div`
  margin-top: auto;
  align-self: center;
  max-width: 100%;
  padding: 10px 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(16, 16, 16, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);

  [data-export-profile='tiktok'] & {
    padding: 8px 14px;
    font-size: 10px;
    letter-spacing: 0.5px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    padding: 7px 12px;
    font-size: 9px;
    letter-spacing: 0.35px;
  }
`;

export const TiktokChrome = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
`;

export const TiktokTopBar = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  strong {
    font-size: 14px;
    font-weight: 800;
  }
`;

export const TiktokRightRail = styled.div`
  position: absolute;
  right: 10px;
  bottom: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
`;

export const TiktokAvatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TiktokAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 10px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TiktokBottomMeta = styled.div`
  position: absolute;
  left: 14px;
  right: 84px;
  bottom: 34px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  strong {
    font-size: 13px;
    font-weight: 800;
  }

  p {
    margin: 0;
    font-size: 10px;
    line-height: 1.35;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
  }
`;

export const TiktokBottomControls = styled.div`
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translateX(-50%);
  width: 122px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
`;

export const InstagramChrome = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
`;

export const InstagramTopBar = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  right: 12px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);

  strong {
    font-size: 16px;
    font-weight: 800;
    font-family: 'Quicksand', sans-serif;
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const InstagramBottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
`;

export const FacebookChrome = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
`;

export const FacebookTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 42px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.45), transparent);

  strong {
    font-size: 20px;
    font-weight: 900;
    color: #1877f2;
  }
`;

export const FacebookBottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(15, 15, 15, 0.68);
`;

export const FacebookAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
`;

// NEW VARIANTS
export const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 8px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    margin-top: 0;
    gap: 6px;
  }
`;

export const StepCard = styled.div`
  background: rgba(18, 18, 18, 0.94);
  border: 1px solid rgba(243, 156, 18, 0.22);
  padding: 14px 16px;
  border-radius: 14px;
  display: flex;
  gap: 14px;
  align-items: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.38);

  [data-export-profile='tiktok'] & {
    padding: 11px 13px;
    gap: 12px;
    border-radius: 12px;
  }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    padding: 9px 10px;
    gap: 9px;
    border-radius: 10px;
  }
`;

export const StepNumber = styled.div`
  flex-shrink: 0;
  font-size: 22px;
  font-weight: 900;
  color: #f39c12;
  min-width: 2ch;
  text-align: left;

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    font-size: 18px;
  }
`;

export const StepText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #e8e8e8;
  strong { color: #fff; font-weight: 700; }
  span { color: #c8c8c8; font-size: 12px; }

  [data-export-profile='instagram-post'] &,
  [data-export-profile='facebook-post'] & {
    font-size: 12px;

    span {
      font-size: 10px;
    }
  }
`;

export const FactBox = styled.div`
  background: rgba(184, 255, 85, 0.1);
  border: 2px solid #b8ff55;
  padding: 32px;
  border-radius: 24px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    padding: 20px;
    gap: 12px;
    border-radius: 18px;
  }
`;

export const FactIcon = styled.div`
  color: #b8ff55;
`;

export const FactText = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
`;

export const QaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 12px;
  }
`;

export const QuestionBox = styled.div`
  background: #f39c12;
  padding: 20px;
  border-radius: 16px;
  color: #000;
  font-weight: 800;
  display: flex;
  gap: 12px;
`;

export const AnswerBox = styled.div`
  background: rgba(18, 18, 18, 0.94);
  border: 1px solid rgba(243, 156, 18, 0.28);
  padding: 18px;
  border-radius: 16px;
  display: flex;
  gap: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
`;

export const QaMark = styled.div<{ $answer?: boolean }>`
  font-size: 20px;
  font-weight: 900;
  color: ${props => props.$answer ? '#b8ff55' : '#000'};
`;

export const AnswerText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #e8e8e8;
  p { margin: 0 0 10px 0; }
  p:last-child { margin: 0; }
`;

export const IssueList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 8px;
  }
`;

export const IssueCard = styled.div`
  background: #1e1e1e;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #ff6b7a;
    font-weight: bold;
  }
  strong { font-size: 14px; color: #fff; }
`;

export const QuoteBox = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 10px;
  }
`;

export const QuoteMainCard = styled.div`
  background: rgba(18, 18, 18, 0.94);
  border: 1px solid rgba(243, 156, 18, 0.22);
  border-radius: 18px;
  padding: 18px 16px 20px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.42);

  [data-export-profile='tiktok'] & {
    padding: 14px 12px 16px;
    border-radius: 14px;
  }
`;

export const QuoteAuthorCard = styled.div`
  background: rgba(18, 18, 18, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 14px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);

  [data-export-profile='tiktok'] & {
    padding: 8px 12px;
    border-radius: 10px;
  }
`;

export const QuoteMark = styled.div`
  font-size: 56px;
  font-family: serif;
  color: #f39c12;
  line-height: 1;
  height: 36px;
  margin-bottom: 12px;

  [data-export-profile='tiktok'] & {
    font-size: 44px;
    height: 28px;
    margin-bottom: 8px;
  }
`;

export const QuoteText = styled.div`
  font-size: 22px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.4;
  color: #fff;

  [data-export-profile='tiktok'] & {
    font-size: 17px;
    line-height: 1.35;
  }
`;

export const QuoteDivider = styled.div`
  width: 40px;
  height: 2px;
  background: #f39c12;
  margin: 16px auto 0;

  [data-export-profile='tiktok'] & {
    margin-top: 12px;
  }
`;

export const QuoteAuthor = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.88);

  [data-export-profile='tiktok'] & {
    font-size: 11px;
    letter-spacing: 1px;
  }
`;

export const WarningContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 100%;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
  }
`;

export const WarningIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffa900, #ff6b00);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const WarningStat = styled.div`
  font-size: 42px;
  font-weight: 900;
  line-height: 1;
  color: #fff;

  [data-export-profile='tiktok'] & {
    font-size: 34px;
  }
`;

export const WarningReason = styled.div`
  color: #ffa900;
  font-size: 16px;
  font-weight: 800;

  [data-export-profile='tiktok'] & {
    font-size: 14px;
  }
`;

export const WarningTitle = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 900;
  line-height: 1.12;
  text-transform: uppercase;

  [data-export-profile='tiktok'] & {
    font-size: 22px;
  }
`;

export const WarningInfoBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.45;

  [data-export-profile='tiktok'] & {
    font-size: 12px;
    padding: 14px 14px;
  }
`;

export const WarningCta = styled.div`
  margin-top: 2px;
  max-width: 260px;
  padding: 12px 24px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffa900, #ff6400);
  color: white;
  font-size: 13px;
  font-weight: 800;

  [data-export-profile='tiktok'] & {
    font-size: 12px;
    padding: 10px 20px;
  }
`;

export const TipsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  gap: 10px;
  width: 100%;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 8px;
  }
`;

export const TipsTitle = styled.div`
  color: #fff;
  font-size: 34px;
  font-weight: 900;
  line-height: 1.05;
  text-transform: uppercase;

  [data-export-profile='tiktok'] & {
    font-size: 28px;
  }
`;

export const TipsSubtitle = styled.div`
  color: #ffa900;
  font-size: 17px;
  font-weight: 800;

  [data-export-profile='tiktok'] & {
    font-size: 14px;
  }
`;

export const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  [data-export-profile='tiktok'] & {
    gap: 8px;
  }
`;

export const TipCard = styled.div<{ $index: number }>`
  min-height: 104px;
  padding: 12px 8px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(38, 50, 70, 0.86);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  strong {
    color: #fff;
    font-size: 13px;
    font-weight: 900;
    line-height: 1.1;
  }

  span {
    color: #e5e8ee;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const TipIcon = styled.div<{ $index: number }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #f39c12;
`;

export const TipsCta = styled.div`
  margin-top: 2px;
  padding: 16px 14px;
  border-radius: 14px;
  background: linear-gradient(135deg, #ffa900, #ff6400);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    font-size: 14px;
    font-weight: 900;
    line-height: 1.15;
  }

  span {
    font-size: 11px;
    font-weight: 700;
    line-height: 1.3;
  }
`;

export const ImageNoteContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    gap: 8px;
  }
`;

export const ImageNoteMedia = styled.img`
  width: 100%;
  aspect-ratio: 16 / 11;
  border-radius: 16px;
  display: block;
  object-fit: cover;
  object-position: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
`;

export const ImageNoteText = styled.div`
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(18, 18, 18, 0.94);
  border: 1px solid rgba(243, 156, 18, 0.2);
  color: #f3f3f3;
  font-size: 13px;
  font-weight: 650;
  line-height: 1.35;
  text-align: left;
`;
