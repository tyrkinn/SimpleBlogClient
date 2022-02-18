import {ICurlService} from 'types/curl-service.interface';
import {IPost} from 'types/post.interface';
import {IComment} from 'types/comment.interface';

export interface IPostService extends ICurlService<IPost>{
  addComment(postId: number, comment: IComment): void;
  deleteComment(id: number): void;
}
