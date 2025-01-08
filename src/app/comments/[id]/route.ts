import { comment } from 'postcss';
import { comments } from '../data';
export async function GET(
 _request: Request,
 { params }: { params: { id: string } }
) {
 const comment = comments.find(
  (comment) => comment?.id === parseInt(params?.id)
 );
 return Response.json(comment);
}
export async function PATCH(
 _request: Request,
 { params }: { params: { id: string } }
) {
 const body = await _request.json();
 const { text } = body;
 const index = comments.findIndex(
  (comment) => comment.id === parseInt(params.id)
 );
 comments[index].text = text;
 return Response.json(comments[index]);
}
