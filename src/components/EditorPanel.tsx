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
};

const getListLabel = (variant: Variant) => {
  if (variant === '4') return 'Step items: Title|Description';
  if (variant === '7') return 'Issue items: Problem|Solution';
  if (variant === '1') return 'Key points';
  return 'Supporting points';
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
  }: EditorPanelProps) => {
    const showListEditor = ['1', '3', '4', '7'].includes(variant);
    const showParagraphEditor = variant === '2' || variant === '6';
    const showHighlightEditor = ['3', '5', '6', '8'].includes(variant);
    const paragraphLabel =
      variant === '6' ? 'Answer paragraphs' : 'Body paragraphs';
    const highlightLabel =
      variant === '6'
        ? 'Question'
        : variant === '8'
          ? 'Quote text'
          : variant === '5'
            ? 'Fact text'
            : 'Highlight text';

    return (
      <S.EditorSection>
        <S.EditorTitle>Content Editor</S.EditorTitle>

        <S.InputGroup>
          <label>Subtitle</label>
          <input
            value={content.subTitle}
            onChange={(event) => onContentChange('subTitle', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Main title</label>
          <textarea
            value={content.title}
            onChange={(event) => onContentChange('title', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Short description</label>
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
                  aria-label="Remove paragraph"
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
              Add paragraph
            </S.AddItemButton>
          </S.InputGroup>
        )}

        {showListEditor && (
          <S.InputGroup>
            <label>{getListLabel(variant)}</label>
            <S.ListInputsGrid>
              {content.listItems.map((item, index) => (
                <S.ListItemInput key={index}>
                  <input
                    value={item}
                    onChange={(event) =>
                      onListItemChange(index, event.target.value)
                    }
                  />
                  <S.IconButton
                    aria-label="Remove item"
                    disabled={content.listItems.length === 1}
                    onClick={() => onRemoveListItem(index)}
                    type="button"
                  >
                    <Trash2 size={16} />
                  </S.IconButton>
                </S.ListItemInput>
              ))}
            </S.ListInputsGrid>
            <S.AddItemButton onClick={onAddListItem} type="button">
              <Plus size={16} />
              Add item
            </S.AddItemButton>
          </S.InputGroup>
        )}

        {variant === '8' && (
          <S.InputGroup>
            <label>Quote author</label>
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
