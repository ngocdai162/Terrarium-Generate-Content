import { forwardRef, memo } from 'react';
import { AlertTriangle, Leaf, Sprout } from 'lucide-react';
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
    if (variant === '4') {
      return (
        <S.StepList>
          {content.listItems.map((item, index) => {
            const [title, body = ''] = item.split('|');
            return (
              <S.StepCard key={`${item}-${index}`}>
                <S.StepNumber>{String(index + 1).padStart(2, '0')}</S.StepNumber>
                <S.StepText>
                  <strong>{title}</strong>
                  {body && <span>{body}</span>}
                </S.StepText>
              </S.StepCard>
            );
          })}
        </S.StepList>
      );
    }

    if (variant === '5') {
      return (
        <S.FactBox>
          <S.FactIcon>
            <Sprout size={58} fill="#b8ff55" />
          </S.FactIcon>
          <S.FactText>{content.highlight}</S.FactText>
        </S.FactBox>
      );
    }

    if (variant === '6') {
      return (
        <S.QaContent>
          <S.QuestionBox>
            <S.QaMark>Q:</S.QaMark>
            <span>{content.highlight}</span>
          </S.QuestionBox>
          <S.AnswerBox>
            <S.QaMark $answer>A:</S.QaMark>
            <S.AnswerText>
              {content.paragraphItems.map((item, index) => (
                <p key={`${item}-${index}`}>{item}</p>
              ))}
            </S.AnswerText>
          </S.AnswerBox>
        </S.QaContent>
      );
    }

    if (variant === '7') {
      return (
        <S.IssueList>
          {content.listItems.map((item, index) => {
            const [title, body = ''] = item.split('|');
            return (
              <S.IssueCard key={`${item}-${index}`}>
                <span>
                  <AlertTriangle size={16} fill="#ff6b7a" />
                  {title}
                </span>
                {body && <strong>{body}</strong>}
              </S.IssueCard>
            );
          })}
        </S.IssueList>
      );
    }

    if (variant === '8') {
      return (
        <S.QuoteBox>
          <S.QuoteMark>"</S.QuoteMark>
          <S.QuoteText>{content.highlight}</S.QuoteText>
          <S.QuoteDivider />
          <S.QuoteAuthor>{content.paragraphItems[0] || 'Happy Terrarium'}</S.QuoteAuthor>
        </S.QuoteBox>
      );
    }

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

          <S.FooterHandle>{content.handle}</S.FooterHandle>
        </S.CardOverlay>
      </S.CardPreview>
    ),
  ),
);

export default CardPreview;
