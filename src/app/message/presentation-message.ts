export interface Story {
  username: string;
  content: string;
}

export interface PresentationMessage {
  stories: { [user: string]: Story;}
}
