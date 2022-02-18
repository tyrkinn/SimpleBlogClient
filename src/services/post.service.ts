import {ICurlService} from 'types/curl-service.interface';
import {Post} from 'types/post.interface';
import {Comment} from 'types/comment.interface';

export interface IPostService extends ICurlService<Post>{
  addComment(postId: number, comment: Comment): void;
  deleteComment(id: number): void;
}
