export type Response = BadResponse | SuccessResponse;

export type SuccessResponse = {
    value: string;
};

export type BadResponse = {
    message: string;
};
