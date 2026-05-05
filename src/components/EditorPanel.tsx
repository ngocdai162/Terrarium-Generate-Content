import { memo } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import * as S from '../styles';
import type {
  CardContent,
  ContentVisibility,
  TitleContainerStyle,
  Variant,
} from '../types';

type EditorPanelProps = {
  content: CardContent;
  variant: Variant;
  onAddListItem: () => void;
  onAddParagraphItem: () => void;
  onContentChange: <K extends keyof CardContent>(
    key: K,
    value: CardContent[K],
  ) => void;
  onContentImageChange: (file: File) => Promise<void>;
  onTitleContainerStyleChange: <K extends keyof TitleContainerStyle>(
    key: K,
    value: TitleContainerStyle[K],
  ) => void;
  onVisibilityChange: <K extends keyof ContentVisibility>(
    key: K,
    value: ContentVisibility[K],
  ) => void;
  onListItemChange: (index: number, value: string) => void;
  onParagraphItemChange: (index: number, value: string) => void;
  onRemoveListItem: (index: number) => void;
  onRemoveParagraphItem: (index: number) => void;
  titleContainerStyle: TitleContainerStyle;
  visibility: ContentVisibility;
};

const getListLabel = (variant: Variant) => {
  if (variant === '4') return 'Step items: Title | Description';
  if (variant === '7') return 'Issue items: Problem | Solution';
  if (variant === '10') return 'Tip items: Title | Description';
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
    onContentImageChange,
    onTitleContainerStyleChange,
    onVisibilityChange,
    onListItemChange,
    onParagraphItemChange,
    onRemoveListItem,
    onRemoveParagraphItem,
    titleContainerStyle,
    visibility,
  }: EditorPanelProps) => {
    const showListEditor = ['1', '3', '4', '7', '10'].includes(variant);
    const showParagraphEditor = variant === '2' || variant === '6';
    const showHighlightEditor = ['3', '5', '6', '8', '9', '10', '11'].includes(
      variant,
    );
    const paragraphLabel =
      variant === '6' ? 'Answer paragraphs' : 'Body paragraphs';
    const highlightLabel =
      variant === '6'
        ? 'Question'
        : variant === '8'
          ? 'Quote text'
          : variant === '5'
            ? 'Fact text'
            : variant === '9'
              ? 'Info box text'
              : variant === '10'
                ? 'CTA subtext'
            : 'Highlight text';

    return (
      <S.EditorSection>
        <S.EditorTitle>Content Editor</S.EditorTitle>

        <S.InputGroup>
          <label>Block visibility</label>
          <S.OptionSelector>
            <S.OptionButton
              $active={visibility.brand}
              onClick={() => onVisibilityChange('brand', !visibility.brand)}
              type="button"
            >
              Brand
            </S.OptionButton>
            <S.OptionButton
              $active={visibility.subTitle}
              onClick={() => onVisibilityChange('subTitle', !visibility.subTitle)}
              type="button"
            >
              Subtitle
            </S.OptionButton>
            <S.OptionButton
              $active={visibility.title}
              onClick={() => onVisibilityChange('title', !visibility.title)}
              type="button"
            >
              Title
            </S.OptionButton>
            <S.OptionButton
              $active={visibility.description}
              onClick={() =>
                onVisibilityChange('description', !visibility.description)
              }
              type="button"
            >
              Description
            </S.OptionButton>
            <S.OptionButton
              $active={visibility.body}
              onClick={() => onVisibilityChange('body', !visibility.body)}
              type="button"
            >
              Main content
            </S.OptionButton>
            <S.OptionButton
              $active={visibility.handle}
              onClick={() => onVisibilityChange('handle', !visibility.handle)}
              type="button"
            >
              Footer
            </S.OptionButton>
          </S.OptionSelector>
        </S.InputGroup>

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

        {variant === '11' && (
          <S.InputGroup>
            <label>Content image / GIF</label>
            <S.ContentImageUploadLabel $src={content.contentImage}>
              <input
                accept="image/*,.gif"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (file) await onContentImageChange(file);
                  event.target.value = '';
                }}
                type="file"
              />
              <span>Choose image or GIF</span>
            </S.ContentImageUploadLabel>
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

        {variant === '9' && (
          <S.InputGroup>
            <label>CTA text</label>
            <input
              value={content.paragraphItems[0] || ''}
              onChange={(event) => onParagraphItemChange(0, event.target.value)}
            />
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
          <label>Footer handle</label>
          <input
            value={content.handle}
            onChange={(event) => onContentChange('handle', event.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label>Title container style</label>
          <S.OptionSelector>
            <S.OptionButton
              $active={titleContainerStyle.showBackground}
              onClick={() =>
                onTitleContainerStyleChange(
                  'showBackground',
                  !titleContainerStyle.showBackground,
                )
              }
              type="button"
            >
              Background
            </S.OptionButton>
            <S.OptionButton
              $active={titleContainerStyle.showBorder}
              onClick={() =>
                onTitleContainerStyleChange('showBorder', !titleContainerStyle.showBorder)
              }
              type="button"
            >
              Border
            </S.OptionButton>
          </S.OptionSelector>
        </S.InputGroup>
      </S.EditorSection>
    );
  },
);

export default EditorPanel;
