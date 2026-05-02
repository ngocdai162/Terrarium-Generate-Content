import { memo } from 'react';
import * as S from '../styles';
import type { Variant } from '../types';

type LayoutPanelProps = {
  selectedVariant: Variant;
  onSelectVariant: (variant: Variant) => void;
};

const LAYOUT_OPTIONS: { label: string; value: Variant }[] = [
  { label: 'Classic list', value: '1' },
  { label: 'Article', value: '2' },
  { label: 'Highlight', value: '3' },
  { label: 'Steps', value: '4' },
  { label: 'Fact', value: '5' },
  { label: 'Q&A', value: '6' },
  { label: 'Issues', value: '7' },
  { label: 'Quote', value: '8' },
];

const LayoutThumbnail = memo(({ variant }: { variant: Variant }) => (
  <S.LayoutPreview $variant={variant}>
    <S.LayoutHeaderPreview>
      <span />
      <strong />
      <i />
    </S.LayoutHeaderPreview>
    <S.LayoutBodyPreview>
      {variant === '2' && (
        <>
          <span />
          <span />
          <span />
          <span />
        </>
      )}
      {variant === '4' && (
        <>
          <S.LayoutStepPreview />
          <S.LayoutStepPreview />
          <S.LayoutStepPreview />
        </>
      )}
      {variant === '5' && <S.LayoutFactPreview />}
      {variant === '6' && (
        <>
          <S.LayoutQuestionPreview />
          <S.LayoutAnswerPreview />
        </>
      )}
      {variant === '7' && (
        <>
          <S.LayoutIssuePreview />
          <S.LayoutIssuePreview />
          <S.LayoutIssuePreview />
        </>
      )}
      {variant === '8' && <S.LayoutQuotePreview />}
      {!['2', '4', '5', '6', '7', '8'].includes(variant) && (
        <>
          <S.LayoutListPreview />
          {variant === '3' && <S.LayoutHighlightPreview />}
          <S.LayoutListPreview />
          <S.LayoutListPreview />
        </>
      )}
    </S.LayoutBodyPreview>
  </S.LayoutPreview>
));

const LayoutPanel = memo(
  ({ selectedVariant, onSelectVariant }: LayoutPanelProps) => (
    <S.AssetsSection>
      <S.PanelTitle>Layout Templates</S.PanelTitle>
      <S.LayoutSelector>
        {LAYOUT_OPTIONS.map((option) => (
          <S.LayoutOption
            key={option.value}
            $active={selectedVariant === option.value}
            onClick={() => onSelectVariant(option.value)}
            type="button"
          >
            <LayoutThumbnail variant={option.value} />
            <span>{option.label}</span>
          </S.LayoutOption>
        ))}
      </S.LayoutSelector>
    </S.AssetsSection>
  ),
);

export default LayoutPanel;
