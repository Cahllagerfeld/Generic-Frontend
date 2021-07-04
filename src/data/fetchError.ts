export class FetchError extends Error {
  public status?: number;
  public statusText?: string;
  public info?: string;
}
