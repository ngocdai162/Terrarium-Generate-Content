import { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import AssetPanel from './components/AssetPanel';
import CardPreview from './components/CardPreview';
import EditorPanel from './components/EditorPanel';
import { BACKGROUNDS, DEFAULT_CARD_CONTENT } from './constants';
import * as S from './styles';
import type { CardContent, ExportProfile, Variant } from './types';

const App = () => {
  const [variant, setVariant] = useState<Variant>('1');
  const [exportProfile, setExportProfile] = useState<ExportProfile>('tiktok');
  const [bgImage, setBgImage] = useState(BACKGROUNDS[0]);
  const [content, setContent] = useState<CardContent>(DEFAULT_CARD_CONTENT);
  const [isExporting, setIsExporting] = useState(false);
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

  const handleExport = useCallback(async () => {
    if (!cardRef.current) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = `terrarium-card-${exportProfile}-${variant}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export error:', err);
      alert('Có lỗi xảy ra khi xuất ảnh.');
    } finally {
      setIsExporting(false);
    }
  }, [exportProfile, variant]);

  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <AssetPanel
          backgrounds={BACKGROUNDS}
          selectedBackground={bgImage}
          onSelectBackground={setBgImage}
        />

        <S.EditorColumn>
          <EditorPanel
            content={content}
            variant={variant}
            onAddListItem={addListItem}
            onAddParagraphItem={addParagraphItem}
            onContentChange={handleContentChange}
            onListItemChange={updateListItem}
            onParagraphItemChange={updateParagraphItem}
            onRemoveListItem={removeListItem}
            onRemoveParagraphItem={removeParagraphItem}
            onVariantChange={setVariant}
          />
          <S.FieldLabel>Che do xuat anh</S.FieldLabel>
          <S.OptionSelector>
            <S.OptionButton
              $active={exportProfile === 'tiktok'}
              onClick={() => setExportProfile('tiktok')}
              type="button"
            >
              TikTok Safe
            </S.OptionButton>
            <S.OptionButton
              $active={exportProfile === 'standard'}
              onClick={() => setExportProfile('standard')}
              type="button"
            >
              Anh goc
            </S.OptionButton>
          </S.OptionSelector>
          <S.ExportButton onClick={handleExport} disabled={isExporting} type="button">
            {isExporting ? 'Đang tạo ảnh...' : 'XUẤT ẢNH NGAY'}
          </S.ExportButton>
        </S.EditorColumn>

        <S.PreviewColumn>
          <CardPreview
            ref={cardRef}
            background={bgImage}
            content={content}
            exportProfile={exportProfile}
            variant={variant}
          />
        </S.PreviewColumn>
      </S.Container>
    </>
  );
};

export default App;
