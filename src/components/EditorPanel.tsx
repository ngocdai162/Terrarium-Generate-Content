import { memo } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import * as S from '../styles';
import type { CardContent, Variant } from '../types';

type EditorPanelProps = {
  content: CardContent;
  variant: Variant;
  onAddListItem: () => void;
  onAddParagraphItem: () => void;
  onContentChange: <K extends keyof CardContent>(
    key: K,
    value: CardContent[K],
  ) => void;
  onListItemChange: (index: number, value: string) => void;
  onParagraphItemChange: (index: number, value: string) => void;
  onRemoveListItem: (index: number) => void;
  onRemoveParagraphItem: (index: number) => void;
  onVariantChange: (variant: Variant) => void;
};

const VARIANT_OPTIONS: { label: string; value: Variant }[] = [
  { label: 'Mau 1', value: '1' },
  { label: 'Mau 2', value: '2' },
  { label: 'Mau 3', value: '3' },
  { label: 'Steps', value: '4' },
  { label: 'Fact', value: '5' },
  { label: 'Q&A', value: '6' },
  { label: 'Loi', value: '7' },
  { label: 'Quote', value: '8' },
];

const getListLabel = (variant: Variant) => {
  if (variant === '4') return 'Cac buoc: Tieu de|Mo ta';
  if (variant === '7') return 'Cac loi: Van de|Cach khac phuc';
  if (variant === '1') return 'Danh sach cac y';
  return 'Danh sach y phu';
};

const EditorPanel = memo(
  ({
    content,
    variant,
    onAddListItem,
    onAddParagraphItem,
    onContentChange,
    onListItemChange,
    onParagraphItemChange,
    onRemoveListItem,
    onRemoveParagraphItem,
    onVariantChange,
  }: EditorPanelProps) => {
    const showListEditor = ['1', '3', '4', '7'].includes(variant);
    const showParagraphEditor = variant === '2' || variant === '6';
    const showHighlightEditor = ['3', '5', '6', '8'].includes(variant);
    const paragraphLabel =
      variant === '6' ? 'Cau tra loi, moi dong la mot doan' : 'Doan van noi dung';
    const highlightLabel =
      variant === '6'
        ? 'Cau hoi'
        : variant === '8'
          ? 'Noi dung quote'
          : variant === '5'
            ? 'Noi dung fact'
            : 'Noi dung lam noi bat';

    return (
      <S.EditorSection>
        <S.EditorTitle>Thiet ke noi dung</S.EditorTitle>

        <S.FieldLabel>Chon mau Card</S.FieldLabel>
        <S.OptionSelector>
          {VARIANT_OPTIONS.map((option) => (
            <S.OptionButton
              key={option.value}
              $active={variant === option.value}
              onClick={() => onVariantChange(option.value)}
              type="button"
            >
              {option.label}
            </S.OptionButton>
          ))}
        </S.OptionSelector>

        <S.InputGroup>
          <label>Tieu de phu (Subtitle)</label>
          <input
            value={content.subTitle}
            onChange={(event) => onContentChange('subTitle', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Tieu de chinh (Title)</label>
          <textarea
            value={content.title}
            onChange={(event) => onContentChange('title', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Mo ta ngan (Description)</label>
          <input
            value={content.description}
            onChange={(event) =>
              onContentChange('description', event.target.value)
            }
          />
        </S.InputGroup>

        {showHighlightEditor && (
          <S.InputGroup>
            <label>{highlightLabel}</label>
            <textarea
              value={content.highlight}
              onChange={(event) =>
                onContentChange('highlight', event.target.value)
              }
            />
          </S.InputGroup>
        )}

        {showParagraphEditor && (
          <S.InputGroup>
            <label>{paragraphLabel}</label>
            {content.paragraphItems.map((item, index) => (
              <S.ListItemInput key={index}>
                <S.DynamicTextarea
                  value={item}
                  onChange={(event) =>
                    onParagraphItemChange(index, event.target.value)
                  }
                />
                <S.IconButton
                  aria-label="Xoa doan van"
                  disabled={content.paragraphItems.length === 1}
                  onClick={() => onRemoveParagraphItem(index)}
                  type="button"
                >
                  <Trash2 size={16} />
                </S.IconButton>
              </S.ListItemInput>
            ))}
            <S.AddItemButton onClick={onAddParagraphItem} type="button">
              <Plus size={16} />
              Them doan van
            </S.AddItemButton>
          </S.InputGroup>
        )}

        {showListEditor && (
          <S.InputGroup>
            <label>{getListLabel(variant)}</label>
            {content.listItems.map((item, index) => (
              <S.ListItemInput key={index}>
                <input
                  value={item}
                  onChange={(event) =>
                    onListItemChange(index, event.target.value)
                  }
                />
                <S.IconButton
                  aria-label="Xoa y"
                  disabled={content.listItems.length === 1}
                  onClick={() => onRemoveListItem(index)}
                  type="button"
                >
                  <Trash2 size={16} />
                </S.IconButton>
              </S.ListItemInput>
            ))}
            <S.AddItemButton onClick={onAddListItem} type="button">
              <Plus size={16} />
              Them y
            </S.AddItemButton>
          </S.InputGroup>
        )}

        {variant === '8' && (
          <S.InputGroup>
            <label>Tac gia quote</label>
            <input
              value={content.paragraphItems[0] || ''}
              onChange={(event) => onParagraphItemChange(0, event.target.value)}
            />
          </S.InputGroup>
        )}

        <S.InputGroup>
          <label>Handle footer</label>
          <input
            value={content.handle}
            onChange={(event) => onContentChange('handle', event.target.value)}
          />
        </S.InputGroup>
      </S.EditorSection>
    );
  },
);

export default EditorPanel;
