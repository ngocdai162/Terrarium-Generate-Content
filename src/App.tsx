import { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import AssetPanel from './components/AssetPanel';
import CardPreview from './components/CardPreview';
import EditorPanel from './components/EditorPanel';
import LayoutPanel from './components/LayoutPanel';
import {
  BACKGROUNDS,
  DEFAULT_CARD_CONTENT,
  DEFAULT_CONTENT_VISIBILITY,
  getDefaultContentByVariant,
} from './constants';
import * as S from './styles';
import type {
  CardContent,
  ContentVisibility,
  ExportProfile,
  TitleContainerStyle,
  Variant,
} from './types';

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
        return;
      }
      reject(new Error('Unable to read image file.'));
    });
    reader.addEventListener('error', () => {
      reject(reader.error ?? new Error('Unable to read image file.'));
    });
    reader.readAsDataURL(file);
  });

const App = () => {
  const [variant, setVariant] = useState<Variant>('1');
  const [exportProfile, setExportProfile] = useState<ExportProfile>('tiktok');
  const [bgImage, setBgImage] = useState(BACKGROUNDS[0]);
  const [content, setContent] = useState<CardContent>(DEFAULT_CARD_CONTENT);
  const [visibility, setVisibility] = useState<ContentVisibility>(
    DEFAULT_CONTENT_VISIBILITY,
  );
  const [titleContainerStyle, setTitleContainerStyle] =
    useState<TitleContainerStyle>({
      showBackground: true,
      showBorder: true,
    });
  const [isExporting, setIsExporting] = useState(false);
  const [initializedVariants, setInitializedVariants] = useState<
    Partial<Record<Variant, boolean>>
  >({
    '1': true,
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleContentChange = useCallback(
    <K extends keyof CardContent>(key: K, value: CardContent[K]) => {
      setContent((current) => ({ ...current, [key]: value }));
    },
    [],
  );

  const updateListItem = useCallback((index: number, value: string) => {
    setContent((current) => {
      const listItems = [...current.listItems];
      listItems[index] = value;
      return { ...current, listItems };
    });
  }, []);

  const addListItem = useCallback(() => {
    setContent((current) => ({
      ...current,
      listItems: [...current.listItems, ''],
    }));
  }, []);

  const removeListItem = useCallback((index: number) => {
    setContent((current) => ({
      ...current,
      listItems: current.listItems.filter((_, itemIndex) => itemIndex !== index),
    }));
  }, []);

  const updateParagraphItem = useCallback((index: number, value: string) => {
    setContent((current) => {
      const paragraphItems = [...current.paragraphItems];
      paragraphItems[index] = value;
      return { ...current, paragraphItems };
    });
  }, []);

  const addParagraphItem = useCallback(() => {
    setContent((current) => ({
      ...current,
      paragraphItems: [...current.paragraphItems, ''],
    }));
  }, []);

  const removeParagraphItem = useCallback((index: number) => {
    setContent((current) => ({
      ...current,
      paragraphItems: current.paragraphItems.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  }, []);

  const handleTitleContainerStyleChange = useCallback(
    <K extends keyof TitleContainerStyle>(key: K, value: TitleContainerStyle[K]) => {
      setTitleContainerStyle((current) => ({ ...current, [key]: value }));
    },
    [],
  );

  const handleContentImageChange = useCallback(async (file: File) => {
    const imageUrl = await readFileAsDataUrl(file);
    setContent((current) => ({ ...current, contentImage: imageUrl }));
  }, []);

  const handleVisibilityChange = useCallback(
    <K extends keyof ContentVisibility>(key: K, value: ContentVisibility[K]) => {
      setVisibility((current) => ({ ...current, [key]: value }));
    },
    [],
  );

  const handleVariantChange = useCallback((nextVariant: Variant) => {
    setVariant(nextVariant);
    setInitializedVariants((current) => {
      if (current[nextVariant]) return current;
      setContent(getDefaultContentByVariant(nextVariant));
      setVisibility(DEFAULT_CONTENT_VISIBILITY);
      return { ...current, [nextVariant]: true };
    });
  }, []);

  const handleExport = useCallback(async () => {
    if (!cardRef.current) return;

    setIsExporting(true);
    try {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        filter: (node) => {
          if (!(node instanceof HTMLElement)) return true;
          return node.dataset.exportIgnore !== 'true';
        },
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = `terrarium-card-${exportProfile}-${variant}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export error:', err);
      alert('An error occurred while exporting the image.');
    } finally {
      setIsExporting(false);
    }
  }, [exportProfile, variant]);

  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <S.PanelColumn>
          <LayoutPanel selectedVariant={variant} onSelectVariant={handleVariantChange} />
        </S.PanelColumn>

        <S.PanelColumn>
          <AssetPanel
            backgrounds={BACKGROUNDS}
            selectedBackground={bgImage}
            onSelectBackground={setBgImage}
          />
        </S.PanelColumn>

        <S.EditorColumn>
          <EditorPanel
            content={content}
            variant={variant}
            onAddListItem={addListItem}
            onAddParagraphItem={addParagraphItem}
            onContentChange={handleContentChange}
            onContentImageChange={handleContentImageChange}
            onTitleContainerStyleChange={handleTitleContainerStyleChange}
            onVisibilityChange={handleVisibilityChange}
            onListItemChange={updateListItem}
            onParagraphItemChange={updateParagraphItem}
            onRemoveListItem={removeListItem}
            onRemoveParagraphItem={removeParagraphItem}
            titleContainerStyle={titleContainerStyle}
            visibility={visibility}
          />
          <S.ExportBlock>
            <S.FieldLabel>Export Profile</S.FieldLabel>
            <S.OptionSelector>
              <S.OptionButton
                $active={exportProfile === 'tiktok'}
                onClick={() => setExportProfile('tiktok')}
                type="button"
              >
                TikTok
              </S.OptionButton>
              <S.OptionButton
                $active={exportProfile === 'instagram-post'}
                onClick={() => setExportProfile('instagram-post')}
                type="button"
              >
                Instagram Post
              </S.OptionButton>
              <S.OptionButton
                $active={exportProfile === 'facebook-post'}
                onClick={() => setExportProfile('facebook-post')}
                type="button"
              >
                Facebook Post
              </S.OptionButton>
            </S.OptionSelector>
            <S.ExportButton onClick={handleExport} disabled={isExporting} type="button">
              {isExporting ? 'Exporting…' : 'Export Image'}
            </S.ExportButton>
          </S.ExportBlock>
        </S.EditorColumn>

        <S.PreviewColumn>
          <CardPreview
            ref={cardRef}
            background={bgImage}
            content={content}
            exportProfile={exportProfile}
            isExporting={isExporting}
            titleContainerStyle={titleContainerStyle}
            visibility={visibility}
            variant={variant}
          />
        </S.PreviewColumn>
      </S.Container>
    </>
  );
};

export default App;
