import { StyleSheet } from '@patternfly/react-styles';
import {
  global_BackgroundColor_dark_100,
  global_Color_100,
  global_spacer_md,
  global_spacer_sm,
} from '@patternfly/react-tokens';
import { theme } from 'styles/theme';

export const styles = StyleSheet.create({
  masthead: {
    height: theme.page_masthead_height,
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    backgroundColor: global_BackgroundColor_dark_100.value,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: global_spacer_md.value,
    paddingRight: global_spacer_md.value,
  },
  navToggle: {
    color: global_Color_100.value,
    marginRight: global_spacer_sm.value,
    [theme.page_breakpoint]: {
      display: 'none',
    },
  },
  section: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    textTransform: 'capitalize',
    marginRight: global_spacer_sm.value,
  },
});
