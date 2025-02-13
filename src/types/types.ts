import { commentSchema } from '@/validation/commentSchema';
import { updateCakeSchema } from '@/validation/updateCakeSchema';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import z, { ZodSchema } from 'zod';
interface Comment {
    text: string,
    yumFactor: number,
    username: string,
}

export interface Cake {
    comment: string,
    comments: Comment[],
    imageUrl: string,
    title: string,
    yumFactor: number,
    _id: string
}

export interface CardImageProps { imageUrl: string, alt?: string, width?: number, height?: number };
export interface ICardDetailsProps { title: string, comment: string }
export interface IDetailsCommentProps { text: string, yumFactor: number, username: string }

export interface ICommentListProp {
    comments: Comment[]
}

export interface ErrorMessageProps {
    message: string;
}

export interface CakeListProps {
    cakes: Cake[];
}

export interface IActionsCardProps {
    onDelete: (event: React.MouseEvent) => unknown
}

export interface RouteConfig {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export type CommentForm = z.infer<typeof commentSchema>;
export type UpdateCakeForm = z.infer<typeof updateCakeSchema>
export interface UpdateCakeModalProps {
    cake: Cake;
}
export interface IAddCommentModalProps {
    id: string;
}

export type MutationFunctionType = UseMutationResult<AxiosResponse<unknown, unknown>, Error, void, unknown>

export interface IAddCakeModalProps {
    onAddCake: MutationFunctionType
}

export interface ICommentData { username: string; text: string; yumFactor: number }

export interface CakeItemProps {
    cake: Cake;
}

export interface ICardProps { children: React.ReactNode; url: string, onMouseOver: () => void }

export interface GenericFormModalProps<T> {
    schema: ZodSchema<unknown>;
    defaultValues: Partial<T>;
    title: string;
    triggerLabel: string;
    submitLabel: string;
    onSubmit: (data: T) => void;
}

export interface IAddCommentMutationData { username: string; text: string; yumFactor: number, }

export type UrlsType = {
    FETCH_CAKES: string;
    FETCH_CAKE: (id: string) => string;
    ADD_CAKE: string;
    DELETE_CAKE: (id: string) => string;
    UPDATE_CAKE: (id: string) => string;
    ADD_COMMENT: (id: string) => string;
};

export interface IBackButtonProps { to?: string }