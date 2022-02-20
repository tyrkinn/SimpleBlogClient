import {postService} from '../services/post.service';
import {client} from 'services/axios-client';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {IPost} from '../types/post.interface';
import {IUser} from '../types/user.interface';

jest.mock('../services/axios-client');
const mockClient = client as jest.Mocked<typeof client>;
const mockUser: IUser = {
  fistName: 'Nikita',
  lastName: 'Tyrkin',
  role: 'User',
  userName: 'tyrkinn',
};
const mockPost: IPost = {
  createdAt: Date.now().toString(),
  createdBy: mockUser,
  imageLink: 'https://random-image-link.com',
  markdownBody: '# Post',
  title: 'Post',
};

describe('Get all', () => {
  test('Should return posts', async () => {
    const posts = [
      mockPost, mockPost,
    ];

    mockClient.get.mockResolvedValueOnce({data: posts});

    const result = await postService.getAll();
    expect(result).toEqual(posts);
  });

  test('Should return error message', async () => {
    mockClient.get.mockRejectedValueOnce(Error());
    const result = await postService.getAll();
    expect(result).toEqual({
      error: {
        message: 'Something went wrong!',
      },
    });
  });

  test('Should return server error message', async () => {
    const error: AxiosError = {
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
    mockClient.get.mockRejectedValueOnce(error);
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
});
