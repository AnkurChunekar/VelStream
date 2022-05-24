import { Response } from "miragejs";
import { requiresAuth, formatDate } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

export const getCommentsHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        return new Response(200, {}, { comments: user.comments });
    }
    return new Response(
        404,
        {},
        { errors: ["The user you request does not exist. Not Found error."] }
    );
};

export const addItemToCommentsHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { videoId } = request.params;
        const { comment } = JSON.parse(request.requestBody);

        const video = schema.videos.findBy({ _id: videoId }).attrs;

        const videoComments = user.comments.find(
            (currComment) => currComment._id === video._id
        );
        let updatedComments = "";
        if (videoComments) {
            updatedComments = user.comments.map((currComment) => {
                if (currComment._id === video._id)
                    currComment.vidComments.push({
                        _id: uuid(),
                        ...comment,
                        updatedAt: formatDate(),
                    });
                return currComment;
            });

            this.db.users.update({ _id: user._id }, { comments: updatedComments });
        } else
            user.comments.push({
                _id: video._id,
                vidComments: [{ _id: uuid(), ...comment, updatedAt: formatDate() }],
            });

        return new Response(201, {}, { comments: user.comments });
    }
    return new Response(
        404,
        {},
        {
            errors: ["The email you entered is not Registered. Not Found error"],
        }
    );
};

export const removeItemFromCommentsHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { videoId } = request.params;

        const { comment } = JSON.parse(request.requestBody);

        const video = schema.videos.findBy({ _id: videoId }).attrs;

        const updatedComments = user.comments.map((currComment) => {
            if (currComment._id === video._id) {
                const newVidComments = currComment.vidComments.filter(
                    (vidComment) => vidComment._id !== comment._id
                );

                return { ...currComment, vidComments: newVidComments };
            }

            return currComment;
        });

        this.db.users.update({ _id: user._id }, { comments: updatedComments });

        return new Response(200, {}, { comments: updatedComments });
    }
    return new Response(
        404,
        {},
        {
            errors: ["The email you entered is not Registered. Not Found error"],
        }
    );
};

export const updateCommentHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);

    if (user) {
        const { videoId } = request.params;

        const { comment } = JSON.parse(request.requestBody);

        const video = schema.videos.findBy({ _id: videoId }).attrs;

        const updatedComments = user.comments.map((currComment) => {
            if (currComment._id === video._id) {
                const newVidComments = currComment.vidComments.map((vidComment) => {
                    if (vidComment._id === comment._id) {
                        return {
                            ...vidComment,
                            title: comment.title,
                            description: comment.description,
                        };
                    }

                    return vidComment;
                });
                return { ...currComment, vidComments: newVidComments };
            }
            return currComment;
        });
        this.db.users.update({ _id: user._id }, { comments: updatedComments });

        return new Response(200, {}, { comments: updatedComments });
    }
    return new Response(
        404,
        {},
        {
            errors: ["The email you entered is not Registered. Not Found error"],
        }
    );
};
