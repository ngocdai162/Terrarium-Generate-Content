import styled, { createGlobalStyle } from 'styled-components';
import type { ExportProfile } from './types';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Quicksand:wght@400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #121212;
    color: #fff;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(420px, 600px) minmax(320px, 450px);
  gap: clamp(16px, 2vw, 30px);
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: clamp(16px, 2.5vw, 40px);
  background-color: #121212;
  overflow-x: clip;

  @media (max-width: 1279px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PanelTitle = styled.h3`
  margin: 0 0 16px;
  color: #f39c12;
  font-size: 16px;
`;

export const EditorTitle = styled.h2`
  margin: 0 0 20px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
`;

export const AssetsSection = styled.aside`
  width: 100%;
  min-width: 0;
  background: #2a2a2a;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  @media (min-width: 1280px) {
    position: sticky;
    top: 40px;
    height: fit-content;
  }
`;

export const EditorSection = styled.section`
  width: 100%;
  min-width: 0;
  background: #2a2a2a;
  padding: clamp(20px, 2vw, 32px);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  overflow-y: auto;

  @media (min-width: 1280px) {
    flex: 1;
    min-height: 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #444;
      border-radius: 4px;
    }
  }
`;

export const EditorColumn = styled.section`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1280px) {
    position: sticky;
    top: 40px;
    max-height: calc(100vh - 80px);
  }
`;

export const OptionSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const BackgroundSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin-bottom: 24px;
`;

export const BackgroundOption = styled.button<{ $active: boolean; $src: string }>`
  display: block;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 4px;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? '#f39c12' : 'transparent')};
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.03);
    border-color: #f39c12;
  }
`;

export const OptionButton = styled.button<{ $active: boolean }>`
  flex: 1 1 140px;
  min-width: 0;
  padding: 10px;
  border: 2px solid ${(props) => (props.$active ? '#f39c12' : '#444')};
  background: ${(props) => (props.$active ? '#f39c1222' : 'transparent')};
  color: ${(props) => (props.$active ? '#f39c12' : '#888')};
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #f39c12;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 8px;
    color: #ccc;
    font-size: 14px;
  }

  input,
  textarea {
    width: 100%;
    min-width: 0;
    padding: 12px;
    background: #333;
    border: 1px solid #444;
    border-radius: 6px;
    color: white;

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

export const TallTextarea = styled.textarea`
  min-height: 150px;
`;

export const DynamicTextarea = styled.textarea`
  flex: 1;
  min-height: 92px;
`;

export const ListItemInput = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  align-items: stretch;

  input {
    flex: 1;
  }

  textarea {
    flex: 1;
  }
`;

export const IconButton = styled.button`
  width: 42px;
  flex: 0 0 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  background: #333;
  color: #f5f5f5;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;

  &:hover:not(:disabled) {
    border-color: #e74c3c;
    color: #e74c3c;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;

export const AddItemButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 4px;
  padding: 11px 12px;
  border: 1px dashed #f39c12;
  border-radius: 6px;
  background: rgba(243, 156, 18, 0.1);
  color: #f39c12;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(243, 156, 18, 0.18);
    border-color: #ffb12d;
  }
`;

export const CardPreview = styled.div<{ $exportProfile: ExportProfile }>`
  position: relative;
  width: min(100%, 405px);
  aspect-ratio: 9 / 16;
  min-width: 0;
  justify-self: center;
  flex-shrink: 0;
  background-color: #121212;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    props.$exportProfile === 'tiktok'
      ? 'clamp(70px, 19.75%, 90px) clamp(72px, 19.75%, 90px) clamp(56px, 10%, 76px) clamp(28px, 8%, 36px)'
      : 'clamp(22px, 6%, 28px)'};
