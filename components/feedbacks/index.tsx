import Image from "next/image";
import React, {useState, useMemo, useRef, useEffect} from "react";
import Suggestion from "../suggestions/Suggestion";
import clsx from "clsx";
import {useRouter} from "next/router";
import Link from "next/link";
import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {addComment, replyToComment} from "../../store/features/productRequests";
import data from "../../data.json";
import {useAppDispatch} from "../../store/hooks";
type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};
type User = {
  image: string;
  name: string;
  username: string;
};
type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};
interface FeedBackDetails {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

const Reply = ({
  reply,
  feedBackId,
  commentId,
}: {
  reply: Reply;
  feedBackId: number;
  commentId: number;
}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={clsx("flex space-x-6 mt-4 p-2 rounded-md ")}>
      <div className="flex flex-col items-center space-y-6 ">
        <div className="w-fit h-fit">
          <Image
            src={reply.user.image}
            layout="fixed"
            height={40}
            width={40}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center w-[80%]">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-slate-blue font-bold">{reply.user.name}</h2>
            <p className="text-medium-grey">{reply.user.username}</p>
          </div>
          <button
            onClick={() => setShowReplyBox((prev) => !prev)}
            className="text-simple-blue font-semibold "
          >
            Reply
          </button>
        </div>
        <div className="w-full">
          <p className="text-medium-grey">
            <span className="text-simple-purple font-bold">{`@${reply.replyingTo} `}</span>
            {reply.content}
          </p>
          <Formik
            initialValues={{
              content: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              dispatch(
                replyToComment({
                  feedBackId,
                  commentId,
                  content: values.content,
                  replyingTo: reply.user.name,
                  user: data.currentUser,
                })
              );
              setShowReplyBox(false);
            }}
          >
            <Form
              className={clsx(
                " justify-between space-x-2 w-full mt-6 transform transition-all duration-300",
                showReplyBox ? "flex" : "hidden"
              )}
            >
              <Field
                name="content"
                component="textarea"
                className="w-[70%] h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4"
              />
              <button
                type="submit"
                className="h-10  bg-simple-purple text-white py-2 px-3 rounded-md"
              >
                Post Reply
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
const CommentWithoutReply = ({
  comment,
  feedBackId,
  lastElement,
}: {
  comment: Comment;
  feedBackId: number;
  lastElement: boolean;
}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <div
      className={clsx(
        "flex space-x-6  px-2 py-6 w-full",
        !lastElement && " border-b border-b-gray-300 "
      )}
    >
      <div className="flex flex-col items-center space-y-6 ">
        <div className="w-fit h-fit">
          <Image
            src={comment.user.image}
            layout="fixed"
            height={40}
            width={40}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-slate-blue font-bold">{comment.user.name}</h2>
            <p className="text-medium-grey">{comment.user.username}</p>
          </div>
          <button
            onClick={() => setShowReplyBox((prev) => !prev)}
            className="text-simple-blue font-semibold "
          >
            Reply
          </button>
        </div>
        <div className="w-full ">
          <p className="text-medium-grey">{comment.content}</p>
          <Formik
            initialValues={{content: ""}}
            onSubmit={(values) => {
              dispatch(
                replyToComment({
                  feedBackId,
                  commentId: comment.id,
                  content: values.content,
                  replyingTo: comment.user.name,
                  user: data.currentUser,
                })
              );
              setShowReplyBox(false);
            }}
          >
            <Form
              className={clsx(
                "justify-between w-full mt-6 transform transition-all duration-300 ",
                showReplyBox ? "flex" : "hidden"
              )}
            >
              <Field
                name="content"
                component="textarea"
                className="w-[80%] h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4"
              />
              <button
                type="submit"
                className="h-1/2 bg-simple-purple text-white py-2 px-3 rounded-md"
              >
                Post Reply
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
const CommentWithReply = ({comment, feedBackId}: {comment: Comment; feedBackId: number}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const dispatch = useAppDispatch();
  const [height, setHeight] = useState(0);

  return (
    <div className="flex space-x-6 mt-4  p-2 w-full ">
      <div className="flex flex-col items-center space-y-6 ">
        <div className="w-fit h-fit">
          <Image
            src={comment.user.image}
            layout="fixed"
            height={40}
            width={40}
            alt=""
            className="rounded-full"
          />
        </div>
        <div
          style={{
            height,
          }}
          className=" bg-gray-300 rounded-md  w-[1px]"
        />
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center w-[90%]">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-slate-blue font-bold">{comment.user.name}</h2>
            <p className="text-medium-grey">{comment.user.username}</p>
          </div>
          <button
            onClick={() => setShowReplyBox((prev) => !prev)}
            className="text-simple-blue font-semibold "
          >
            Reply
          </button>
        </div>
        <div className="w-full">
          <p className="text-medium-grey">{comment.content}</p>
          <Formik
            initialValues={{content: ""}}
            onSubmit={(values) => {
              dispatch(
                replyToComment({
                  feedBackId,
                  commentId: comment.id,
                  content: values.content,
                  replyingTo: comment.user.name,
                  user: data.currentUser,
                })
              );
              setShowReplyBox(false);
            }}
          >
            <Form
              className={clsx(
                "flex justify-between w-full mt-6 transform transition-all duration-300",
                showReplyBox ? "opacity-1  translate-y-0" : "opacity-0 h-0 -translate-y-[100%]"
              )}
            >
              <Field
                name="content"
                component="textarea"
                className="w-[80%] h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4"
              />
              <button
                type="submit"
                className="h-1/2 bg-simple-purple text-white py-2 px-3 rounded-md"
              >
                Post Reply
              </button>
            </Form>
          </Formik>

          <div
            ref={(e) => {
              if (e) setHeight(e.getBoundingClientRect().height);
            }}
            className="w-[112%] "
          >
            {comment.replies.map((reply) => (
              <Reply
                key={`${Math.random() * 100}`}
                reply={reply}
                feedBackId={feedBackId}
                commentId={comment.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const Comments = ({comments, feedBackId}: {comments: Comment[]; feedBackId: number}) => {
  return (
    <section className="rounded-md bg-white px-8 py-3">
      <h1 className="text-slate-blue font-bold text-lg">{comments.length} comments</h1>
      <>
        {comments.map((comment, index) => {
          if (comment.replies) {
            return <CommentWithReply key={comment.id} comment={comment} feedBackId={feedBackId} />;
          } else {
            return (
              <CommentWithoutReply
                key={comment.id}
                comment={comment}
                feedBackId={feedBackId}
                lastElement={index === comments.length - 1}
              />
            );
          }
        })}
      </>
    </section>
  );
};

export default function FeedBackDetails({feedBack}: {feedBack: FeedBackDetails}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const infos = useMemo(() => {
    if (feedBack) return feedBack;
    return;
  }, [feedBack]);

  if (!feedBack) return null;
  const {title, description, comments, upvotes, category, id} = infos;
  return (
    <div className="max-w-[45.625rem] mx-auto space-y-6 my-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-4 stroke-simple-blue"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <button
            className="text-medium-grey font-bold cursor-pointer"
            onClick={() => router.back()}
          >
            Go back
          </button>
        </div>
        <Link href={`/feedback/edit/${id}`}>
          <a className="text-white bg-[#7C91F9] py-2 px-6 rounded-md">Edit feedback</a>
        </Link>
      </div>
      <Suggestion
        id={id}
        comments={comments}
        title={title}
        description={description}
        upvotes={upvotes}
        category={category}
      />
      <Comments comments={comments} feedBackId={id} />
      <Formik
        initialValues={{content: ""}}
        onSubmit={({content}) => {
          dispatch(
            addComment({
              feedBackId: id,
              content,
              user: data.currentUser,
            })
          );
        }}
      >
        {() => (
          <Form className="bg-white px-4 py-6 rounded-md flex flex-col space-y-3 items-center justify-center">
            <h2 className="text-left w-full text-slate-blue text-lg font-bold">Add comment</h2>
            <Field
              name="content"
              component="textarea"
              className="w-full h-[5rem] bg-very-light-blue rounded-md focus:outline-none p-4"
              placeholder="Type your comment here"
            />
            <div className="w-full flex justify-between items-center">
              <p className="text-medium-grey">250 characters left</p>
              <button type="submit" className="text-white bg-simple-purple px-4 py-2 rounded-md">
                Post comment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
