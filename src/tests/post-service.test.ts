import {postService} from 'services';
import {axiosClient} from 'services';
import {IPost} from 'types';

jest.mock('../services/axios-client');
const mockClient = axiosClient as jest.Mocked<typeof axiosClient>;
const mockPost: IPost = {
  createdAt: Date.now().toString(),
  imageLink: 'https://random-image-link.com',
  markdownBody: '# Post',
  title: 'Post',
  tags: ['Js'],
};

const mockAxiosError = {
  config: {},
  isAxiosError: true,
  toJSON: () => ({}),
  name: 'Error',
  message: 'Error',
  response: {
    data: {error: {message: 'Server error'}},
    status: 404,
    statusText: 'Not found',
    headers: {},
    config: {},
  },
};

describe('Get all', () => {
  test('Should return valid value', async () => {
    const posts = [
      mockPost, mockPost,
    ];

    mockClient.get.mockResolvedValueOnce({data: posts});

    const result = await postService.getAll();
    expect(result).toEqual(posts);
  });

  test('Should return client error', async () => {
    mockClient.get.mockRejectedValueOnce(Error());
    const result = await postService.getAll();
    expect(result).toEqual({
      error: {
        message: 'Something went wrong!',
      },
    });
  });

  test('Should return server axios error', async () => {
    mockClient.get.mockRejectedValueOnce(mockAxiosError);
    const response = await postService.getAll();
    expect(response).toEqual({error: {message: 'Server error'}});
  });
});

describe('Get one', () => {
  test('Should return valid value', async () => {
    const post: IPost = mockPost;
    mockClient.get.mockResolvedValueOnce({data: post});
    const response = await postService.getOne(1);
    expect(response).toEqual(post);
  });

  test('Should return client error', async () => {
    mockClient.get.mockRejectedValueOnce(Error());
    const response = await postService.getOne(1);
    expect(response).toEqual({error: {message: 'Something went wrong!'}});
  });

  test('Should return server axios error', async () => {
    mockClient.get.mockRejectedValueOnce(mockAxiosError);
    const response = await postService.getOne(1);
    expect(response).toEqual({error: {message: 'Server error'}});
  });
});
