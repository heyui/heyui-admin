import dictConfig from './dict-config';
import autocompleteConfig from './autocomplete-config';
import treeConfig from './tree-config';
import categoryConfig from './category-config';
import { heyuiConfig } from 'heyui';

const config = () => {
  const staticDict = dictConfig();
  Object.keys(staticDict).forEach((key) => {
    heyuiConfig.addDict(key, staticDict[key]);
  });

  heyuiConfig.config('dict.keyName', 'key');
  heyuiConfig.config('dict.titleName', 'title');

  heyuiConfig.config('autocomplete.configs', autocompleteConfig());
  heyuiConfig.config('tree.configs', treeConfig());
  heyuiConfig.config('category.configs', categoryConfig());

  heyuiConfig.config('menu', {
    keyName: 'key',
    titleName: 'title',
    childrenName: 'children'
  });
};

export default config;
