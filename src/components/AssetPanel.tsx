import { memo } from 'react';
import * as S from '../styles';

type AssetPanelProps = {
  backgrounds: string[];
  selectedBackground: string;
  onSelectBackground: (background: string) => void;
};

const AssetPanel = memo(
  ({ backgrounds, selectedBackground, onSelectBackground }: AssetPanelProps) => (
    <S.AssetsSection>
      <S.PanelTitle>Backgrounds</S.PanelTitle>
      <S.BackgroundSelector>
        {backgrounds.map((background) => (
          <S.BackgroundOption
            key={background}
            $active={selectedBackground === background}
            $src={background}
            aria-label={`Select background ${background}`}
            onClick={() => onSelectBackground(background)}
          />
        ))}
      </S.BackgroundSelector>
    </S.AssetsSection>
  ),
);

export default AssetPanel;
