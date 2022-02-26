import React from 'react';
import {IPost} from '../../types/post.interface';
import {Box, Flex, Heading, Icon, Image, Link, Text} from '@chakra-ui/react';
import {FaCalendarAlt, FaTags} from 'react-icons/all';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

export interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({post}) => {
  return (
    <Box
      borderRadius={'0.5em'}
      overflow={'hidden'}
      boxShadow={'0 0 1em black'}
      display={'grid'}
    >
      <Link>
        <Image
          src={post.imageLink}
          width={'100%'}
          height={'calc(10em + 4vh)'}
          objectFit={'cover'}
          display={'block'}
          margin={'auto'}
        />
      </Link>
      <Box px={5}>
        <Heading as={'h3'} fontSize={'1.3em'} py={5}>
          {post.title}
        </Heading>
        <Box mb={5} fontSize={'.9em'} display={'grid'} gap={2}>
          <Flex alignItems={'center'}>
            <Icon as={FaCalendarAlt} mr={1}/> {post.createdAt}
          </Flex>
          <Flex alignItems={'center'}>
            <Icon as={FaTags} mr={1}/> {post.tags.join(', ')}
          </Flex>
        </Box>
        <Text mb={5} fontSize={'large'}>
          <ReactMarkdown components={ChakraUIRenderer()}>
            {post.markdownBody.split(' ').slice(0, 35).join(' ')}
          </ReactMarkdown>
        </Text>
      </Box>
    </Box>
  );
};