`;

export const PreviewColumn = styled.section`
  width: min(100%, 405px);
  min-width: 0;
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BackgroundImage = styled.div<{ $src: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: 0;

  [data-variant='4'] &,
  [data-variant='5'] &,
  [data-variant='6'] &,
  [data-variant='7'] &,
  [data-variant='8'] & {
    opacity: 0.64;
  }
`;

export const CardOverlay = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;

  [data-export-profile='tiktok'] & {
    gap: 18px;
  }
`;

export const HeaderBlock = styled.div`
  background: rgba(25, 25, 25, 0.95);
  border-radius: 18px;
  padding: clamp(20px, 6%, 28px);
  border: 1px solid rgba(243, 156, 18, 0.15);
  margin-bottom: 20px;
  text-align: center;

  [data-export-profile='tiktok'] & {
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 0;
    text-align: left;
  }

  [data-variant='4'] &,
  [data-variant='5'] &,
  [data-variant='6'] &,
  [data-variant='7'] &,
  [data-variant='8'] & {
    background: rgba(13, 13, 11, 0.94);
    border-color: rgba(243, 156, 18, 0.4);
    text-align: left;
  }
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;

  [data-export-profile='tiktok'] & {
    flex-direction: row;
    gap: 8px;
    margin-bottom: 16px;
  }

  [data-variant='4'] &,
  [data-variant='5'] &,
  [data-variant='6'] &,
  [data-variant='7'] &,
  [data-variant='8'] & {
    flex-direction: row;
    gap: 10px;
    margin-bottom: 16px;
  }
`;

export const LogoIcon = styled.div`
  width: 44px;
  height: 44px;
  background: #f39c12;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 10px rgba(243, 156, 18, 0.3);

  [data-export-profile='tiktok'] & {
    width: 32px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  [data-variant='4'] &,
  [data-variant='5'] &,
  [data-variant='6'] &,
  [data-variant='7'] &,
  [data-variant='8'] & {
    width: 32px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const LogoBrand = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1.4px;
  line-height: 1.3;
  text-transform: uppercase;

  [data-export-profile='tiktok'] & {
    font-size: 11px;
    letter-spacing: 0;
  }
`;

export const SubTitle = styled.div`
  color: #f39c12;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1.4;
  text-transform: uppercase;
  margin-bottom: 10px;
  overflow-wrap: anywhere;

  [data-export-profile='tiktok'] & {
    font-size: 11px;
    letter-spacing: 0.4px;
    margin-bottom: 10px;
  }
`;

export const MainTitle = styled.h1`
  color: #fff;
  font-size: 31px;
  font-weight: 900;
  line-height: 1.28;
  margin: 0 0 10px;
  overflow-wrap: anywhere;

  [data-export-profile='tiktok'] & {
    font-size: 22px;
    line-height: 1.32;
    margin-bottom: 6px;
  }
`;

export const Description = styled.p`
  color: #f39c12;
  font-size: 14px;
  font-style: italic;
  line-height: 1.35;
  margin: 0;
  opacity: 0.9;
  overflow-wrap: anywhere;

  [data-export-profile='tiktok'] & {
    display: block;
    color: #ffd21a;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.35;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  margin-bottom: 42px;

  [data-export-profile='tiktok'] & {
    gap: 14px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const CompactListContainer = styled(ListContainer)`
  gap: 8px;
  margin: 0;

  [data-export-profile='tiktok'] & {
    gap: 11px;
  }
`;

export const ListItem = styled.div`
  background: rgba(30, 30, 30, 0.9);
  padding: 14px 18px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
  border-left: 4px solid #f39c12;
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  overflow-wrap: anywhere;

  svg {
    flex: 0 0 auto;
    color: #f39c12;
  }

  [data-export-profile='tiktok'] & {
    border-left: 0;
    border-radius: 8px;
    gap: 10px;
    padding: 13px 12px;
    font-size: 12px;
    line-height: 1.35;
  }
`;

export const Bullet = styled.span`
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  border-radius: 50%;
  background: #f39c12;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(25, 25, 25, 0.85);
  border: 1px solid rgba(243, 156, 18, 0.2);
  border-radius: 14px;
  padding: 28px;
  font-size: 16px;
  line-height: 1.52;
  color: #ccc;
  text-align: justify;
  margin-top: 0;
  margin-bottom: 34px;
  overflow-wrap: anywhere;

  [data-export-profile='tiktok'] & {
    gap: 0;
    padding: 24px;
    border-radius: 12px;
    font-size: 15px;
    line-height: 1.62;
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
  }
`;

export const ParagraphText = styled.p`
  margin: 0;
`;

export const HighlightContent = styled.div`
  margin-top: auto;
  margin-bottom: 26px;

  [data-export-profile='tiktok'] & {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f39c12 0%, #d35400 100%);
  padding: 22px;
  border-radius: 14px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 10px 20px rgba(211, 84, 0, 0.3);
  overflow-wrap: anywhere;

  [data-export-profile='tiktok'] & {
    border-radius: 12px;
    padding: 24px 18px;
    font-size: 15px;
    line-height: 1.55;
    margin-bottom: 24px;
  }
`;

export const FooterHandle = styled.div`
  margin-top: auto;
  padding-top: 16px;
  text-align: center;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
`;

export const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StepCard = styled.div`
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid rgba(243, 156, 18, 0.65);
  border-radius: 12px;
  background: rgba(12, 16, 8, 0.88);
  color: #fff;
`;

export const StepNumber = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb000 0%, #ff7a00 100%);
  font-size: 14px;
  font-weight: 800;
`;

export const StepText = styled.div`
  min-width: 0;

  strong,
  span {
    display: block;
    overflow-wrap: anywhere;
  }

  strong {
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 650;
    line-height: 1.25;
  }

  span {
    color: rgba(255, 255, 255, 0.86);
    font-size: 13px;
    font-weight: 450;
    line-height: 1.45;
  }
`;

export const FactBox = styled.div`
  margin-top: 0;
  padding: 28px 26px;
  border: 2px solid rgba(243, 156, 18, 0.72);
  border-radius: 14px;
  background: rgba(96, 87, 0, 0.74);
  text-align: center;
`;

export const FactIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  color: #b8ff55;
`;

export const FactText = styled.p`
  margin: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.65;
  overflow-wrap: anywhere;
`;

export const QaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const QuestionBox = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ffa000 0%, #f27b00 100%);
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  font-weight: 650;
  line-height: 1.35;
  text-shadow: 0 1px 2px rgba(65, 30, 0, 0.45);
  box-shadow: 0 10px 24px rgba(255, 128, 0, 0.2);
  overflow-wrap: anywhere;
`;

export const AnswerBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 18px;
  border: 1px solid rgba(118, 206, 94, 0.55);
  border-radius: 12px;
  background: rgba(13, 13, 11, 0.9);
  color: #fff;
`;

export const QaMark = styled.span<{ $answer?: boolean }>`
  flex: 0 0 auto;
  color: ${(props) => (props.$answer ? '#55f070' : '#fff')};
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
  text-shadow: ${(props) =>
    props.$answer ? 'none' : '0 1px 2px rgba(65, 30, 0, 0.5)'};
`;

export const AnswerText = styled.div`
  min-width: 0;

  p {
    margin: 0 0 18px;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const IssueList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const IssueCard = styled.div`
  padding: 18px;
  border-radius: 10px;
  border: 1px solid rgba(243, 156, 18, 0.16);
  background: rgba(20, 37, 13, 0.9);
  color: #fff;
  overflow-wrap: anywhere;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    color: #ffb0b8;
    font-size: 13px;
    font-weight: 700;
  }

  strong {
    display: block;
    color: #5dff75;
    font-size: 13px;
    line-height: 1.35;
  }
`;

export const QuoteBox = styled.div`
  padding: 38px 28px;
  border: 1px solid rgba(243, 156, 18, 0.65);
  border-radius: 14px;
  background: rgba(15, 15, 12, 0.9);
  color: #fff;
  text-align: center;
`;

export const QuoteMark = styled.div`
  height: 30px;
  color: #ffd21a;
  font-size: 54px;
  font-weight: 900;
  line-height: 0.7;
`;

export const QuoteText = styled.p`
  margin: 30px 0 26px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.75;
  overflow-wrap: anywhere;
`;

export const QuoteDivider = styled.div`
  width: 74px;
  height: 1px;
  margin: 0 auto 18px;
  background: linear-gradient(90deg, transparent, #ffd21a, transparent);
`;

export const QuoteAuthor = styled.div`
  color: #ffd21a;
  font-size: 13px;
  font-weight: 800;
  overflow-wrap: anywhere;
`;

export const ExportButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #f39c12;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  flex: 0 0 auto;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #555;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
