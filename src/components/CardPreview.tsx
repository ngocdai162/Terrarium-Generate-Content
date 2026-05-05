import { forwardRef, memo } from 'react';
import {
  AlertTriangle,
  Bookmark,
  CirclePlus,
  House,
  Heart,
  Image as ImageIcon,
  MessageCircle,
  Music2,
  Search,
  Share,
  Send,
  Sparkles,
  ThumbsUp,
  Leaf,
  Sprout,
  UserRound,
} from 'lucide-react';
import * as S from '../styles';
import type {
  CardContent,
  ContentVisibility,
  ExportProfile,
  TitleContainerStyle,
  Variant,
} from '../types';

type CardPreviewProps = {
  background: string;
  content: CardContent;
  exportProfile: ExportProfile;
  isExporting?: boolean;
  titleContainerStyle: TitleContainerStyle;
  visibility: ContentVisibility;
  variant: Variant;
};

const hasText = (value?: string) => Boolean(value?.trim());

const VariantContent = memo(
  ({
    content,
    variant,
  }: Pick<CardPreviewProps, 'content' | 'variant'>) => {
    if (variant === '4') {
      const stepItems = content.listItems
        .map((item) => {
          const [title, body = ''] = item.split('|');
          return { title: title.trim(), body: body.trim() };
        })
        .filter((item) => hasText(item.title) || hasText(item.body));
      if (stepItems.length === 0) return null;
      return (
        <S.StepList>
          {stepItems.map((item, index) => {
            return (
              <S.StepCard key={`${item.title}-${item.body}-${index}`}>
                <S.StepNumber>{String(index + 1).padStart(2, '0')}</S.StepNumber>
                <S.StepText>
                  {hasText(item.title) && <strong>{item.title}</strong>}
                  {hasText(item.body) && <span>{item.body}</span>}
                </S.StepText>
              </S.StepCard>
            );
          })}
        </S.StepList>
      );
    }

    if (variant === '5') {
      if (!hasText(content.highlight)) return null;
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
      const answerItems = content.paragraphItems.filter((item) => hasText(item));
      if (!hasText(content.highlight) && answerItems.length === 0) return null;
      return (
        <S.QaContent>
          {hasText(content.highlight) && (
            <S.QuestionBox>
              <S.QaMark>Q:</S.QaMark>
              <span>{content.highlight}</span>
            </S.QuestionBox>
          )}
          {answerItems.length > 0 && (
            <S.AnswerBox>
              <S.QaMark $answer>A:</S.QaMark>
              <S.AnswerText>
                {answerItems.map((item, index) => (
                  <p key={`${item}-${index}`}>{item}</p>
                ))}
              </S.AnswerText>
            </S.AnswerBox>
          )}
        </S.QaContent>
      );
    }

    if (variant === '7') {
      const issueItems = content.listItems
        .map((item) => {
          const [title, body = ''] = item.split('|');
          return { title: title.trim(), body: body.trim() };
        })
        .filter((item) => hasText(item.title) || hasText(item.body));
      if (issueItems.length === 0) return null;
      return (
        <S.IssueList>
          {issueItems.map((item, index) => {
            return (
              <S.IssueCard key={`${item.title}-${item.body}-${index}`}>
                <span>
                  <AlertTriangle size={16} fill="#ff6b7a" />
                  {item.title}
                </span>
                {hasText(item.body) && <strong>{item.body}</strong>}
              </S.IssueCard>
            );
          })}
        </S.IssueList>
      );
    }

    if (variant === '8') {
      const quoteText = content.highlight.trim();
      const quoteAuthor = (content.paragraphItems[0] || '').trim();
      if (!hasText(quoteText) && !hasText(quoteAuthor)) return null;
      return (
        <S.QuoteBox>
          {hasText(quoteText) && (
            <S.QuoteMainCard>
              <S.QuoteMark>"</S.QuoteMark>
              <S.QuoteText>{quoteText}</S.QuoteText>
              <S.QuoteDivider />
            </S.QuoteMainCard>
          )}
          {hasText(quoteAuthor) && (
            <S.QuoteAuthorCard>
              <S.QuoteAuthor>{quoteAuthor}</S.QuoteAuthor>
            </S.QuoteAuthorCard>
          )}
        </S.QuoteBox>
      );
    }

    if (variant === '9') {
      const ctaText = (content.paragraphItems[0] || '').trim();
      const hasAnyWarningContent =
        hasText(content.subTitle) ||
        hasText(content.description) ||
        hasText(content.title) ||
        hasText(content.highlight) ||
        hasText(ctaText);
      if (!hasAnyWarningContent) return null;
      return (
        <S.WarningContent>
          <S.WarningIcon>
            <Sparkles size={34} />
          </S.WarningIcon>
          {hasText(content.subTitle) && <S.WarningStat>{content.subTitle}</S.WarningStat>}
          {hasText(content.description) && (
            <S.WarningReason>{content.description}</S.WarningReason>
          )}
          {hasText(content.title) && <S.WarningTitle>{content.title}</S.WarningTitle>}
          {hasText(content.highlight) && (
            <S.WarningInfoBox>{content.highlight}</S.WarningInfoBox>
          )}
          {hasText(ctaText) && <S.WarningCta>{ctaText}</S.WarningCta>}
        </S.WarningContent>
      );
    }

    if (variant === '10') {
      const tipItems = content.listItems
        .map((item) => {
          const [title, body = ''] = item.split('|');
          return { title: title.trim(), body: body.trim() };
        })
        .filter((item) => hasText(item.title) || hasText(item.body));
      const hasAnyTipsContent =
        hasText(content.subTitle) ||
        hasText(content.title) ||
        tipItems.length > 0 ||
        hasText(content.description) ||
        hasText(content.highlight);
      if (!hasAnyTipsContent) return null;
      return (
        <S.TipsContent>
          {hasText(content.subTitle) && <S.TipsTitle>{content.subTitle}</S.TipsTitle>}
          {hasText(content.title) && <S.TipsSubtitle>{content.title}</S.TipsSubtitle>}
          {tipItems.length > 0 && (
            <S.TipsGrid>
              {tipItems.slice(0, 4).map((item, index) => {
              return (
                <S.TipCard key={`${item.title}-${item.body}-${index}`} $index={index}>
                  <S.TipIcon $index={index}>
                    <Sparkles size={22} />
                  </S.TipIcon>
                  {hasText(item.title) && <strong>{item.title}</strong>}
                  {hasText(item.body) && <span>{item.body}</span>}
                </S.TipCard>
              );
              })}
            </S.TipsGrid>
          )}
          {(hasText(content.description) || hasText(content.highlight)) && (
            <S.TipsCta>
              {hasText(content.description) && <strong>{content.description}</strong>}
              {hasText(content.highlight) && <span>{content.highlight}</span>}
            </S.TipsCta>
          )}
        </S.TipsContent>
      );
    }

    if (variant === '11') {
      const hasImage = hasText(content.contentImage);
      const hasCaption = hasText(content.highlight);
      if (!hasImage && !hasCaption) return null;
      return (
        <S.ImageNoteContent>
          {hasImage && <S.ImageNoteMedia alt="" src={content.contentImage} />}
          {hasCaption && <S.ImageNoteText>{content.highlight}</S.ImageNoteText>}
        </S.ImageNoteContent>
      );
    }

    if (variant === '2') {
      const paragraphItems = content.paragraphItems.filter((item) => hasText(item));
      if (paragraphItems.length === 0) return null;
      return (
        <S.ParagraphContainer>
          {paragraphItems.map((item, index) => (
            <S.ParagraphChunk key={`${item}-${index}`}>
              <S.ParagraphText>{item}</S.ParagraphText>
            </S.ParagraphChunk>
          ))}
        </S.ParagraphContainer>
      );
    }

    if (variant === '3') {
      const listItems = content.listItems.filter((item) => hasText(item));
      if (!hasText(content.highlight) && listItems.length === 0) return null;
      return (
        <S.HighlightContent>
          {hasText(content.highlight) && <S.HighlightBox>{content.highlight}</S.HighlightBox>}
          {listItems.length > 0 && (
            <S.CompactListContainer>
              {listItems.map((item, index) => (
                <S.ListItem key={`${item}-${index}`}>
                  <S.Bullet />
                  {item}
                </S.ListItem>
              ))}
            </S.CompactListContainer>
          )}
        </S.HighlightContent>
      );
    }

    const listItems = content.listItems.filter((item) => hasText(item));
    if (listItems.length === 0) return null;
    return (
      <S.ListContainer>
        {listItems.map((item, index) => (
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
    (
      {
        background,
        content,
        exportProfile,
        isExporting = false,
        titleContainerStyle,
        visibility,
        variant,
      },
      ref,
    ) => {
      const usesDedicatedLayout = variant === '9' || variant === '10';
      const hasHeaderContent =
        visibility.brand ||
        (visibility.subTitle && hasText(content.subTitle)) ||
        (visibility.title && hasText(content.title)) ||
        (visibility.description && hasText(content.description));

      return (
        <S.CardPreview
          ref={ref}
          $exportProfile={exportProfile}
          data-exporting={isExporting ? 'true' : 'false'}
          data-export-profile={exportProfile}
          data-variant={variant}
        >
          <S.BackgroundImage $src={background} />
          <S.CardOverlay>
            {!usesDedicatedLayout && hasHeaderContent && (
              <S.HeaderBlock
                $showBackground={titleContainerStyle.showBackground}
                $showBorder={titleContainerStyle.showBorder}
              >
                {visibility.brand && (
                  <S.LogoRow>
                    <>
                      <S.LogoIcon>
                        <Leaf size={18} fill="white" />
                      </S.LogoIcon>
                      <S.LogoBrand>Happy Terrarium</S.LogoBrand>
                    </>
                  </S.LogoRow>
                )}
                {visibility.subTitle && <S.SubTitle>{content.subTitle}</S.SubTitle>}
                {visibility.title && <S.MainTitle>{content.title}</S.MainTitle>}
                {visibility.description && <S.Description>{content.description}</S.Description>}
              </S.HeaderBlock>
            )}

            {visibility.body && (
              <VariantContent content={content} variant={variant} />
            )}

            {!usesDedicatedLayout && visibility.handle && (
              <S.FooterHandle>{content.handle}</S.FooterHandle>
            )}
          </S.CardOverlay>
        {exportProfile === 'tiktok' && (
          <S.TiktokChrome data-export-ignore="true">
            <S.TiktokTopBar>
              <CirclePlus size={18} />
              <div>
                <span>Following</span>
                <strong>For You</strong>
              </div>
              <Search size={18} />
            </S.TiktokTopBar>

            <S.TiktokRightRail>
              <S.TiktokAvatar>
                <UserRound size={18} />
              </S.TiktokAvatar>
              <S.TiktokAction>
                <Heart size={20} />
                128K
              </S.TiktokAction>
              <S.TiktokAction>
                <MessageCircle size={20} />
                2,413
              </S.TiktokAction>
              <S.TiktokAction>
                <Bookmark size={20} />
                8,514
              </S.TiktokAction>
              <S.TiktokAction>
                <Share size={20} />
                Share
              </S.TiktokAction>
              <S.TiktokAction>
                <Music2 size={20} />
                Audio
              </S.TiktokAction>
            </S.TiktokRightRail>

            <S.TiktokBottomMeta>
              <strong>@happyterrarium</strong>
              <p>Terrarium tips for healthy roots and fresh moisture balance.</p>
              <span>
                <Music2 size={12} />
                original sound - Happy Terrarium
              </span>
            </S.TiktokBottomMeta>
            <S.TiktokBottomControls />
          </S.TiktokChrome>
        )}

        {exportProfile === 'instagram-post' && (
          <S.InstagramChrome data-export-ignore="true">
            <S.InstagramTopBar>
              <strong>Instagram</strong>
              <div>
                <CirclePlus size={18} />
                <Heart size={18} />
                <Send size={18} />
              </div>
            </S.InstagramTopBar>
            <S.InstagramBottomBar>
              <House size={18} />
              <Search size={18} />
              <ImageIcon size={18} />
              <Heart size={18} />
              <UserRound size={18} />
            </S.InstagramBottomBar>
          </S.InstagramChrome>
        )}

        {exportProfile === 'facebook-post' && (
          <S.FacebookChrome data-export-ignore="true">
            <S.FacebookTopBar>
              <strong>facebook</strong>
              <Search size={16} />
            </S.FacebookTopBar>
            <S.FacebookBottomBar>
              <S.FacebookAction>
                <ThumbsUp size={14} />
                Like
              </S.FacebookAction>
              <S.FacebookAction>
                <MessageCircle size={14} />
                Comment
              </S.FacebookAction>
              <S.FacebookAction>
                <Share size={14} />
                Share
              </S.FacebookAction>
            </S.FacebookBottomBar>
          </S.FacebookChrome>
        )}
          {usesDedicatedLayout && visibility.handle && (
            <S.FooterHandle>{content.handle}</S.FooterHandle>
          )}
        </S.CardPreview>
      );
    },
  ),
);

export default CardPreview;
