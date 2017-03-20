import { PixelRatio } from 'react-native';
export default (width, height) => {
  const scale = PixelRatio.getPixelSizeForLayoutSize;
  return thumbnail =>
    `https://media.graphcms.com/resize=w:${scale(width)},h:${scale(height)}/${thumbnail.handle}`;
};

const test = {
  index: 2,
  routes: [
    { routeName: 'Cookbooks', key: 'Init' },
    {
      type: 'Navigation/NAVIGATE',
      routeName: 'Cookbook',
      params: {
        cookbook: {
          _id: 'cj0e163vc3q770110jp746npc',
          title: 'Testcookbook',
          author: { username: 'Jonas', __typename: 'Author' },
          tags: ['bbq ', 'easy', 'delicous'],
          thumbnail: { handle: 'luV6pnCxT4qImLYxyKB9', __typename: 'Media' },
          __typename: 'Cookbook',
        },
      },
      key: 'id-1490043756115-0',
    },
    {
      type: 'Navigation/NAVIGATE',
      routeName: 'Recipe',
      params: {
        recipe: {
          _id: 'cj0dw0iatktgl01253q7to1y0',
          title: 'T-Bone Steak',
          author: { username: 'Jonas', __typename: 'Author' },
          tags: ['steak', 'best', 'bbq'],
          thumbnail: { handle: 'NxOK3YONSBeYNPDkgfXo', __typename: 'Media' },
          __typename: 'Recipe',
        },
        task: 0,
        ticks: null,
      },
      key: 'id-1490043756115-1',
    },
  ],
};
