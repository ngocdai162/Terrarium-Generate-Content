import { forwardRef, memo } from 'react';
import { Leaf } from 'lucide-react';
import * as S from '../styles';
import type { CardContent, ExportProfile, Variant } from '../types';

type CardPreviewProps = {
  background: string;
  content: CardContent;
  exportProfile: ExportProfile;
  variant: Variant;
};

const VariantContent = memo(
  ({ content, variant }: Pick<CardPreviewProps, 'content' | 'variant'>) => {
    if (variant === '2') {
      return (
        <S.ParagraphContainer>
          {content.paragraphItems.map((item, index) => (
            <S.ParagraphText key={`${item}-${index}`}>{item}</S.ParagraphText>
          ))}
        </S.ParagraphContainer>
      );
    }

    if (variant === '3') {
      return (
        <S.HighlightContent>
          <S.HighlightBox>{content.highlight}</S.HighlightBox>
          <S.CompactListContainer>
            {content.listItems.map((item, index) => (
              <S.ListItem key={`${item}-${index}`}>
                <S.Bullet />
                {item}
              </S.ListItem>
            ))}
          </S.CompactListContainer>
        </S.HighlightContent>
      );
    }

    return (
      <S.ListContainer>
        {content.listItems.map((item, index) => (
          <S.ListItem key={`${item}-${index}`}>
            <S.Bullet />
            {item}
          </S.ListItem>
        ))}
      </S.ListContainer>
    );
  },
);

const CardPreview = memo(
  forwardRef<HTMLDivElement, CardPreviewProps>(
    ({ background, content, exportProfile, variant }, ref) => (
      <S.CardPreview
        ref={ref}
        $exportProfile={exportProfile}
        data-export-profile={exportProfile}
        data-variant={variant}
      >
        <S.BackgroundImage $src={background} />
        <S.CardOverlay>
          <S.HeaderBlock>
            <S.LogoRow>
              <S.LogoIcon>
                <Leaf size={18} fill="white" />
              </S.LogoIcon>
              <S.LogoBrand>Happy Terrarium</S.LogoBrand>
            </S.LogoRow>
            <S.SubTitle>{content.subTitle}</S.SubTitle>
            <S.MainTitle>{content.title}</S.MainTitle>
            <S.Description>{content.description}</S.Description>
          </S.HeaderBlock>

          <VariantContent content={content} variant={variant} />
        </S.CardOverlay>
      </S.CardPreview>
    ),
  ),
);

export default CardPreview;
