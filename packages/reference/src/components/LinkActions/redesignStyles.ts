import { css } from 'emotion';
import tokens from '@contentful/forma-36-tokens';

export const container = css({
  display: 'flex',
  backgroundColor: tokens.colorElementLightest,
  border: `1px dashed ${tokens.colorElementDarkest}`,
  borderRadius: tokens.borderRadiusMedium,
  justifyContent: 'center',
  padding: tokens.spacingXl,
});

export const action = css({
  textDecoration: 'none',
  fontWeight: 'bold',
});

export const chevronIcon = css({
  float: 'right',
  marginLeft: tokens.spacingXs,
  marginRight: -tokens.spacing2Xs,
});
