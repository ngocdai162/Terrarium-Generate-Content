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
  { label: 'Mẫu 1', value: '1' },
  { label: 'Mẫu 2', value: '2' },
  { label: 'Mẫu 3', value: '3' },
];

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
    const showListEditor = variant === '1' || variant === '3';

    return (
      <S.EditorSection>
        <S.EditorTitle>Thiết kế nội dung</S.EditorTitle>

        <S.FieldLabel>Chọn mẫu Card</S.FieldLabel>
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
          <label>Tiêu đề phụ (Subtitle)</label>
          <input
            value={content.subTitle}
            onChange={(event) => onContentChange('subTitle', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Tiêu đề chính (Title)</label>
          <textarea
            value={content.title}
            onChange={(event) => onContentChange('title', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Mô tả ngắn (Description)</label>
          <input
            value={content.description}
            onChange={(event) =>
              onContentChange('description', event.target.value)
            }
          />
        </S.InputGroup>

        {variant === '2' && (
          <S.InputGroup>
            <label>Đoạn văn nội dung</label>
            {content.paragraphItems.map((item, index) => (
              <S.ListItemInput key={index}>
                <S.DynamicTextarea
                  value={item}
                  onChange={(event) =>
                    onParagraphItemChange(index, event.target.value)
                  }
                />
                <S.IconButton
                  aria-label="Xóa đoạn văn"
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
              Thêm đoạn văn
            </S.AddItemButton>
          </S.InputGroup>
        )}

        {variant === '3' && (
          <S.InputGroup>
            <label>Nội dung làm nổi bật (Highlight)</label>
            <textarea
              value={content.highlight}
              onChange={(event) =>
                onContentChange('highlight', event.target.value)
              }
            />
          </S.InputGroup>
        )}

        {showListEditor && (
          <S.InputGroup>
            <label>
              {variant === '1'
                ? 'Danh sách các ý (List Items)'
                : 'Danh sách ý phụ'}
            </label>
            {content.listItems.map((item, index) => (
              <S.ListItemInput key={index}>
                <input
                  value={item}
                  onChange={(event) =>
                    onListItemChange(index, event.target.value)
                  }
                />
                <S.IconButton
                  aria-label="Xóa ý"
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
              Thêm ý
            </S.AddItemButton>
          </S.InputGroup>
        )}

      </S.EditorSection>
    );
  },
);

export default EditorPanel;
