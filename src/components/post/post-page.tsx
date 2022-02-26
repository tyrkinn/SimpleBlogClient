import React from 'react';
import {IPost} from 'types';
import {Box, Heading, Image, Stack} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export const PostPage: React.FC<{post: IPost}> = ({post}) => {
  return (
    <Box mt={10}>
      <Heading>{post.title}</Heading>
      <Stack mt={10}>
        <Image height={400} src={post.imageLink}/>
        <Box mt={10}>
          <ReactMarkdown components={ChakraUIRenderer()}>
            {post.markdownBody}
          </ReactMarkdown>
        </Box>
      </Stack>
    </Box>
  );
};
