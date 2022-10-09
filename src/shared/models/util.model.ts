export enum ResponseMessage {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
  USER_EMAIL_VERIFY_SENT = 'USER_EMAIL_VERIFY_SENT',
  USER_EMAIL_VERIFY_NOT_SENT = 'USER_EMAIL_VERIFY_NOT_SENT',
  USER_EMAIL_NOT_FOUND = 'USER_EMAIL_NOT_FOUND',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  EMAIL_ALREADY_TAKEN = 'EMAIL_ALREADY_TAKEN',
  FAILED_TO_CREATE_USER = 'FAILED_TO_CREATE_USER',
}

export interface CommonResponse {
  response_message: string;
  response_data: unknown;
  extra?: string;
}