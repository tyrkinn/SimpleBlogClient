import {postService} from '../services/post.service';
import {client} from 'services/axios-client';
import axios, {AxiosError, AxiosResponse} from 'axios';

jest.mock('../services/axios-client');
const mockClient = client as jest.Mocked<typeof client>;

describe('Get all', () => {
  test('Should return posts', async () => {
    const posts = [
      {
        id: 1,
        imageLink: 'https://google.com',
        markdownBody: '# Post',
        createdAt: Date.now().toString(),
        title: 'Post',
        createdBy: {
          fistName: 'Nikita',
          lastName: 'Tyrkin',
          userName: 'tyrkinn',
          role: 'User',
        },
      },
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
