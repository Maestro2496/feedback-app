import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import data from "../../data.json";

const productRequestSlice = createSlice({
  initialState: data.productRequests,
  name: "productRequests",
  reducers: {
    addFeedBack: (
      productRequests,
      action: PayloadAction<{title: string; description: string; category: string}>
    ) => {
      const {title, description, category} = action.payload;
      const id = productRequests.length + 1;
      productRequests.push({
        id,
        title,
        category,
        description,
        comments: [],
        upvotes: 0,
        status: "suggestion",
      });
    },
    editFeedBack: (
      productRequests,
      action: PayloadAction<{
        id: number;
        title: string;
        description: string;
        category: string;
        status: string;
      }>
    ) => {
      const {id, title, description, category, status} = action.payload;
      return productRequests.map((productRequest) => {
        if (productRequest.id === id) {
          return {
            ...productRequest,
            title,
            description,
            category,
            status,
          };
        }
        return productRequest;
      });
    },
    deleteFeedBack: (productRequests, action: PayloadAction<{id: number}>) => {
      return productRequests.filter((productRequest) => productRequest.id !== action.payload.id);
    },
    replyToComment: (
      productRequests,
      action: PayloadAction<{
        feedBackId: number;
        commentId: number;
        content: string;
        replyingTo: string;
        user: {
          image: string;
          name: string;
          username: string;
        };
      }>
    ) => {
      const {feedBackId, commentId, content, replyingTo, user} = action.payload;
      const feedBack = productRequests.find((productRequest) => productRequest.id === feedBackId);

      const comment = feedBack.comments.find((comment) => comment.id === commentId);
      comment.replies.push({
        content,
        replyingTo,
        user,
      });
    },
  },
});
export const {addFeedBack, editFeedBack, deleteFeedBack, replyToComment} = productRequestSlice.actions;
export default productRequestSlice.reducer;
