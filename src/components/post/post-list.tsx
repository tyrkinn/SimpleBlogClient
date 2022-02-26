import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';
import {postsAtom} from 'store';
import {useAtomValue} from 'jotai';
import {Post} from './post';

export const PostListProps: React.FC = () => {
  const posts = useAtomValue(postsAtom);
  return (
    <SimpleGrid columns={{base: 1, md: 3}} gridGap={7}>
      {posts.map(
          (p) => <Post key={p.id} post={p}/>,
      )}
    </SimpleGrid>
  );
};
